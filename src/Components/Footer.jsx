import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { TfiLinkedin } from "react-icons/tfi";
import { GoMarkGithub } from "react-icons/go";
import { FcKey } from "react-icons/fc";



export const Footer = () => {
  return (
    <Container className="bg-dark border border-dark text-warning text-center">
      <Row>
        <Col className="p-3">
          <h2>Realizado por: Cristian Montealegre </h2>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">
              <a href="https://www.linkedin.com/in/cgmontea98/">
                <TfiLinkedin className="fs-3"/>
              </a>
            </Button>
            <Button variant="secondary"><a href="https://github.com/cgmontea98">
                <GoMarkGithub className="fs-3"/>
              </a></Button>
            <Button variant="secondary"><a href="https://cgmontea98.github.io/bit07me/">
                <FcKey className="fs-3"/>
              </a></Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};
