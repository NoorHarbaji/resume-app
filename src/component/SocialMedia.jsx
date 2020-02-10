import React, { useState, useContext, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { ResumeInfoContext } from "../ResumeInfoContext";

const SocialMedia = props => {
  const formDefaultValues = {
    linkdInUrl: "",
    facebookUrl: "",
    twitterUrl: "",
    instgramUrl: "",
    githubUrl: ""
  };

  const [userInfo, setUserInfo] = useContext(ResumeInfoContext);

  const [formValues, setFormValues] = useState(formDefaultValues);
  const {
    linkdInUrl,
    facebookUrl,
    twitterUrl,
    instgramUrl,
    githubUrl
  } = formValues;

  useEffect(() => {
    console.dir(formValues);
  }, [formValues]);

  const goNextPage = e => {
    e.preventDefault();
    props.history.push("./aboutMe");
  };

  const updateChange = e => {
    const target = e.target;
    setFormValues(prevstate => ({
      ...prevstate,
      [target.name]: target.value
    }));
    setUserInfo({
      ...userInfo,
      sociaMediaUrl: {
        linkdInUrl: formValues.linkdInUrl,
        facebookUrl: formValues.facebookUrl,
        twitterUrl: formValues.twitterUrl,
        instgramUrl: formValues.instgramUrl,
        githubUrl: formValues.githubUrl
      }
    });
  };
  console.log("setUserInfo" + JSON.stringify(userInfo, null, 2));
  return (
    <>
      <label>
        Facebook
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"facebookUrl"}
          value={facebookUrl}
          onChange={updateChange}
        />
      </label>
      <label>
        Twitter
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"twitterUrl"}
          value={twitterUrl}
          onChange={updateChange}
        />
      </label>
      <label>
        LinkdIn
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"linkdInUrl"}
          value={linkdInUrl}
          onChange={updateChange}
        />
      </label>
      <label>
        Instgram
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"instgramUrl"}
          value={instgramUrl}
          onChange={updateChange}
        />
      </label>
      <label>
        Github
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"githubUrl"}
          value={githubUrl}
          onChange={updateChange}
        />
      </label>

      <input
        className="form-Item__input"
        type="submit"
        value="Next"
        onClick={goNextPage}
      />
    </>
  );
};

export default withRouter(SocialMedia);
