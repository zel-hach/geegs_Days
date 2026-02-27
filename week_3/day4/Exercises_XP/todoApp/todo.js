export class TodoList {
    constructor() {
        this.todolist = [];
        this.nextId = 1; 
    }

    addTask(task) {
        this.todolist.push({
            id: this.nextId++,  
            task: task,
            completed: false
        });
    }

    markTaskCompleted(id) {
        const todo = this.todolist.find(t => t.id === id);
        if (todo) {
            todo.completed = true;
        }
    }

    listTasks() {
        console.log(this.todolist);
    }
}