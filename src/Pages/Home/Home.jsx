import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import ServicesDetails from "./ServicesSection/ServicesDetails";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SportifyCamp | home</title>
            </Helmet>
            <div className="lg
            :pt-24">
            <Banner></Banner>
            </div>
            <div className="my-12">
            <PopularClasses></PopularClasses>
            </div>
            <div>
                <ServicesDetails></ServicesDetails>
            </div>
        </div>
    );
};

export default Home;