// import dotenv from "dotenv";
// dotenv.config({});
// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors"
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";
// import path from "path";


// const _dirname = path.resolve();

// const app = express ();

// // middle ware 
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());
// const corsOption ={
//     origin:'http://localhost:5173',
//     credentials:true,


// }
// app.use(cors(corsOption));

// const PORT = process.env.PORT || 3000;



// // api's
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);

// app.use(express.static(path.join(_dirname, "/frontend/dist")));
// app.get("*", (_,res) =>{
//     res.sendFile(path.resolve(_dirname , "frontend" , "dist" , "index.html"));
// })


// app.listen(PORT,()=>{
//     connectDB();
//     console.log (`Server running at port ${PORT}`);
// })


import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
import { fileURLToPath } from "url";

// ✅ __dirname setup (since you're using ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: "https://jobportal-1hp0.onrender.com", // frontend Vite port
  credentials: true,
};
app.use(cors(corsOption));

// ✅ API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// ✅ Serving frontend dist build
app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});


// ✅ Server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running at port ${PORT}`);
});
