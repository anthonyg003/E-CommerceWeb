const BASE_URL = "https://fakestoreapi.com";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /POST login", error);
  }
};

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /GET all products", error);
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /GET single product", error);
  }
};

export const fetchUserCart = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/carts/${id}`);
    const result = await response.json();
    console.log("Cart -->", result);
    return result.products;
  } catch (error) {
    console.error("There was an error /GET user cart", error);
  }
};

export const fetchAllUsers = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const result = await response.json();
    const userData = result.find((user) => user.username === username);
    return userData;
  } catch (error) {
    console.error("There was an error /GET all users", error);
  }
};
