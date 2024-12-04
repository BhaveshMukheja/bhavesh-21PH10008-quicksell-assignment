import React, { useContext } from "react";
import GroupingContext from "../../context/GroupingContext";
import OrderingContext from "../../context/OrderingContext";
import "./comp.css";

// Import icons for priority levels
import { ReactComponent as Low } from "../../assets/icons_FEtask/Img - Low Priority.svg";
import { ReactComponent as High } from "../../assets/icons_FEtask/Img - High Priority.svg";
import { ReactComponent as Medium } from "../../assets/icons_FEtask/Img - Medium Priority.svg";
import { ReactComponent as UrgentColor } from "../../assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import { ReactComponent as NoPriority } from "../../assets/icons_FEtask/No-priority.svg";

// Import icons for statuses
import { ReactComponent as Todo } from "../../assets/icons_FEtask/To-do.svg";
import { ReactComponent as InProgress } from "../../assets/icons_FEtask/in-progress.svg";
import { ReactComponent as Done } from "../../assets/icons_FEtask/Done.svg";
import { ReactComponent as Cancelled } from "../../assets/icons_FEtask/Cancelled.svg";
import { ReactComponent as Backlog } from "../../assets/icons_FEtask/Backlog.svg";

// Import icons for additional options
import { ReactComponent as Add } from "../../assets/icons_FEtask/add.svg";
import { ReactComponent as Dots } from "../../assets/icons_FEtask/3 dot menu.svg";

const ColumnHeader = ({
  title,       // Title of the column (e.g., priority name or user name)
  count,       // Number of tasks in the column
  priority,    // Priority level (0 - No Priority, 4 - Urgent)
  status,      // Status of tasks (e.g., Todo, In Progress)
  userId,      // ID of the user (for generating avatar or placeholder)
  available,   // Availability status of the user
  userName,    // User's name (for avatar initials)
}) => {
  // Context to determine the current grouping and ordering
  const { grouping } = useContext(GroupingContext);
  const { ordering } = useContext(OrderingContext);

  // Function to determine the appropriate priority icon
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

  // Function to determine the appropriate status icon
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

  // Function to generate a unique background color based on a string (e.g., userName)
  const getBackgroundColor = (name) => {
    const colors = ['#FF5733', '#33B5E5', '#FFC107', '#4CAF50', '#FF9800', '#9C27B0'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length]; // Choose a color based on the hash
  };

  // Function to render an avatar with initials if no profile picture is available
  const renderAvatar = (name) => {
    if (name) {
      const initials = name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase(); // Extract initials from name

      return (
        <div
          className="initial-avatar"
          style={{ backgroundColor: getBackgroundColor(name) }}
        >
          <span>{initials}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="header-container">
      {/* Left section: Priority, Status, or User Avatar */}
      <div className="grouping-container">
        {/* Show priority icon if grouped by priority */}
        {grouping === "priority" && (
          <span className="icon">{renderPriorityIcon(priority)}</span>
        )}

        {/* Show status icon if grouped by status */}
        {grouping === "status" && (
          <span className="icon">{renderStatusIcon(status)}</span>
        )}

        {/* Show user avatar if grouped by user */}
        {grouping === "user" && (
          <div className="profile-container">
            {userName ? (
              renderAvatar(userName)
            ) : (
              <img
                className="profile-pic"
                src={`https://via.placeholder.com/40?text=${userId || "?"}`}
                alt="Profile"
              />
            )}
            <span
              className={`card-profile-avialable ${
                available ? "true" : "false"
              }`}
            ></span>
          </div>
        )}

        {/* Column title and task count */}
        <span className="title">{title}</span>
        <span className="count">{count}</span>
      </div>

      {/* Right section: Add and options menu */}
      <div className="grouping-container right">
        <span className="addition">
          <Add />
        </span>
        <span className="three-dots">
          <Dots />
        </span>
      </div>
    </div>
  );
};

export default ColumnHeader;
