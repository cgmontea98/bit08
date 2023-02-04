import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export const Main = () => {
  return (
    <>
      <Container className="text-center p-4">
        <Row className="p-2">
          <Col>
            <input className="mx-3"></input>
            <Button variant="warning">Añadir</Button>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="my-2 border border-info rounded-pill"
              >
                El Gato con Botas
                <Button variant="primary mx-1">Modificar</Button>
            <Button variant="success mx-1">Completado</Button>
            <Button variant="danger mx-1">Eliminar</Button>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="my-2 border border-info rounded-pill"
              >
                Black Adam
                <Button variant="primary mx-1">Modificar</Button>
            <Button variant="success mx-1">Completado</Button>
            <Button variant="danger mx-1">Eliminar</Button>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="my-2 border border-info rounded-pill"
              >
                Encanto
                <Button variant="primary mx-1">Modificar</Button>
            <Button variant="success mx-1">Completado</Button>
            <Button variant="danger mx-1">Eliminar</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
