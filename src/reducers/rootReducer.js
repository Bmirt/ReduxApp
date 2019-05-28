import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  todosReducer,
  categoriesReducer
});

export default rootReducer;
