import { Box, Modal } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";
import { TodosSection } from "./styles.module";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Todos({ todos }) {
  return (
    <>
      <TodosSection>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} />
        ))}
      </TodosSection>
    </>
  );
}

export default Todos;
