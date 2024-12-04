import React, { useContext } from "react";
import GroupingContext from "../../context/GroupingContext";
import OrderingContext from "../../context/OrderingContext";
import "./comp.css";

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

const Card = ({ id, title, priority, tag = [], userId, status, available, userName }) => {
  const { grouping } = useContext(GroupingContext);
  const { ordering } = useContext(OrderingContext);

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
        return <UrgentColor />;
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

  // Generate unique background color for avatar based on userName
  const getBackgroundColor = (name) => {
    const colors = ["#FF5733", "#33B5E5", "#FFC107", "#4CAF50", "#FF9800", "#9C27B0"];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Generate initials avatar with background color
  const renderAvatar = (name) => {
    if (name) {
      const initials = name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase();

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
    <div className="card">
      <div className="card-header">
        <p className="card-id">{id}</p>
        <div className="profile-container">
          {grouping !== "user" && (
            <>
              {userName? (

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
            </>
          )}
        </div>
      </div>
      <div className="card-title-container">
        {grouping !== "status" && (
          <span className="card-status">{renderStatusIcon(status)}</span>
        )}
        <h3 className="card-title">{truncatedTitle}</h3>
      </div>
      <div className="card-footer">
        {grouping !== "priority" && (
          <div className="card-priority">
            <span className="icon">{renderPriorityIcon(priority)}</span>
          </div>
        )}
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
