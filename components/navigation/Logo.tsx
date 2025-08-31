import React from "react";

interface LogoProps {
  content: string;
}

const Logo: React.FC<LogoProps> = ({ content }) => {
  return <h1 className="title-variant-1">{content}</h1>;
};

export default Logo;
