import Action from "../Action/Action";

const Actions = () => {
  return (
    <div className="actions">
      <Action
        className={"actions a hang"}
        action={"Hang"}
        actionOnClick={() => {}}
      ></Action>
      <Action
        className={"actions a call"}
        action={"Call"}
        actionOnClick={() => {}}
      ></Action>
    </div>
  );
};

export default Actions;
