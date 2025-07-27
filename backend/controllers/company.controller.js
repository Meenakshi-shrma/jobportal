import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import { cloudinary } from "../utils/cloudinary.js";
import mongoose from "mongoose";

export const registerCompany = async (req,res) =>{
     console.log("TOKEN:", req.cookies.token);
    try{
const {name} = req.body;
if(!name){
    return res.status(400).json({
        message:"Company name is required.",
        success:false
    });
}
let company = await Company.findOne({name});
if(company){
    return res.status(400).json({
        message:"You can't register same comapany.",
        success:false
    })
};
company = await Company.create({
    name,
    userId:req.id
});

return res.status(200).json({
    message:"Company register Successfully.",
    company,
    success:true
})
    }
    catch(error){
console.log(error)
    }
}

// to get the company 
export const getCompany = async (req,res) =>{
    try{
        // logged in user id 
const userId = req.id;
const companies = await Company.find({userId});
if(!companies){
    return res.status(404).json({
        message:"Companies not found.",
        success:false
    })
}
return res.status(200).json({
    companies,
    success:true
})
    }
    catch(error){
console.log(error);
    }
}

// get company by id 
export const getCompanyById = async(req,res) =>{

 try {
    const { id } = req.params;


    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid company ID' });
    }

    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

   return res.status(200).json({
      success: true,
      company,
    });

  } catch (error) {
     console.error("Get company error:", error);
    return res.status(500).json({
      message: "Something went wrong on server.",
      success: false
         });
  }
};



// if you are updated the company 
export const updateCompany = async (req,res) =>{
try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    const updateData = { name, description, website, location };

    // ✅ Agar file aayi hai, tabhi logo upload karo
    if (file) {
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      updateData.logo = cloudResponse.secure_url;
    }

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!company) {
      return res.status(400).json({
        message: "Company not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong on server.",
      success: false,
    });
  }
};