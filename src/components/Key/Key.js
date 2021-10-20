const Key = ({ number, actionOnClick, className }) => {
  return (
    <li>
      <button className={className} onClick={actionOnClick}>
        {number}
      </button>
    </li>
  );
};

export default Key;
