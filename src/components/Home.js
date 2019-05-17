import React, { Component } from "react";
import { connect } from "react-redux";

export class Home extends Component {
  handleClick = id => {
    this.props.deleteTodo(id);
  };
  handleClickAdd = () => {
    let title = prompt("Please Add a new Todo");
    if (title) {
      this.props.addTodo(title);
    }
  };
  handleClickCheck = id => {
    this.props.changeCheck(id);
  };
  render() {
    console.log(this.props);
    const { todos } = this.props;
    const todoList = todos.length ? (
      todos.map(todo => {
        return (
          <div className="list-group-item list-group-item-action" key={todo.id}>
            <a>{todo.title}</a>
            <a onClick={() => this.handleClickCheck(todo.id)}>
              {todo.completed ? (
                <i className="far fa-check-square checked" />
              ) : (
                <i className="far fa-square unchecked" />
              )}
            </a>
            <button
              className="btn btn-danger"
              onClick={() => this.handleClick(todo.id)}
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
            onClick={() => this.handleClickAdd()}
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch({ type: "DELETE_TODO", id });
    },
    addTodo: title => {
      dispatch({ type: "ADD_TODO", title });
    },
    changeCheck: id => {
      dispatch({ type: "CHANGE_COMPLETED", id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
