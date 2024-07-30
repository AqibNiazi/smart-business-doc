import React, { useState } from "react";
import { FileUploader, Form } from "@components/FormControls";
import { Button } from "../UI";
import { TextBox } from "../FormControls";

const Home = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    documents.forEach((file) => {
      formData.append("documents[]", file.file);
    });

    console.log("form data", formData);
    // try {
    //   const response = await clientBaseURL.post(
    //     `${clientEndPoints?.updateOverturn}/${id}`,
    //     formData,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );

    //   if (response.status >= 200 && response.status < 300) {
    //     toast.success(response.data.message);
    //     setDocuments([]);
    //
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     toast.error(error.response.data.error || error.response.data.message);
    //   } else {
    //     toast.error("An error occurred. Please try again.");
    //   }
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <div className="w-full max-w-screen-lg mx-auto py-10">
      <h1 className="text-center font-bold text-2xl text-indigo-900 mb-6">
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
          fileTypes={["application/pdf"]}
          files={documents}
          setFiles={setDocuments}
          handleDelete={(index) =>
            setDocuments(documents.filter((_, i) => i !== index))
          }
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            className={` text-white  px-4 py-1`}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload File"}
          </Button>
        </div>
      </Form>
      <div className="flex flex-col sm:flex-row justify-between sm:mb-4">
        <div className="w-full flex flex-col  items-center md:mr-4 mb-4 md:mb-0">
          <TextBox className="mb-4" placeholder="Query regarding summary" />
          <Button>Search</Button>
        </div>
        <div className="w-full flex flex-col  items-center md:mr-4 mb-4 md:mb-0">
          <TextBox
            className="mb-4"
            placeholder="Query regarding entity extration"
          />
          <Button>Search</Button>
        </div>
        <div className="flex flex-col  items-center w-full ">
          <TextBox
            className="mb-4"
            placeholder="Query regarding entity extration"
          />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
