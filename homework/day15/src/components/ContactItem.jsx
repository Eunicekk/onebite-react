import "../styles/ContactItem.css";

export default function ContactItem({ id, name, email, onDelete }) {
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
}
