import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  CHANGE_CATEGORY
} from "../constants/categoriesConstants";

export const addCategory = (newId, name) => ({
  type: ADD_CATEGORY,
  newId,
  name
});

export const deleteCategory = name => ({
  type: DELETE_CATEGORY,
  name
});

export const changeCategory = otherCategories => ({
  type: CHANGE_CATEGORY,
  otherCategories
});
