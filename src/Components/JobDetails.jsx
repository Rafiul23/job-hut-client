import { useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const job = useLoaderData();
    const { job_title, salary_range, job_posting_date, job_description, job_banner, application_deadline, job_category, job_applicants_number, employee_name } = job;

    return (
        <div className="hero min-h-screen bg-[#b0c9f4]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={job_banner} className="w-1/2 h-3/4 rounded-lg shadow-2xl" />
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold">Job Title: {job_title}!</h1>
                    <p className="py-6">Job Description: {job_description}</p>
                    <p className="py-6">Salary Range: {salary_range}</p>
                    <p className="py-6">Number of Applicants: {job_applicants_number}</p>
                    <button className="btn bg-[#045efa] text-white">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;