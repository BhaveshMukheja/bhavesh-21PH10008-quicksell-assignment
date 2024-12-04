import React, { useState, useRef, useEffect, useContext } from "react";
import GroupingContext from "../../context/GroupingContext";
import OrderingContext from "../../context/OrderingContext";
import "./comp.css";

import { ReactComponent as Display } from "../../assets/icons_FEtask/Display.svg";
import { ReactComponent as Down } from "../../assets/icons_FEtask/down.svg";

const Navbar = () => {
  const { grouping, setGrouping } = useContext(GroupingContext);
  const { ordering, setOrdering } = useContext(OrderingContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-section" ref={dropdownRef}>
        <button
          className="dropdown-btn"
          onClick={() => setIsDropdownVisible((prev) => !prev)}
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
          <div className="dropdown-grid" onClick={(e) => e.stopPropagation()}>
            {/* Grouping */}
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
            {/* Ordering */}
            <div className="grid-item">Ordering:</div>
            <div className="grid-item grid-category-dropdown">
              <select
                id="ordering"
                value={ordering}
                onChange={(e) => setOrdering(e.target.value)}
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
