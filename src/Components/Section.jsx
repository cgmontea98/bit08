import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { AiFillEdit, AiOutlineCheck, AiTwotoneRest } from "react-icons/ai";
/* import Swal from "sweetalert2"; */
import { Aside } from "./Aside";

export const Section = ({ tasks, setTasks, task, setTask }) => {
  const [comp, setComp] = useState([]);

  useEffect(() => {
    const completedArr = [];
    for (const element of tasks) {
      if (element.completed === true) {
        completedArr.push(element);
      }
      setComp(completedArr);
    }
  }, [tasks]);

  const handleComplete = (id) => {
    const arr = [...tasks];
    const i = arr.findIndex((item) => item.id === id);
    arr[i].completed = !arr[i].completed;
    setTasks(arr);
    /* Swal.fire({
      title: "¿Todo listo?",
      text: "Si ya viste el film, confirmalo aquí",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Completada",
      denyButtonText: `Aún no...`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Completado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No Completado", "", "info");
      }
    }); */
  };

  const elements = tasks.map((task) => (
    <ListGroup as="ol" numbered key={task.id}>
      <ListGroup.Item as="li" className="my-2 border border-0 rounded-pill">
        <label className="fs-4">{task.name}</label>
        <div className="d-flex justify-content-end">
          <Button variant="primary mx-1">
            <AiFillEdit />
          </Button>
          <Button
            variant="success mx-1"
            onClick={() => handleComplete(task.id)}
          >
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
        <Row>
          <Col>
            <Aside
              comp={comp}
              setComp={setComp}
              task={task}
              tasks={tasks}
              setTask={setTask}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
/* Swal.fire({
  title: "¿Todo listo?",
  text: "Si ya viste el film, confirmalo aquí",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`,
}).then((result) => {

  if (result.isConfirmed) { Swal.fire("Completado!", "", "success");} else if (result.isDenied) {
    Swal.fire("No Completado", "", "info");
  }); */
