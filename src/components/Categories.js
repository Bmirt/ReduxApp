import React, { Component } from "react";

export class Categories extends Component {
  addCategoryFunction = () => {
    let name = prompt("Please add a new category");
    if (name) {
      let findIt = this.props.categories.find(category => {
        return category.name.toLowerCase() === name.toLowerCase();
      });
      if (findIt) {
        alert("Sorry a Category with similar name already exists");
      } else {
        let categoryIds = [];

        this.props.state.categoriesReducer.categories.map(category => {
          return categoryIds.push(category.id);
        });
        let newId = Math.max(...categoryIds);
        if (newId === -Infinity) {
          newId = 0;
        }

        this.props.addCategory(newId, name);
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
        let findIt = object => {
          return object.id === id;
        };

        let newCategory = this.props.state.categoriesReducer.categories.find(
          findIt
        );

        newCategory.name = newName;
        let otherCategories = [
          ...this.props.state.categoriesReducer.categories
        ];
        const index = id - 1;
        otherCategories.splice(index, 1, newCategory);

        this.props.changeCategory(otherCategories);
      }
    } else {
      alert(`Can't add a category with name of ${newName}`);
    }
  };
  goTo = id => {
    this.props.history.push(`/${id}`);
  };
  render() {
    const { categories } = this.props.state.categoriesReducer;

    const categoryList = categories.length ? (
      categories.map(category => {
        return (
          <div
            className="list-group-item list-group-item-action "
            id="categoryContainer"
            key={category.id}
          >
            <span onClick={() => this.goTo(category.id)}>{category.name}</span>
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

export default Categories;
