// Navbar.js

import React, { useState, useRef, useEffect, useContext } from "react";
import GroupingContext from "../../context/GroupingContext"; // Context for grouping state
import OrderingContext from "../../context/OrderingContext"; // Context for ordering state
import "./comp.css";

import { ReactComponent as Display } from "../../assets/icons_FEtask/Display.svg"; // Display icon
import { ReactComponent as Down } from "../../assets/icons_FEtask/down.svg"; // Down arrow icon

const Navbar = () => {
  // Context to manage grouping (e.g., user, status, priority)
  const { grouping, setGrouping } = useContext(GroupingContext);
  // Context to manage ordering (e.g., priority, title)
  const { ordering, setOrdering } = useContext(OrderingContext);

  // State to control visibility of the dropdown
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Reference to dropdown container

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false); // Hide dropdown if clicked outside
      }
    };

    // Add event listener to detect clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      {/* Dropdown Section */}
      <div className="navbar-section" ref={dropdownRef}>
        {/* Dropdown Button */}
        <button
          className="dropdown-btn"
          onClick={() => setIsDropdownVisible((prev) => !prev)} // Toggle dropdown visibility
        >
          {/* Display icon */}
          <span className="navbar-display-icon dropdown-comp">
            <Display />
          </span>
          {/* "Display" text */}
          <span className="navbar-display-text dropdown-comp">Display</span>
          {/* Down arrow icon */}
          <span className="navbar-down-icon dropdown-comp">
            <Down />
          </span>
        </button>

        {/* Dropdown Options */}
        {isDropdownVisible && (
          <div className="dropdown-grid" onClick={(e) => e.stopPropagation()}>
            {/* Grouping Section */}
            <div className="grid-item">Grouping:</div>
            <div className="grid-item grid-category-dropdown">
              <select
                id="grouping"
                value={grouping}
                onChange={(e) => setGrouping(e.target.value)} // Update grouping state
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            {/* Ordering Section */}
            <div className="grid-item">Ordering:</div>
            <div className="grid-item grid-category-dropdown">
              <select
                id="ordering"
                value={ordering}
                onChange={(e) => setOrdering(e.target.value)} // Update ordering state
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
