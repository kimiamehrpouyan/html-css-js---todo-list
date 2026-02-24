import { LoadTodos, SaveTodos } from "./storage.js";

let todos = [];

export function InitTodos() {
  todos = LoadTodos();
}

export function AddTodo(text) {
  const newTodo = {
    id: Date.now().toString(),
    text: text,
    isDone: false,
  };

  todos.push(newTodo);
  SaveTodos(todos);
  LoadTodos();
  console.log(todos);
  return todos;
}

export function DeleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  SaveTodos(todos);
  return todos;
}

export function ToggleTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.isDone = !todo.isDone;
  SaveTodos(todos);
  return todos;
}

export function GetTodos() {
  return todos;
}
