import React, { useEffect, useState } from "react";

// Use react-hooks => useState
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
      console.log(value);
    }
    console.log(event.target);
  };
  return { value, onChange };
};

// Use react-hooks => useState
const content = [
  { tab: "Section 1", content: "I'm the content of the section 1" },
  { tab: "Section 2", content: "I'm the content of the section 2" },
  { tab: "Section 3", content: "I'm the content of the section 3" },
];

const useTabs = (initialValue, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialValue);
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

const App = () => {
  const [item, setItem] = useState(0);
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  const { currentItem, changeItem } = useTabs(0, content);

  // useEffect => componentDidMount, componentWillUnMount, componentDidUpdate
  const sayAllgood = () => {
    console.log("All Good!");
  };
  useEffect(sayAllgood, [item]); // the second argument is dependency that will only activate if the values in the list
  /* also you can use like this way
  useEffect(sayAllgood, []); // doesn't work componentDidUpdate because the 2nd argument is empty list. 
  useEffect(sayAllgood); 
  */

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
      <br />
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
      <br />
    </div>
  );
};

// Class component version
// class ClassVersion extends React.Component {
//   state = {
//     item: 1,
//   };

//   add = () => {
//     this.setState((state) => {
//       return { item: state.item + 1 };
//     });
//   };

//   minus = () => {
//     this.setState((state) => {
//       return { item: state.item - 1 };
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello {this.state.item} </h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.add}>BUTTON</button>
//         <button onClick={this.minus}>BUTTON</button>
//       </div>
//     );
//   }
// }

export default App;
