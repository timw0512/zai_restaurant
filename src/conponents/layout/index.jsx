import React, { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Suspense fallback={<> </>}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Suspense>
  );
}

export default Layout;
