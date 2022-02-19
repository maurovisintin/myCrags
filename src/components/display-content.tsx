import { trpc } from "@/utils/trpc";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { grades, valueLabelFormat, getLabelFromValue } from "../utils/grades";
import { ProblemListItem } from "./problem-list-item";

type Props = {
  showInputMode: () => void;
};

export const DisplayContent = ({ showInputMode }: Props) => {
  const [gradeFilter, setGradeFilter] = useState([15, 50]);

  const { data, refetch, isLoading } = trpc.useQuery(["get-problems"], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  function valuetext(value: number) {
    return `${value}`;
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    setGradeFilter(newValue as number[]);
  };

  const filteredProblems = data?.filter(
    (problem) =>
      problem?.grade >= gradeFilter[0] && problem?.grade <= gradeFilter[1]
  );

  const renderSlider = () => {
    return (
      <div className="container mx-auto px-12 py-4">
        <p className="center text-center w-full text-xl py-4 font-bold">
          {`GRADE: ${getLabelFromValue(gradeFilter[0])} - ${getLabelFromValue(
            gradeFilter[1]
          )}`}
        </p>
        <Slider
          getAriaLabel={() => "Grades range"}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={5}
          value={gradeFilter}
          onChange={handleChange}
          valueLabelDisplay="auto"
          marks={grades.filter((x, i) => i % 3 === 0)}
        />
      </div>
    );
  };

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
    zIndex: 99,
  };

  return (
    <div>
      <h1 className="center text-center w-full text-2xl pt-8 font-bold">
        DEŠ Spray Wall Boulders
      </h1>
      {renderSlider()}
      <div
        style={{
          overflow: "auto",
          height: `calc(100vh - 250px)`,
        }}
      >
        {filteredProblems &&
          filteredProblems.map((problem) => (
            <ProblemListItem key={problem.id} data={problem} />
          ))}
      </div>
      <Fab
        color="primary"
        aria-label="add"
        sx={fabStyle}
        onClick={() => showInputMode()}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
