import React from "react";
import s from "./Inputs.module.scss";

const Inputs = () => {
  return (
    <div className={s.inputs}>
      <input type="text" placeholder="Full name" />
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
    </div>
  );
};

export default Inputs;
