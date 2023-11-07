import CategoryCard from "./CategoryCard";


const PartTimeCategory = ({jobs}) => {
    const filteredJobs = jobs.filter(job => job.job_category === 'part-time');


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            filteredJobs?.map(job => <CategoryCard
            key={job._id}
            job={job}
            ></CategoryCard>)
        }
    </div>
    );
};

export default PartTimeCategory;