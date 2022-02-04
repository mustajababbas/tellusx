
import story1 from "../assets/images/tx-logo.png"
import storylarge from "../assets/images/beans.png"
import { Container } from "react-bootstrap";
import { useState } from "react";

function Story(){

    const [status,setStatus] = useState(false)

    return (

        <>
        
  

        <Container fluid id="story">

            <h1 className="main-title">Our Story</h1>

            <div className="story">

                <div className="story-row">

                    <div className="story-box box-60" onClick={(e)=>setStatus(true)}>
                        

                        <h2>01</h2>
                        <h5>Vision & Values <i class="fa-solid fa-arrow-right"></i></h5>

                        <img src={story1}/>

                        

                    </div>

                    <div className="story-box box-40" onClick={(e)=>setStatus(true)}>
                        

                        <h2>02</h2>
                        <h5>Vision & Values <i class="fa-solid fa-arrow-right"></i></h5>

                        <img src={story1}/>

                    </div>
                </div>

                <div className="story-row">

                    <div className="story-box box-40">
                        

                        <h2>03</h2>
                        <h5>Vision & Values <i class="fa-solid fa-arrow-right"></i></h5>

                        <img src={story1}/>

                    </div>

                    <div className="story-box box-60">
                        

                        <h2>04</h2>
                        <h5>Vision & Values <i class="fa-solid fa-arrow-right"></i></h5>

                        <img src={story1}/>

                    </div>
                </div>

                <div className="story-row story-boxfull">

                   <div className="d-flex box-60">

                   <div className="story-box">
                        

                        <h2>05</h2>
                        <h5>Vision & Values <i class="fa-solid fa-arrow-right"></i></h5>

                        <img src={story1}/>

                    </div>

                    <div className="story-box">
                        

                        <h2>06</h2>
                        <h5>Vision & Values <i class="fa-solid fa-arrow-right"></i></h5>

                        <img src={story1}/>

                    </div>

                   </div>

                   <div className="story-box box-40">
                        

                        <h2>07</h2>
                        <h5>Vision & Values <i class="fa-solid fa-arrow-right"></i></h5>

                        <img src={story1}/>

                    </div>

                </div>

                <div className={status == false ? "box-hide" : "bigbox bigbox1"} >

                    <i class="fa-solid fa-xmark" onClick={(e)=>setStatus(false)}></i>

                    <div>

                        <h2 className="mb-5">VISION & VALUES</h2>


                        <p><b>Our Vision:</b> Create the largest decentralized brand for the metaverse that is built and owned by the community.</p>
                            <ul>
                                <li>
                                    <p><b>Our Vision:</b> Create the largest decentralized brand for the metaverse that is built and owned by the community.</p>
                                </li>

                                <li>
                                    <p><b>Our Vision:</b> Create the largest decentralized brand for the metaverse that is built and owned by the community.</p>
                                </li>

                                <li>
                                    <p><b>Our Vision:</b> Create the largest decentralized brand for the metaverse that is built and owned by the community.</p>
                                </li>

                                <li>
                                    <p><b>Our Vision:</b> Create the largest decentralized brand for the metaverse that is built and owned by the community.</p>
                                </li>

                                <li>
                                    <p><b>Our Vision:</b> Create the largest decentralized brand for the metaverse that is built and owned by the community.</p>
                                </li>
                            </ul>

                    

                       

                    </div>

                    <img src={storylarge} className="box-image-large"/>

                </div>

               

            </div>

        </Container>


      

        </>

    )

}

export default Story;