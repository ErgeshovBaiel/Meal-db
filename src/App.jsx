import Layout from "./layout";
import FoodByCategory from "./pages/foodByCategory/FoodByCategory";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="category/:categoryName" element={<FoodByCategory />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
