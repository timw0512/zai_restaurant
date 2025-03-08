import React from "react";
import { HeaderContainer } from "./styled";
import HeaderNavigation from "./components/HeaderNavigation";
import HeaderSearchBar from "./components/HeaderSearchBar";

function Header() {
  return (
    <HeaderContainer>
      <HeaderSearchBar />
      <HeaderNavigation />
    </HeaderContainer>
  );
}

export default Header;
