
// group by user and sort by priority

import { fetchData } from "./fetchData"; // Ensure you have fetchData from the helper file

const groupByUserAndSortByPriority = async () => {
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

export default groupByUserAndSortByPriority;
