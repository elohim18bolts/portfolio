import React from "react";
import "./window.styles.css";

import "../../styles.css";

import NavBarItem from "../../interfaces/navBarItem.interface";
import { SidePanel } from "./sidePanel.component";
import { PhotoShopContent } from "./photoshop.content";

export class Window extends React.Component {
  state: { showWindow: boolean; windowClass: string };
  props: {
    children?: string;
    name?: string;
    onClose: Function;
    item: NavBarItem;
    hasSidePanel: boolean;
    sidePanelItems?: string[];
  };
  private currentElementInInfoPanel: string;
  constructor(props: any) {
    super(props);
    this.currentElementInInfoPanel = "";
    this.props = props;
    this.state = {
      showWindow: true,
      windowClass: "window",
    };
    // console.log(this.state.showWindow);
  }

  clickedElement = (e: React.MouseEvent) => {
    if (e.currentTarget.textContent?.toLowerCase() === "photoshop")
      this.setState(() => (this.currentElementInInfoPanel = "photoshop"));
    else this.setState(() => (this.currentElementInInfoPanel = ""));
  };
  renderElement() {
    if (this.currentElementInInfoPanel === "photoshop")
      return PhotoShopContent();
    return <div>Waiting for implementation</div>;
  }
  render() {
    return (
      this.state.showWindow && (
        <div className={this.state.windowClass}>
          <div className="top-panel">
            <button
              className="close"
              onClick={() => {
                this.setState({ showWindow: false });
                this.props.onClose();
              }}
            >
              <span>x</span>
            </button>

            <button
              className="maximize"
              onClick={() => this.setState({ windowClass: "window-full" })}
            >
              <span>+</span>
            </button>
            <div>{this.props.children}</div>
          </div>
          <div className="window-body">
            {this.props.hasSidePanel ? (
              <div className="left-panel">
                <SidePanel
                  items={this.props.sidePanelItems}
                  onClick={this.clickedElement}
                />
              </div>
            ) : null}

            <div
              className={`info-panel ${
                !this.props.hasSidePanel && "full-width"
              }`}
            >
              {this.renderElement()}
            </div>
          </div>
        </div>
      )
    );
  }
}
