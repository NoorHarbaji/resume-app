import React, { useState, useContext, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { ResumeInfoContext } from "../ResumeInfoContext";

const UserInfo = props => {
  const formDefaultValues = {
    userName: "",
    phone: "",
    address: "",
    email: "",
    website: ""
  };
  const [userInfo, setUserInfo] = useContext(ResumeInfoContext);

  const [formValues, setFormValues] = useState(formDefaultValues);
  const { userName, phone, address, email, website } = formValues;

  useEffect(() => {
    console.dir(formValues);
  }, [formValues]);

  const goNextPage = e => {
    e.preventDefault();

    props.history.push("./socialMedia");
  };

  const updateChange = e => {
    const target = e.target;
    setFormValues(prevstate => ({
      ...prevstate,
      [target.name]: target.value
    }));
    setUserInfo({
      ...userInfo,
      personalData: {
        userName: formValues.userName,
        phone: formValues.phone,
        address: formValues.address,
        email: formValues.email,
        website: formValues.website
      }
    });
  };

  return (
    <>
      <label>
        Name
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"userName"}
          value={userName}
          onChange={updateChange}
        />
      </label>
      <label>
        Phone
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"phone"}
          value={phone}
          onChange={updateChange}
        />
      </label>
      <label>
        Email
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"email"}
          value={email}
          onChange={updateChange}
        />
      </label>
      <label>
        Website
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"website"}
          value={website}
          onChange={updateChange}
        />
      </label>
      <label>
        Address
        <input
          className="form-Item__input"
          key=""
          type="text"
          name={"address"}
          value={address}
          onChange={updateChange}
        />
      </label>

      <input type="submit" value="next" onClick={goNextPage} />
    </>
  );
};

export default withRouter(UserInfo);
