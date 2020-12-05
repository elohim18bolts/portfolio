import React from "react";
import "./menu.style.css";

interface IProps {
  menu: Array<string> | undefined | null;
}
export const Menu = (props: IProps) => (
  <ul className="menu">
    {props.menu?.map((i) => (
      <li key={i} className="menuItem">
        <button>{i}</button>
      </li>
    ))}
  </ul>
);
