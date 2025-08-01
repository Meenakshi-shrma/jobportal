import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { useSelector } from 'react-redux';
import { Contact, Mail, Pen } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';

// const skills = ["Html","Css","JavaScript","Reactjs"];

const Profile = () => {
  useGetAppliedJobs();
  //  const user = useSelector((state) => state.auth.user);
   const [open , setOpen] = useState(false);
   const isResume = true;

  const {user} = useSelector((store) => store.auth);

  console.log("Resume URL:", user?.profile?.resume);
console.log("Original Name:", user?.profile?.resumeOriginalName);


  return (
    <div>
    <Navbar/>
    <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
      <div className='flex  justify-between'>
 <div className='flex items-center gap-4'>
 
               <Avatar className="h-20 w-24">
    <AvatarImage 
        src={
            user?.profile?.profilePhoto && user?.profile?.profilePhoto.length > 0
                ? user.profile.profilePhoto
                : "https://www.w3schools.com/howto/img_avatar.png"
        }
        alt="profile"
    />
</Avatar>

               <div>
            <h1 className='text-xl font-semibold'>{user?.fullname}</h1>
            <p className='text-gray-600'>{user?.profile?.bio}</p>
          </div>
      </div> 
      <Button onClick={() => setOpen(true)} className='text-right' variant="outline"><Pen/></Button>   
      </div>
      
      <div className='my-5'>
        <div className='flex items-center gap-3 my-2'>
<Mail/>
        <span>{user?.email}</span>
        </div>
        
<div className='flex items-center gap-3 my-2'>
 <Contact/>
        <span>{user?.phoneNumber}</span>
</div>
       
      </div>

      <div className='my-5'>
        <h1>Skills</h1>
        <div className='flex items-center gap-1'>
{
   user?.profile?.skills.length !== 0 ?  user?.profile?.skills.map((item,index)=> <Badge key={index}>{item}</Badge>) :<span>NA</span>
        }
        </div>
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
<Label className="text-md font-bold">Resume</Label>

{
  isResume ? <a target ='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName} </a> :<span>NA</span>
}
      </div>
    </div>

     <div className=' max-w-4xl mx-auto bg-white rounded-2xl'>
<h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
{/* applied job table */}
<AppliedJobTable/>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile;
