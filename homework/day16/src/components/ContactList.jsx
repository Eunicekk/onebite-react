import "../styles/ContactList.css";
import ContactItem from "./ContactItem";

const ContactList = ({ list, onDelete }) => {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {list.map((item) => (
        <ContactItem key={item.id} {...item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
