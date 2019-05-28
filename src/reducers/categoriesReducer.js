import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  CHANGE_CATEGORY
} from "../constants/categoriesConstants";
const initState = {
  categories: []
};

const categoriesReducer = (state = initState, action) => {
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

export default categoriesReducer;
