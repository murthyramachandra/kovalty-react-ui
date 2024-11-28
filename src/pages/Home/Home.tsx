import React from "react";
import { Helmet } from "react-helmet";
import withLayout from "../../components/Layout/withLayout";
import TopBanner from "./components/TopBanner";
import Services from "./components/Services";
import Insights from "./components/Insights";
import AboutUs from "./components/AboutUs";
// import Industries from "./components/Industries";
// import ContactUs from "./components/ContactUs";
import Fotter from "./components/Fotter";
import AboutUsText from "./components/AboutUsText";
import HscrollBlock from "./components/HScroll";
import Careers from "./components/Careers";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Kovalty</title>
        <meta name="title" content="Home Page" />
        <meta
          name="description"
          content="This is the home page of our application."
        />
      </Helmet>
      <div style={{height:'auto',overflowY:'auto',position: 'relative'}}>
      <TopBanner />
      <Services />
      {/* <Insights /> */}
      <AboutUs />
      {/* <Industries /> */}
      {/* <Careers /> */}
      {/* <ContactUs /> */}
      {/* <AboutUsText /> */}
      <HscrollBlock />
      <Careers />
      <Fotter/>
      </div>
    </div>
  );
};

export default withLayout(Home);
