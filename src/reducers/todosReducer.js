import {
  DELETE_TODO,
  ADD_TODO,
  CHANGE_COMPLETED,
  CHANGE_TODO
} from "../constants/todosConstants";
const initialState = {
  categories: []
};

const todosReducer = (state = initialState, action) => {
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
  return state;
};

export default todosReducer;
