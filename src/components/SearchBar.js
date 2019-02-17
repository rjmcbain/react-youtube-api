import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { searchValue: "" }; // 3rd (updates state from on change function)

  onFormSubmit = e => {
    //5th
    e.preventDefault();

    // this.props.onSubmit(this.state.searchValue);
    this.props.onFormSubmit(this.state.searchValue);
  };

  onChange = e => {
    this.setState({ searchValue: e.target.value }); // 2nd
    // console.log(e.target.value);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchValue} // 4th (now sets value from state)
              onChange={this.onChange} // 1st
            />
          </div>
        </form>
      </div>
    );
  }
}
