import React, { Component } from "react";
import { connect } from "react-redux";

export class Home extends Component {
  handleClick = (id, categoryId) => {
    this.props.deleteTodo(id, categoryId);
  };
  handleClickAdd = () => {
    let title = prompt("Please Add a new Todo");
    if (title) {
      this.props.addTodo(title, this.props.categoryId);
    }
  };
  handleClickCheck = (id, categoryId) => {
    this.props.changeCheck(id, categoryId);
  };
  changeTodoFunction = (id, categoryId) => {
    let title = prompt("Please choose a new name");
    this.props.changeTodo(id, title, categoryId);
  };
  goTo = () => {
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    const todos = this.props.category.todos;
    const todoList = todos.length ? (
      todos.map(todo => {
        return (
          <div className="list-group-item list-group-item-action" key={todo.id}>
            <a>{todo.title}</a>
            <a
              onClick={() =>
                this.handleClickCheck(todo.id, this.props.categoryId)
              }
            >
              {todo.completed ? (
                <i className="far fa-check-square checked" />
              ) : (
                <i className="far fa-square unchecked" />
              )}
            </a>
            <button
              className="btn btn-warning"
              onClick={() =>
                this.changeTodoFunction(todo.id, this.props.categoryId)
              }
            >
              Change Todo
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleClick(todo.id, this.props.categoryId)}
            >
              Delete
            </button>
          </div>
        );
      })
    ) : (
      <div className="center">No todos to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {todoList}
          <button
            className="btn btn-success margin"
            onClick={() => this.handleClickAdd(this.props.categoryId)}
          >
            Add Todo
          </button>
          <button className="btn btn-info margin" onClick={() => this.goTo()}>
            Categories
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let categoryId = ownProps.match.params.post_id;
  return {
    category: state.categories.find(category => category.id === categoryId),
    categoryId: ownProps.match.params.post_id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (id, categoryId) => {
      dispatch({ type: "DELETE_TODO", id, categoryId });
    },
    addTodo: (title, categoryId) => {
      dispatch({ type: "ADD_TODO", title, categoryId });
    },
    changeTodo: (id, title, categoryId) => {
      dispatch({ type: "CHANGE_TODO", id, title, categoryId });
    },
    changeCheck: (id, categoryId) => {
      dispatch({ type: "CHANGE_COMPLETED", id, categoryId });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
