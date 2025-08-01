import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setsearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query , setQuery] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

  const searchJobHandler = () =>{
dispatch(setsearchedQuery(query));
navigate("/browse");
  }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search , Apply & <br /> Get your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-gray-600 text-lg max-w-xl mx-auto'>Discover thousands of job opportunities tailored just for you. Connect with top companies, apply in seconds, and take the next step in your career journey — all in one place.</p>
          <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input type="text"
            placeholder='Find your dream jobs'
            onChange={(e) => setQuery(e.target.value)}
            className='outline-none border-none w-full'
            />
            <Button onClick={searchJobHandler} className='rounded-r-full bg-[#6A38C2]'>
          <Search className='h-5 w-5'/>
            </Button>
          </div>
            </div>
        </div>
    )
}

export default HeroSection
