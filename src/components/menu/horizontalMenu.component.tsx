import React from "react";
import "./menu.style.css";
interface IProps {
  menu: Array<string> | undefined | null;
}

export const Hmenu = (props: IProps) => {
  return (
    <ul className=" menu hmenu">
      {props.menu?.map((menuItem) => (
        <li key={menuItem}>
          <span>{menuItem}</span>
        </li>
      ))}
    </ul>
  );
};
