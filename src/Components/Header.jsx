import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

export const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="p-5 text-warning text-center">
            TO DO LIST:
            <Badge bg="warning" className="text-dark p-2 mx-4">
              flims
            </Badge>
          </h1>
        </Col>
      </Row>
    </Container>
  );
};
