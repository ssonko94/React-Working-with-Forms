import React, { useRef, useState } from "react";

const SimpleInput = (props) => {
  //getting the input value using refs
  const nameInputRef = useRef();

  //getting the input value using state
  const [enteredName, setenteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    //getting the input value using state
    event.preventDefault();
    console.log(enteredName);

    //getting the input value using refs
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    //Clearing input using refs will always manipulate the real Dom
    // nameInputRef.current.value = "";

    //Clearing input using state is a more better solution
    setenteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
