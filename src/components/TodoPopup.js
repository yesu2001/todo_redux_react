import {
  Card,
  Typography,
  Modal,
  Box,
  Divider,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import {
  TodoCard,
  popstyle,
  Circle,
  PopupHeader,
  PriorityChip,
  CssTextField,
  SaveButton,
} from "./styles.module";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useDispatch } from "react-redux";
import {
  setPriority,
  deleteTodo,
  updateTodo,
  checkTodo,
} from "../store/sectionSlice";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { green, grey, lightGreen, orange, red } from "@mui/material/colors";

function TodoPopup({ show, handleCloseModal, todo, sectionId }) {
  const dispatch = useDispatch();
  const [newDescription, setNewDescription] = React.useState(todo.description);
  const priorities = [
    {
      text: "Low",
      bgColor: lightGreen[500],
    },
    {
      text: "Medium",
      bgColor: orange[500],
    },
    {
      text: "High",
      bgColor: red[700],
    },
  ];

  const handleCheck = (todoId) => {
    console.log(todoId);
    dispatch(checkTodo({ todoId, sectionId }));
  };

  // function to change the priority of the todo
  const handlePriority = (item, todoId) => {
    const data = {
      selectedPriority: item.text,
      todoId,
      sectionId,
    };
    dispatch(setPriority(data));
  };

  // funtion to delete a todo
  const handleDelete = (todoId) => {
    dispatch(deleteTodo({ todoId, sectionId }));
    handleCloseModal();
  };

  //function to update a todo
  const handleUpdate = (todoId) => {
    const data = {
      id: todoId,
      sectionId: sectionId,
      text: newDescription,
    };
    dispatch(updateTodo(data));
    handleCloseModal();
  };

  return (
    <Modal
      open={show}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={popstyle} style={{ flexDirection: "column" }}>
        <PopupHeader>
          <Box
            sx={{
              cursor: "pointer",
              border: "2px solid ",
              px: 1,
              py: 1,
              borderRadius: "10px",
              color: todo.completed ? green[500] : grey[200],
            }}
            onClick={() => handleCheck(todo.id)}
          >
            {todo.completed ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <DoneAllIcon />
                completed
              </div>
            ) : (
              <div>Mark complete</div>
            )}
          </Box>
          <DeleteOutlineIcon
            sx={{ color: red[400], cursor: "pointer" }}
            onClick={() => handleDelete(todo.id)}
          />
        </PopupHeader>
        <Divider sx={{ background: "gray", my: 1 }} />
        <Box sx={{ py: 2 }}>
          <Typography variant="h5" sx={{ color: "white", pb: 3 }}>
            {todo.content}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
            <Typography variant="subtitle2" sx={{ mr: 6, color: grey[500] }}>
              Prioritize
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              {priorities.map((item, index) => (
                <PriorityChip
                  key={index}
                  onClick={() => handlePriority(item, todo.id)}
                  borderColor={
                    todo.priority === item.text ? item.bgColor : grey[700]
                  }
                >
                  <Circle bgColor={item.bgColor} />
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        todo.priority === item.text ? item.bgColor : "white",
                    }}
                  >
                    {item.text}
                  </Typography>
                </PriorityChip>
              ))}
            </Stack>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-start", mt: 4 }}>
            <Typography variant="subtitle2" sx={{ mr: 4, color: grey[500] }}>
              Description
            </Typography>
            <CssTextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={5}
              sx={{ width: "90%" }}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </Box>
        </Box>
        <Box sx={{ mt: 1, display: "flex", justifyContent: "flex-end" }}>
          <SaveButton onClick={() => handleUpdate(todo.id)}>Save</SaveButton>
        </Box>
      </Box>
    </Modal>
  );
}

export default TodoPopup;
