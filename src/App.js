import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import PhoneContext from "./components/Context/PhoneContext";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Display from "./components/Display/Display";
import { useState } from "react";

function App() {
  const numbersArray = [
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

  const [phoneNumbers, setPhoneNumbers] = useState([]);

  const addClickedNumber = (event) => {
    const addNewNumber = event.target.innerText;
    if (addNewNumber === "Delete") {
      setPhoneNumbers([]);
    } else if (phoneNumbers.length < 9) {
      setPhoneNumbers([...phoneNumbers, addNewNumber]);
    }
  };

  return (
    <PhoneContext.Provider value={{ addClickedNumber, phoneNumbers }}>
      <div className="container">
        <Info text={"call"}></Info>
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard keyArray={numbersArray}></Keyboard>
          </div>
          <Actions className={"actions"}></Actions>
          <Display className={"number"}></Display>
        </main>
      </div>
    </PhoneContext.Provider>
  );
}

export default App;
