import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function AddTaskForm() {
  const { addTask } = useTasks();
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTask(text);
    setText('');
  }

  return (
    <form className="AddTaskForm" onSubmit={handleSubmit}>
      <label className="AddTaskForm-label" htmlFor="new-task">
        New task
      </label>
      <div className="AddTaskForm-row">
        <input
          id="new-task"
          className="AddTaskForm-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          autoComplete="off"
        />
        <button className="AddTaskForm-submit" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
