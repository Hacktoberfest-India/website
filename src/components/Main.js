import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import About from './About'
import GetStarted from './GetStarted/GetStarted'
import Orgs from './Organisations/Orgs'
import Timeline from './Timeline'
import Sponsors from './Sponsors/Sponsors'
import FAQ from './FAQ/FAQ'
import Footer from './Footer'
import Team from './Team/Team'
import Speakers from './Speakers/Speakers'

function Main(){
    return (
        <div>
            <Navbar/>
            <Banner/>
            <About/>
            <GetStarted/>
            <Speakers/>
            <Orgs/>
            <Timeline/>
            <Sponsors/>
            <Team/>
            <FAQ/>
            <Footer/>
        </div>
    )
}
export default Main;