import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p className="TaskList-empty">No tasks yet. Add one above.</p>;
  }

  return (
    <ul className="TaskList" aria-label="Task list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
