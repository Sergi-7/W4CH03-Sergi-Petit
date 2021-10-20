const Action = ({ action, actionOnClick, className }) => {
  return (
    <a href="#" className={className} onClick={actionOnClick}>
      {action}
    </a>
  );
};

export default Action;
