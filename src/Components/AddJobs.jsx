import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddJobs = () => {

    const {user} = useContext(AuthContext);

    const email = user?.email;
    

    const handleAddJob = e =>{
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

        const newJob = {
             email,
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

        console.log(newJob);

        fetch('https://job-hut-server.vercel.app/jobs', {
            method: 'POST',
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('New job added successfully');
            }
        })
        .catch(error => {
            toast.error(error.message);
        })
    }

    return (
        <div>
             <h2 className="text-3xl text-center my-4 font-bold text-[#045efa]">Add a Job</h2>

            <form onSubmit={handleAddJob} className="card-body bg-[#9eb9f8] mb-4 rounded-lg">
                {/* banner and title */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Banner Picture</span>
                    </label>
                    <input type="text" name="bannerPic" placeholder="Type url for banner picture" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="jobTitle" placeholder="Job Title" className="input input-bordered" required />
                </div>
               </div>
               {/* username and job category */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" name="employeeName" placeholder="Username" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Category</span>
                    </label>
                    <input type="text" name="jobCategory" placeholder="Job Category" className="input input-bordered" required />
                </div>
               </div>
               {/* salary range and job description */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <input type='text' name="salaryRange" placeholder="Salary Range" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Job Description" className="input input-bordered" required />
                </div>
               </div>
               {/* post date and deadline */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Job Post Date</span>
                    </label>
                    <input type="date" name="postedDate" placeholder="Job Post Date" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date" name="deadline" placeholder="Application Deadline" className="input input-bordered" required />
                </div>
               </div>
               {/* Applicants number */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Job Applicants Number</span>
                    </label>
                    <input type="number" placeholder="Job Applicants Number" name='applicantNumber' className="input input-bordered" required />
                </div>
               
               </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#045efa] text-white">Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;