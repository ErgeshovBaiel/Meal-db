import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

class FoodApi {
  async fetchAllCategory() {
    try {
      const response = await axios(`${BASE_URL}/categories.php`);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return null;
    }
  }

  async fetchAllfoodCategory(categoryName) {
    try {
      const response = await axios(`${BASE_URL}/filter.php?c=${categoryName}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching food for category ${categoryName}:`, error);
      return null;
    }
  }
}

export const api = new FoodApi();
