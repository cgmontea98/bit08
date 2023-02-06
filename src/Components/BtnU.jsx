/* import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { AiFillEdit, AiOutlineCheck, AiTwotoneRest } from "react-icons/ai";
import Swal from "sweetalert2";

export const BtnU = ({ tasks, setTasks }) => {
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
    Swal.fire({
      title: "¿Todo listo?",
      text: "Si ya viste el film, confirmalo aquí",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Completado!", "", "success");
        const arr = [...tasks];
        const i = arr.findIndex((item) => item.id === id);
        arr[i] = !arr[i];
        setTasks(arr);
        console.log("click");
      } else if (result.isDenied) {
        Swal.fire("No Completado", "", "info");
      }
    });
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="primary mx-1">
          <AiFillEdit />
        </Button>
        <Button
          variant="success mx-1"
          onClick={(task) => handleComplete(task.id)}
        >
          <AiOutlineCheck />
        </Button>
        <Button variant="danger mx-1">
          <AiTwotoneRest />
        </Button>
      </div>
    </>
  );
};
 */
