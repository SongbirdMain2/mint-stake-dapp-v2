import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import title from "./Images/text.png";
import Button from 'react-bootstrap/Button';

  import { getCurrentWalletConnected, connectWallet, enable_staking, enable_staking_knights, owned_Har, change_enable_staking_button  } from "./util/interact.js";

const Navbartop = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const[availableHAR, setavailableHAR] = useState("0")

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
    const availableHAR = await owned_Har();

    setavailableHAR(availableHAR);
      }, []);
      const availableHAR2 = availableHAR / 1000000000000000000;
      

      const harbalancefixxed = parseFloat(availableHAR2).toFixed(2);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed-top
        className="navbarColor"
      >
        <Container>
         
          <Navbar.Brand href="#home">
            <img src={title} className="test" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

          {/* <Nav>
            <Nav.Link href="#features" id="ma">
              <img src={title} className="test" />
            </Nav.Link>
          </Nav> */}
          <Nav>
          <Nav.Link>
        
        
            
            <button     disabled="true"  type="button"  className="solbutton2"> $HAR balance: {harbalancefixxed}</button>
            </Nav.Link>
            <Nav.Link>
              {" "}

              
        
              
              
            </Nav.Link>
            <Nav.Link  className="NavbarText" style={{ color: "yellow" }} id="i">
              <button type="button"
                className="solbutton mx-auto enableEthereumButton"
                id="walletButton"
                onClick={connectWalletPressed}
              >
                {walletAddress.length > 0 ? (
                  "Connected: " +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)
                ) : (
                  <span>Connect Wallet</span>
                  
                )}
              </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbartop;
