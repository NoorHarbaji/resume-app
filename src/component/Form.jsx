import React from "react";
import UserInfo from "./UserInfo";
import InputName from "./InputName";
import SocialMedia from "./SocialMedia";
import AboutMe from "./AboutMe";

const Form = () => {
  return (
    <form>
      <UserInfo />
      <SocialMedia />
      <AboutMe />
      <InputName type="submit" value="Submit" label="" />
    </form>
  );
};

export default Form;
