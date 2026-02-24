export function LoadTodos() {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
}

export function SaveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
