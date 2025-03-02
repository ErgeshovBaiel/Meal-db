import Layout from "../layout";
import HomePage from "../pages/HomePage/HomePage";
import FoodByCategory from "../pages/FoodByCategory/FoodByCategory";
import FoodDetail from "../pages/FoodDetail/FoodDetail";
import FoodCountry from "../pages/FoodCountry/FoodCountry";
import MealName from "../pages/MealName/MealName";
import Ingredient from "../pages/Ingredient/Ingredient";
import Letter from "../pages/Letter/Letter";

export const menu = [
    {
        name: "Home",
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "category/:categoryName",
                element: <FoodByCategory />
            },
            {
                path: "food/:idMeal",
                element: <FoodDetail />
            },
            {
                path: "country/:countryName",
                element: <FoodCountry />
            },
            {
                path: "MealName/:MealName",
                element: <MealName />
            },
            {
                path: "ingredient/:ingredientName",
                element: <Ingredient /> 
            },
            {
                path: "letter/:curr",
                element: <Letter />
            }
            
        ]
    },
];
