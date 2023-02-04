import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiTwotoneRest } from "react-icons/ai";

export const Main = () => {
  return (
    <>
      <Container className="text-center p-4">
        <Row className="p-2">
          <Col>
            <input className="mx-3" placeholder="Agrega una peli"></input>
            <Button variant="warning">Añadir</Button>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="my-2 border border-0"
              >
                El Gato con Botas
                <div className="pt-3">
                  <Button variant="primary mx-1">
                    <AiFillEdit />
                  </Button>
                  <Button variant="success mx-1">
                    <AiOutlineCheck />
                  </Button>
                  <Button variant="danger mx-1">
                    <AiTwotoneRest />
                  </Button>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="my-2 border border-0"
              >
                Black Adam
                <div className="pt-3">
                  <Button variant="primary mx-1">
                    <AiFillEdit />
                  </Button>
                  <Button variant="success mx-1">
                    <AiOutlineCheck />
                  </Button>
                  <Button variant="danger mx-1">
                    <AiTwotoneRest />
                  </Button>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="my-2 border border-0"
              >
                Encanto
                <div className="pt-3">
                  <Button variant="primary mx-1">
                    <AiFillEdit />
                  </Button>
                  <Button variant="success mx-1">
                    <AiOutlineCheck />
                  </Button>
                  <Button variant="danger mx-1">
                    <AiTwotoneRest />
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
