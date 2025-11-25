import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Solution from "../components/layout/Solution";
import Features from "../components/layout/Features";
import Pricing from "../components/layout/Pricing";
import CallAct from "../components/layout/CallAct";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Solution />
      <Features />
      <Pricing  />
      <CallAct />
      <Footer />
    </>
  );
};

export default Home;