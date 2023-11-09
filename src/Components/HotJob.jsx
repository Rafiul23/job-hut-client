

const HotJob = () => {
    return (
        <div className="my-5">
            <h1 className="text-3xl text-center font-bold text-[#045efa] my-4">Hot Job Offer</h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="card w-full bg-[#a7c4f7] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Web Developer</h2>
                        <p>Company: Digital IT</p>
                        <p>Salary: $50k - $70k</p>
                        <p><span className="text-red-600 font-bold">Application Deadline</span>: 12/12/23</p>
                        <p>Send CV at: <span className="font-bold underline">malcom47@gmail.com</span></p>
                    </div>
                </div>
                <div className="card w-full bg-[#a7c4f7] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Web Designer</h2>
                        <p>Company: SoftNet IT</p>
                        <p>Salary: $55k - $70k</p>
                        <p><span className="text-red-600 font-bold">Application Deadline</span>: 12/20/23</p>
                        <p>Send CV at: <span className="font-bold underline">saif70@gmail.com</span></p>
                    </div>
                </div>
                <div className="card w-full bg-[#a7c4f7] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">MERN stack Developer</h2>
                        <p>Company: Dream IT</p>
                        <p>Salary: $50k - $75k</p>
                        <p><span className="text-red-600 font-bold">Application Deadline</span>: 12/02/23</p>
                        <p>Send CV at: <span className="font-bold underline">alex08@gmail.com</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HotJob;