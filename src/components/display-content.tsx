import { trpc } from "@/utils/trpc";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";

import { grades, valueLabelFormat, getLabelFromValue } from "../utils/grades";
import { ProblemListItem } from "./problem-list-item";

export const DisplayContent = () => {
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
      <div className="container mx-auto px-12 py-8">
        <p className="center text-center w-full text-xl pt-12 py-4 font-bold">
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

  return (
    <div>
      <h1 className="center text-center w-full text-2xl pt-12 font-bold ">
        DEŠ Spray Wall Boulders faget
      </h1>
      {renderSlider()}
      {filteredProblems &&
        filteredProblems.map((problem) => (
          <ProblemListItem key={problem.id} data={problem} />
        ))}
    </div>
  );
};
