import React, { useContext } from "react";
import GroupingContext from "../../context/GroupingContext";
import OrderingContext from "../../context/OrderingContext";
import "./comp.css";

// Importing SVG icons for priorities and statuses
import { ReactComponent as Low } from "../../assets/icons_FEtask/Img - Low Priority.svg";
import { ReactComponent as High } from "../../assets/icons_FEtask/Img - High Priority.svg";
import { ReactComponent as Medium } from "../../assets/icons_FEtask/Img - Medium Priority.svg";
import { ReactComponent as UrgentColor } from "../../assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import { ReactComponent as NoPriority } from "../../assets/icons_FEtask/No-priority.svg";
import { ReactComponent as Todo } from "../../assets/icons_FEtask/To-do.svg";
import { ReactComponent as InProgress } from "../../assets/icons_FEtask/in-progress.svg";
import { ReactComponent as Done } from "../../assets/icons_FEtask/Done.svg";
import { ReactComponent as Cancelled } from "../../assets/icons_FEtask/Cancelled.svg";
import { ReactComponent as Backlog } from "../../assets/icons_FEtask/Backlog.svg";

const Card = ({
  id, // Task ID
  title, // Task title
  priority, // Task priority level
  tag = [], // Task tags
  userId, // User ID assigned to the task
  status, // Task status
  available, // User availability
  userName, // User's name
}) => {
  const { grouping } = useContext(GroupingContext); // Current grouping state
  const { ordering } = useContext(OrderingContext); // Current ordering state

  // Truncate the title if it exceeds 100 characters
  const truncatedTitle =
    title.length > 100 ? `${title.slice(0, 100)}...` : title;

  // Map priority levels to icons
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
        return <UrgentColor />;
      default:
        return null;
    }
  };

  // Map statuses to icons
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

  // Generate unique background color for avatar based on userName
  const getBackgroundColor = (name) => {
    const colors = ["#FF5733", "#33B5E5", "#FFC107", "#4CAF50", "#FF9800", "#9C27B0"];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Generate initials-based avatar with dynamic background color
  const renderAvatar = (name) => {
    if (name) {
      const initials = name
        .split(" ") // Split name into parts
        .map((word) => word.charAt(0)) // Extract the first letter of each part
        .join("") // Combine the initials
        .toUpperCase(); // Convert to uppercase

      return (
        <div
          className="initial-avatar"
          style={{ backgroundColor: getBackgroundColor(name) }}
        >
          <span>{initials}</span>
        </div>
      );
    }
    return null; // No avatar if no name is provided
  };

  return (
    <div className="card">
      {/* Card Header */}
      <div className="card-header">
        <p className="card-id">{id}</p>
        <div className="profile-container">
          {grouping !== "user" && (
            <>
              {/* Render avatar if userName exists; else show placeholder */}
              {userName ? (
                renderAvatar(userName)
              ) : (
                <img
                  className="profile-pic"
                  src={`https://via.placeholder.com/40?text=${userId || "?"}`}
                  alt="Profile"
                />
              )}
              {/* Availability indicator */}
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
        {grouping !== "status" && (
          <span className="card-status">{renderStatusIcon(status)}</span>
        )}
        <h3 className="card-title">{truncatedTitle}</h3>
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        {/* Priority Icon */}
        {grouping !== "priority" && (
          <div className="card-priority">
            <span className="icon">{renderPriorityIcon(priority)}</span>
          </div>
        )}
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
