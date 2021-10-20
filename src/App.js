import "./App.css";

import Keyboard from "./components/Keyboard/Keyboard";

import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Display from "./components/Display/Display";

function App() {
  const testArray = [
    { number: 0, id: 0 },
    { number: 1, id: 1 },
    { number: 2, id: 2 },
    { number: 3, id: 3 },
    { number: 4, id: 4 },
    { number: 5, id: 5 },
    { number: 6, id: 6 },
    { number: 7, id: 7 },
    { number: 8, id: 8 },
    { number: 9, id: 9 },
    { number: "Delete", id: 10 },
  ];

  return (
    <div className="container">
      <Info text={"call"}></Info>
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard keyArray={testArray}></Keyboard>
        </div>
        <Actions className={"actions"}></Actions>
        <Display className={"number"}></Display>
      </main>
    </div>
  );
}

export default App;
