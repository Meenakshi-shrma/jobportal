import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => {
    const {   searchCompanyByText } = useSelector(store => store.company);
    const {allAdminJobs} =  useSelector(store=>store.job);
const [FilterJobs , setFilterJobs] = useState(allAdminJobs);
const navigate = useNavigate();

useEffect(()=>{

const filteredjobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job) =>{
    if(!searchCompanyByText){
        return true
    };
    return job?.company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase()) || job?.title?.toLowerCase().includes(searchCompanyByText.toLowerCase());

})
setFilterJobs(filteredjobs);

}, [allAdminJobs, searchCompanyByText]);
    return (
        <div>
            <Table>
                <TableCaption>A list of your  recent posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>

                    {
                        FilterJobs?.map((job) => (

                            // <tr>
                            <TableRow  key={job._id}>
                               <TableCell>{job.company?.name || "N/A"}</TableCell>
                                <TableCell> {job.title} </TableCell>
                                <TableCell>{job.createdAt ? job.createdAt.split("T")[0] : "N/A"}</TableCell>
                                <TableCell className='text-right cursor-pointer'>
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className='w-32'>
                                            <div onClick={()=> navigate(`/admin/companies/${job._id}`) } className=' flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                            <div onClick={()=>navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                                                <Eye className='w-4'/>
                                                <span>Applicants</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            {/* </tr> */}
                            </TableRow>

                        )
                        )
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable

