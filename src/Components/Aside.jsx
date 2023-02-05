import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export const Aside = () => {
  
  
  return (
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
        <Col></Col>
      </Row>
    </Container>
  );
};
