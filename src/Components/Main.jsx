import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Main = () => {
  return (
    <>
      <Container className="text-center p-5">
        <Row>
          <Col className="nav justify-content-center">
            <input
              className="mx-3 fs-5 my-3 col-12"
              placeholder="Agrega una peli"
            ></input>
            <Button variant="warning" className="fs-5 d-flex">
              Añadir
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
