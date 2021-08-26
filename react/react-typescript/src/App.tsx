import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ReduxExamples from "./components/ReduxExamples";

//basically an interface is an object, it works as an object
interface Details {
  address: string;
  phoneNumber: number;
}

const App: React.FC = (): JSX.Element => {
  const [age] = useState<number | null>(22); //generics for use state
  const [details] = useState<Details | null>({
    address: "Manali, Chennai",
    phoneNumber: 7448629667,
  });

  return (
    <div className='App'>
      <h1>hey YOO!</h1>

      <h1>Form Component is Below!!</h1>
      <Form
        age={age}
        getAge={() => age}
        details={details}
        isEmployeed={true}
        name={"krishna"}
      />

      <div>
        <ReduxExamples />
      </div>
    </div>
  );
};

export default App;
