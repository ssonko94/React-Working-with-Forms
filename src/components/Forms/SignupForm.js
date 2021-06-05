import React from "react";
import useForm from "../../hooks/useForm";

import { signupForm } from "../../utils/formConfig";

import classes from "./SignupForm.module.css";

export default function SignupForm() {
  const { renderFormInputs, isFormValid } = useForm(signupForm);

  return (
    <form className={classes.signupForm}>
      <h1>Sign Up</h1>
      {renderFormInputs()}
      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
}
