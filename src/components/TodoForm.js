import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { AddTaskForm, CloseButton, TaskInput } from "./styles.module";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/sectionSlice";

function TodoForm({ section }) {
  const [showInput, setShowInput] = React.useState(false);
  const dispatch = useDispatch();
  const uniqueId = () => Math.random().toString(16).slice(-4);
  const [newTodo, setNewTodo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uniqueId(),
      completed: false,
      sectionId: section.id,
      section: section.name,
      content: newTodo,
      priority: "Low",
      description: "write a new description",
    };
    if (newTodo) {
      dispatch(addTodo(data));
    }
    setNewTodo("");
    setShowInput(!showInput);
  };

  return (
    <AddTaskForm>
      {showInput && (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", width: "100%" }}
        >
          <TaskInput
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <CloseButton onClick={() => setShowInput(false)}> Close</CloseButton>
        </form>
      )}
      <Typography
        variant="subtitle1"
        onClick={() => setShowInput(true)}
        sx={{ mt: 1 }}
      >
        + Add Task
      </Typography>
    </AddTaskForm>
  );
}

export default TodoForm;
