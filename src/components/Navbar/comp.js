import React, { useState, useRef, useEffect } from "react";
import "./comp.css";

import { ReactComponent as Display } from "../../assets/icons_FEtask/Display.svg";
import { ReactComponent as Down } from "../../assets/icons_FEtask/down.svg";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Toggle for main dropdown
  const [grouping, setGrouping] = useState("status"); // State for Grouping
  const [ordering, setOrdering] = useState("priority"); // State for Ordering
  const dropdownRef = useRef(null); // Reference for the dropdown container

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      {/* Display Dropdown */}
      <div className="navbar-section" ref={dropdownRef}>
        <button
          className="dropdown-btn"
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          <span className="navbar-display-icon dropdown-comp">
            <Display />
          </span>
          <span className="navbar-display-text dropdown-comp">Display</span>
          <span className="navbar-down-icon dropdown-comp">
            <Down />
          </span>
        </button>
        {isDropdownVisible && (
          <div className="dropdown-grid">
            {/* Grid Row 1 */}
            <div className="grid-item">Grouping:</div>
            <div className="grid-item grid-category-dropdown">
              <select
                id="grouping"
                value={grouping}
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            {/* Grid Row 2 */}
            <div className="grid-item">Ordering:</div>
            <div className="grid-item grid-category-dropdown">
              <select
                id="ordering"
                value={ordering}
                onChange={(e) => setOrdering(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="status">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>

   
    </div>
  );
};

export default Navbar;
