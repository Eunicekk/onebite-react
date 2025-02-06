import "./App.css";
import { useReducer, useRef } from "react";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockData = [
  { id: 0, name: "김윤", email: "cho_lyn@naver.com" },
  { id: 1, name: "이정환", email: "king199777@gmail.com" },
  { id: 2, name: "부승관", email: "boo0116@naver.com" },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [list, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (name, email) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: name,
        email: email,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList list={list} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
