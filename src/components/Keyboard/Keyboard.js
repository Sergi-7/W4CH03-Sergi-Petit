import { useContext } from "react";
import PhoneContext from "../Context/PhoneContext";
import Key from "../Key/Key";

const Keyboard = ({ keyArray }) => {
  const { addClickedNumber } = useContext(PhoneContext);

  return (
    <ol className="keyboard">
      {keyArray.map((key) => {
        return (
          <Key
            testid={"test-number"}
            number={key.number}
            key={key.id}
            className={key.number === "Delete" ? "key big" : "key"}
            actionOnClick={(event) => {
              addClickedNumber(event);
            }}
          ></Key>
        );
      })}
    </ol>
  );
};

export default Keyboard;
