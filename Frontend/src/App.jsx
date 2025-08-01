

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import { Toaster } from 'react-hot-toast'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from "./components/admin/AdminJobs"
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  // admin k liye yha se strt hoga 

   {

 path:"/admin/companies",
    element:<ProtectedRoute><Companies/></ProtectedRoute>

   },
   {

 path:"/admin/companies/create",
    element:<ProtectedRoute><CompanyCreate/></ProtectedRoute>

   },
   {

 path:"/admin/companies/:id",
    element: <ProtectedRoute><CompanySetup/></ProtectedRoute>

   },
  //  this is for job in admin panel
{

 path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute>

   },
{

 path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute>

   },
{

 path:"/admin/jobs/:id/applicants",
    element:<Applicants/>

   },
])

function App() {
 

  return (
    <>
    <div>
      <Toaster position="top-center" reverseOrder={false} />
     <RouterProvider router ={appRouter}/>
     </div>
    </>
  )
}

export default App;
