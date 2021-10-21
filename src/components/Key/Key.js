const Key = ({ number, actionOnClick, className, testid }) => {
  return (
    <li>
      <button
        data-testid={testid}
        className={className}
        onClick={actionOnClick}
      >
        {number}
      </button>
    </li>
  );
};

export default Key;
