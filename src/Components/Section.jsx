import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { AiFillEdit, AiOutlineCheck, AiTwotoneRest } from "react-icons/ai";
import Swal from "sweetalert2";

export const Section = ({ tasks, setTasks, setComp }) => {
  useEffect(() => {
    const completedArr = [];
    for (const element of tasks) {
      if (element.completed === true) {
        completedArr.push(element);
      }
      setComp(completedArr);
    }
  }, [tasks]);

  const handleEdit = () => {};

  const handleDelete = (id) => {
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

          const eliminarArr = [];
          for (const elements of tasks) {
            if (elements.completed === tasks) {
              const ind = eliminarArr.splice(elements, id);
              eliminarArr[ind].completed = false;
            }
            setTasks(eliminarArr);
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  const handleComplete = (id) => {
    Swal.fire({
      title: "¿Todo listo?",
      text: "Si ya viste el film, confirmalo aquí",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Completada",
      denyButtonText: `Aún no...`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Completado!", "", "success");
        const arr = [...tasks];
        const i = arr.findIndex((item) => item.id === id);
        arr[i].completed = !arr[i].completed;
        setTasks(arr);
      } else if (result.isDenied) {
        Swal.fire("No Completado", "", "info");
      }
    });
  };

  const elements = tasks.map((task, i) => (
    <ListGroup as="ol" numbered key={task.id}>
      <ListGroup.Item as="li" className="my-2 border border-0 rounded-pill">
        <label className="fs-4">{task.name}</label>
        <div className="d-flex justify-content-end">
          <Button variant="primary mx-1" onClick={() => handleEdit(task.id)}>
            <AiFillEdit />
          </Button>
          <Button
            variant="success mx-1"
            onClick={() => handleComplete(task.id)}
          >
            <AiOutlineCheck />
          </Button>
          <Button variant="danger mx-1" onClick={() => handleDelete(i)}>
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
