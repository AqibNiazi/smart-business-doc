import React from "react";
import { Form, TextBox } from "../FormControls";
import { Button } from "../UI";

const QuestionsForm = () => {
  return (
    <Form className="flex flex-col items-center w-full">
      <TextBox className="mb-4" placeholder="Query regarding Q & A" />
      <Button>Search</Button>
    </Form>
  );
};

export default QuestionsForm;
