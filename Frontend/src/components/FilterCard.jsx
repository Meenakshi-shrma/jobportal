import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setsearchedQuery } from '@/redux/jobSlice'

const filterData =[
    {
        filterType:"Location",
        array:["Delhi NCR" , "Bangalore" ,"Hyderabad" ,"Pune","Mumbai","Gurugram "]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer","Backend Developer ","Full Stack Developer","Data Science "]
    },
    {
        filterType:"Salary",
        array:["0-40k", "42k-1lakh ", "1lakh to 5lakh" , "5lakh to 20lakh"]
    },
]



const FilterCard = () => {
    const [selectedValue , setSelectedValue] = useState('');
const dispatch = useDispatch();
    const changeHandle = (value) =>{
         setSelectedValue(value);
    }
    useEffect(()=>{
       dispatch(setsearchedQuery(selectedValue));
    },[selectedValue]);

  return (
    <div className='w-full bg-white p-3 rounded-md'>
    <h1 className='font-bold text-lg'>Filter Jobs</h1>
    <hr className='mt-3' />
    <RadioGroup  value={selectedValue} onValueChange={changeHandle}>
        {
            filterData.map((data,index) => (
                <div>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>{
                        data.array.map((item,idx) =>{
                            const itemId = `id${index}-${idx}`
                            return(
                            <div className='flex items-center space-x-2 my-2'>
                                <RadioGroupItem   value={item}   id={itemId} />
                                <Label htmlFor={itemId} >{item}</Label>
                            </div>
                            )
                        })
                    }
                </div>
            ))
        }
    </RadioGroup>
    </div>
  )
}

export default FilterCard
