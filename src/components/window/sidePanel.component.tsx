import React from "react";

import "./content.style.css";
import "./window.styles.css";

export const SidePanel = (props: { items?: string[]; onClick: any }) => (
  <ul className="side-panel">
    {props.items &&
      props.items.map((item) => (
        <li onClick={props.onClick} key={item}>
          {item}
        </li>
      ))}
  </ul>
);
