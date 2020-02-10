import React from "react";
import "./style.css";

const LogIn = ({ props }) => {
  return (
    <>
      <div className="form-item">
        <figure className="form-item__userIcon">
          <img src="https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png" />
          {/* <img src="https://img.icons8.com/ultraviolet/80/000000/gender-neutral-user.png" /> */}
        </figure>
        <label className="form-item__label">User Name </label>
        <input
          className="form-Item__input_logIn"
          key=""
          type="text"
          name={"userName"}
          // value={userName}
          // onChange={updateChange}
        />
        <label className="form-item__label">password</label>
        <input
          className="form-Item__input_logIn"
          key="pass"
          type="text"
          name={"password"}
          // value={password}
          // onChange={updateChange}
        />
        <input type="submit" value="submit" />
        <figure className="form-item__userIcon">
          <img
            src="https://img.icons8.com/dusk/64/000000/sign-up.png"
            alt="sign-up"
          />
        </figure>
      </div>
    </>
  );
};

export default LogIn;
