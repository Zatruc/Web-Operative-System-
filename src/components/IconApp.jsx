import React from "react";

const IconApp = ({ src, onClick }) => {
  return (
    <div className="my-1">
      <button type="button" className="box-border" onClick={onClick}>
        <img src={src} className="bg-contain h-8 w-8" alt="icon" />
      </button>
    </div>
  );
};

export default IconApp;
