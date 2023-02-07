import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { AiOutlineCloudUpload, AiTwotoneRest } from "react-icons/ai";
import Swal from "sweetalert2";

export const Aside = ({ comp, setComp, tasks, task }) => {
  const completedTasks = tasks.filter((task) => task.completed);
  const handleDelete2 = (index) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "¿Estás seguro de eliminar la peli?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Eliminada!",
            "La peli ya no esta en tus pendientes",
            "success"
          );
          //FUNCIONALIDAD
          const eliminarArr = [...comp];
          eliminarArr.splice(index, 1);
          setComp(eliminarArr);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  const list = comp.map((task) => (
    <ListGroup as="ol" numbered key={task.id} tasks={completedTasks} className="py-2">
      <ListGroup.Item as="li">{task.name}</ListGroup.Item>
      <div className="d-flex justify-content-end">
        <Button variant="danger mx-1" onClick={() => handleDelete2(task.id)}>
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
          <Col>
            {list}
          </Col>
        </Row>
      </Container>
    </>
  );
};
