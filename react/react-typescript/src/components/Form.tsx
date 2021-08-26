import React from "react";

interface Details {
  address: string;
  phoneNumber: number;
}

interface Props {
  name: string;
  age: number | null;
  isEmployeed: boolean;
  getAge: () => number | null;
  isHealthy?: boolean; // optional
  details: Details | null | undefined; //union
}

const Form: React.FC<Props> = ({
  name,
  age,
  getAge,
  isEmployeed,
  isHealthy,
  details,
}): JSX.Element => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>From Props - {age}</h1>
      <h1>Form Function - {getAge()}</h1>
      <h1>Employeed - {isEmployeed ? "Yes" : "No"}</h1>
      <h1>Healthy - {isHealthy && isHealthy ? "Yes" : "No"}</h1>
      <h1>Details Below</h1>
      <p>{details?.address}</p>
      <p>{details?.phoneNumber}</p>
    </div>
  );
};

export default Form;
