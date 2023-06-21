import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header(){
    return(
        <div>
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img id="d1" style={{
                height:'50px',
                width:'50px',
                borderRadius:'40px'
            }}
              alt=""
              src="https://i.postimg.cc/1X686hFj/rest.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Find Best
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    )
}
export default Header