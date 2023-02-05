import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Aside } from "./Components/Aside";
import { Section } from "./Components/Section";
import { Footer } from "./Components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

function App() {
  /*Parte de JS donde se reciben datos o lista de tareas que se le asignaran a los componentes*/
  const [task, setTask] = useState({ id: null, name: "", completed: false });
  const [tasks, setTasks] = useState([]);
  /* vigilante de cambios asignados de objetos aplicados a funciones especificas. Cuando se da click en add agregara un arreglo por cada click*/
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  /*Parte de HTML para que el navegador lea lo que hay aquí y se redenriza*/
  return (
    <>
      <Container fluid className="bg-dark py-5">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Main
              task={task}
              setTask={setTask}
              tasks={tasks}
              setTasks={setTasks}
            />
            <Section tasks={tasks} />
          </Col>
          <Col className="col-12 col-lg-6 col-md-6 col-sm-12">
            <Aside />
          </Col>
        </Row>
        <Row className="py-5">
          <Col className="col-12 col-lg-12 col-md-12 col-sm-12">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
