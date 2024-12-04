import React, { useContext, useEffect, useState } from "react";
import "./comp.css";
import ColumnHeader from "../ColumnHeader/comp";
import Card from "../Card/comp";
import GroupingContext from "../../context/GroupingContext";
import OrderingContext from "../../context/OrderingContext";
import {
  groupByUserAndSortByPriority,
  groupByUserAndSortByTitle,
  groupByPriorityAndSortByPriority,
  groupByPriorityAndSortByTitle,
  groupByStatusAndSortByPriority,
  groupByStatusAndSortByTitle
} from "../../service/makingData";

const DashboardGrid = () => {
  const { grouping } = useContext(GroupingContext);
  const { ordering } = useContext(OrderingContext);
  const [data, setData] = useState(null);

  // Fetch and process data dynamically based on grouping and ordering
  useEffect(() => {
    const fetchAndGroupData = async () => {
      try {
        let groupedData;

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
  

        setData(groupedData);
        console.log(groupedData);
      } catch (error) {
        console.error("Error in fetching or grouping data:", error);
        setData(null);
      }
    };

    fetchAndGroupData();
  }, [grouping, ordering]);

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-grid">
      {data.map((group) => (
        <div className="dashboard-column" key={group.priorityLevel}>
          {/* Column Header */}
          
          <ColumnHeader title={group.priorityName || group.userName || group.status} count={group.tasks.length} priority={group.priorityLevel} status={group.status}  userId={group.userId} available={group.available} userName={group.userName}/>

          {/* Task Cards */}
          {group.tasks.map((task) => (
            <Card
              key={task.id}
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
