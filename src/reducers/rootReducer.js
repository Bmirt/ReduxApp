import {
  DELETE_TODO,
  ADD_TODO,
  CHANGE_COMPLETED,
  CHANGE_TODO
} from "../constants/todosConstants";
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  CHANGE_CATEGORY
} from "../constants/categoriesConstants";

const rootReducer = (state, action) => {
  if (action.type === DELETE_TODO) {
    const newCategories = [...state.categories];
    const deepClone4Win = JSON.parse(JSON.stringify(newCategories));
    return {
      ...state,
      categories: deepClone4Win
    };
  }
  if (action.type === ADD_TODO) {
    return {
      ...state,
      categories: [...action.newCategories]
    };
  }
  if (action.type === CHANGE_COMPLETED) {
    return {
      ...state,
      categories: [...action.newCategories]
    };
  }
  if (action.type === CHANGE_TODO) {
    return {
      ...state,
      categories: [...action.newCategories]
    };
  }

  if (action.type === ADD_CATEGORY) {
    return {
      ...state,
      categories: [
        ...state.categories,
        {
          id: String(action.newId + 1),
          name: action.name,
          todos: []
        }
      ]
    };
  }
  if (action.type === DELETE_CATEGORY) {
    let newCategories = state.categories.filter(category => {
      return action.name !== category.name;
    });
    return {
      ...state,
      categories: newCategories
    };
  }
  if (action.type === CHANGE_CATEGORY) {
    return {
      ...state,
      categories: action.otherCategories
    };
  }
  return state;
};

export default rootReducer;
