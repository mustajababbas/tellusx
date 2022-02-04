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
                
                <Nav.Link href="#facebook"><i class="fa-brands fa-instagram"></i></Nav.Link>
                <Nav.Link href="#facebook"><i class="fa-brands fa-twitter"></i></Nav.Link>
                <Nav.Link href="#facebook"><i class="fa-brands fa-facebook"></i></Nav.Link>
                <Nav.Link href="#facebook"><i class="fa-brands fa-discord"></i></Nav.Link>
                <Nav.Link href="#facebook"><i class="fa-solid fa-globe"></i></Nav.Link>
               
                </Nav>
           
            </Container>
        </Navbar>

        </>

    )

}

export default Header;