import "./App.css";
import {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useRef,
} from "react";
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

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [list, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((name, email) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: name,
        email: email,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={list}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
