import React, { ReactElement } from "react";

interface IProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const ServicesComponents = ({ icon, title, description }: IProps) => {
  return (
    <div>
      <div className="bg-[rgb(9,1,13)] p-4 mt-4 backdrop-blur-sm border-b border-[#181d2c]/10 shadow-xs rounded-lg flex flex-col gap-4">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServicesComponents;
