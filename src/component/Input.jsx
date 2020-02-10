import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

const Input = ({ label, name, type, value }) => {
  // const inputEl = useRef(null);
  // useImperativeHandle(ref, () => ({
  //   focus: () => {
  //     inputRef.current.focus();
  //   }
  // }));
  const [userName, setuserName] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setuserName(node.getBoundingClientRect().userName);
    }
  }, []);

  return (
    <label>
      {label}
      <input
        className="form-Item__input"
        type={type}
        name={name}
        ref={measuredRef}
      />
    </label>
  );
  // Input = forwardRef(Input);
};

export default Input;
