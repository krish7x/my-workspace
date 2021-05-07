const some: string = "krishna";

const getValue = <T extends { name: string; age: number; rollno: string }>(
  a: T
): T => {
  return a;
};
console.log(
  getValue({
    name: " krishna",
    age: 22,
    rollno: "18e4017",
    dept: "MCA",
    work: "clayfin",
  })
);
