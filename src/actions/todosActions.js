import {
  DELETE_TODO,
  ADD_TODO,
  CHANGE_COMPLETED,
  CHANGE_TODO
} from "../constants/todosConstants";

export const deleteTodo = (category, index) => ({
  type: DELETE_TODO,
  category,
  index
});

export const addTodo = newCategories => ({
  type: ADD_TODO,
  newCategories
});

export const changeTodo = newCategories => ({
  type: CHANGE_TODO,
  newCategories
});

export const changeCheck = newCategories => ({
  type: CHANGE_COMPLETED,
  newCategories
});
