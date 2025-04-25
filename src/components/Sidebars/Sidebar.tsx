import React from "react";
import { ISidebarProps } from "@/types/sidebar";
import SidebarItems from "./SidebarItems";

const Sidebar = ({ items, onItemClick }: ISidebarProps) => {
  const leftItems = items.filter((item) => item.side === "left");
  const rightItems = items.filter((item) => item.side === "right");

  return (
    <div className="flex items-center justify-between pt-10">
      <div className="flex flex-col items-center justify-center gap-3">
        {leftItems.map((item) => (
          <SidebarItems
            key={`sidebar-${item.id}`}
            id={item.id}
            title={item.title}
            icon={item.icon}
            item={item}
            onItemClick={onItemClick}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        {rightItems.map((item) => (
          <SidebarItems
            key={`sidebar-${item.id}`}
            id={item.id}
            title={item.title}
            icon={item.icon}
            item={item}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
