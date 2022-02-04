import Story from "./Story";
import Communtiy from "./Community";
import Roadmap from "./Roadmap"
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Main(){

    

    return (


        <>

            <Header/>

            <Story/>
            <Roadmap/>
            <Communtiy/>

            <div className="columns">

                
               
                <Link
                    activeClass="active"
                    to="story"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>

                    </Link>

                
                <Link
                    activeClass="active"
                    to="roadmap"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>

                    </Link>

                
                <Link
                    activeClass="active"
                    to="community"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>

                    </Link>
                

            </div>

            <Footer/>
        

        </>

    )

}

export default Main;