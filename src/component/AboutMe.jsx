import React, { useState, useContext, useEffect } from "react";
// import Result from "./Result";
import { ResumeInfoContext } from "../ResumeInfoContext";

const AboutMe = props => {
  const formDefaultValues = {
    aboutMe: ""
  };
  const BACKEND_URL = "https://eer0x.sse.codesandbox.io/";

  const [userInfo, setUserInfo] = useContext(ResumeInfoContext);
  const [formValues, setFormValues] = useState(formDefaultValues);
  const { aboutMe } = formValues;

  useEffect(() => {
    console.dir(formValues);
  }, [formValues]);

  const updateChange = e => {
    const target = e.target;
    setFormValues(prevstate => ({
      ...prevstate,
      [target.name]: target.value
    }));
    setUserInfo({
      ...userInfo,
      aboutMe: formValues.aboutMe
    });
  };

  const saveForm = e => {
    fetch(BACKEND_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: userInfo.personalData.userName,
        phone: userInfo.personalData.phone,
        website: userInfo.personalData.website,
        email: userInfo.personalData.email,
        facebook: userInfo.sociaMediaUrl.facebookUrl,
        twitter: userInfo.sociaMediaUrl.twitterUrl,
        linkdIn: userInfo.sociaMediaUrl.linkdInUrl,
        github: userInfo.sociaMediaUrl.githubUrl,
        instgram: userInfo.sociaMediaUrl.instgramUrl,
        aboutMe: userInfo.aboutMe
      })
    })
      .then(response => response.json())
      .then(userInfo => {
        return setUserInfo(userInfo);
      })
      .catch(err => {
        console.log(err.message);
      });
    props.history.push("./result");
  };

  return (
    <>
      <label> About Me </label>
      <textarea
        className="form-Item__input"
        key=""
        type="text"
        name={"aboutMe"}
        value={aboutMe}
        onChange={updateChange}
      />
      <input type="submit" value="submit" onClick={saveForm} />
    </>
  );
};

export default AboutMe;
