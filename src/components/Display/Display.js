import { useContext } from "react";
import PhoneContext from "../Context/PhoneContext";

const Display = ({ className }) => {
  const { phoneNumbers } = useContext(PhoneContext);

  return <span className={className}>{phoneNumbers}</span>;
};
export default Display;
