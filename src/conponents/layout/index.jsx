import React, { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import LayoutController from "./LayoutController";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex: 1;
    overflow-y: scroll;
    position: relative;
  }
`;

function Layout({ children }) {
  return (
    <Suspense fallback={<> </>}>
      <LayoutContainer>
        <Header />
        <main
          id="main-container"
          className="hidden-scrollbar"
        >
          {children}
          <Footer />
          <LayoutController />
        </main>
      </LayoutContainer>
    </Suspense>
  );
}

export default Layout;
