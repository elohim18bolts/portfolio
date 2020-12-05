export interface INavBarItem {
  key: any;
  name: string;
  svgRep?: JSX.Element | null;
  hasMenu: boolean;
  menu?: Array<string> | null;
}
