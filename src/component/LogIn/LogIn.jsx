import React, { useState, useEffect } from "react";
// import { useHistory, withRouter, Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./style.css";

const LogIn = () => (
  // const formDefaultValues = {
  //   userName: "",
  //   password: ""
  // };
  // const inlogged = false;

  // const [formValues, setFormValues] = useState(formDefaultValues);
  // const { userName, password } = formValues;

  // useEffect(() => {
  //   console.dir(formValues);
  // }, [formValues]);

  // const updateChange = e => {
  //   e.preventDefault();

  //   const target = e.target;
  //   setFormValues(prevstate => ({
  //     ...prevstate,
  //     [target.name]: target.value
  //   }));
  // };

  // const submitForm = e => {
  //   e.preventDefault();
  // };

  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <form className="form-item" onSubmit={handleSubmit}>
          <figure className="form-item__userIcon">
            <img src="https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png" />
            {/* <img src="https://img.icons8.com/ultraviolet/80/000000/gender-neutral-user.png" /> */}
          </figure>
          <label className="form-item__label" htmlFor="email">
            Email{" "}
          </label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
            placeholder="Enter your email"
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label className="form-item__label">password</label>
          <input
            key="pass"
            type="password"
            name={"password"}
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <input type="submit" value="submit" disabled={isSubmitting} />
          <figure className="form-item__userIcon">
            <img
              src="https://img.icons8.com/dusk/64/000000/sign-up.png"
              alt="sign-up"
            />
            <figcaption>sign up</figcaption>
          </figure>
        </form>
      );
    }}
  </Formik>
);

export default LogIn;
