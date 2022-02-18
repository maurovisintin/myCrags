export const grades = [
  {
    value: 0,
    label: "5b",
  },
  {
    value: 5,
    label: "5b+",
  },
  {
    value: 10,
    label: "5c",
  },
  {
    value: 15,
    label: "6a",
  },
  {
    value: 20,
    label: "6a+",
  },
  {
    value: 25,
    label: "6b",
  },
  {
    value: 30,
    label: "6b+",
  },
  {
    value: 35,
    label: "6c",
  },
  {
    value: 40,
    label: "6c+",
  },
  {
    value: 45,
    label: "7a",
  },
  {
    value: 50,
    label: "7a+",
  },
  {
    value: 55,
    label: "7b",
  },
  {
    value: 60,
    label: "7b+",
  },
  {
    value: 65,
    label: "7c",
  },
  {
    value: 70,
    label: "7c+",
  },
  {
    value: 75,
    label: "8a",
  },
  {
    value: 80,
    label: "8a+",
  },
  {
    value: 85,
    label: "8b",
  },
  {
    value: 90,
    label: "8b+",
  },
  {
    value: 95,
    label: "8c",
  },
  {
    value: 100,
    label: "8c+",
  },
];

export const valueLabelFormat = (value: number) => {
  return grades.find((grade) => grade.value === value)?.label;
}

export const getValueFromLabel = (gradeString: string) => {
  return grades.find((grade) => grade.label === gradeString)?.value;
}

export const getLabelFromValue = (value: number) => {
  return grades.find((grade) => grade.value === value)?.label;
}
