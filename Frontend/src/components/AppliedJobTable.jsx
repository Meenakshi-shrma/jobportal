import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);

    const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div>
    <Table>
        <TableCaption> A list of your applied jobs </TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Comapny</TableHead>
                <TableHead className='text-right'>Status</TableHead>
            </TableRow>
        </TableHeader>  
        <TableBody>{
           allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet.</span> : allAppliedJobs
           .filter(appliedjob => appliedjob.job !== null) // 🧹 remove null jobs
           .map((appliedjob) =>(
                <TableRow key={appliedjob._id}>
                    <TableCell>{formatDate(appliedjob.createdAt)}</TableCell>
                    <TableCell>{appliedjob.job?.title ||  'N/A'}</TableCell>
                    <TableCell>{appliedjob.job?.company.name || 'N/A'}</TableCell>
                    <TableCell className=' text-right'><Badge className={`${appliedjob?.status == "rejected" ? 'bg-red-400' 
                        : appliedjob.status == 'pending' ? ' bg-gray-400' 
                        : 'bg-green-400'}`}>{appliedjob.status.toUpperCase()}</Badge></TableCell>
                </TableRow>
             ))
            }
           
        </TableBody>
    </Table>
    </div>
  )
}

export default AppliedJobTable
