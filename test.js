const initialState = [
  {
    id: 1,
    text: "Learn React JS",
  },
  {
    id: 2,
    text: "Learn Redux",
    completed: true,
    color: "red",
  },
];

const nextTodoId = (todos) => {
  const maxID = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  console.log(maxID + 1);
};
nextTodoId(initialState);
