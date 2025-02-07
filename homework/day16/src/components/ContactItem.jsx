import { memo } from "react";
import "../styles/ContactItem.css";

const ContactItem = ({ id, name, email, onDelete }) => {
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
