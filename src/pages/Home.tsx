import Banner from "../components/Home/Banner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Services from "../components/Home/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
             <FeaturedProduct></FeaturedProduct>
        </div>
    );
};

export default Home;