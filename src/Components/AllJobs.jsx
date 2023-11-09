import axios from "axios";
import { useEffect, useState } from "react";
import JobTable from "./JobTable";


const AllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios.get('https://job-hut-server-einridv9r-md-rafiul-islams-projects.vercel.app/jobs')
            .then(res => setJobs(res.data))
    }, [])

    

    const handleSearchJob = e =>{
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobtitle.value.toLowerCase();
        const filterJob = jobs.filter(job => job.job_title.toLowerCase() === jobTitle);
        
        setResult(filterJob);
        console.log(jobTitle, filterJob);
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
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            result.length === 0 ?
                            jobs?.map(job => <JobTable
                                key={job._id}
                                job={job}
                            ></JobTable>) :
                            result?.map(job => <JobTable
                                key={job._id}
                                job={job}
                            ></JobTable>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllJobs;