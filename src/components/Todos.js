import React, { Component } from "react";
import { connect } from "react-redux";
import NotFound from "./NotFound";

export class Home extends Component {
  handleClick = (id, categoryId) => {
    this.props.deleteTodo(id, categoryId);
  };
  handleClickAdd = () => {
    let title = prompt("Please Add a new Todo");
    if (title) {
      let findIt = this.props.category.todos.find(todo => {
        return todo.title.toLowerCase() === title.toLowerCase();
      });
      console.log("this is findit", findIt);
      if (findIt) {
        alert("Sorry todo with such name already exists");
      } else {
        this.props.addTodo(title, this.props.categoryId);
      }
    }
  };
  handleClickCheck = (id, categoryId) => {
    this.props.changeCheck(id, categoryId);
  };
  changeTodoFunction = (id, categoryId) => {
    let title = prompt("Please choose a new name");
    if (title) {
      let findIt = this.props.category.todos.find(todo => {
        return todo.title.toLowerCase() === title.toLowerCase();
      });
      if (findIt) {
        alert("Sorry todo with such name already exists");
      } else {
        this.props.changeTodo(id, title, categoryId);
      }
    } else {
      alert("Invalid name");
    }
  };
  goTo = () => {
    this.props.history.push("/");
  };

  render() {
    console.log("This props is here", this.props);
    if (!this.props.category) {
      return <NotFound />;
    }
    console.log(this.props.category);
    const todos = this.props.category.todos;
    const todoList = todos.length ? (
      todos.map(todo => {
        return (
          <div
            className="list-group-item list-group-item-action "
            id="todosContainer"
            key={todo.id}
          >
            <div className="text">
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
            </div>
            <div className="buttons">
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
          </div>
        );
      })
    ) : (
      <div className="center">No todos to show</div>
    );

    return (
      <div className="content">
        <div className="container home">
          <h4 className="center categoryTitle">
            {this.props.category.name} Todos
          </h4>
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
