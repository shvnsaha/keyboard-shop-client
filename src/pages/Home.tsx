import Banner from "../components/Home/Banner";
import BrandDisplay from "../components/Home/BrandDisplay";
import ClientReview from "../components/Home/ClientReview";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Services from "../components/Home/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FeaturedProduct></FeaturedProduct>
            <BrandDisplay></BrandDisplay>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;