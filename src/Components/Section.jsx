import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { AiFillEdit, AiOutlineCheck, AiTwotoneRest } from "react-icons/ai";

export const Section = ({ task, setTask, tasks, setTasks, comp, setComp }) => {
  function handleComplete(id) {
    
    const arr = [...tasks];
    const i = arr.findIndex(item => item.id === id);
    arr[i].false = !arr[i].true
    setTasks(arr)
    console.log(i);
    console.log('s',arr);
    console.log('id', id);
  }
  
  const elements = tasks.map((task) => (
    <ListGroup as="ol" numbered key={task.id}>
      <ListGroup.Item as="li" className="my-2 border border-0 rounded-pill">
        <label className="fs-4">{task.name}</label>
        <div className="d-flex justify-content-end">
          <Button variant="primary mx-1">
            <AiFillEdit />
          </Button>
          <Button variant="success mx-1" onClick={() => handleComplete(task.id)}>
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

/* const completedArr = [];
for (const element of tasks) {
  completedArr.push(element);
  setComp(completedArr);
}
console.log(completedArr); */