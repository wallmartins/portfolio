import React from "react";
import {
  AiOutlineHome,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

interface MenuProps {
  className?: string;
}

const Menu: React.FC<MenuProps> = () => {
  const navItems = [
    { icon: AiOutlineHome, label: "Home", href: "/", target: "_self" },
    {
      icon: AiOutlineLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/wallmartins",
      target: "_blank",
    },
    {
      icon: AiOutlineGithub,
      label: "GitHub",
      href: "https://www.github.com/wallmartins",
      target: "_blank",
    },
    {
      icon: AiOutlineTwitter,
      label: "Twitter",
      href: "https://x.com/wall_martins",
      target: "_blank",
    },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0d1220]/50 px-4 py-4 rounded-xl shadow-lg z-50">
      <div className="flex items-center justify-center space-x-8">
        {navItems.map(({ icon: Icon, label, href, target }, index) => (
          <a
            key={index}
            href={href}
            className="text-[#c0cbcd]/50 hover:text-[#c0cbcd] transition-colors duration-200 p-2 first:border-r-2 first:border-r-[#c0cbcd]/20 first:pr-8"
            aria-label={label}
            target={target}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
