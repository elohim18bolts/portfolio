import React from "react";
import "./navItem.style.css";
import { Menu } from "../menu/menu.component";
import { Hmenu } from "../menu/horizontalMenu.component";

interface IProps {
  hasMenu?: boolean;
  k: any;
  menu?: Array<string> | null;
  children: any;
}
export const NavItem = (props: IProps) => {
  //console.log(props);
  return props.hasMenu ? (
    <div>
      <button className="navItem itemMenu" key={props.k}>
        {props.children}
      </button>
      <Hmenu menu={props.menu} />
    </div>
  ) : (
    <div>
      <button className="navItem" key={props.k} id={props.k}>
        {props.children}
      </button>
    </div>
  );
};
