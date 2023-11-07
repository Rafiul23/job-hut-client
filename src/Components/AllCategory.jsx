import CategoryCard from "./CategoryCard";


const AllCategory = ({jobs}) => {



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                jobs?.map(job => <CategoryCard
                key={job._id}
                job={job}
                ></CategoryCard>)
            }
        </div>
    );
};

export default AllCategory;