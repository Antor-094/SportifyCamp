import { Helmet } from "react-helmet-async";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SportifyCamp | home</title>
            </Helmet>
            <div className="pt-24">
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;