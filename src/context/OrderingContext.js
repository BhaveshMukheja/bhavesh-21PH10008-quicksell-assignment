import React, { createContext } from 'react'; // Import React and the createContext function

// Create a context for managing the "ordering" state
// This context will hold the current ordering option (e.g., "priority", "title")
// and a function to update it
const OrderingContext = createContext();

// Export the context so it can be used in other components
export default OrderingContext;