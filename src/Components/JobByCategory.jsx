import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobByCategory = () => {
    return (
        <div className="py-10">
            <h2 className="text-3xl text-center font-bold text-[#045efa]">Job By Category</h2>

            <Tabs>
                <TabList>
                  <Tab>On Site Jobs</Tab>
                  <Tab>Remote Jobs</Tab>
                  <Tab>Hybrid</Tab>
                  <Tab>Part Time</Tab>
                </TabList>
            </Tabs>

        </div>
    );
};

export default JobByCategory;