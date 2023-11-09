import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from './AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const JobDetails = () => {

    const {user} = useContext(AuthContext);

    const email = user?.email;
    const photo = user?.photoURL;

    const job = useLoaderData();
    const { job_title, salary_range, job_posting_date, job_description, job_banner, application_deadline, job_category, job_applicants_number, employee_name } = job;

    const handleSubmitResume = e =>{

        e.preventDefault();
        const form = e.target;
        const link = form.link.value;
        const email = user?.email;
        const photo = user?.photoURL;

        const appliedJobs = {
            link,
            email,
            photo,
            job
        }

    
        fetch('https://job-hut-server.vercel.app/appliedjobs', {
            method: 'POST',
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(appliedJobs)
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
        <div className="hero min-h-screen bg-[#b0c9f4]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={job_banner} className="w-1/2 h-3/4 rounded-lg shadow-2xl" />
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold">Job Title: {job_title}!</h1>
                    <p className="py-6">Job Description: {job_description}</p>
                    <p className="py-6">Salary Range: {salary_range}</p>
                    <p className="py-6">Number of Applicants: {job_applicants_number}</p>
                    
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn text-white bg-[#045efa]" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply Now</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <img src={photo} alt="" />
                            <h3 className="text-2xl font-bold py-4">Name: {email}</h3>
                            <form onSubmit={handleSubmitResume}>
                                <input name="link" className="p-4 mr-4 rounded" type="text" />
                                <input type="submit" className="btn" value="Submit resume" />
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;