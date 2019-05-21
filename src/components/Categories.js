import React, { Component } from "react";
import { connect } from "react-redux";

export class Categories extends Component {
  addCategoryFunction = () => {
    let name = prompt("Please add a new category");
    if (name) {
      console.log(this.props.categories);
      let findIt = this.props.categories.find(category => {
        return category.name.toLowerCase() === name.toLowerCase();
      });
      if (findIt) {
        alert("Sorry a Category with similar name already exists");
      } else {
        this.props.addCategory(name);
      }
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
      let findIt = this.props.categories.find(category => {
        return category.name.toLowerCase() === newName.toLowerCase();
      });
      if (findIt) {
        alert("Sorry a Category with similar name already exists");
      } else {
        this.props.changeCategory(newName, id);
      }
    } else {
      alert(`Can't add a category with name of ${newName}`);
    }
  };
  goTo = id => {
    this.props.history.push(`/${id}`);
  };
  render() {
    const { categories } = this.props;
    const categoryList = categories.length ? (
      categories.map(category => {
        return (
          <div
            className="list-group-item list-group-item-action "
            id="categoryContainer"
            key={category.id}
          >
            <a onClick={() => this.goTo(category.id)}>{category.name}</a>
            <div>
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
          </div>
        );
      })
    ) : (
      <div className="center">No Categories to show</div>
    );
    return (
      <div className="content">
        <div className="container home">
          <h4 className="center categoryTitle">Categories</h4>
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
