import { LoadTodos, SaveTodos } from "./storage";

let todos = [];

export function AddTodo(text) {
  const newTodo = {
    id: Date.now().toString(),
    text: text,
    isDone: false,
  };

  todos.push(newTodo);
  SaveTodos(newTodo);
  LoadTodos();
  console.log(todos);
  return todos;
}

export function DeleteTodo(id) {}

export function GetTodos() {}
