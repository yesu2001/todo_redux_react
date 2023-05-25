import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { InputText, CloseButton } from "./styles.module";
import { useDispatch } from "react-redux";
import { addSection } from "../store/sectionSlice";
import { grey } from "@mui/material/colors";

const formStyle = {
  background: "#161C24",
  borderRadius: 6,
  padding: "10px 15px",
};

function Header() {
  const dispatch = useDispatch();
  const uniqueId = () => Math.random().toString(16).slice(-4);
  const [text, setText] = React.useState("");
  const [isInput, setIsInput] = React.useState(false);
  const handleToggle = () => setIsInput(!isInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInput(false);
    const data = {
      id: uniqueId(),
      name: text,
      todos: [],
    };
    dispatch(addSection(data));
    setText("");
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ py: 5 }}
    >
      <Typography variant="h4" sx={{ color: "white" }}>
        Hi,
      </Typography>
      {isInput ? (
        <form onSubmit={handleSubmit} style={formStyle}>
          <InputText
            placeholder="Add Section..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <CloseButton onClick={handleToggle}>Close</CloseButton>
        </form>
      ) : (
        <Button variant="contained" onClick={handleToggle}>
          + Add Section
        </Button>
      )}
    </Stack>
  );
}

export default Header;
