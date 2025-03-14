import React from "react";
import styled from "styled-components";
import ScrollTopButton from "./components/ScrollTopButton";
import ThemeButton from "./components/ThemeButton";

const LayoutControllerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999999;
`;

function LayoutController() {
  return (
    <LayoutControllerStyled>
      <ThemeButton />
      <ScrollTopButton />
    </LayoutControllerStyled>
  );
}

export default LayoutController;
