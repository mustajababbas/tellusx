import Header from "../components/header";
import Footer from "../components/footer";
import Faq from "../components/faq";
import earth from "../assets/images/earth.gif";
import mainvideo from "../assets/images/Final.mp4"
import { Link } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";



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

                        <h2>Welcome to TellusX</h2>
                        <div className="content-meta">
                            <img src={earth} />
                            <a href="https://discord.com/invite/uXHFPwyeFN" target="_blank" className="custom-btn secondary-btn w-100">Enter</a>
                        </div>

                    </div>

                </div>

                

            </section>


            <Container className="py-5">

                <Row className="gx-lg-5 my-5 py-5">

                    <Col lg={6}>

                        <h4 className="mb-4">Welcome to TellusX</h4>

                        <p style={{fontSize:"20px"}}>
                        The Tx. Gang is a tri-serial 3D collection of digital assets found on the Ethereum Blockchain. Inception is the first series of the project, followed by Mutation & Liberation. 
                            <br/> <br/>
                        The Inception series is a collection of 8000 unique Tx. Tyga teen NFTs built for the metaverse. Not only are our Tygas 
                        extremely rare & precious, they draw a lot of inspiration from all the real-life tigers; You, Me, and Us. The DNA of 
                        each Tyga is securely contained in the ERC-721 standard, and every Tyga holder will have a guaranteed access to exclusive 
                        rewards & benefits, including VIP access to all our future drops, IRL events with industry best influencers & crypto whales, 
                        AMA with the biggest names known to us, Airdrops, The Tx. Store & much more. 
                            <br/> <br/>
                        More importantly, each holder will be able to access the TellusX Club, our virtual HQ that all of us together will establish 
                        before the launch of the Liberation series. 
                            <br/> <br/>
                        </p>

                    </Col>

                    <Col lg={6}>


                    <h4 className="mb-4">How is Tx. Gang special than the rest of the NFT projects? </h4>
                        
                    <p style={{fontSize:"20px"}}>
                        Tx. Gang is a community built by less-established individuals who’re experts in their domains & carry years of experience 
                        under their belt. We believe in putting more efforts on our product & refining quality. And for the same reason we started 
                        our campaign by including only organic audience that came via referrals & friends of friends, as opposed to a full-blown 
                        marketing campaign. 

                            <br/> <br/>

                        While Art, Music & Growth are at the heart of each of the individuals involved in this project, we also understand the gravity 
                        of work that is required on the ground to keep our brand name alive at all times. We are a crowdsourced community that respects 
                        individuality, practices & preaches inclusion, and aspire to work towards sustainable development & progressive growth by means 
                        of science & technology. There are no external investors that are a part of this project, except every working member’s hard-earned 
                        savings that has gone into its development. 

                            <br/> <br/>

                        Above all, Tx. Gang is the perfect rendition of Art, Utility & an extremely relatable storyline; all coming from ordinary 
                        people who’re just hooked up by the endless possibilities that Metaverse has in store for us 

                            <br/> <br/>

                        For more information about the project, please check our #announcements. For any queries, please use the #generalchat 
                        space or the #support channel.

                            <br/> <br/>

                        Now since you’ve made it till here, please get yourself verified, quickly go over our rules section & jump in to 
                        this new world. We call it TellusX. 

                        </p>

                    </Col>

                </Row>

                <div className="main-title">
                    <h2>Commonly Asked Questions! </h2>
                </div>

                <Faq/>

                <div className="text-center my-5 pt-5">
                    <a href="https://discord.com/invite/uXHFPwyeFN" target="_blank" className="custom-btn primary-btn">Join Us on Discord</a>
                </div>

            </Container>
        

            <Footer/>
        

        </>

    )

}

export default Home;