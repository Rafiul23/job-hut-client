import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-[#9eb9f8]">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mr-10 lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold text-[#054efa]">Login now!</h1>
                    <p className="py-6 font-bold">To get full advantage from our website, you have to login first.</p>
                </div>
                <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#054efa] text-white">Login</button>
                            <p className="mt-4">New to our website? Please <Link to='/register' className="text-[#054efa] font-bold">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;