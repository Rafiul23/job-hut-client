import bannerPic from '../assets/bannerpic.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-[#9eb9f8]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerPic} className="w-1/2 rounded-lg shadow-2xl" />
                    <div className='text-[#054efa] w-1/2'>
                        <h1 className="text-5xl font-bold">Find Your Dream Jobs here...</h1>
                        <p className="py-6">Apply your favourite jobs and get hired!!! </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;