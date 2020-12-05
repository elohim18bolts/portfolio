export default interface NavBarItem {
  name: string;
  iconPath?: string;
  tooltip?: string;
  events: NavBarEvents;
  hasWindow: boolean;
  sidePanelItems?: string[];
}

export interface NavBarEvents {
  showTooltip: boolean;
  isWindowActive: boolean;
}
