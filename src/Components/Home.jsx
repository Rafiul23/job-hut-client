import Banner from "./Banner";
import HotJob from "./HotJob";
import JobByCategory from "./JobByCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobByCategory></JobByCategory>
            <HotJob></HotJob>
        </div>
    );
};

export default Home;