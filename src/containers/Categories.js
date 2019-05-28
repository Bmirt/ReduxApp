import { connect } from "react-redux";
import Categories from "../components/Categories";
import {
  addCategory,
  deleteCategory,
  changeCategory
} from "../actions/categoriesActions";

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categoriesReducer.categories,
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCategory: (newId, name) => dispatch(addCategory(newId, name)),
    deleteCategory: name => dispatch(deleteCategory(name)),
    changeCategory: otherCategories => dispatch(changeCategory(otherCategories))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
