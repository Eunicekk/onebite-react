import { memo, useContext } from "react";
import "../styles/ContactItem.css";
import { ContactDispatchContext } from "../App";

const ContactItem = ({ id, name, email }) => {
  const { onDelete } = useContext(ContactDispatchContext);

  const onClickButton = () => {
    onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onClickButton}>🗑️ Remove</button>
    </div>
  );
};

export default memo(ContactItem);
