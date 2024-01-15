import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContext from "~/hooks/useAuth";

// routes
import { privateRoutes, publicRoutes } from "~/routes";

// layout
import { MainLayout } from "~/layouts";
import { PrivateRoute } from "./components";

function App() {
  return (
    <Router>
      <AuthContext>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = MainLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <route.component />
                    </Layout>
                  }
                />
              );
            })}
            {privateRoutes.map((route, index) => {
              let Layout = MainLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <PrivateRoute>
                      <Layout>
                        <route.component />
                      </Layout>
                    </PrivateRoute>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </AuthContext>
    </Router>
  );
}

export default App;
