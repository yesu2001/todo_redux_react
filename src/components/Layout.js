import { Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Sections from "./Sections";

function Layout() {
  return (
    <Stack>
      <Header />
      <Sections />
    </Stack>
  );
}

export default Layout;
