import logo from "./logo.svg";
import "./App.css";
import StakeCard from "./harmonypunks";
import HarmonyPunks from "./StakeCard";
import Blockchaindata from "./Blockchaindata";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbartop from "./Navbartop";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <>
      <div className="back">
        <Navbartop />
        <Container style={{paddingTop: "200px"}}>
          <Row>
            {" "}
           
            <Col md={12}>
              {" "}
              {/* <HarmonyPunks /> */}
              <StakeCard />
            </Col>
            <Col md={12}>
              {" "}
              <Blockchaindata />
            </Col>
          </Row>
        </Container>
       <HarmonyPunks />
        {/* <StakeCard /> */}
      </div>
    </>
  );
}

export default App;
