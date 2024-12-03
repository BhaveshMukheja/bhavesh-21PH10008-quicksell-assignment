import React, { useContext, useEffect, useState } from "react";
import "./comp.css";
import ColumnHeader from "../ColumnHeader/comp";
import Card from "../Card/comp";
import GroupingContext from "../../context/GroupingContext";
import OrderingContext from "../../context/OrderingContext";
import groupByUserAndSortByPriority from "../../service/makingData"; // Your synthesized data function


const DashboardGrid = () => {
  const [data, setData] = useState(null); // Stores grouped and sorted data
  const [headerTitle, setHeaderTitle] = useState(null); // Stores grouped and sorted data
  const [headerIcon, setHeaderIcon] = useState(null); // Stores grouped and sorted data
  const { grouping } = useContext(GroupingContext); // Current grouping (e.g., "user", "priority")
  const { ordering } = useContext(OrderingContext); // Current ordering (e.g., "priority", "title")

  // Fetch and process data dynamically
  useEffect(() => {
    const fetchAndGroupData = async () => {
      try {
        let groupedData;
        // Handle grouping and ordering
        if (grouping === "user" && ordering === "priority") {
          groupedData = await groupByUserAndSortByPriority(); // Use the pre-defined helper
        } 

        setData(groupedData);
        setHeaderTitle(groupedData.userName);
        

      } catch (error) {
        console.error("Error in fetching or grouping data:", error);
        setData(null);
      }
    };

    fetchAndGroupData();
  }, [grouping, ordering]); // Re-run whenever grouping or ordering changes

  if (!data) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="dashboard-grid">
      {data.map((group, index) => (
        <div className="dashboard-column" key={index}>
          <ColumnHeader
            title={group.userName}
            count={group.tasks.length}
          />
          {group.tasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              priority={task.priority}
              tag={task.tag}
              userId={task.userId}
              status = {task.status}
              available = {group.available}
            />
          ))}
        </div>
      ))}
    </div>
  );
};


export default DashboardGrid;
