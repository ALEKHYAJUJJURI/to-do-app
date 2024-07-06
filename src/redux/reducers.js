import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions';

const firstStage = {
  tasks: [],
};

const rootReducer = (state = firstStage, actionState) => {
  switch (actionState.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, actionState.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== actionState.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === actionState.payload.taskId ? { ...task, text: actionState.payload.updatedTask } : task
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
