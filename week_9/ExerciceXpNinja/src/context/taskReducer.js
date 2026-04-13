export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

/**
 * @param {Array<{ id: string, text: string, completed: boolean }>} state
 * @param {{ type: string, payload?: object }} action
 */
export function taskReducer(state, action) {
  switch (action.type) {
    case ADD_TASK: {
      const { id, text } = action.payload;
      return [...state, { id, text, completed: false }];
    }
    case COMPLETE_TASK: {
      const { id } = action.payload;
      return state.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    }
    case REMOVE_TASK: {
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    }
    default:
      return state;
  }
}
