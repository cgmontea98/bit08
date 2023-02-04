import React from "react";
import Badge from "react-bootstrap/Badge";

export const Header = () => {
  return (
    <h1 className="bg-dark border border-dark text-warning text-center">
      TO DO LIST:
      <Badge bg="warning" className="text-dark p-2">
        flims
      </Badge>
    </h1>
  );
};
