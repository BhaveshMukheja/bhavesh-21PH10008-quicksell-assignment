import React, { createContext } from 'react'; // Import React and the createContext function

// Create a context for managing the "grouping" state
// This context will hold the current grouping option (e.g., "user", "priority", "status")
// and a function to update it
const GroupingContext = createContext();

// Export the context so it can be used in other components
export default GroupingContext;