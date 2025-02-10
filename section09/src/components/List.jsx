import { useState } from "react";
import "../styles/List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterData = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filterTodos = getFilterData();

  return (
    <div className="list">
      <h4>Todo List 🌱</h4>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todo-wrap">
        {filterTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
