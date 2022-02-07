
import {Container,Row,Col} from "react-bootstrap";
import Logo from "../assets/images/tx-logo.png"

function Footer(){

    return(

        <>
        
            <footer>

                <Container>
                    
                    <Row>
                        <Col lg={4} md={6} className="order-xs-2">
                            <div className="footer-left">
                                <h2>Curious?</h2>
                                <h3>We will try our best to reply but can't promise</h3>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="order-xs-1">
                            <div className="footer-mid">
                                
                                <a href="">
                                    <img src={Logo} className="footer-logo"/>
                                </a>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="order-xs-3">

                            <div className="footer-right">

                                <h4>Follow Us</h4>

                                <ul className="footer-social">
                                    <li><a href="https://www.instagram.com/tellusxgang/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/TellusXGang" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="https://m.facebook.com/tellusxgang/?_rdr" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                                    <li><a href="https://discord.com/invite/uXHFPwyeFN" target="_blank"><i class="fa-brands fa-discord"></i></a></li>
                                   
                                </ul>

                                <h4 className="mt-4">Contact Us</h4>

                                <ul className="contact-us">
                                    <li><a href="mailto:Example@gmail.com"><i class="fa-solid fa-envelope"></i> Example@gmail.com</a></li>
                                </ul>

                            </div>
                        </Col>

                    </Row>

                </Container>
            </footer>

        </>

    )

}

export default Footer;