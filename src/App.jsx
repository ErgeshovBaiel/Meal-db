import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { menu } from "./routes/routes";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {menu.map(route => (
            <Route key={route.name} path={route.path} element={route.element}>
              {route.children?.map(child => (
                <Route
                  key={child.path || "index"}
                  index={child.index}
                  path={child.path}
                  element={child.element}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
