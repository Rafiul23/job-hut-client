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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/addjob',
        element: <AddJobs></AddJobs>
      },
      {
        path: '/myjobs',
        element: <MyJobs></MyJobs>
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
