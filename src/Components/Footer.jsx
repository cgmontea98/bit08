import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { TfiLinkedin } from "react-icons/tfi";
import { GoMarkGithub } from "react-icons/go";
import { FcKey } from "react-icons/fc";
import Badge from "react-bootstrap/Badge";

export const Footer = () => {
  return (
    <Container className="text-warning text-center">
      <Row>
        <Col className="p-3">
          <h2>
            Realizado por:{" "}
            <Badge bg="warning" className="text-dark py-2 my-2 mx-0">
              Cristian Montealegre
            </Badge>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">
              <a
                href="https://www.linkedin.com/in/cgmontea98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TfiLinkedin className="fs-3" />
              </a>
            </Button>
            <Button variant="secondary">
              <a
                href="https://github.com/cgmontea98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoMarkGithub className="fs-3" />
              </a>
            </Button>
            <Button variant="secondary">
              <a
                href="https://cgmontea98.github.io/bit07me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcKey className="fs-3" />
              </a>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};
