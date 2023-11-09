import Banner from "./Banner";
import HotJob from "./HotJob";
import JobByCategory from "./JobByCategory";
import Training from "./Training";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobByCategory></JobByCategory>
            <HotJob></HotJob>
            <Training></Training>
        </div>
    );
};

export default Home;