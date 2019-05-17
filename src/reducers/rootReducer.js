const initState = {
  todos: [
    { id: "1", title: "todo 1", completed: true },
    { id: "2", title: "todo 2", completed: false },
    { id: "3", title: "todo 3", completed: true }
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (action.type === "DELETE_TODO") {
    let newTodos = state.todos.filter(todo => {
      return action.id !== todo.id;
    });
    return {
      ...state,
      todos: newTodos
    };
  }
  if (action.type === "ADD_TODO") {
    let todoIds = [];
    state.todos.map(todo => {
      todoIds.push(todo.id);
    });
    let newId = Math.max(...todoIds);
    if (newId === -Infinity) {
      newId = 0;
    }
    console.log(newId);
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: String(newId + 1),
          title: action.title,
          completed: false
        }
      ]
    };
  }
  if (action.type === "CHANGE_COMPLETED") {
    console.log("before", state.todos);
    let findIt = object => {
      return object.id === action.id;
    };

    let todo = state.todos.find(findIt);

    let completedBoolean = todo.completed;

    if (completedBoolean) {
      todo.completed = false;
    }
    if (completedBoolean === false) {
      todo.completed = true;
    }
    console.log("todo", todo);
    let otherTodos = [...state.todos];
    const index = action.id - 1;
    otherTodos.splice(index, 1, todo);

    console.log("after", otherTodos);

    return {
      ...state,
      todos: otherTodos
    };
  }
  return state;
};

export default rootReducer;
