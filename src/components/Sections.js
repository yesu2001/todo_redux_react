import { Grid } from "@mui/material";
import React from "react";
import SectionItem from "./SectionItem";
import { useSelector, useDispatch } from "react-redux";
import { updateSection, deleteSection } from "../store/sectionSlice";
import Modal from "@mui/material/Modal";

const sections = [
  {
    id: "13gyg",
    name: "later tasks",
  },
  {
    id: "1243",
    name: "tommorow tasks",
  },
];

function Sections() {
  const sections = useSelector((state) => state.sections);
  const dispatch = useDispatch();

  const handleDeleteSection = (sectionId) => {
    console.log(sectionId);
    dispatch(deleteSection(sectionId));
  };

  const handleRenameSection = (sectionId) => {
    // const sectionid = section.id;
  };
  return (
    <Grid container spacing={3}>
      {sections?.map((section, index) => (
        <SectionItem
          section={section}
          key={index}
          handleDelete={handleDeleteSection}
        />
      ))}
    </Grid>
  );
}

export default Sections;
