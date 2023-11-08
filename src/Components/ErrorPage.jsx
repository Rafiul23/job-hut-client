import { Link } from "react-router-dom";
import image from '../assets/notFound.gif'

const ErrorPage = () => {
    return (
        <div className="mx-auto space-y-4 text-center">
            <img src={image} className="mx-auto" alt="" />
            <Link to="/"><button className="btn mt-5 btn-warning">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;