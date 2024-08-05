import React, { useState } from "react";
import { Form, TextBox } from "../FormControls";
import { Button } from "../UI";
import { clientBaseURL, clientEndPoints } from "../../config";
import toast from "react-hot-toast";

const QuestionsForm = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const type = "question_answer"; // Define your type here

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await clientBaseURL.get(
        `${clientEndPoints?.queryDoc}?type=${type}&query=${query}`
      );
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success("Response generated Successfully");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center md:mr-4 mb-4 md:mb-0"
    >
      <TextBox
        className="mb-4"
        placeholder="Query regarding Questions"
        value={query}
        onChange={handleChange}
      />
      <Button type="submit" disabled={loading}>
        {" "}
        {loading ? "Answering..." : "Ask Questions"}
      </Button>
    </Form>
  );
};

export default QuestionsForm;
