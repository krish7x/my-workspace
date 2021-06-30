interface MyDetails {
  name: string;
  age: number;
  dept: string;
}

const getDetails = <T extends MyDetails>(details: T): T => {
  return { ...details };
};

console.log(getDetails({ name: "krishna", age: 22, dept: "MCA" }));

interface NewDetails extends MyDetails {
  section: "A" | "B";
  rollNo: number;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+";
}

const getNewDetails = <T extends NewDetails>(details: T): [T] => {
  return [details];
};

console.log(
  getNewDetails({
    name: "krishna",
    age: 22,
    dept: "MCA",
    section: "A",
    rollNo: 22,
    bloodGroup: "AB+",
  })
);
