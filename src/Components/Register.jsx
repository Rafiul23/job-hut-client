import { Link } from "react-router-dom";
import registerPic from '../assets/register.jpg'; 

const Register = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#054efa] text-center my-4">Register now!</h1>
        <div className="hero min-h-screen bg-base-100">
            
            <div className="hero-content flex-col lg:flex-row">
            
                <div className="text-center  lg:text-left w-1/2">
                    
                    <img src={registerPic} alt="" className="w-full h-full" />
                </div>
                <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-[#9eb9f8]">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#054efa] text-white">Login</button>
                            <p className="mt-4">Already have an account? Please <Link to='/login' className="text-[#054efa] font-bold">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;