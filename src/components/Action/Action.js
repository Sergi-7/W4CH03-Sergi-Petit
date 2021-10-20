const Action = ({ action, actionOnClick, className }) => {
  return (
    <button className={className} onClick={actionOnClick}>
      {action}
    </button>
  );
};

export default Action;
