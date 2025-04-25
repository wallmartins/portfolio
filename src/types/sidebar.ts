export interface ISidebarItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  side: "left" | "right";
  position?: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
}

export interface ISidebarProps {
  items: ISidebarItem[];
  onItemClick: (item: ISidebarItem, element: HTMLDivElement | null) => void;
}

export interface ISideSidebarProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  item: ISidebarItem;
  onItemClick: (item: ISidebarItem, element: HTMLDivElement | null) => void;
}

export interface IconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}
