// Import CSS
// Import libraries
import { useRoutes } from "react-router-dom";

// Import components
// import MainLayout from "../layouts/main-layout/main-layout";
import HeroSection from "../pages/home/HeroSection";
import StatsSection from "../pages/home/StatsSection";
import BiddingSteps from "../pages/home/BiddingSteps";
import TopLots from "../pages/home/TopLots";
import AuctionItems from "../pages/home/AuctionItems";
import Testimonials from "../pages/home/Testimonials";
import TrustedBusinesses from "../pages/home/TrustedBusinesses";
import Footer from "../pages/home/Footer";
import Header from "../components/navbar/navbar";
import LoginSection from '../pages/login/LoginSection';

// Component definition
export default function RouterConfig() {
    return (
        useRoutes([
            {
                path: '/',
                // element: <MainLayout />, // Use a layout component that includes Header/Footer
                children: [
                    {
                        index: true,
                        element: (
                            <>
                                <Header />
                                <HeroSection />
                                <StatsSection />
                                <BiddingSteps />
                                <TopLots />
                                <AuctionItems />
                                <Testimonials />
                                <TrustedBusinesses />
                                <Footer />
                            </>
                        ),
                    },
                    // You can add other routes here
                    {
                        // path: '/about-us',
                        // element: <AboutUs />, // Uncomment when you have AboutUs ready
                    },
                    {
                         path: '/login',
                         element: <LoginSection/>, // Uncomment when you have AboutUs ready
                    }
                ]
            }
        ])
    );
}
