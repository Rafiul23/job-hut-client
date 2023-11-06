import { Link, useNavigate } from "react-router-dom";
import registerPic from '../assets/register.jpg';
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { signInWithGoogle, setUser, createUser } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;

        console.log(name, email, password, photo);

        form.name.value = '';
        form.email.value = '';
        form.password.value = '';
        form.imgURL.value = '';

        if (password.length < 6) {
            setError('Your password is less than 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Your password should have one uppercase');
            return;
        }
        else if (!/[!@#$%^&*()_+\-=\[\]{}|;:'",<.>?/]/.test(password)) {
            setError('Your password should have at least one special character');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                setSuccess('Successfully created user')

                updateProfile(loggedInUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('profile updated');
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                console.log(error.message);

            })



    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                setSuccess('Google Signin Successful!');

                console.log(loggedInUser);

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#054efa] text-center my-4">Register now!</h1>
            <div className="hero min-h-screen bg-base-100">

                <div className="hero-content flex-col lg:flex-row">

                    <div className="text-center  lg:text-left w-1/2">

                        <img src={registerPic} alt="" className="w-full h-full" />
                    </div>
                    <div className="card flex-shrink-0  w-1/2 shadow-2xl bg-[#9eb9f8]">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo URL" name="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="mt-3">
                                {
                                    success && <p className="text-green-500 bg-white p-2 rounded-lg font-bold">{success}</p> 
                                }
                                {
                                    error && <p className="text-red-500 bg-white p-2 rounded-lg font-bold">{error}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#054efa] text-white">Register</button>
                                <p className="mt-4">Already have an account? Please <Link to='/login' className="text-[#054efa] font-bold">Login</Link></p>
                            </div>
                        </form>


                    </div>


                </div>

            </div>
            <p className="text-xl my-3 text-center text-blue-700">Or</p>

            <div className="text-center py-4">
                <button onClick={handleGoogleSignIn} className="btn mb-3 mt-4"><FcGoogle></FcGoogle>Login with Google</button>
            </div>
        </div>
    );
};

export default Register;