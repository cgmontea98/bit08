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
              type="text"
              className="d-flex pt-3 fs-3 col-12 bg-warning bg-opacity-10 border border-warning border-start-0 rounded-end"
              placeholder="Agrega una peli"
            ></input>
            <Button variant="outline-warning" className="fs-5 my-3">
              Añadir
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
