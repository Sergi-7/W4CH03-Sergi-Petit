import Action from "../Action/Action";

const Actions = ({ actionOnClick }) => {
  return (
    <div className="actions">
      <Action
        className={"actions a hang"}
        action={"Hang"}
        actionOnClick={actionOnClick}
      ></Action>
      <Action
        className={"actions a call"}
        action={"Call"}
        actionOnClick={actionOnClick}
      ></Action>
    </div>
  );
};

export default Actions;
