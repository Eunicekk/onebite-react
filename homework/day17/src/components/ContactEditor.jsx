import { ContactDispatchContext } from "../App";
import "../styles/ContactEditor.css";
import { memo, useContext, useRef, useState } from "react";

const ContactEditor = () => {
  const { onCreate } = useContext(ContactDispatchContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameRef = useRef("");
  const emailRef = useRef("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    if (name === "") {
      nameRef.current.focus();
    } else if (email === "") {
      emailRef.current.focus();
    } else {
      onCreate(name, email);
      setName("");
      setEmail("");
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          className="name"
          placeholder="이름 ..."
          value={name}
          onChange={onChangeName}
          ref={nameRef}
        />
        <input
          className="contact"
          placeholder="연락처(이메일) ..."
          value={email}
          onChange={onChangeEmail}
          ref={emailRef}
        />
      </div>
      <button onClick={onSubmit} onKeyDown={onKeyDown}>
        Add
      </button>
    </div>
  );
};

export default memo(ContactEditor);
