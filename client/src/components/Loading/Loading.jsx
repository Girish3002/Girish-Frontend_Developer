import React from "react";
import Loading from "./Loading.scss";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="Loading text-center">
      <img src={loading} alt="loading" />
    </div>
  );
};
export default Spinner;
