import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button'; // ✅ Make sure this import is there
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const JobDescription = () => {
  const { singleJob } = useSelector(store => store.job);
  const { user } = useSelector(store => store.auth);

  const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant == user?._id || false);
const[isApplied , setIsApplied] = useState(isIntiallyApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
      console.log(res.data);
      if (res.data.success) {
        // update the local state
        setIsApplied(true);
        const updateSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
        // helps us to real time UI update
        dispatch(setSingleJob(updateSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        if (res.data.success) {
          // dispatchEvent(setAllJobs(res.data.jobs));
          console.log("Fetched Jobs from API:", res.data.jobs);
          dispatch(setSingleJob(res.data.job));
          // ensure the state is in sync with fetched data 
          setIsApplied(res.data.job.applications.some(application=>application.applicant == user?._id))
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchSingleJob();
  }, [jobId, dispatch, user?.id]);

  return (
    <div className='max-w-7xl mx-auto my-10 px-4'>
      <div className='bg-white flex items-center justify-between p-6 rounded-xl shadow-md border border-gray-200'>
        <div>
          <h1 className='text-2xl font-bold mb-4'>{singleJob?.title}</h1>

          <div className='flex items-center gap-2 mb-6'>
            <Badge className='text-blue-700 font-bold' variant='ghost'>{singleJob?.position} Positions</Badge>
            <Badge className='text-[#f83002] font-bold' variant='ghost'>{singleJob?.jobType}</Badge>
            <Badge className='text-[#7209b7] font-bold' variant='ghost'>{singleJob?.salary}LPA</Badge>
          </div>
          <h1 className='text-lg font-semibold mb-4'>Job Description</h1>
        </div>

        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad] '}`}>
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>


      </div>

      {/* <h1 className=   'text-lg font-semibold mb-4'>Job Description</h1> */}
      <div className='my-4'>
        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title} </span></h1>
        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience}yrs </span></h1>
        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA </span></h1>
        <h1 className='font-bold my-1'>Total Application: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length} </span></h1>
        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]} </span></h1>
      </div>
    </div>

  );
};

export default JobDescription;

