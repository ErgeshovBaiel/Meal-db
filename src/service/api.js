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
  async fetchAllfoodDetail(categoryDetail) {
    try {
      const response = await axios(`${BASE_URL}/lookup.php?i=${categoryDetail}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching food for category ${categoryDetail}:`, error);
      return null;
    }
  }
  async fetchAllfoodCountry(countryName) {
    try {
      const response = await axios(`${BASE_URL}/filter.php?a=${countryName}`);
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching food for country ${countryName}:`, error);
      return response.data || { meals: [] };
    }
  }
  
}

export const api = new FoodApi();
