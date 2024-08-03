import React, { Fragment } from "react";
import Home from "@components/Home";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Fragment>
      <Toaster />
      <Home />
    </Fragment>
  );
};

export default App;
