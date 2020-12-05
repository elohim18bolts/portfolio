import React from "react";
import "./tooltip.styles.css";

export const Tooltip = (props: any) => (
  <div className="tooltip">{props.children}</div>
);
