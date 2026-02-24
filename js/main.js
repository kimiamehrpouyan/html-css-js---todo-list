import { AddTodo, InitTodos } from "./state.js";
import { LoadTodos } from "./storage.js";

lucide.createIcons();

InitTodos();

AddTodo("reading");
AddTodo("listening");
AddTodo("writing");

LoadTodos();
