// apiHelper.js
export const fetchData = async () => {
    const localData = localStorage.getItem("dashboardData");
  
    // Check if data exists in localStorage
    if (localData) {
      return JSON.parse(localData); // Parse and return stored data
    }
  
    // Fetch data from API if not in localStorage
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
  
      // Store data in localStorage for persistence
      localStorage.setItem("dashboardData", JSON.stringify(data));
  
      return data; // Return fetched data
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null; // Return null if there's an error
    }
  };
  