import React from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.val, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }

  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return initialState;
};

const useInput = (validateValue) => {
  const [inputState, dispatchAction] = React.useReducer(
    inputReducer,
    initialState
  );

  const valueIsValid = validateValue(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

  const handleChange = (event) => {
    dispatchAction({ type: "INPUT", val: event.target.value });
  };

  const handleBlur = () => {
    dispatchAction({ type: "BLUR" });
  };

  const handleReset = () => {
    dispatchAction({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    handleChange,
    handleBlur,
    handleReset,
  };
};

export default useInput;
