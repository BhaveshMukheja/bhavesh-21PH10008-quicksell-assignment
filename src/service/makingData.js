
// group by user and sort by priority

import { fetchData } from "./fetchData"; // Ensure you have fetchData from the helper file

export const groupByUserAndSortByPriority = async () => {
  try {
    // Fetch data
    const data = await fetchData();
    if (!data) throw new Error("Failed to fetch data.");

    const { tickets, users } = data;

    // Group tasks by userId and sort tasks by priority
    const groupedByUser = users.map((user) => {
      const userTasks = tickets
        .filter((ticket) => ticket.userId === user.id) // Filter tasks for this user
        .sort((a, b) => b.priority - a.priority); // Sort tasks by descending priority

      return {
        userId: user.id,
        userName: user.name,
        available: user.available,
        tasks: userTasks,
      };
    });
        console.log(groupedByUser)
    return groupedByUser; // Return the grouped and sorted data
  } catch (error) {
    console.error("Error in groupByUserAndSortByPriority:", error);
    return null;
  }
};





export const groupByUserAndSortByTitle = async () => {
    try {
      // Fetch data
      const data = await fetchData();
      if (!data) throw new Error("Failed to fetch data.");
  
      const { tickets, users } = data;
  
      // Group tasks by userId and sort tasks by title
      const groupedByUser = users.map((user) => {
        const userTasks = tickets
          .filter((ticket) => ticket.userId === user.id) // Filter tasks for this user
          .sort((a, b) => a.title.localeCompare(b.title)); // Sort tasks alphabetically by title
  
        return {
          userId: user.id,
          userName: user.name,
          available: user.available,
          tasks: userTasks,
        };
      });
  
      console.log(groupedByUser);
      return groupedByUser; // Return the grouped and sorted data
    } catch (error) {
      console.error("Error in groupByUserAndSortByTitle:", error);
      return null;
    }
  };
  



  export const groupByPriorityAndSortByPriority = async () => {
    try {
      // Fetch data
      const data = await fetchData();
      if (!data) throw new Error("Failed to fetch data.");
  
      const { tickets, users } = data;
  
      // Define priority order explicitly
      const priorityOrder = [0, 4, 3, 2, 1]; // No Priority → Urgent → High → Medium → Low
      const priorities = {
        0: "No Priority",
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
      };
  
      // Group tickets by priority
      const groupedByPriority = priorityOrder.map((priorityLevel) => {
        const priorityTasks = tickets
          .filter((ticket) => ticket.priority === priorityLevel) // Filter tasks for this priority
          .map((ticket) => {
            const user = users.find((user) => user.id === ticket.userId); // Find the user by userId
            return {
              ...ticket,
              userName: user ? user.name : "Unknown", // Add userName to each ticket
              available: user ? user.available : false, // Add available status to each ticket
            };
          })
          .sort((a, b) => b.priority - a.priority); // Sort tasks by descending priority
  
        return {
          priorityLevel: priorityLevel,
          priorityName: priorities[priorityLevel],
          tasks: priorityTasks,
        };
      });
  
      console.log(groupedByPriority); // Debugging output
      return groupedByPriority; // Return grouped data
    } catch (error) {
      console.error("Error in groupByPriorityAndSortByPriority:", error);
      return null;
    }
  };

  
  export const groupByPriorityAndSortByTitle = async () => {
    try {
      // Fetch data
      const data = await fetchData();
      if (!data) throw new Error("Failed to fetch data.");
  
      const { tickets, users } = data;
  
      // Define priority order explicitly
      const priorityOrder = [0, 4, 3, 2, 1]; // No Priority → Urgent → High → Medium → Low
      const priorities = {
        0: "No Priority",
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
      };
  
      // Group tickets by priority
      const groupedByPriority = priorityOrder.map((priorityLevel) => {
        const priorityTasks = tickets
          .filter((ticket) => ticket.priority === priorityLevel) // Filter tasks with this priority
          .map((ticket) => {
            const user = users.find((user) => user.id === ticket.userId); // Find the user by userId
            return {
              ...ticket,
              userName: user ? user.name : "Unknown", // Add userName to each ticket
              available: user ? user.available : false, // Add available status to each ticket
            };
          })
          .sort((a, b) => a.title.localeCompare(b.title)); // Sort tasks alphabetically by title
  
        return {
          priorityLevel: priorityLevel,
          priorityName: priorities[priorityLevel],
          tasks: priorityTasks,
        };
      });
  
      console.log(groupedByPriority); // Debugging output
      return groupedByPriority; // Return grouped data
    } catch (error) {
      console.error("Error in groupByPriorityAndSortByTitle:", error);
      return null;
    }
  };

  
  export const groupByStatusAndSortByPriority = async () => {
    try {
      // Fetch data
      const data = await fetchData();
      if (!data) throw new Error("Failed to fetch data.");
  
      const { tickets, users } = data;
  
      // Define status order explicitly
      const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
      const statuses = {
        Backlog: "Backlog",
        Todo: "To Do",
        "In progress": "In Progress",
        Done: "Done",
        Cancelled: "Cancelled",
      };
  
      // Group tickets by status
      const groupedByStatus = statusOrder.map((status) => {
        const statusTasks = tickets
          .filter((ticket) => ticket.status === status) // Filter tasks with this status
          .map((ticket) => {
            const user = users.find((user) => user.id === ticket.userId); // Find the user by userId
            return {
              ...ticket,
              userName: user ? user.name : "Unknown", // Add userName to each ticket
              available: user ? user.available : false, // Add available status to each ticket
            };
          })
          .sort((a, b) => b.priority - a.priority); // Sort tasks by descending priority
  
        return {
          status,
          statusName: statuses[status],
          tasks: statusTasks,
        };
      });
  
      console.log(groupedByStatus); // Debugging output
      return groupedByStatus; // Return grouped data
    } catch (error) {
      console.error("Error in groupByStatusAndSortByPriority:", error);
      return null;
    }
  };

  

  export const groupByStatusAndSortByTitle = async () => {
    try {
      // Fetch data
      const data = await fetchData();
      if (!data) throw new Error("Failed to fetch data.");
  
      const { tickets, users } = data;
  
      // Define status order explicitly
      const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
      const statuses = {
        Backlog: "Backlog",
        Todo: "To Do",
        "In progress": "In Progress",
        Done: "Done",
        Cancelled: "Cancelled",
      };
  
      // Group tickets by status
      const groupedByStatus = statusOrder.map((status) => {
        const statusTasks = tickets
          .filter((ticket) => ticket.status === status) // Filter tasks with this status
          .map((ticket) => {
            const user = users.find((user) => user.id === ticket.userId); // Find the user by userId
            return {
              ...ticket,
              userName: user ? user.name : "Unknown", // Add userName to each ticket
              available: user ? user.available : false, // Add available status to each ticket
            };
          })
          .sort((a, b) => a.title.localeCompare(b.title)); // Sort tasks alphabetically by title
  
        return {
          status,
          statusName: statuses[status],
          tasks: statusTasks,
        };
      });
  
      console.log(groupedByStatus); // Debugging output
      return groupedByStatus; // Return grouped data
    } catch (error) {
      console.error("Error in groupByStatusAndSortByTitle:", error);
      return null;
    }
  };
  