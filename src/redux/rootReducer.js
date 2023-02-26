import todoReducer from "./todos/reducer";
import filterReducer from "./filters/reducer";

const rootReducer = {
  todos: todoReducer,
  filters: filterReducer,
};

export default rootReducer;
