import React, { useState, createContext } from "react";

export const ResumeInfoContext = createContext();

export const SocialMediaProvider = props => {
  const [userInfo, setUserInfo] = useState({
    personalData: {
      userName: "",
      address: "",
      phone: "",
      email: "",
      webSite: ""
    },
    sociaMediaUrl: {
      facebookUrl: "",
      twitterUrl: "",
      linkdInUrl: "",
      githubUrl: "",
      instgramUrl: ""
    },
    aboutMe: ""
  });

  return (
    <ResumeInfoContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </ResumeInfoContext.Provider>
  );
};
