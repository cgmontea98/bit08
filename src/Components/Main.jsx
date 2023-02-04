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
            <input className="mx-3 fs-4 h-550" placeholder="Agrega una peli"></input>
            <Button variant="warning" className="fs-5 my-2">
              Añadir
            </Button>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="my-2 border border-0 rounded-pill"
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
                className="my-2 border border-0 rounded-pill"
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
                className="my-2 border border-0 rounded-pill"
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
