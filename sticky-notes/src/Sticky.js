import React, { Component } from "react";

class Sticky extends Component {
  updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = this.props.note.id;
    this.props.onType(editMeId, "title", updatedValue);
  };
  updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = this.props.note.id;
    this.props.onType(editMeId, "description", updatedValue);
  };
  clickDelete = () => this.props.remove(this.props.note.id);

  render() {
    return (
      <li className="sticky-note">
        <input
          className="sticky-note-name"
          type="text"
          placeholder="Title"
          value={this.props.note.title}
          onChange={this.updateTitle}
        />
        <textarea
          className="sticky-note-description"
          placeholder="Type something..."
          value={this.props.note.description}
          onChange={this.updateDescription}
        />
        <span className="remove-sticky" onClick={this.clickDelete}>
          X
        </span>
      </li>
    );
  }
}

export default Sticky;
