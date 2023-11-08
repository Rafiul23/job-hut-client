import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const UpdateJobData = () => {

    const job = useLoaderData();

    const { job_title, salary_range, job_posting_date, _id,application_deadline, job_banner, job_category, job_description, job_applicants_number, employee_name } = job;

    const {user} = useContext(AuthContext);

    const email = user?.email;
    

    const handleUpdateJob = e =>{
        e.preventDefault();
        const form = e.target;
        
        const job_banner = form.bannerPic.value;
        const  job_title = form.jobTitle.value;
        const employee_name = form.employeeName.value;
        const job_category = form.jobCategory.value;
        const salary_range = form.salaryRange.value;
        const job_description = form.description.value;
        const job_posting_date = form.postedDate.value;
        const application_deadline = form.deadline.value;
        const job_applicants_number = form.applicantNumber.value;

        const updateJob = {
             
             job_banner, 
             job_title, 
             employee_name, 
             job_category, 
             salary_range, 
             job_description, 
             job_posting_date,
             application_deadline, 
             job_applicants_number 
        }

    

        fetch(`http://localhost:5000/job/${_id}`, {
            method: 'PUT',
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(updateJob)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success(' job updated successfully');
            }
        })
        .catch(error => {
            toast.error(error.message);
        })
    }

    return (
        <div>
             <h2 className="text-3xl text-center my-4 font-bold text-[#045efa]">Update a Job</h2>

            <form onSubmit={handleUpdateJob} className="card-body bg-[#9eb9f8] mb-4 rounded-lg">
                {/* banner and title */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Banner Picture</span>
                    </label>
                    <input type="text" defaultValue={job_banner} name="bannerPic" placeholder="Type url for banner picture" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" defaultValue={job_title} name="jobTitle" placeholder="Job Title" className="input input-bordered" required />
                </div>
               </div>
               {/* username and job category */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" defaultValue={employee_name} name="employeeName" placeholder="Username" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Category</span>
                    </label>
                    <input type="text" defaultValue={job_category} name="jobCategory" placeholder="Job Category" className="input input-bordered" required />
                </div>
               </div>
               {/* salary range and job description */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <input type='text' defaultValue={salary_range} name="salaryRange" placeholder="Salary Range" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <input type="text" defaultValue={job_description} name="description" placeholder="Job Description" className="input input-bordered" required />
                </div>
               </div>
               {/* post date and deadline */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Job Post Date</span>
                    </label>
                    <input type="date" defaultValue={job_posting_date} name="postedDate" placeholder="Job Post Date" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date" defaultValue={application_deadline} name="deadline" placeholder="Application Deadline" className="input input-bordered" required />
                </div>
               </div>
               {/* Applicants number */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Job Applicants Number</span>
                    </label>
                    <input type="number" defaultValue={job_applicants_number} placeholder="Job Applicants Number" name='applicantNumber' className="input input-bordered" required />
                </div>
               
               </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#045efa] text-white">Update Job</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateJobData;