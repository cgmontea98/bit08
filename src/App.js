import "./App.css";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Aside } from "./Components/Aside";
import { Footer } from "./Components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Section } from "./Components/Section";

function App() {
  return (
    <>
      <Container className="bg-dark p-5 align-self-center">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Main />
            <Section />
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
