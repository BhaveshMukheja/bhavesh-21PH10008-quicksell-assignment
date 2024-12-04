// Import necessary modules and components
import React, { useContext, useEffect, useState } from "react";
import "./comp.css";
import ColumnHeader from "../ColumnHeader/comp"; // Component for column headers
import Card from "../Card/comp"; // Component for task cards
import GroupingContext from "../../context/GroupingContext"; // Context for grouping state
import OrderingContext from "../../context/OrderingContext"; // Context for ordering state

// Import functions for grouping and sorting data
import {
  groupByUserAndSortByPriority,
  groupByUserAndSortByTitle,
  groupByPriorityAndSortByPriority,
  groupByPriorityAndSortByTitle,
  groupByStatusAndSortByPriority,
  groupByStatusAndSortByTitle,
} from "../../service/makingData";

const DashboardGrid = () => {
  // Access grouping and ordering states from context
  const { grouping } = useContext(GroupingContext);
  const { ordering } = useContext(OrderingContext);

  // Local state for storing grouped and sorted data
  const [data, setData] = useState(null);

  // Dynamically fetch and process data based on grouping and ordering states
  useEffect(() => {
    const fetchAndGroupData = async () => {
      try {
        let groupedData;

        // Determine the correct function to call based on grouping and ordering
        if (grouping === "user" && ordering === "priority") {
          groupedData = await groupByUserAndSortByPriority();
        } else if (grouping === "user" && ordering === "title") {
          groupedData = await groupByUserAndSortByTitle();
        } else if (grouping === "priority" && ordering === "priority") {
          groupedData = await groupByPriorityAndSortByPriority();
        } else if (grouping === "priority" && ordering === "title") {
          groupedData = await groupByPriorityAndSortByTitle();
        } else if (grouping === "status" && ordering === "priority") {
          groupedData = await groupByStatusAndSortByPriority();
        } else if (grouping === "status" && ordering === "title") {
          groupedData = await groupByStatusAndSortByTitle();
        }

        // Update local state with grouped data
        setData(groupedData);
        console.log(groupedData); // Debugging output
      } catch (error) {
        console.error("Error in fetching or grouping data:", error);
        setData(null); // Reset state in case of an error
      }
    };

    // Fetch data when grouping or ordering state changes
    fetchAndGroupData();
  }, [grouping, ordering]);

  // Render loading state if data is still being fetched
  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-grid">
      {/* Iterate over grouped data to create columns */}
      {data.map((group) => (
        <div className="dashboard-column" key={group.priorityLevel || group.status || group.userId}>
          {/* Column Header */}
          <ColumnHeader
            title={group.priorityName || group.userName || group.status} // Dynamically determine the title based on grouping
            count={group.tasks.length} // Display the number of tasks in the group
            priority={group.priorityLevel} // Pass priority for priority-specific styling
            status={group.status} // Pass status for status-specific styling
            userId={group.userId} // Pass userId for user-specific styling
            available={group.available} // Pass availability of the user
            userName={group.userName} // Pass user name for display
          />

          {/* Iterate over tasks within each group to create cards */}
          {group.tasks.map((task) => (
            <Card
              key={task.id} // Unique key for each task
              id={task.id}
              title={task.title}
              priority={task.priority}
              tag={task.tag}
              userId={task.userId}
              status={task.status}
              available={task.available}
              userName={task.userName}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DashboardGrid;
