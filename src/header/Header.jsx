import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { BackgroundContext } from "../context/BackgroundContext";
import { Button } from "../UI/Button";

export const Header = () => {
  const { setTheme, theme } = useContext(BackgroundContext);
  console.log(theme);
  const changeBackgroundColorBlack = () => {
    setTheme(false);
  };

  const changeBackgroundColorWhite = useCallback(() => {
    setTheme(true);
  }, []);
  return (
    <StyledHeader>
      <Button children="Dark" onClick={changeBackgroundColorBlack} />
      <Button children="White" onClick={changeBackgroundColorWhite} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: green;
  text-align: right;
  padding: 1rem;
  margin-bottom: 2rem;
`;
