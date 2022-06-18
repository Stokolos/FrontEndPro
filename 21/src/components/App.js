import React from "react";
import Example from "./Example";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      country: `Ukraine`
    }
  }

  changeText = () => {
    this.state.country === `Ukraine` ? this.setState({ country: `Ukraine is the best` }) : this.setState({ country: `Ukraine` });
  }

  render() {
    return (
      <div>
        <Example element={this.state.country} />
        <button onClick={this.changeText}>Change</button>
      </div>
    )
  }
}
export default App