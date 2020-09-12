import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner";
import About from "./About";
import GetStarted from "./GetStarted/GetStarted";
import Orgs from "./Organisations/Orgs";
import Timeline from "./Timeline/Timeline";
import Sponsors from "./Sponsors/Sponsors";
import FAQ from "./FAQ/FAQ";
import CTA from "./CTA";
import Team from "./Team/Team";
import Speakers from "./Speakers/Speakers";

function Main() {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <GetStarted />
            <Speakers />
            <Orgs />
            <Timeline />
            <Sponsors />
            <Team />
            <FAQ />
            <CTA/>
            {/* <Footer /> */}
        </div>
    );
}
export default Main;
