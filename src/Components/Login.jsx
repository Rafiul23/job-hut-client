import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = e =>{
        e.prevenntDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        
        signIn(email, password)
        .then(result =>{
            const user = result.user;
           console.log(user);
            navigate(location?.pathname ? location?.pathname : '/')
            
        })
        .catch(error =>{
            console.log(error);
            setError('Invalid email or password.Please try again!');
        })

        form.email.value = '';
        form.password.value = '';

    }

    return (
        <div className="hero min-h-screen bg-[#9eb9f8]">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center mr-10 lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold text-[#054efa]">Login now!</h1>
                    <p className="py-6 font-bold">To get full advantage from our website, you have to login first.</p>
                </div>
                <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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