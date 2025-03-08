import React, { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex: 1;
    overflow-y: scroll;
  }
`;

function Layout({ children }) {
  return (
    <Suspense fallback={<> </>}>
      <LayoutContainer>
        <Header />
        <main className="hidden-scrollbar">{children}</main>
        <Footer />
      </LayoutContainer>
    </Suspense>
  );
}

export default Layout;
