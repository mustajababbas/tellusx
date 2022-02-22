
import {Container,Row,Col} from "react-bootstrap";
import Logo from "../assets/images/tx-logo.png"
import { useState,useEffect } from "react";

function Footer(){

         // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

    return(

        <>
        
            <footer>


                {showButton && (
                <div className="to-top">
                    <button onClick={scrollToTop}>
                        <i class="fa-solid fa-arrow-up-long"></i>
                        <span>To Top</span>
                    </button>
                </div>
                )}

                <Container>
                    
                    <Row>
                        <Col lg={4} md={6} className="order-xs-2">
                            <div className="footer-left">
                                <h2>Curious?</h2>
                                <h3>Connect with us</h3>
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
                                    <li><a href="mailto:connect@tellusx.io"><i class="fa-solid fa-envelope"></i> connect@tellusx.io</a></li>
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