import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import MyJobTable from './MyJobTable';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;

    const [jobs, setJobs] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get(`https://job-hut-server-einridv9r-md-rafiul-islams-projects.vercel.app/myjobs/${email}`)
            .then(res => setJobs(res.data))
    }, [email])

    const handleSearchJob = e => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobtitle.value.toLowerCase();
        const filterJob = jobs.filter(job => job.job_title.toLowerCase() === jobTitle);

        setResult(filterJob);
        console.log(jobTitle, filterJob);
    }

    const handleDelete = _id =>{
        fetch(`https://job-hut-server-einridv9r-md-rafiul-islams-projects.vercel.app/job/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('job deleted successfully')
                const remaining = jobs.filter(job => job._id !== _id);
                setJobs(remaining);
            }
        })

    }

    return (
        <div className="my-10">
            <div className="text-center my-10">
                <form onSubmit={handleSearchJob}>
                    <input type="text" name="jobtitle" placeholder="Search here" className="input mr-2 input-bordered input-info w-full max-w-xs" />
                    <button className="btn bg-[#054efa] text-white">Search</button>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="p-4 border-2">

                            <th>Employee Name</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary range</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            result.length === 0 ?
                                jobs?.map(job => <MyJobTable
                                    key={job._id}
                                    job={job}
                                    handleDelete={handleDelete}
                                ></MyJobTable>) :
                                result?.map(job => <MyJobTable
                                    key={job._id}
                                    job={job}
                                    handleDelete={handleDelete}
                                ></MyJobTable>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyJobs;