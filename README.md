# Quicksell Assignment

This project was developed by **Bhavesh Mukheja** as part of the placement process at **IIT KGP** for Quicksell.

The application is built entirely with **React.js** and **pure CSS**, focusing on clean, modular, and reusable components. The primary goal of the project is to allow dynamic grouping and ordering of tickets fetched from an API, providing an intuitive and user-friendly dashboard interface.

---

## Project Overview

The main objective of this project is to dynamically **group** and **order** tickets based on various criteria, which enhances the user experience for managing and visualizing tasks. The application supports **6 distinct combinations of grouping and ordering**:

1. **Group by User and Order by Priority**
2. **Group by User and Order by Title**
3. **Group by Priority and Order by Priority**
4. **Group by Priority and Order by Title**
5. **Group by Status and Order by Priority**
6. **Group by Status and Order by Title**

The dashboard adjusts dynamically based on the selected grouping and ordering states, ensuring real-time updates and accurate representation of tasks.

---

## Key Features

- **Dynamic Data Fetching:**  
  Data is fetched from the provided API and processed in the `makingData.js` file, where custom functions group and order the tickets as required.

- **State Management:**  
  The project makes extensive use of React's state management capabilities, leveraging **Context API**, `useState`, and `useEffect` to manage grouping and ordering states.

- **Frontend Architecture:**  
  The interface is divided into three major reusable components:
  1. **Navbar:**  
     Allows users to select the grouping and ordering criteria. This component updates the state globally across the app.
  2. **ColumnHeader:**  
     Represents the header of each group in the dashboard. The header displays the group title, a count of tasks, and visual indicators like user avatars or priority icons.
  3. **Card:**  
     Represents individual tickets/tasks within each group. Cards are customizable and display task details such as title, priority, status, and user information.

- **Responsive and Intuitive Design:**  
  The project is designed with responsiveness in mind, ensuring the dashboard adapts gracefully to different screen sizes.

- **Fallback Handling:**  
  If a task lacks user profile information, an avatar with the user’s initials and a dynamically generated background color is displayed.

- **Custom Grouping and Sorting Functions:**  
  The `makingData.js` file includes a set of robust functions for processing and organizing data:
  - Group by User, Priority, or Status
  - Sort tasks by Priority or Title
  - Return additional metadata like user availability and names for each task

---

## How It Works

1. **Grouping and Ordering Logic:**  
   Grouping and ordering are handled by six functions in the `makingData.js` file. These functions fetch data from the API, group the tickets based on the selected criteria, and order them dynamically before returning the processed data.

2. **State Propagation via Context:**  
   The **Context API** is used to maintain the current grouping and ordering state globally. These states are updated through the **Navbar** component and affect the entire dashboard in real-time.

3. **Reusable Component Structure:**  
   The project follows a modular approach, with each component serving a distinct purpose:
   - The **Navbar** sets grouping and ordering criteria.
   - The **DashboardGrid** component renders columns based on the selected grouping.
   - The **ColumnHeader** and **Card** components populate the columns with task-specific information.

4. **Dynamic Data Processing:**  
   Data is fetched from the API and enriched with user-specific details (e.g., user availability, name) to ensure a seamless integration of user and task information.

---

## Key Concepts and Technologies Used

1. **React.js Hooks:**
   - `useState` for managing local states like dropdown visibility.
   - `useEffect` for side effects such as fetching data and updating the dashboard dynamically.
   - Context API for global state management (e.g., grouping and ordering states).

2. **Custom Functions for Data Manipulation:**
   - Functions like `groupByPriorityAndSortByPriority` or `groupByUserAndSortByTitle` are designed to handle specific combinations of grouping and ordering efficiently.

3. **CSS for UI/UX:**
   - Pure CSS is used to create a responsive and visually appealing interface.
   - Dynamic styles for avatars (e.g., initials and background colors) enhance user interaction.

4. **Scalability:**
   - The modular structure ensures the codebase can be easily extended to add new features or support additional grouping and ordering combinations.

---

## Future Improvements

- **Pagination:**  
  Implement pagination for large datasets to enhance performance.
  
- **Drag-and-Drop Functionality:**  
  Allow users to move cards between columns for a more interactive experience.

- **Search and Filter:**  
  Add search and filter options for easier navigation of tasks.

- **Backend Integration:**  
  Enhance the API to support direct updates and real-time synchronization.

---

## Conclusion

This project demonstrates how a well-architected frontend can efficiently manage and visualize dynamic data. With its clean code structure and focus on user experience, the application provides a robust foundation for further development.