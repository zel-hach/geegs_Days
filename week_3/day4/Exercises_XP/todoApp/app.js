import { TodoList } from "./todo.js";

const todo = new TodoList();

todo.addTask("Create User");
todo.addTask("Authentification");

todo.markTaskCompleted(1);

todo.listTasks();