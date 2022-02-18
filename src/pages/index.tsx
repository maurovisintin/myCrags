import type { NextPage } from "next";
import { trpc } from "@/utils/trpc";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import { inferQueryResponse } from "./api/trpc/[trpc]";
import { ProblemListItem } from "../components/problem-list-item";
import { useState } from "react";
import {
  grades,
  valueLabelFormat,
  getValueFromLabel,
  getLabelFromValue,
} from "./utils/grades";

type ProblemsFromServer = inferQueryResponse<"get-problems">;

function valuetext(value: number) {
  return `${value}`;
}

const Home: NextPage = () => {
  const [gradeFilter, setGradeFilter] = useState([15, 50]);

  const { data, refetch, isLoading } = trpc.useQuery(["get-problems"], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const handleChange = (event: Event, newValue: number | number[]) => {
    setGradeFilter(newValue as number[]);
  };

  const filteredProblems = data?.filter(
    (problem) =>
      getValueFromLabel(problem?.grade) >= gradeFilter[0] &&
      getValueFromLabel(problem?.grade) <= gradeFilter[1]
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
          aria-label="Grades"
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
        DEŠ Spray Wall Boulders
      </h1>
      {renderSlider()}
      {filteredProblems &&
        filteredProblems.map((problem) => (
          <ProblemListItem key={problem.id} data={problem} />
        ))}
    </div>
  );
};

export default Home;
