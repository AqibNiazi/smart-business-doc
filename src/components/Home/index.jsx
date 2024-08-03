import React, { useState } from "react";
import { FileUploader, Form } from "@components/FormControls";
import { Button } from "../UI";
import { TextBox } from "../FormControls";
import { clientBaseURL, clientEndPoints } from "../../config";
import toast from "react-hot-toast";
import SummaryForm from "../SummaryForm";
import EntityExtrationForm from "../EntityExtrationForm";
import QuestionsForm from "../QuestionsForm";

const Home = () => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    if (document) {
      formData.append("file", document.file);
    }

    try {
      const response = await clientBaseURL.post(
        `${clientEndPoints?.uploadDoc}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        toast.success("File Uploaded Successfully");
        setSuccessMessage("Your document has been uploaded successfully.");
        setDocument(null);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center font-bold text-2xl text-blue-600 mb-6">
        Welcome to Smart Document Analyzer
      </h1>
      <p className="text-lg text-center text-gray-800 font-semibold mb-6">
        Unlock the power of your documents with our intelligent analyzer.
        Extract key information, gain insights, and streamline your workflow
        effortlessly. Get started now and transform the way you handle
        documents!
      </p>
      <Form onSubmit={handleSubmit} className="mb-6">
        <FileUploader
          className="w-full mb-6"
          fileTypes={[
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ]}
          file={document}
          setFile={setDocument}
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            className="text-white px-4 py-1"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload File"}
          </Button>
        </div>
      </Form>
      {successMessage && (
        <div className="text-center mt-6">
          <p className="text-lg text-green-600 font-semibold">
            {successMessage}
          </p>
          <p className="text-gray-800 font-medium text-lg">Now you can</p>
          <ul className="text-center mb-4 text-gray-800 text-base font-semibold">
            <li>Analyze the document for key information.</li>
            <li>Extract entities from the document.</li>
            <li>Generate summaries and insights.</li>
            <li>Ask questions about the document.</li>
          </ul>
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-between sm:mb-4">
        <SummaryForm />
        <EntityExtrationForm />
        <QuestionsForm />
      </div>
    </div>
  );
};

export default Home;
