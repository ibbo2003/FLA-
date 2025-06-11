import { useReducer, useState } from "react";
type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};

type action =
  | { type: "add"; text: string }
  | { type: "remove"; id: number }
  | { type: "toggle"; id: number };
function ToDoReducer(state: ToDo[], action: action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
  }
}

const ToDoList = () => {
  const [todos, dispatch] = useReducer(ToDoReducer, []);
  const [input, setInput] = useState<string>("");
  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed) {
      dispatch({ type: "add", text: trimmed });
      setInput("");
    }
  }

  return (
    <div className="container my-4 text-center">
      <form onSubmit={handleAdd} className=" d-flex my-4 ">
        <input
          type="text"
          placeholder="Enter new task here"
          value={input}
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ms-3">
          Add
        </button>
      </form>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-item-center"
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <div>
              <button className="btn btn-success me-2" onClick={() => dispatch({ type: "toggle", id: todo.id })}>
                {todo.completed ? "undo" : "completed"}
              </button>
              <button className=" btn btn-danger" onClick={() => dispatch({ type: "remove", id: todo.id })}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
