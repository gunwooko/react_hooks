import React, { useState } from "react";

// Use react-hooks => useState

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const [item, setItem] = useState(1);
  const name = useInput("Mr.");

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
      <br />
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
      {/* you can use {...name} instead of value={name.value} ... */}
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
