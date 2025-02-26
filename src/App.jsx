import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage/HomePage";
import FoodByCategory from "./pages/FoodByCategory/FoodByCategory";
import FoodDetail from "./pages/FoodDetail/FoodDetail";
import FoodCountry from "./pages/FoodCountry/FoodCountry";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="category/:categoryName" element={<FoodByCategory />} />
            <Route path="food/:idMeal" element={<FoodDetail />} />
            <Route path="country/:countryName" element={<FoodCountry />} />
            </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
