import React, { useState } from "react";

// Use react-hooks => useState
const App = () => {
  const [item, setItem] = useState(1);

  const add = () => {
    setItem(item + 1);
  };

  const minus = () => {
    setItem(item - 1);
  };

  return (
    <div className="App">
      <h1>Hello {item} </h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={add}>BUTTON</button>
      <button onClick={minus}>BUTTON</button>
    </div>
  );
};

// Class component version
class ClassVersion extends React.Component {
  state = {
    item: 1,
  };

  add = () => {
    this.setState((state) => {
      return { item: state.item + 1 };
    });
  };

  minus = () => {
    this.setState((state) => {
      return { item: state.item - 1 };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.item} </h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.add}>BUTTON</button>
        <button onClick={this.minus}>BUTTON</button>
      </div>
    );
  }
}

export default App;
