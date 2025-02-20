import axios from "axios";


const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

class FoodApi {
  async fetchAllCategory() {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return null; 
    }
  }  
}

export const api = new FoodApi();