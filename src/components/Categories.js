import React, { Component } from "react";
import { connect } from "react-redux";

export class Categories extends Component {
  addCategoryFunction = () => {
    let name = prompt("Please add a new category");
    if (name) {
      this.props.addCategory(name);
    } else {
      alert(`Can't add a category with name of ${name}`);
    }
  };
  deleteCategoryFunction = name => {
    this.props.deleteCategory(name);
  };
  changeCategoryFunction = id => {
    let newName = prompt("Please Change the name");
    if (newName) {
      this.props.changeCategory(newName, id);
    } else {
      alert(`Can't add a category with name of ${newName}`);
    }
  };
  goTo = id => {
    this.props.history.push(`/${id}`);
  };
  render() {
    const { categories } = this.props;
    const categoryList = categories.map(category => {
      return (
        <div
          className="list-group-item list-group-item-action"
          key={category.id}
        >
          <a onClick={() => this.goTo(category.id)}>{category.name}</a>
          <button
            className="btn btn-warning"
            onClick={() => this.changeCategoryFunction(category.id)}
          >
            Change
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.deleteCategoryFunction(category.name)}
          >
            Delete
          </button>
        </div>
      );
    });
    return (
      <div>
        <div className="container home">
          <h4 className="center">Categories</h4>
          {categoryList}
          <button
            className="btn btn-success margin"
            onClick={() => this.addCategoryFunction()}
          >
            Add Category
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCategory: name => {
      dispatch({ type: "ADD_CATEGORY", name });
    },
    deleteCategory: name => {
      dispatch({ type: "DELETE_CATEGORY", name });
    },
    changeCategory: (newName, id) => {
      dispatch({ type: "CHANGE_CATEGORY", newName, id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
