import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion ,AnimatePresence} from 'framer-motion';

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];


const jobsArray = [
    { company: { name: 'Google' }, title: 'Frontend Developer', description: 'React Developer needed' },
    { company: { name: 'Amazon' }, title: 'Backend Developer', description: 'NodeJS Developer needed' },
    { company: { name: 'Microsoft' }, title: 'Fullstack Developer', description: 'Fullstack role' },
];


const Jobs = () => {

    const {allJobs, searchedQuery} = useSelector(store=>store.job);
    const [filterJobs , setFilterJobs] = useState(allJobs);

    useEffect(()=>{
if(searchedQuery){
const filteredJobs = allJobs.filter((job)=>{
    return job.title.toLowerCase().includes(searchedQuery.toLowerCase().trim()) ||
    job.description.toLowerCase().includes(searchedQuery.toLowerCase().trim()) ||
    job.location.toLowerCase().includes(searchedQuery.toLowerCase().trim()) ||
 String(job.salary || "").toLowerCase().includes(searchedQuery.toLowerCase().trim());
});
setFilterJobs(filteredJobs);
}else{
    setFilterJobs(allJobs);
}
    },[allJobs,searchedQuery])


    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>

                <div className='flex gap-5 '>
                    <div className='w-20%'>
                        {/* filter page*/}
                        <FilterCard />
                    </div>


                    {/* job card */}
                    {
                        filterJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    <AnimatePresence  mode="wait">
                                    {
                                        filterJobs.map((job) => (
                                       <motion.div 
                                       initial={{opacity:0,x:100}}
                                       animate={{opacity:1,x:0}}
                                       exit={{opacity:0,x:-100}}
                                       transition={{duration:0.3}}
                                       key={job?._id}>
                                      <Job job={job}/>
                                       </motion.div>     
                                        ))
                                    }
                                    </AnimatePresence>
                                </div>

                            </div>
                        )

                    }
                </div>

            </div>

        </div>
    )
}

export default Jobs
