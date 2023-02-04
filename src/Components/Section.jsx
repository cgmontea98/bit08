import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiTwotoneRest } from "react-icons/ai";

export const Section = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="my-2 border border-0 rounded-pill"
              >
                <label className="fs-4">El Gato con Botas</label>
                <div className="d-flex justify-content-end">
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
                <label className="fs-4">Black Adam</label>
                <div className="d-flex justify-content-end">
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
                <label className="fs-4">Encanto</label>
                <div className="d-flex justify-content-end">
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
