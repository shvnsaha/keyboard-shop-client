import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";


const PaymentSuccess = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className="card w-96 bg-yellow-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <MdPayment size={40} />

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Payment Successful</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={'/home'}>Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
