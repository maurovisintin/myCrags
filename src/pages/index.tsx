import type { NextPage } from "next";

import React, { useState } from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { InputProblemForm } from "../components/add-problem-form";
import { DisplayContent } from "../components/display-content";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
  zIndex: 99,
};

const Home: NextPage = () => {
  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <div>
      {isAddMode ? (
        <InputProblemForm showDisplayMode={() => setIsAddMode(false)} />
      ) : (
        <DisplayContent />
      )}
      <Fab
        color="primary"
        aria-label="add"
        sx={fabStyle}
        onClick={() => setIsAddMode(true)}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Home;
