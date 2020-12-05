import React from "react";
import "./App.css";
import "./styles.css";
import { NavBar } from "./components/navBar/navBar.component";
import { Gallery } from "./components/gallery/gallery.component";
import { Title } from "./components/title/title.component";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Title>Hello and Welcome</Title>
        <NavBar />
        <Gallery />
        {/* <Window /> */}
      </div>
    );
  }
}

export default App;
