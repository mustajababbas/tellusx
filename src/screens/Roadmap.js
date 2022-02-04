import roadmapimg from "../assets/images/CHRIS-BROWN-BODY.jpg"
import discoball from "..//assets/images/Disco-Ball-01.png"
import { Container } from "react-bootstrap";

function Roadmap(){

    return (

        <>
        
      

        <Container className="pb-5" id="roadmap">

            <div className="roadmap">

            <h1 className="main-title">Roadmap</h1>

                <div className="roadmap-meta">

                    <div className="roadmap-img">

                        <img src={roadmapimg}/>

                    </div>

                    
                    <div className="roadmap-center">

                        <img src={discoball}/>

                    </div>

                    
                    <div className="roadmap-data">

                        <div className="roadmap-box">

                            <h1>WELCOME TO METACLUB SOCIETY</h1>
                            <p>lorem asdas dnas ndasj idajs das dipaspdasdasd as dpasdpoaspoopdaposdpo asppdpasppdoas</p>

                        </div>

                    </div>

                </div>


                <div className="roadmap-meta ">

                    <div className="roadmap-img order-3">

                        <img src={roadmapimg}/>

                    </div>


                    <div className="roadmap-center order-2">

                        <img src={discoball}/>

                    </div>


                    <div className="roadmap-data order-1">

                        <div className="roadmap-box">

                            <h1>s</h1>
                            <p>lorem asdas dnas ndasj idajs das dipaspdasdasd as dpasdpoaspoopdaposdpo asppdpasppdoas</p>

                        </div>

                    </div>

                </div>

                <div className="roadmap-meta">

                    <div className="roadmap-img">

                        <img src={roadmapimg}/>

                    </div>

                    
                    <div className="roadmap-center">

                        <img src={discoball}/>

                    </div>

                    
                    <div className="roadmap-data">

                        <div className="roadmap-box">

                            <h1>s</h1>
                            <p>lorem asdas dnas ndasj idajs das dipaspdasdasd as dpasdpoaspoopdaposdpo asppdpasppdoas</p>

                        </div>

                    </div>

                </div>

                <div className="roadmap-meta ">

                    <div className="roadmap-img order-3">

                        <img src={roadmapimg}/>

                    </div>


                    <div className="roadmap-center order-2">

                        <img src={discoball}/>

                    </div>


                    <div className="roadmap-data order-1">

                        <div className="roadmap-box">

                            <h1>s</h1>
                            <p>lorem asdas dnas ndasj idajs das dipaspdasdasd as dpasdpoaspoopdaposdpo asppdpasppdoas</p>

                        </div>

                    </div>

                </div>

            </div>

        </Container>

    

        </>

    )

}

export default Roadmap;