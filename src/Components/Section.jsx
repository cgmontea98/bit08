import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { AiFillEdit, AiOutlineCheck, AiTwotoneRest } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export const Section = ({ tasks }) => {
  /*AQUI SE DEBE DE RENDERIZAR UNA LISTA O UN ARRAY*/
  const elements = tasks.map((task) => (
    <ListGroup as="ol" numbered key={task.id}>
      <ListGroup.Item as="li" className="my-2 border border-0 rounded-pill">
        <label className="fs-4">{task.name}</label>
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
  ));

  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">{elements}</Col>
        </Row>
      </Container>
    </>
  );
};
