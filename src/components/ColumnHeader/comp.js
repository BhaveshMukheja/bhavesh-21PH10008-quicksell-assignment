import React from "react";
import "./comp.css";
import { ReactComponent as Low } from "../../assets/icons_FEtask/Img - Low Priority.svg";
import { ReactComponent as Add } from "../../assets/icons_FEtask/add.svg";
import { ReactComponent as Dots } from "../../assets/icons_FEtask/3 dot menu.svg";

const ColumnHeader = () => {
  return (
    <div className="header-container">
      {/* Left Grouping Container */}
      <div className="grouping-container">
        <span className="icon">
          <Low />
        </span>
        <span className="title">Low</span>
        <span className="count">2</span>
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
