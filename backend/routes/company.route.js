import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import multer from "multer";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";


const router = express.Router();
const upload = multer(); // Memory storage, future me cloudinary ke liye theek hai

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,upload.single("file"),updateCompany);

export default router;