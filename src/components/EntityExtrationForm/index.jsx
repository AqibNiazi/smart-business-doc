import React from "react";
import { Form, TextBox } from "../FormControls";
import { Button } from "../UI";

const EntityExtrationForm = () => {
  return (
    <Form className="w-full flex flex-col items-center md:mr-4 mb-4 md:mb-0">
      <TextBox
        className="mb-4"
        placeholder="Query regarding entity extraction"
      />
      <Button>Search</Button>
    </Form>
  );
};

export default EntityExtrationForm;
