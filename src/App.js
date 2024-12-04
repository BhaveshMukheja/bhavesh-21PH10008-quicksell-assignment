import React, { useEffect, useState } from "react"; // Importing React and necessary hooks
import Dashboard from "./pages/dashboard/page"; // Importing the main Dashboard component
import GroupingContext from "./context/GroupingContext"; // Importing the context for grouping
import OrderingContext from "./context/OrderingContext"; // Importing the context for ordering

const App = () => {
  // State to manage the current grouping option, default is "user"
  const [grouping, setGrouping] = useState("user");

  // State to manage the current ordering option, default is "priority"
  const [ordering, setOrdering] = useState("priority");

  // The App component acts as the root of the application
  // It uses Context Providers to pass down `grouping` and `ordering` states
  // to child components without the need for prop drilling

  return (
    <GroupingContext.Provider value={{ grouping, setGrouping }}>
      {/* Provides the grouping context to all child components */}
      <OrderingContext.Provider value={{ ordering, setOrdering }}>
        {/* Provides the ordering context to all child components */}
        <div className="App">
         
          <div>
            {/* Rendering the Dashboard component, the main UI of the app */}
            <Dashboard />
          </div>
        </div>
      </OrderingContext.Provider>
    </GroupingContext.Provider>
  );
};

export default App; 
