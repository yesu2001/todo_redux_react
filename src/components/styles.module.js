import { Box, Button, Card, Stack, TextField, styled } from "@mui/material";
import { blue, green, grey, pink, red } from "@mui/material/colors";

// Section Styles
export const SectionCard = styled(Card)(() => ({
  background: "transparent",
  border: "1px dotted grey",
  padding: "20px 15px",
  borderRadius: 10,
  transition: "height 200ms",
}));

export const SectionHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
  margin: 5,
}));

// Todos Styles

export const TodosSection = styled(Stack)(() => ({
  marginTop: 10,
  marginBotttom: 10,
}));

export const TodoCard = styled(Card)(() => ({
  flex: 1,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  background: "#34384c",
  padding: "20px 20px",
  margin: 8,
  color: "white",
  fontWeight: "bold",
}));

// Input form
export const InputText = styled("input")(() => ({
  width: "200px",
  border: "none",
  background: "#161C24",
  outline: "none !important",
  boxShadow: "none",
  color: "lightgrey",
  "::placeholder": {
    color: "white",
  },
}));

export const CloseButton = styled(Button)(() => ({
  fontSize: "12px",
  fontWeight: "bold",
  margin: "5px 5px",
  marginLeft: "15px",
  color: red[900],
  background: red[100],
  ":hover": {
    background: pink[100],
  },
}));

export const AddTaskForm = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px 20px",
  color: "white",
  fontWeight: "bold",
}));

export const TaskInput = styled("input")(() => ({
  width: "93%",
  background: "transparent",
  outline: "none",
  border: "1px solid grey",
  padding: "10px 10px",
  borderRadius: 5,
  color: "white",
}));

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#34384c",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const popstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#34384c",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  display: "flex",
  outline: "none",
};

export const RenameButton = styled("button")(() => ({
  marginLeft: 5,
  padding: "10px",
  border: "none",
  background: blue[500],
  color: "white",
  borderRadius: 3,
}));

export const PopupHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 5,
}));

export const PriorityChip = styled("div")((props) => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  borderRadius: 3,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: props.borderColor,
  padding: "0 5px",
  fontWeight: "bold",
}));

export const Circle = styled("div")((props) => ({
  width: 8,
  height: 8,
  backgroundColor: props.bgColor,
  borderRadius: 50,
  marginRight: 6,
}));

export const CssTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: grey[600],
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: grey[600],
    },
    "&:hover fieldset": {
      borderColor: grey[600],
    },
    "&.Mui-focused fieldset": {
      borderColor: grey[600],
    },
  },
});

export const SaveButton = styled(Button)({
  background: green[800],
  color: "white",
  fontWeight: "bold",
  transition: "background 100ms ease-out",
  ":hover": {
    background: green[500],
  },
});
