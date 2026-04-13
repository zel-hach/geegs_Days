import React from 'react';
import { useTasks } from '../context/TaskContext';

export default function TaskItem({ task }) {
  const { completeTask, removeTask } = useTasks();

  return (
    <li className={`TaskItem ${task.completed ? 'TaskItem--done' : ''}`}>
      <label className="TaskItem-label">
        <input
          type="checkbox"
          className="TaskItem-check"
          checked={task.completed}
          onChange={() => completeTask(task.id)}
          aria-label={task.completed ? 'Mark as not done' : 'Mark as done'}
        />
        <span className="TaskItem-text">{task.text}</span>
      </label>
      <button
        type="button"
        className="TaskItem-remove"
        onClick={() => removeTask(task.id)}
      >
        Remove
      </button>
    </li>
  );
}
