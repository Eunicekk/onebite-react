import { useContext } from "react";
import "../styles/ContactList.css";
import ContactItem from "./ContactItem";
import { ContactStateContext } from "../App";

const ContactList = () => {
  const list = useContext(ContactStateContext);

  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {list.map((item) => (
        <ContactItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ContactList;
