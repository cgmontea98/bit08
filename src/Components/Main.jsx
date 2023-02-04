import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Main = () => {
  return (
    <>
      <Container className="text-center p-4">
        <Row className="p-2">
          <Col>
            <input className="mx-3 fs-4 h-550" placeholder="Agrega una peli"></input>
            <Button variant="warning" className="fs-5 my-2">
              Añadir
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
