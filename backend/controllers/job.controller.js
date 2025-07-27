import  Job  from "../models/job.model.js";

export  const postJob = async (req,res)=>{
    try{
const{title,description,requirements, salary,location, jobType,experience,position,companyId} = req.body;
const userId = req.id;

if(!title || !description || !requirements || !salary || !location || !jobType|| !experience || !position || ! companyId){
    return res.status(400).json({
        message:"Somethig is missing.",
        success:false
    });
};
const job = await Job.create({
    title , 
    description,
    requirements,
    salary:Number(salary),
    location,
    jobType,
    experienceLevel:experience,
    position,
    company:companyId,
    created_by : req.id

     
});
return res.status(201).json({
    message:"New job created successfully.",
    job,
    success:true
});
    }
    catch(error){
console.log(error);
    }
}

// Get all the job FOR STUDENT
export const getAllJobs = async (req,res) =>{
    try{
const keyword =req.query.keyword || "";
const query = {
    $or:[
        {title:{$regex:keyword ,$options:"i"}},
        {description:{$regex:keyword ,$options:"i"}},
    ]
};
const jobs = await Job.find(query)
.populate("company")
.populate("applications")
 // path:"company"
.sort({createdAt:-1});
if(!jobs){
    return res.status(404).json({
        message:"Jobs are not Find.",
        success:false
    })
}
return res.status(200).json({
    jobs,
    success:true
})
    }
    catch(error){
        console.log(error)
    }
}

// get the jobs by Id  For sTUDENT
export const getJobById = async (req,res)=>{
    try{
const jobId = req.params.id;
const job = await Job.findById(jobId)
.populate("applications")
.populate("company");

if(!job){
   return res.status(404).json({
        message:"Jobs are not Find.",
        success:false
    }) 
};
return res.status(200).json({
    job,
    success:true
});
    }
    catch(error){
        console.log(error);
    }
}

// admin  kitne job create kra hai abhi tk 
export const getAdminJobs = async (req,res)=>{
    try{
const adminId = req.id;
 console.log("Admin ID from token:", adminId);

 const jobs = await Job.find()
      .populate("company") // Make sure it's lowercase
      .sort({ createdAt: -1 });
             console.log("Fetched Jobs with populated company: ", jobs);

if(!jobs){
    return res.status(404).json({
        message:"Jobs are not Find.",
        success:false
    }) 
};
return res.status(200).json({
    jobs,
    success:true
})
    }
    catch(error){
        console.log(error);
    }
}