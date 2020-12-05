import React from "react";
import "../../styles.css";
import "./navBar.style.css";
import homeIcon from "./homeBlack.svg";
import scriptsIcon from "./scriptsBlack.svg";
import projectIcon from "./projectsBlack.svg";
import contactIcon from "./contactBlack.svg";
import { Tooltip } from "../tooltip/tooltip.component";
import { Window } from "../window/window.component";
import NavBarItem from "../../interfaces/navBarItem.interface";
import { NavBarEvents } from "../../interfaces/navBarItem.interface";
export class NavBar extends React.Component {
  public state: { items: Array<NavBarItem> };
  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        {
          name: "Home",
          iconPath: homeIcon,
          tooltip: "Home Sweet home",
          hasWindow: false,
          events: { showTooltip: false, isWindowActive: false },
        },
        {
          name: "Projects",
          iconPath: projectIcon,
          tooltip: "Projects",
          hasWindow: true,
          events: { showTooltip: false, isWindowActive: false },
          sidePanelItems: [
            "Photoshop",
            "Indesign",
            "Autocad",
            "Python",
            "Web Design",
            "C Sharp",
            "C++",
            "Illustrator",
            "Animate",
          ],
        },
        {
          name: "Scripts",
          iconPath: scriptsIcon,
          tooltip: "Scripts",
          hasWindow: true,
          events: { showTooltip: false, isWindowActive: false },
        },
        {
          name: "Contact",
          iconPath: contactIcon,
          tooltip: "Contact Me",
          hasWindow: true,
          events: { showTooltip: false, isWindowActive: false },
        },
      ],
    };
  }
  handleCloseEvent = (item?: NavBarItem) => {
    const items = this.resetWindowView(null);
    this.setState({ items });
  };
  renderWindow = (item: NavBarItem) => {
    if (item.name === "Contact")
      return (
        <Window
          onClose={this.handleCloseEvent}
          item={item}
          hasSidePanel={false}
        >
          {item.name}
        </Window>
      );

    return (
      <Window
        onClose={this.handleCloseEvent}
        item={item}
        hasSidePanel={true}
        sidePanelItems={item.sidePanelItems}
      >
        {item.name}
      </Window>
    );
  };
  resetWindowView = (element: NavBarItem | null): NavBarItem[] => {
    const items = [...this.state.items];
    let events: NavBarEvents[] = [];
    items.map((i) => events.push(i.events));
    for (let i = 0; i < events.length; i++) events[i].isWindowActive = false;
    for (let i = 0; i < items.length; i++) {
      if (element !== null && items[i].name === element.name) {
        events[i].isWindowActive = true;
      }
      // console.log(events[i], items[i]);
      items[i].events = events[i];
    }

    console.log("Window Cleared", items);
    return items;
  };

  render() {
    return (
      <nav className="bottom">
        <div className="panelshadow round-19 dock">
          <ul className="flex-container">
            {this.state.items.map((item) => (
              <li key={item.name} className="item shadow round-5">
                {item.events.isWindowActive ? this.renderWindow(item) : null}
                {item.events.showTooltip ? (
                  <Tooltip>{item.tooltip}</Tooltip>
                ) : null}
                <img
                  src={item.iconPath}
                  alt={item.name}
                  onMouseEnter={() =>
                    this.setState(
                      (prevState) => (item.events.showTooltip = true)
                    )
                  }
                  onMouseLeave={() =>
                    this.setState(
                      (prevState) => (item.events.showTooltip = false)
                    )
                  }
                  onClick={() => {
                    item.hasWindow &&
                      this.setState((prev) => {
                        // console.log("Clicked");
                        const items = this.resetWindowView(item);
                        return items;
                      });
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
