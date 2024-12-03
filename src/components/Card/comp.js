import React, { useState, useEffect, useContext } from "react";
import GroupingContext from "../../context/GroupingContext";
import OrderingContext from "../../context/OrderingContext";
import "./comp.css";

import { ReactComponent as Low } from "../../assets/icons_FEtask/Img - Low Priority.svg";
import { ReactComponent as High } from "../../assets/icons_FEtask/Img - High Priority.svg";
import { ReactComponent as Medium } from "../../assets/icons_FEtask/Img - Medium Priority.svg";
import { ReactComponent as UrgentColor } from "../../assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import { ReactComponent as UrgentNoColor } from "../../assets/icons_FEtask/SVG - Urgent Priority grey.svg";
import { ReactComponent as NoPriority } from "../../assets/icons_FEtask/No-priority.svg";

import { ReactComponent as Todo } from "../../assets/icons_FEtask/To-do.svg";
import { ReactComponent as InProgress } from "../../assets/icons_FEtask/in-progress.svg";
import { ReactComponent as Done } from "../../assets/icons_FEtask/Done.svg";
import { ReactComponent as Cancelled } from "../../assets/icons_FEtask/Cancelled.svg";
import { ReactComponent as Backlog } from "../../assets/icons_FEtask/Backlog.svg";

const Card = ({ id, title, priority, tag = [], userId, status, available }) => {
  const { grouping } = useContext(GroupingContext); // Current grouping (e.g., "user", "priority")
  const { ordering } = useContext(OrderingContext); // Current ordering (e.g., "priority", "title")

  // Truncate title if it exceeds 100 characters
  const truncatedTitle = title.length > 100 ? `${title.slice(0, 100)}...` : title;

  // Determine priority icon
  const renderPriorityIcon = (priority) => {
    switch (priority) {
      case 0:
        return <NoPriority />;
      case 1:
        return <Low />;
      case 2:
        return <Medium />;
      case 3:
        return <High />;
      case 4:
        return <UrgentNoColor />;
      default:
        return null;
    }
  };

  // Determine status icon
  const renderStatusIcon = (status) => {
    switch (status) {
      case "Todo":
        return <Todo />;
      case "In progress":
        return <InProgress />;
      case "Backlog":
        return <Backlog />;
      case "Done":
        return <Done />;
      case "Cancelled":
        return <Cancelled />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      {/* Card Header */}
      <div className="card-header">
        <p className="card-id">{id}</p>
        <div className="profile-container">
          {/* Conditional rendering of profile picture */}
          {grouping !== "user" && (
  <>
    <img
      className="profile-pic"
      src={`https://via.placeholder.com/40?text=${userId || "?"}`}
      alt="Profile"
    />
    <span
      className={`card-profile-avialable ${
        available ? "true" : "false"
      }`}
    ></span>
  </>
)}
        </div>
      </div>

      {/* Card Title and Status */}
      <div className="card-title-container">
        <span className="card-status">{renderStatusIcon(status)}</span>
        <h3 className="card-title">{truncatedTitle}</h3>
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        {/* Priority */}
        <div className="card-priority">
          <span className="icon">{renderPriorityIcon(priority)}</span>
        </div>
        {/* Tags */}
        <div>
          {tag.length > 0 ? (
            tag.map((tags, index) => (
              <div className="card-tag" key={index}>
                <span className="tag-dot"></span>
                <span className="tag-text">{tags}</span>
              </div>
            ))
          ) : (
            <p className="no-tag">No Tags</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
