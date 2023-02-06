/* import React from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineCloudUpload, AiTwotoneRest } from "react-icons/ai";

export const BtnD = () => {
  const handleUp = () => {
    const arr = [...tasks];
    const i = arr.findIndex((item) => item.id === id);
    arr[i].completed = !arr[i].completed;
    setTasks(arr);
  };
  return (
    <div className="d-flex justify-content-end">
      <Button variant="primary mx-1" onClick={handleUp}>
        <AiOutlineCloudUpload />
      </Button>
      <Button variant="danger mx-1">
        <AiTwotoneRest />
      </Button>
    </div>
  );
};
 */
