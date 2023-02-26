import {
  ADDED,
  ALLCOMPLETED,
  TOGGLED,
  COLORSELECTED,
  CLEARCOMPLETED,
  DELETED,
} from "./actionsType";
import initialState from "./initialState";

const nextTodoId = (todos) => {
  const maxID = todos.reducer((maxId, todo) => Math.max(todo.id, maxId), 0);
  return maxID + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo?.completed,
        };
      });

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
