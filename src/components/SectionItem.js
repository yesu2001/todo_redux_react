import {
  Accordion,
  Box,
  Card,
  Grid,
  Popover,
  Typography,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import Todos from "./Todos";
import {
  InputText,
  SectionCard,
  SectionHeader,
  TaskInput,
  style,
  RenameButton,
} from "./styles.module";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { grey, red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import { updateSection } from "../store/sectionSlice";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

function SectionItem({ section, handleDelete }) {
  const todos = section.todos;
  const [show, setShow] = React.useState(false);
  const handleOpenModal = () => setShow(true);
  const [text, setText] = React.useState("");
  const handleCloseModal = () => setShow(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [newSectionName, setNewSectionName] = React.useState("");
  const [collapse, setCollapse] = React.useState(false);
  const dispatch = useDispatch();
  const sectionTodos = todos.filter((todo) => todo.sectionId === section.id);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRename = (id) => {
    console.log(id);
    const data = {
      id: id,
      name: text,
    };
    dispatch(updateSection(data));
    setShow(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Grid item xs={12} sm={4} md={3} lg={3}>
      <SectionCard sx={{ height: collapse ? "30px" : "auto" }}>
        <SectionHeader>
          <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
            {section.name}
          </Typography>
          <Box>
            {collapse ? (
              <KeyboardArrowDownIcon
                sx={{ cursor: "pointer" }}
                onClick={handleCollapse}
              />
            ) : (
              <KeyboardArrowUpIcon
                sx={{ cursor: "pointer" }}
                onClick={handleCollapse}
              />
            )}
            <MoreHorizIcon
              onClick={handleClick}
              sx={{ ml: 2, cursor: "pointer" }}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  py: 1,
                  color: "lightgrey",
                  background: "#34384c",
                  cursor: "pointer",
                }}
                onClick={() => setShow(true)}
              >
                <EditIcon sx={{ mx: 1 }} />
                Rename Section
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  py: 1,
                  color: red[500],
                  background: "#34384c",
                  cursor: "pointer",
                }}
                onClick={() => handleDelete(section.id)}
              >
                <DeleteIcon sx={{ mx: 1 }} />
                Delete Section
              </Typography>
            </Popover>
          </Box>
        </SectionHeader>
        <Todos todos={sectionTodos} />
        <TodoForm section={section} />
      </SectionCard>
      <Modal
        open={show}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TaskInput value={text} onChange={(e) => setText(e.target.value)} />
          <RenameButton onClick={() => handleRename(section.id)}>
            Rename
          </RenameButton>
        </Box>
      </Modal>
    </Grid>
  );
}

export default SectionItem;
