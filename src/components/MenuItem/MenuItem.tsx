import "./MenuItem.scss";
import React from "react";

interface Props {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: React.FC<Props> = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// MenuItem.defaultProps = {
//   title: "",
// };

export default MenuItem;
