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
import LoginPage from '../pages/login/LoginPage';
import AboutUs from '../pages/AboutUs/AboutUs'; 
import Stats from '../pages/AboutUs/Stats';
import Team from '../pages/AboutUs/Team';
import AuctionList from '../pages/auction list/AuctionList';
import AuctionItem from '../pages/auction list/AuctionItem';
import Accordion from '../pages/FAQ/Accordion';
import SignUpPage from '../pages/login/signup';
import ContactPage from "../pages/ContactUs/ContactUs";



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
                                
                                <TrustedBusinesses/>
                                <Footer />
                            </>
                        ),
                    },
                    // You can add other routes here
                    {
                        path: '/aboutus',
                        element: (
                            <>
                                <Header />
                                <AboutUs/>
                                <Stats/>
                                <Team/>
                                <Testimonials/>
                                <TrustedBusinesses/>
                                <Footer />
                            </>
                        ), // Uncomment when you have AboutUs ready
                    },
                    {
                         path: '/login',
                         element: (
                            <>
                                <Header />
                                <LoginPage/>
                                <Footer />
                            </>
                        ), // Uncomment when you have AboutUs ready
                    },
                    {
                        path: '/Signup',
                        element: (
                           <>
                               <Header />
                               <SignUpPage/>
                               <Footer />
                           </>
                       ), // Uncomment when you have AboutUs ready
                   },
                   {
                    path: '/ContactUs',
                    element: (
                       <>
                           <Header />
                           <ContactPage/>
                           <Footer />
                       </>
                   ), // Uncomment when you have AboutUs ready
               },
                    {
                        path: '/Auction-List',
                        element: (
                                   <>
                                   <Header />
                                  <AuctionList/>,
                                  <AuctionItem/>
                                  <Footer />
                                  </>
                                 ) // Uncomment when you have AboutUs ready
                   },
                   {
                    path: '/FAQ',
                    element: (
                               <>
                               <Header />
                              <Accordion/>,
                              
                              <Footer />
                              </>
                             ) // Uncomment when you have AboutUs ready
               }
                ]
            }
        ])
    );
}
