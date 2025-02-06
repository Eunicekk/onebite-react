import "../styles/ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ list, onDelete }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {list.map((item) => (
        <ContactItem key={item.id} {...item} onDelete={onDelete} />
      ))}
    </div>
  );
}
