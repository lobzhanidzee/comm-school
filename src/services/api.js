const BASE_URL = "https://mocki.io/v1/57157b45-d494-4d01-9c5b-20b5d23b4e89";

export const getBooks = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error while fetchong books:", error);
  }
};
