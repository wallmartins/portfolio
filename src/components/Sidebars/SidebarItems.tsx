// components/SidebarItems.tsx
import React, { useRef } from "react";
import Icon from "./Icon";
import { ISideSidebarProps } from "@/types/sidebar";

const SidebarItems = ({
  id,
  title,
  icon,
  item,
  onItemClick,
}: ISideSidebarProps) => {
  const iconRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div ref={iconRef}>
        <Icon
          key={`icons-${id}`}
          icon={icon}
          label={title}
          onClick={() => onItemClick(item, iconRef.current)}
        />
      </div>
    </div>
  );
};

export default SidebarItems;
