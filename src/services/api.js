const BASE_URL = "https://mocki.io/v1/a018e2f0-fd8c-41e0-bd57-1788330710a7";

export const getBooks = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error while fetchong books:", error);
  }
};
