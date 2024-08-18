import { Helmet } from "react-helmet-async";
import Banner from "../components/Home/Banner";
import BrandDisplay from "../components/Home/BrandDisplay";
import ClientReview from "../components/Home/ClientReview";
import CustomizableOptions from "../components/Home/CustomizableOptions";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Services from "../components/Home/Services";
import WhyChooseMechanicalKeyboards from "../components/Home/WhyChooseMechanicalKeyboards ";


const Home = () => {
    return (
        <div className="px-5 space-y-10">
            <Helmet>
                <title>E-Shop | Home</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <FeaturedProduct></FeaturedProduct>
            <BrandDisplay></BrandDisplay>
            <ClientReview></ClientReview>
            <WhyChooseMechanicalKeyboards></WhyChooseMechanicalKeyboards>
            <CustomizableOptions></CustomizableOptions>
        </div>
    );
};

export default Home;