import React from "react";
import "./modal.styles.css";
import { useState } from "react";

const Modal = (props: { children?: any; onButtonCloseClick: () => void }) => {
  return (
    <div className="modal">
      <div className="top-panel">
        <button className="close" onClick={props.onButtonCloseClick}>
          <span>x</span>
        </button>
      </div>
      <div className="image-container">{props.children}</div>
    </div>
  );
};

export default Modal;
