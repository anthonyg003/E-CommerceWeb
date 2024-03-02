const BASE_URL = "https://fakestoreapi.com";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("There was an error /POST login", error);
  }
};
