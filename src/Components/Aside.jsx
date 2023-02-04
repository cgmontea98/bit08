import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export const Aside = () => {
  return (
    <Container className="text-center p-4">
      <Row className="p-2">
        <Col>
        <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="m-2 border border-info"
              >
              </ListGroup.Item>
            </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
