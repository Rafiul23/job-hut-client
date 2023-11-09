import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllCategory from './AllCategory';
import OnSiteCategory from './OnSiteCategory';
import RemoteCategory from './RemoteCategory';
import HybridCategory from './HybridCategory';
import PartTimeCategory from './PartTimeCategory';

const JobByCategory = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        axios.get('https://job-hut-server-einridv9r-md-rafiul-islams-projects.vercel.app/jobs')
        .then(res => setJobs(res.data))
    },[])

    return (
        <div className="py-10">
            <h2 className="text-3xl text-center font-bold text-[#045efa]">Job By Category</h2>

            <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>On Site Jobs</Tab>
                  <Tab>Remote Jobs</Tab>
                  <Tab>Hybrid</Tab>
                  <Tab>Part Time</Tab>
                </TabList>

                <TabPanel>
                    <AllCategory jobs={jobs}></AllCategory>
                </TabPanel>
                <TabPanel>
                    <OnSiteCategory jobs={jobs}></OnSiteCategory>
                </TabPanel>
                <TabPanel>
                    <RemoteCategory jobs={jobs}></RemoteCategory>
                </TabPanel>
                <TabPanel>
                    <HybridCategory jobs={jobs}></HybridCategory>
                </TabPanel>
                <TabPanel>
                    <PartTimeCategory jobs={jobs}></PartTimeCategory>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default JobByCategory;