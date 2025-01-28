import React from "react";
import s from "./Registration.module.scss";
import Inputs from "@/widgets/Auth/Registration/Inputs";
import Submit from "@/widgets/Auth/Registration/Submit";

const RegistrationPage = () => {
  return (
    <form className={s.form}>
      <h1>Registration</h1>
      <Inputs />
      <Submit />
    </form>
  );
};

export default RegistrationPage;
