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

export function DeleteTodo(id) { }

export function GetTodos() { }
