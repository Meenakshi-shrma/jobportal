// export const USER_API_END_POINT="http://localhost:8000/api/v1/user";
// export const JOB_API_END_POINT = "http://localhost:8000/api/v1/job";
// export const APPLICATION_API_END_POINT = "http://localhost:8000/api/v1/application";
// export const COMPANY_API_END_POINT = "http://localhost:8000/api/v1/company";


// src/constants.js

// ✅ Change only this when switching between local & live
export const BASE_URL = "https://jobportal-1hp0.onrender.com/api/v1"; 
// export const BASE_URL = "http://localhost:8000/api/v1"; // ← for local use

// 👇 Derived endpoints
export const USER_API_END_POINT = `${BASE_URL}/user`;
export const JOB_API_END_POINT = `${BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${BASE_URL}/company`;
