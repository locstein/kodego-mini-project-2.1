import { Routes, Route, Link } from "react-router-dom";
import routes from "./routes";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <>
      <div>
        <RootLayout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </RootLayout>
      </div>
    </>
  );
}

export default App;
