const initState = {
  categories: [
    {
      id: "1",
      name: "category1",
      todos: [
        { id: "1", title: "todo 1", completed: true },
        { id: "2", title: "todo 2", completed: false },
        { id: "3", title: "todo 3", completed: true }
      ]
    },
    {
      id: "2",
      name: "category2",
      todos: [
        { id: "1", title: "Category2 1", completed: true },
        { id: "2", title: "Category2 2", completed: false },
        { id: "3", title: "Category2 3", completed: true }
      ]
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_TODO") {
    let ourCategory = state.categories.filter(category => {
      return category.id === action.categoryId;
    });
    let newTodos = ourCategory[0].todos.filter(todo => {
      return action.id !== todo.id;
    });
    ourCategory[0].todos = [...newTodos];
    console.log(ourCategory[0]);
    let otherCategories = state.categories.filter(category => {
      return category.id !== action.categoryId;
    });
    console.log("this is other categories before", otherCategories[0]);
    let index = action.id - 1;
    console.log("this is other categories after", typeof otherCategories);
    let newCategories = [];
    newCategories.push(otherCategories[0]);
    newCategories.splice(index, 0, ourCategory[0]);
    console.log("this is newCategories", newCategories);
    const deepClone4Win = JSON.parse(JSON.stringify(newCategories));
    return {
      ...state,
      categories: deepClone4Win
    };
  }
  if (action.type === "ADD_TODO") {
    console.log(action.title, action.categoryId);
    let ourCategory = state.categories.filter(category => {
      return category.id === action.categoryId;
    });

    let otherCategories = state.categories.filter(category => {
      return category.id !== action.categoryId;
    });

    let todoIds = [];
    ourCategory[0].todos.map(todo => {
      todoIds.push(todo.id);
    });
    let newId = Math.max(...todoIds);
    if (newId === -Infinity) {
      newId = 0;
    }
    let newTodo = {
      id: String(newId + 1),
      title: action.title,
      completed: false
    };
    ourCategory[0].todos.push(newTodo);
    console.log("lets see", ourCategory[0]);
    let newCategories = [];
    newCategories.push(otherCategories[0]);
    newCategories.splice(action.categoryId - 1, 0, ourCategory[0]);
    console.log("this is newCategories", newCategories);
    const deepClone4Win = JSON.parse(JSON.stringify(newCategories));
    console.log("this is newCategories", newCategories);
    return {
      ...state,
      categories: deepClone4Win
    };
  }
  if (action.type === "CHANGE_COMPLETED") {
    console.log(action.id, action.categoryId);
    let ourCategory = state.categories.filter(category => {
      return category.id === action.categoryId;
    });

    let otherCategories = state.categories.filter(category => {
      return category.id !== action.categoryId;
    });

    let findIt = object => {
      return object.id === action.id;
    };

    let todo = ourCategory[0].todos.find(findIt);
    console.log("this is our todo", todo);
    let completedBoolean = todo.completed;

    if (completedBoolean) {
      todo.completed = false;
    }
    if (completedBoolean === false) {
      todo.completed = true;
    }
    console.log("todo", todo);
    let otherTodos = [...ourCategory[0].todos];
    const index = action.id - 1;
    otherTodos.splice(index, 1, todo);
    console.log(otherTodos);
    console.log("lets see", ourCategory[0]);
    let newCategories = [];
    newCategories.push(otherCategories[0]);
    newCategories.splice(action.categoryId - 1, 0, ourCategory[0]);
    console.log("this is newCategories", newCategories);
    const deepClone4Win = JSON.parse(JSON.stringify(newCategories));
    console.log("this is newCategories", newCategories);

    console.log("after", otherTodos);

    return {
      ...state,
      categories: deepClone4Win
    };
  }
  if (action.type === "CHANGE_TODO") {
    console.log("hereee", action.id, action.title, action.categoryId);
    let ourCategory = state.categories.filter(category => {
      return category.id === action.categoryId;
    });

    let otherCategories = state.categories.filter(category => {
      return category.id !== action.categoryId;
    });

    let findIt = object => {
      return object.id === action.id;
    };

    let todo = ourCategory[0].todos.find(findIt);
    console.log("this is our todo", todo);

    todo.title = action.title;

    console.log("todo", todo);
    let otherTodos = [...ourCategory[0].todos];
    const index = action.id - 1;
    otherTodos.splice(index, 1, todo);
    console.log(otherTodos);
    console.log("lets see", ourCategory[0]);
    let newCategories = [];
    newCategories.push(otherCategories[0]);
    newCategories.splice(action.categoryId - 1, 0, ourCategory[0]);
    console.log("this is newCategories", newCategories);
    const deepClone4Win = JSON.parse(JSON.stringify(newCategories));
    console.log("this is newCategories", newCategories);

    console.log("after", otherTodos);

    return {
      ...state,
      categories: deepClone4Win
    };
  }

  if (action.type === "ADD_CATEGORY") {
    let categoryIds = [];
    state.categories.map(category => {
      categoryIds.push(category.id);
    });
    let newId = Math.max(...categoryIds);
    if (newId === -Infinity) {
      newId = 0;
    }
    console.log(newId);
    return {
      ...state,
      categories: [
        ...state.categories,
        {
          id: String(newId + 1),
          name: action.name,
          todos: []
        }
      ]
    };
  }
  if (action.type === "DELETE_CATEGORY") {
    console.log(action.name);
    let newCategories = state.categories.filter(category => {
      return action.name !== category.name;
    });
    return {
      ...state,
      categories: newCategories
    };
  }
  if (action.type === "CHANGE_CATEGORY") {
    let findIt = object => {
      return object.id === action.id;
    };

    let newCategory = state.categories.find(findIt);
    console.log(newCategory);

    newCategory.name = action.newName;
    let otherCategories = [...state.categories];
    const index = action.id - 1;
    otherCategories.splice(index, 1, newCategory);

    return {
      ...state,
      categories: otherCategories
    };
  }
  return state;
};

export default rootReducer;
