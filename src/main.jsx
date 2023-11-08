import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home';
import AllJobs from './Components/AllJobs';
import AppliedJobs from './Components/AppliedJobs';
import AddJobs from './Components/AddJobs';
import MyJobs from './Components/MyJobs';
import Blogs from './Components/Blogs';
import Register from './Components/Register';
import Login from './Components/Login';
import AuthProvider from './Components/AuthProvider';
import ErrorPage from './Components/ErrorPage';
import JobDetails from './Components/JobDetails';
import UpdateJobData from './Components/UpdateJobData';
import PrivateRoute from './Components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/alljobs',
        element: <AllJobs></AllJobs>
      },
      {
        path: '/appliedjobs',
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
      },
      {
        path: '/addjob',
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path: '/myjobs',
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/job/${params.id}`)
      },
      {
        path: '/updateJobData/:id',
        element: <UpdateJobData></UpdateJobData>,
        loader: ({params})=> fetch(`http://localhost:5000/job/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
