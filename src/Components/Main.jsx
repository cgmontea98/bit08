import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";

export const Main = ({ task, setTask, tasks, setTasks }) => {
  /*Crear funciones JS*/
  const handleInputFilm = (e) => {
    setTask({ ...task, id: uuidv4(), name: e.target.value });
  };

  const handleAdd = () => {
    setTasks([...tasks, task]);
    setTask({ id: null, name: "", });
  };

  return (
    <>
      <Container className="text-center p-5">
        <Row>
          <Col className="nav justify-content-center">
            <input
              type="text"
              className="d-flex pt-3 fs-3 col-12 bg-warning bg-opacity-10 border border-warning border-start-0 rounded-end"
              placeholder="Agrega una peli"
              value={task.name}
              onChange={handleInputFilm}
            ></input>
            <Button
              variant="outline-warning"
              className="fs-5 my-3"
              onClick={handleAdd}
            >
              Añadir
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
