import React, { useState, useEffect } from "react"; // Import necessary React hooks
import Navbar from "../../components/Navbar/comp"; // Import Navbar component
import DashboardGrid from "../../components/DashboardGrid/comp"; // Import DashboardGrid component
import "./page.css"; // Import CSS for the dashboard styling

/**
 * Dashboard Component:
 * This component serves as the main layout for the application's dashboard.
 * It includes:
 * - A Navbar for navigation and controls.
 * - A grid layout (`DashboardGrid`) for displaying tickets grouped and ordered.
 */

const Dashboard = () => {
  
  /**
   * Render the dashboard layout:
   * - Navbar at the top.
   * - DashboardGrid below it, which displays the fetched ticket data.
   */
  return (
    <div className="dashboard-container">
      <Navbar />
      <DashboardGrid/>
    </div>
  );
};

export default Dashboard;
