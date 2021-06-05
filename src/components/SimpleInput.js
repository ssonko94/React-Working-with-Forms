import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  //getting the input value using refs
  const nameInputRef = useRef();

  //getting the input value using state
  const [enteredName, setenteredName] = useState("");

  //To add a more better user-experience we need to add another state
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    //getting the input value using state
    console.log(enteredName);

    //getting the input value using refs
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    //Clearing input using refs will always manipulate the real Dom
    // nameInputRef.current.value = "";

    //Clearing input using state is a more better solution
    setenteredName("");
    setEnteredNameIsTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
