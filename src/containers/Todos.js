import { connect } from "react-redux";
import Home from "../components/Todos";
import {
  deleteTodo,
  addTodo,
  changeTodo,
  changeCheck
} from "../actions/todosActions";

const mapStateToProps = (state, ownProps) => {
  let categoryId = ownProps.match.params.post_id;
  return {
    category: state.categories.find(category => category.id === categoryId),
    categoryId,
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (category, index) => dispatch(deleteTodo(category, index)),
    addTodo: newCategories => dispatch(addTodo(newCategories)),
    changeTodo: newCategories => dispatch(changeTodo(newCategories)),
    changeCheck: newCategories => dispatch(changeCheck(newCategories))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
