import React, { Component } from "react";
import NotFound from "./NotFound";

export class Home extends Component {
  handleClick = id => {
    let category = this.props.category;
    let todos = category.todos.filter(todo => todo.id !== id);
    category.todos = todos;
    const index = this.props.categoryId;

    this.props.deleteTodo(category, index);
  };
  handleClickAdd = () => {
    let title = prompt("Please Add a new Todo");
    if (title) {
      let findIt = this.props.category.todos.find(todo => {
        return todo.title.toLowerCase() === title.toLowerCase();
      });
      if (findIt) {
        alert("Sorry todo with such name already exists");
      } else {
        let ourCategory = this.props.state.categoriesReducer.categories.filter(
          category => {
            return category.id === this.props.categoryId;
          }
        );

        let otherCategories = this.props.state.categoriesReducer.categories.filter(
          category => {
            return category.id !== this.props.categoryId;
          }
        );

        let dateObj = new Date();
        let month = dateObj.getMonth() + 1; //months from 1-12
        let day = dateObj.getDate();
        let year = dateObj.getFullYear();
        let seconds = dateObj.getSeconds();
        let minutes = dateObj.getMinutes();
        let hour = dateObj.getHours();

        let newDate =
          year +
          "/" +
          month +
          "/" +
          day +
          " " +
          hour +
          ":" +
          minutes +
          ":" +
          seconds;

        let todoIds = [];
        ourCategory[0].todos.map(todo => {
          return todoIds.push(todo.id);
        });
        let newId = Math.max(...todoIds);
        if (!newId) {
          newId = 0;
        }
        if (newId === -Infinity) {
          newId = 0;
        }
        let newTodo = {
          id: String(newId + 1),
          title: title,
          completed: false,
          dateCreated: newDate
        };
        ourCategory[0].todos.push(newTodo);
        let newCategories = [];
        if (otherCategories) {
          for (let i = 0; i < otherCategories.length; i++) {
            newCategories.push(otherCategories[i]);
          }
        }
        newCategories.splice(this.props.categoryId - 1, 0, ourCategory[0]);

        this.props.addTodo(newCategories);
      }
    }
  };
  handleClickCheck = (id, categoryId) => {
    let ourCategory = this.props.state.categoriesReducer.categories.filter(
      category => {
        return category.id === categoryId;
      }
    );

    let otherCategories = this.props.state.categoriesReducer.categories.filter(
      category => {
        return category.id !== categoryId;
      }
    );

    let findIt = object => {
      return object.id === id;
    };

    let todo = ourCategory[0].todos.find(findIt);
    let completedBoolean = todo.completed;

    if (completedBoolean) {
      todo.completed = false;
    }
    if (completedBoolean === false) {
      todo.completed = true;
    }
    let otherTodos = [...ourCategory[0].todos];
    const index = id - 1;
    otherTodos.splice(index, 1, todo);
    let newCategories = [];
    if (otherCategories) {
      for (let i = 0; i < otherCategories.length; i++) {
        newCategories.push(otherCategories[i]);
      }
    }
    newCategories.splice(categoryId - 1, 0, ourCategory[0]);

    this.props.changeCheck(newCategories);
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
        let ourCategory = this.props.state.categoriesReducer.categories.filter(
          category => {
            return category.id === categoryId;
          }
        );

        let otherCategories = this.props.state.categoriesReducer.categories.filter(
          category => {
            return category.id !== categoryId;
          }
        );

        let findIt = object => {
          return object.id === id;
        };

        let todo = ourCategory[0].todos.find(findIt);

        todo.title = title;

        let otherTodos = [...ourCategory[0].todos];
        const index = id - 1;
        otherTodos.splice(index, 1, todo);
        let newCategories = [];
        if (otherCategories) {
          for (let i = 0; i < otherCategories.length; i++) {
            newCategories.push(otherCategories[i]);
          }
        }
        newCategories.splice(categoryId - 1, 0, ourCategory[0]);

        this.props.changeTodo(newCategories);
      }
    } else {
      alert("Invalid name");
    }
  };
  goTo = () => {
    this.props.history.push("/");
  };

  render() {
    if (!this.props.category) {
      return <NotFound />;
    }
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
              <span>{todo.title}</span>
              <span
                onClick={() =>
                  this.handleClickCheck(todo.id, this.props.categoryId)
                }
              >
                {todo.completed ? (
                  <i className="far fa-check-square checked" />
                ) : (
                  <i className="far fa-square unchecked" />
                )}
              </span>
              <span className="dateCreated">{todo.dateCreated}</span>
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

export default Home;
