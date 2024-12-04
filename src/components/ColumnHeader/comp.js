import React, {useContext} from "react";
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

import { ReactComponent as Add } from "../../assets/icons_FEtask/add.svg";
import { ReactComponent as Dots } from "../../assets/icons_FEtask/3 dot menu.svg";

const ColumnHeader = ({title, count, priority, status, userId, available}) => {

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
      case "In Progress":
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



  const { grouping } = useContext(GroupingContext); // Current grouping (e.g., "user", "priority")
  const { ordering } = useContext(OrderingContext); // Current ordering (e.g., "priority", "title")

  return (
    <div className="header-container">
      {/* Left Grouping Container */}
      <div className="grouping-container">
      {grouping==='priority' && ( 
        <span className="icon">
          {renderPriorityIcon(priority)}
        </span>
        )}

{grouping==='status' && ( 
        <span className="icon">
          {renderStatusIcon(status)}
        </span>
        )}

{grouping==='user' && ( 
        <span className="icon">
          {renderStatusIcon(status)}
        </span>
        )}

{grouping === "user" && (
  <>
  <div className="profile-container">

 
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
     </div>
  </>
)}

        <span className="title">{title}</span>
        <span className="count">{count}</span>
      </div>

      {/* Right Grouping Container */}
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
