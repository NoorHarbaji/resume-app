import React, { useState, useContext, useEffect } from "react";
import { ResumeInfoContext } from "../ResumeInfoContext";
// import { saveData } from "./updateAction.js";

const Result = props => {
  const [userInfo, setUserInfo] = useContext(ResumeInfoContext);

  // const BACKEND_URL = "https://eer0x.sse.codesandbox.io";

  // const saveForm = () => {
  //   const sendAction = fetch(BACKEND_URL, {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(userInfo)
  //   });

  //   sendAction.then(() => {
  //     alert("thanks");
  //     setUserInfo
  //     ({ name: "", message: "", email: "" });
  //   });
  //   sendAction.catch(err => {
  //     alert(err.message);
  //   });
  // };

  return (
    <>
      <h2>Result:</h2>
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
    </>
  );
};

export default Result;
