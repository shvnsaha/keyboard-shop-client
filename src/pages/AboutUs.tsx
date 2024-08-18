import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <Helmet>
            <title>E-Shop | About Us</title>
            </Helmet>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-400 shadow-lg rounded-lg p-6" data-aos="zoom-in-up">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">About Us</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to KeyMaster, your ultimate destination for premium mechanical keyboards and accessories.
                    We are passionate about delivering the best typing experience to enthusiasts and professionals alike.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Founded in [Year], KeyMaster started with a vision to provide high-quality mechanical keyboards with customizable options and exceptional performance. Our team consists of keyboard enthusiasts who understand the nuances of tactile feedback, actuation points, and switch types.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    At KeyMaster, we pride ourselves on offering a wide range of products, from beginner-friendly boards to high-end, customizable keyboards. Our commitment to quality and customer satisfaction drives us to continuously explore the latest advancements in keyboard technology.
                </p>
                <p className="text-lg text-gray-700">
                    Whether you are a gamer, programmer, or just someone who appreciates a good typing experience, we have something for you. Feel free to reach out to us with any questions or for personalized recommendations. Thank you for choosing KeyMaster!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;