import Header from "../components/header";
import Footer from "../components/footer";
import earth from "../assets/images/earth.gif";
import mainvideo from "../assets/images/Final.mp4"
import { Link } from "react-router-dom";



function Home(){

    


    return(

        <>
        
            <Header/>

           

           <section className="main-section">
            
            
                <div className="video-background">
                    <div className="video-wrapper">
                        <div className="video-container">
                            <video autoPlay muted loop>
                            <source src={mainvideo} type="video/mp4"/>

                            </video>
                        </div>
                    </div>

                    <div className="content">

                        <h2>Welcome To TellusX Club</h2>
                        <div className="content-meta">
                            <img src={earth} />
                            <Link to={'/main'} className="custom-btn secondary-btn w-100">Enter</Link>
                        </div>

                    </div>

                </div>

                

            </section>

        

            <Footer/>
        

        </>

    )

}

export default Home;