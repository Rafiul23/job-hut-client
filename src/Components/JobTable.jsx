import { Link } from "react-router-dom";


const JobTable = ({ job }) => {

    const { job_title, salary_range, job_posting_date, _id,application_deadline, job_category, job_applicants_number, employee_name } = job;

    return (
    
            <tr className="py-4 border-2">
                
                <td>{employee_name}</td>
                <td>{job_title}</td>
                <td>{job_posting_date}</td>
                <td>{application_deadline}</td>
                <td>{salary_range}</td>
                <Link to={`/job/${_id}`}>
                <button className="btn bg-[#045efa] text-white">View Details</button>
                </Link>
            </tr>
        
    );
};

export default JobTable;