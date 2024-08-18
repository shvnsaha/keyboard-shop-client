import { Link } from "react-router-dom";
import Error from '../assets/images/Error.jpg'

const ErrorPage = () => {
    return (
      <div className="max-w-7xl mx-auto flex justify-center">
        
        <div>
        
         <img src={Error} alt="" />
        <p className="text-center">Sorry, the page you are looking for does not exist.</p>
        <div className="flex justify-center my-3">
        <button className="btn bg-red-400 text-white "><Link to="/">Return to Home</Link></button>
        </div>
      </div>
      </div>
    );
  };
  
  export default ErrorPage;