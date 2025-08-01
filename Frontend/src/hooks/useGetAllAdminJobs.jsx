import { setAllAdminJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
  useEffect(() =>{
    const fetchAllAdminJobs = async () => {
        try{
const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`,{withCredentials:true});
if(res.data.success){
// dispatchEvent(setAllJobs(res.data.jobs));
console.log("Fetched Jobs from API:", res.data.jobs);
dispatch(setAllAdminJobs(res.data.jobs));

}
        }
        catch(error){
            console.log(error);
        }
    }
    fetchAllAdminJobs();
  },[dispatch])
}

export default useGetAllAdminJobs
