import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";

const ThemeButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  box-shadow: 0px 6px 32px -1px #00000014;
  svg {
    width: 16px;
    height: 16px;
  }
`;

function ThemeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
      localStorage.setItem("theme", "light");
    } else {
      setTheme(currentTheme);
    }
  }, [theme]);

  return (
    <ThemeButtonStyled
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
          localStorage.setItem("theme", "dark");
        } else {
          setTheme("light");
          localStorage.setItem("theme", "light");
        }
      }}
      style={{
        background: theme === "light" ? "#E8F1F1" : "#1b1128",
      }}
    >
      <Icon name={theme === "light" ? "theme_dark" : "theme_light"} />
    </ThemeButtonStyled>
  );
}

export default ThemeButton;
