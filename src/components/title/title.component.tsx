import React from "react";

import "./title.styles.css";
import "../../styles.css";

export const Title = (props: { children: string }) => (
  <div className="title panel shadow border-5">
    <h1>{props.children}</h1>
  </div>
);
