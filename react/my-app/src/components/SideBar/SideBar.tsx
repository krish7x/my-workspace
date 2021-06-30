import React from "react";
import "./SideBar.css";

type items = {
  items: string[];
};

const SideBar: React.FC<items> = ({ items }: items): JSX.Element => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__listWrapper">
        {items.map((data, key) => (
          <li key={key}>{data}</li>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
