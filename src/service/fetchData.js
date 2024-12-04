/**
 * fetchData:
 * Fetches data for the dashboard from the provided API or retrieves it from localStorage for improved performance and offline persistence.
 * 
 * @returns {Object|null} The fetched data or null in case of an error.
 */
export const fetchData = async () => {
  // Try retrieving data from localStorage
  const localData = localStorage.getItem("dashboardData");

  if (localData) {
    // If data is found in localStorage, parse it to a JavaScript object and return
    return JSON.parse(localData);
  }

  // If no data is found in localStorage, fetch it from the API
  try {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );

    // Check if the response is not OK and throw an error
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Parse the response JSON
    const data = await response.json();

    // Save the fetched data to localStorage for future use
    localStorage.setItem("dashboardData", JSON.stringify(data));

    // Return the fetched data
    return data;
  } catch (error) {
    // Log any errors that occur during the fetch process
    console.error("Failed to fetch data:", error);

    // Return null in case of an error
    return null;
  }
};
