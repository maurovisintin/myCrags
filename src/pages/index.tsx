import type { NextPage } from "next";

import React, { useState } from "react";

import { InputProblemForm } from "../components/add-problem-form";
import { DisplayContent } from "../components/display-content";

const Home: NextPage = () => {
  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <div>
      {isAddMode ? (
        <InputProblemForm showDisplayMode={() => setIsAddMode(false)} />
      ) : (
        <DisplayContent showInputMode={() => setIsAddMode(true)} />
      )}
    </div>
  );
};

export default Home;
