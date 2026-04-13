import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK, taskReducer } from './taskReducer';

const TaskContext = createContext(null);

function createTaskId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const value = useMemo(
    () => ({
      tasks,
      addTask(text) {
        const trimmed = String(text).trim();
        if (!trimmed) return;
        dispatch({
          type: ADD_TASK,
          payload: { id: createTaskId(), text: trimmed },
        });
      },
      completeTask(id) {
        dispatch({ type: COMPLETE_TASK, payload: { id } });
      },
      removeTask(id) {
        dispatch({ type: REMOVE_TASK, payload: { id } });
      },
    }),
    [tasks]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return ctx;
}

export default TaskContext;
