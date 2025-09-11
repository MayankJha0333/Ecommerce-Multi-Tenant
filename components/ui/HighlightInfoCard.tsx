import React from "react";

interface HighlightInfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
const HighlightInfoCard = ({
  title,
  description,
  icon,
}: HighlightInfoCardProps) => {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <div className="flex flex-col">
        <h2 className="font-semibold uppercase leading-4">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HighlightInfoCard;
