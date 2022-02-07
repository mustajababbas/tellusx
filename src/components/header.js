import {Navbar,Container,Nav  } from "react-bootstrap";
import Logo from "../assets/images/tx-logo.png"
import {Link} from "react-router-dom"


function Header(){

    return(

        <>

           
        <Navbar expand="lg" className="custom-nav">
            <Container>
            <Link to={'/'}><img src={Logo} className="logo"/></Link>

                <Nav className="">
                
                <Nav.Link href="https://www.instagram.com/tellusxgang/" target="_blank"><i class="fa-brands fa-instagram"></i></Nav.Link>
                <Nav.Link href="https://twitter.com/TellusXGang" target="_blank"><i class="fa-brands fa-twitter"></i></Nav.Link>
                <Nav.Link href="https://m.facebook.com/tellusxgang/?_rdr" target="_blank"><i class="fa-brands fa-facebook"></i></Nav.Link>
                <Nav.Link href="https://discord.com/invite/uXHFPwyeFN" target="_blank"><i class="fa-brands fa-discord"></i></Nav.Link>
                
               
                </Nav>
           
            </Container>
        </Navbar>

        </>

    )

}

export default Header;