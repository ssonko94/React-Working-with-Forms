import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  //getting the input value using refs
  const nameInputRef = useRef();

  //getting the input value using state
  const [enteredName, setenteredName] = useState("");

  //To add a more better user-experience we need to add another state
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    //getting the input value using state
    console.log(enteredName);

    //getting the input value using refs
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    //Clearing input using refs will always manipulate the real Dom
    // nameInputRef.current.value = "";

    //Clearing input using state is a more better solution
    setenteredName("");
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

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
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
