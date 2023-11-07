

const AddJobs = () => {
    return (
        <div>
             <h2 className="text-3xl text-center my-4 font-bold text-[#045efa]">Add a Job</h2>
            <form className="card-body bg-[#9eb9f8] mb-4 rounded-lg">
                {/* banner and title */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Banner Picture</span>
                    </label>
                    <input type="text" placeholder="Type url for banner picture" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" placeholder="Job Title" className="input input-bordered" required />
                </div>
               </div>
               {/* username and job category */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Username" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Category</span>
                    </label>
                    <input type="text" placeholder="Job Category" className="input input-bordered" required />
                </div>
               </div>
               {/* salary range and job description */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <input type='text' placeholder="Salary Range" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <input type="text" placeholder="Job Description" className="input input-bordered" required />
                </div>
               </div>
               {/* post date and deadline */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Job Post Date</span>
                    </label>
                    <input type="date" placeholder="Job Post Date" className="input input-bordered" required />
                </div>
                <div className="form-control w-full md:w-1/2">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date" placeholder="Application Deadline" className="input input-bordered" required />
                </div>
               </div>
               {/* Applicants number */}
               <div className="flex md:flex-row flex-col">
               <div className="form-control w-full md:w-1/2 mr-5">
                    <label className="label">
                        <span className="label-text">Job Applicants Number</span>
                    </label>
                    <input type="number" placeholder="Job Applicants Number" className="input input-bordered" required />
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