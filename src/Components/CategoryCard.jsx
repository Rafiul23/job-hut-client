import { Link } from "react-router-dom";


const CategoryCard = ({ job }) => {

    const { job_title, salary_range, job_posting_date, _id,application_deadline, job_category, job_applicants_number, employee_name } = job;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Job Title: {job_title}</h2>
                <p>Job Posted By: {employee_name}</p>
                <p>Job Category: {job_category}</p>
                <p>Job Posting Date: {job_posting_date}</p>
                <p><span className="text-red-600 font-bold">Application Deadline</span>: {application_deadline}</p>
                <p>Salary Range: {salary_range}</p>
                <p>Job Applicant's Number: {job_applicants_number}</p>
                <div className="card-actions justify-end">
                    <Link to={`/job/${_id}`}>
                    <button className="btn bg-[#045efa] text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;