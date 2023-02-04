import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Header = () => {
  function handleClick() {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: (
        <strong>Aquí puedes agregar todas las peli que te recomienden</strong>
      ),
      html: <i>Modificar títlo, marcas las vistas y eliminarlas..</i>,
      icon: "success",
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="p-5 text-warning text-center">
            TO DO LIST:
            <Badge bg="warning" className="text-dark p-2 mx-4 fs-1">
              films
            </Badge>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button variant="outline-info" className="p-3" onClick={handleClick}>
            Info
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
