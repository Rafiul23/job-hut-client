import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Navbar = () => {

    const { user, logOut, name, photo } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navlinks = <>

        <li className="text-lg mr-8">
            <NavLink to='/'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#054efa] font-bold border-b-2 border-[#054efa] pb-4" : "text-[#054efa]"
                }
            >
                Home
            </NavLink>
        </li>

        <li className="text-lg mr-8">
            <NavLink to='/alljobs'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#054efa] font-bold border-b-2 border-[#054efa] pb-4" : "text-[#054efa]"
                }
            >
                All Jobs
            </NavLink>
        </li>

        <li className="text-lg mr-8">
            <NavLink to='/appliedjobs'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#054efa] font-bold border-b-2 border-[#054efa] pb-4" : "text-[#054efa]"
                }
            >
                Applied Jobs
            </NavLink>
        </li>

        <li className="text-lg mr-8">
            <NavLink to='/addjob'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#054efa] font-bold border-b-2 border-[#054efa] pb-4" : "text-[#054efa]"
                }
            >
                Add A Job
            </NavLink>
        </li>

        <li className="text-lg mr-8">
            <NavLink to='/myjobs'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#054efa] font-bold border-b-2 border-[#054efa] pb-4" : "text-[#054efa]"
                }
            >
                My Jobs
            </NavLink>
        </li>

        <li className="text-lg">
            <NavLink to='/blogs'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#054efa] font-bold border-b-2 border-[#054efa] pb-4" : "text-[#054efa]"
                }
            >
                Blogs
            </NavLink>
        </li>
    </>

    return (
        <div>
            <div className="text-center py-4">
                <h1 className="text-[#054efa] font-bold text-xl md:text-3xl lg:text-5xl">Job Hut</h1>
            </div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navlinks}

                        </ul>
                    </div>

                    <div className=" hidden lg:flex">
                        <ul className="flex px-1">

                            {navlinks}

                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        user && <img className="rounded-full w-8 h-8 md:w-10 mr-3 md:h-10" src={user?.photoURL} />
                    }

                    {
                        user && <p className="text-[#045efa] text-sm md:text-lg mr-3 font-bold">{user?.displayName}</p>
                    }
                    <button className="btn btn-outline text-[#054efa] border-[#054efa] hover:bg-[#054efa]">
                        {
                            user ? <Link onClick={handleLogOut}
                               
                            >LogOut</Link> :
                                <Link to='/login'
                                   
                                >Login</Link>
                        }
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;