import React from "react";

import "./card.component.style.css";
import "../../styles.css";

export const Card = (props: any) => {
  return <div className="panel shadow round-5">{props.children}</div>;
};
