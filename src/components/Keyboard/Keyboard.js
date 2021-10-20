import Key from "../Key/Key";

const Keyboard = ({ keyArray }) => {
  const deleteNumber = (array) => {};
  const addNumber = (num) => {};
  return (
    <ol className="keyboard">
      {keyArray.map((key) => {
        return (
          <Key
            number={key.number}
            key={key}
            className={"key"}
            actionOnClick={() => {}}
          ></Key>
        );
      })}
    </ol>
  );
};

export default Keyboard;
