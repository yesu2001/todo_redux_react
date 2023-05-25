import { Card, Typography, Modal, Box } from "@mui/material";
import React from "react";
import { TodoCard, style, Circle } from "./styles.module";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo } from "../store/sectionSlice";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { green, grey, lightGreen, orange, red } from "@mui/material/colors";
import TodoPopup from "./TodoPopup";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const todoId = todo.id;
  const sectionId = todo.sectionId;
  const [show, setShow] = React.useState(false);
  const handleCloseModal = () => setShow(false);
  const handleOpenModal = () => setShow(true);

  const handleComplete = () => {
    dispatch(checkTodo({ todoId, sectionId }));
  };
  // const handleDelete = (todoId) => {
  //   console.log(todo);
  //   dispatch(deleteTodo({ todoId, sectionId }));
  //   handleCloseModal();
  // };

  return (
    <>
      <TodoCard>
        {todo.completed ? (
          <CheckCircleOutlineIcon color="primary" onClick={handleComplete} />
        ) : (
          <RadioButtonUncheckedIcon onClick={handleComplete} />
        )}
        <Typography
          variant="text"
          sx={{ ml: 1, color: todo.completed ? "gray" : "white" }}
          onClick={handleOpenModal}
        >
          {todo.content.substring(0, 15)}
          {todo.content.length > 15 && "..."}
        </Typography>
      </TodoCard>
      <TodoPopup
        show={show}
        handleCloseModal={handleCloseModal}
        todo={todo}
        sectionId={sectionId}
      />
    </>
  );
}

export default TodoItem;
