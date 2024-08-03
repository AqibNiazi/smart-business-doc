import React from "react";
import { Form, TextBox } from "../FormControls";
import { Button } from "../UI";

const SummaryForm = () => {
  return (
    <Form className="w-full flex flex-col items-center md:mr-4 mb-4 md:mb-0">
      <TextBox className="mb-4" placeholder="Query regarding summary" />
      <Button>Search</Button>
    </Form>
  );
};

export default SummaryForm;
