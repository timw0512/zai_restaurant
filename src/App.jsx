import React, { Suspense } from "react";
import routes from "./routes";
import Layout from "./conponents/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="/zaira_technology/">
      <Routes>
        {routes.map(({ path, component, useLayout }) => {
          const RouteElement = component;

          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<> </>}>
                  {useLayout ? (
                    <Layout>
                      <RouteElement />
                    </Layout>
                  ) : (
                    <RouteElement />
                  )}
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
