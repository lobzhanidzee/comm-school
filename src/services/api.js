const BASE_URL = "https://dummyjson.com/users";

export const getUsers = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  } catch (error) {
    console.error("Error while fetching user:", error);
    throw error;
  }
};
