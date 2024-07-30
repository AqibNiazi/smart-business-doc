import React, { useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FileIcon, ImageIcon } from "../../UI";

const FileUploader = ({
  label,
  id,
  fileTypes = [],
  text,
  className,
  files,
  setFiles,
  handleDelete,
}) => {
  const fileInputRef = useRef(null);

  const handleFiles = (selectedFiles) => {
    const filteredFiles = Array.from(selectedFiles).filter((file) =>
      fileTypes.includes(file.type)
    );

    const newFiles = filteredFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFiles([...files, ...newFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    handleFiles(droppedFiles);
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    handleFiles(selectedFiles);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={className}>
      <div
        className="w-full flex items-center justify-center border-[2px] border-dotted border-indigo-600 rounded-lg py-8 px-4 bg-white bg-opacity-10 cursor-pointer"
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept={fileTypes.join(",")}
          onChange={handleFileChange}
        />
        <label
          htmlFor={id}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="flex justify-center mb-4">
            <FileIcon className="w-8 h-8" />
          </div>
          <p className="text-lg text-gray-800 ">
            <span className="font-medium">Drop your documents here, or</span>{" "}
            <span className="text-indigo-800 font-semibold">browse</span>
          </p>
        </label>
      </div>
      {files?.length > 0 && (
        <div className="mt-4">
          <ul>
            {files?.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between border border-indigo-300 p-2 rounded mb-2 bg-white bg-opacity-40"
              >
                <div className="mr-2">
                  {file.file.type.startsWith("image/") ? (
                    <ImageIcon />
                  ) : (
                    <FileIcon />
                  )}
                </div>
                <p className="text-sm text-gray-800 font-medium">
                  {file.file.name}
                </p>

                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="text-red-400 hover:text-red-600"
                >
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploader;