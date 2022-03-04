import React from "react";
import "./lane.css";

type ILaneProps = {
  title: string;
};
const Lane: React.FC<ILaneProps> = ({ title, children }) => {
  return (
    <section className="lane">
      <h2 className="lane-title">{title}</h2>
      <div className="lane-items">{children}</div>
    </section>
  );
};

export { Lane };
