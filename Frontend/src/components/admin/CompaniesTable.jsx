import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
    const { companies , searchCompanyByText } = useSelector(store => store.company);
const [FilterCompany , setFilterCompany] = useState(companies);
const navigate = useNavigate();
useEffect(()=>{
 const filteredCompany = companies?.filter((company) => {
    const name = company?.name?.toLowerCase() || "";
    const search = searchCompanyByText?.toLowerCase() || "";
    return name.includes(search);

});
setFilterCompany(filteredCompany);
},[companies,searchCompanyByText] )

    return (
        <div>
            <Table>
                <TableCaption>A list of your  recent register companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>

                    {
                        FilterCompany?.map((company) => (

                            <tr>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={company.logo} />
                                    </Avatar>
                                </TableCell>
                                <TableCell> {company.name} </TableCell>
                                <TableCell>{company.createdAt.split("T")[0]} </TableCell>
                                <TableCell className='text-right cursor-pointer'>
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className='w-32'>
                                            <div onClick={()=> navigate(`/admin/companies/${company._id}`) } className=' flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>

                        )
                        )
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable
