// Import helper function for fetching data
import { fetchData } from "./fetchData";

/**
 * Group tasks by user and sort them by priority.
 * @returns {Array} Array of grouped tasks by user with descending priority sorting.
 */


export const groupByUserAndSortByPriority = async () => {
  try {
    const data = await fetchData();
    if (!data) throw new Error("Failed to fetch data.");

    const { tickets, users } = data;

    // Map through users and group their respective tickets
    const groupedByUser = users.map((user) => {
      const userTasks = tickets
        .filter((ticket) => ticket.userId === user.id) // Filter tickets for this user
        .sort((a, b) => b.priority - a.priority); // Sort tickets by descending priority

      return {
        userId: user.id,
        userName: user.name,
        available: user.available,
        tasks: userTasks,
      };
    });

    console.log(groupedByUser);
    return groupedByUser;
  } catch (error) {
    console.error("Error in groupByUserAndSortByPriority:", error);
    return null;
  }
};

/**
 * Group tasks by user and sort them by title.
 * @returns {Array} Array of grouped tasks by user with alphabetical title sorting.
 */
export const groupByUserAndSortByTitle = async () => {
  try {
    const data = await fetchData();
    if (!data) throw new Error("Failed to fetch data.");

    const { tickets, users } = data;

    // Map through users and group their respective tickets
    const groupedByUser = users.map((user) => {
      const userTasks = tickets
        .filter((ticket) => ticket.userId === user.id) // Filter tickets for this user
        .sort((a, b) => a.title.localeCompare(b.title)); // Sort tickets alphabetically by title

      return {
        userId: user.id,
        userName: user.name,
        available: user.available,
        tasks: userTasks,
      };
    });

    console.log(groupedByUser);
    return groupedByUser;
  } catch (error) {
    console.error("Error in groupByUserAndSortByTitle:", error);
    return null;
  }
};

/**
 * Group tasks by priority and sort them by descending priority within each group.
 * @returns {Array} Array of grouped tasks by priority.
 */
export const groupByPriorityAndSortByPriority = async () => {
  try {
    const data = await fetchData();
    if (!data) throw new Error("Failed to fetch data.");

    const { tickets, users } = data;

    // Define priority order and labels
    const priorityOrder = [0, 4, 3, 2, 1];
    const priorities = {
      0: "No Priority",
      4: "Urgent",
      3: "High",
      2: "Medium",
      1: "Low",
    };

    // Group tickets by priority level
    const groupedByPriority = priorityOrder.map((priorityLevel) => {
      const priorityTasks = tickets
        .filter((ticket) => ticket.priority === priorityLevel)
        .map((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          return {
            ...ticket,
            userName: user ? user.name : "Unknown",
            available: user ? user.available : false,
          };
        })
        .sort((a, b) => b.priority - a.priority);

      return {
        priorityLevel,
        priorityName: priorities[priorityLevel],
        tasks: priorityTasks,
      };
    });

    console.log(groupedByPriority);
    return groupedByPriority;
  } catch (error) {
    console.error("Error in groupByPriorityAndSortByPriority:", error);
    return null;
  }
};

/**
 * Group tasks by priority and sort them alphabetically by title within each group.
 * @returns {Array} Array of grouped tasks by priority.
 */
export const groupByPriorityAndSortByTitle = async () => {
  try {
    const data = await fetchData();
    if (!data) throw new Error("Failed to fetch data.");

    const { tickets, users } = data;

    const priorityOrder = [0, 4, 3, 2, 1];
    const priorities = {
      0: "No Priority",
      4: "Urgent",
      3: "High",
      2: "Medium",
      1: "Low",
    };

    const groupedByPriority = priorityOrder.map((priorityLevel) => {
      const priorityTasks = tickets
        .filter((ticket) => ticket.priority === priorityLevel)
        .map((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          return {
            ...ticket,
            userName: user ? user.name : "Unknown",
            available: user ? user.available : false,
          };
        })
        .sort((a, b) => a.title.localeCompare(b.title));

      return {
        priorityLevel,
        priorityName: priorities[priorityLevel],
        tasks: priorityTasks,
      };
    });

    console.log(groupedByPriority);
    return groupedByPriority;
  } catch (error) {
    console.error("Error in groupByPriorityAndSortByTitle:", error);
    return null;
  }
};

/**
 * Group tasks by status and sort them by descending priority within each group.
 * @returns {Array} Array of grouped tasks by status.
 */
export const groupByStatusAndSortByPriority = async () => {
  try {
    const data = await fetchData();
    if (!data) throw new Error("Failed to fetch data.");

    const { tickets, users } = data;

    const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
    const statuses = {
      Backlog: "Backlog",
      Todo: "To Do",
      "In progress": "In Progress",
      Done: "Done",
      Cancelled: "Cancelled",
    };

    const groupedByStatus = statusOrder.map((status) => {
      const statusTasks = tickets
        .filter((ticket) => ticket.status === status)
        .map((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          return {
            ...ticket,
            userName: user ? user.name : "Unknown",
            available: user ? user.available : false,
          };
        })
        .sort((a, b) => b.priority - a.priority);

      return {
        status,
        statusName: statuses[status],
        tasks: statusTasks,
      };
    });

    console.log(groupedByStatus);
    return groupedByStatus;
  } catch (error) {
    console.error("Error in groupByStatusAndSortByPriority:", error);
    return null;
  }
};

/**
 * Group tasks by status and sort them alphabetically by title within each group.
 * @returns {Array} Array of grouped tasks by status.
 */
export const groupByStatusAndSortByTitle = async () => {
  try {
    const data = await fetchData();
    if (!data) throw new Error("Failed to fetch data.");

    const { tickets, users } = data;

    const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
    const statuses = {
      Backlog: "Backlog",
      Todo: "To Do",
      "In progress": "In Progress",
      Done: "Done",
      Cancelled: "Cancelled",
    };

    const groupedByStatus = statusOrder.map((status) => {
      const statusTasks = tickets
        .filter((ticket) => ticket.status === status)
        .map((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          return {
            ...ticket,
            userName: user ? user.name : "Unknown",
            available: user ? user.available : false,
          };
        })
        .sort((a, b) => a.title.localeCompare(b.title));

      return {
        status,
        statusName: statuses[status],
        tasks: statusTasks,
      };
    });

    console.log(groupedByStatus);
    return groupedByStatus;
  } catch (error) {
    console.error("Error in groupByStatusAndSortByTitle:", error);
    return null;
  }
};
