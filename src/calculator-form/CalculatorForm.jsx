import { useReducer, useState } from "react";
import styled from "styled-components";
import { Reducer } from "../Reducer";
import { Button } from "../UI/Button";

export const CalcultorForm = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const [state, dispatch] = useReducer(Reducer, {
    number1: "",
    number2: "",
    result: "",
  });

  const changeNumberOne = (e) => {
    setNumber1(e.target.value);
  };
  const changeNumberTwo = (e) => {
    setNumber2(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: parseInt(number1) + parseInt(number2) });
  };
  const subtractHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBTRACT",
      payload: parseInt(number1) - parseInt(number2),
    });
  };
  const multipleHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "MULTIPLY",
      payload: parseInt(number1) * parseInt(number2),
    });
  };
  const divideHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADDITION",
      payload: parseInt(number1) / parseInt(number2),
    });
  };

  return (
    <StyleForm>
      <input type="number" value={number1} onChange={changeNumberOne} />
      <input type="number" value={number2} onChange={changeNumberTwo} />
      <p>Result: {state.result}</p>
      <div>
        <Button children="+" onClick={addHandler} />
        <Button children="-" onClick={subtractHandler} />
        <Button children="*" onClick={multipleHandler} />
        <Button children="/" onClick={divideHandler} />
      </div>
    </StyleForm>
  );
};

const StyleForm = styled.form`
  margin: 0 auto;
  text-align: center;
  background-color: blue;
  width: 20rem;
  padding: 2rem;
`;
