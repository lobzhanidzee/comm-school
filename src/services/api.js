const BASE_URL = "https://mocki.io/v1/35f9908c-6011-4679-bcca-30265c7f0e3e";

export const getBooks = async () => {
  try {
    const response = fetch(BASE_URL);

    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error while fetchong books:", error);
  }
};

export const getBooksById = async (id) => {
  try {
    const response = fetch(BASE_URL);

    if (!response.ok) throw new Error("Network response was not ok");

    return await response.json();
  } catch (error) {
    console.error("Error while fetchong books:", error);
  }
};
