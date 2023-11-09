

const Training = () => {
    return (
        <div className="my-10">
            <h1 className="text-3xl text-center font-bold text-[#045efa] my-4">Get Trainned, Get Hired!!!</h1>
            <p className="text-center font-medium mb-4">Training is going on</p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="card w-full bg-[#807af4] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Web Development</h2>
                        <p>Intsitute: Dream Tech IT</p>
                        <p>Traininng Fee: $40</p>
                        <p><span className="text-red-600 font-bold">Registration Deadline</span>: 12/01/23</p>
                        <p>Course starts: 12/04/23</p>
                    </div>
                </div>
                <div className="card w-full bg-[#807af4] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Game Development</h2>
                        <p>Intsitute: Game Pro</p>
                        <p>Traininng Fee: $400</p>
                        <p><span className="text-red-600 font-bold">Registration Deadline</span>: 12/10/23</p>
                        <p>Course starts: 12/20/23</p>
                    </div>
                </div>
                <div className="card w-full bg-[#807af4] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Python Programming</h2>
                        <p>Intsitute: Digital Tech IT</p>
                        <p>Traininng Fee: $50</p>
                        <p><span className="text-red-600 font-bold">Registration Deadline</span>: 12/05/23</p>
                        <p>Course starts: 12/14/23</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;