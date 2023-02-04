import "./App.css";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Aside } from "./Components/Aside";
import { Footer } from "./Components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Main />
          </Col>
          <Col>
            <Aside />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
