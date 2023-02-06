import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineCloudUpload, AiTwotoneRest } from "react-icons/ai";

export const Aside = ({ comp, task, tasks, setTask }) => {
  

  const list = comp.map((task) => (
    <ListGroup as="ol" numbered key={task.id} className="py-2">
      <ListGroup.Item as="li">{task.name}</ListGroup.Item>
      <div className="d-flex justify-content-end">
        <Button variant="primary mx-1">
          <AiOutlineCloudUpload />
        </Button>
        <Button variant="danger mx-1">
          <AiTwotoneRest />
        </Button>
      </div>
    </ListGroup>
  ));

  return (
    <>
      <Container className="text-center p-4">
        <Row>
          <Col>
            <h2 className="text-warning m-4">
              FILMS
              <Badge bg="warning" className="text-dark p-2 mx-4">
                Completadas
              </Badge>
            </h2>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>{list}</Col>
        </Row>
      </Container>
    </>
  );
};
