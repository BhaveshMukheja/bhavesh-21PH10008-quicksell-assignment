import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/comp";
import DashboardGrid from "../../components/DashboardGrid/comp";
import { fetchData } from "../../service/fetchData";
import "./page.css";

const Dashboard = () => {

    const [tickets, setTickets] = useState([]); // Store tickets data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const getData = async () => {
          setLoading(true); // Start loading
          const data = await fetchData(); // Fetch data using helper function
    
          if (data) {
            setTickets(data.tickets); // Update tickets state
          } else {
            setError("Failed to fetch data."); // Handle fetch errors
          }
    
          setLoading(false); // End loading
        };
    
        getData(); // Call the fetch function on component mount
      }, []);
    
      if (loading) {
        return <div className="loading">Loading...</div>;
      }
    
      if (error) {
        return <div className="error">{error}</div>;
      }


  return (
    <div className="dashboard-container">
      <Navbar />
      <DashboardGrid />
    </div>
  );
};

export default Dashboard;
