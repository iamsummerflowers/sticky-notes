import React, { Component } from "react";
import Header from "./Header.js";
import StickyList from "./StickyList.js";

/* add state section to app component*/
class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  onType = (editMeId, updatedKey, updatedValue) => {
    const updateIdMatch = (note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          return {
            ...note,
            title: updatedValue
          };
        } else {
          return {
            ...note,
            description: updatedValue
          };
        }
      }
    };
    const updatedNotes = this.state.notes.map(updateIdMatch);
    this.setState({ notes: updatedNotes });
  };

  onSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!searchText) {
        return {
          ...note,
          doesMatchSearch: true
        };
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(searchText);
        const descriptionMatch = description.includes(searchText);
        const hasMatch = titleMatch || descriptionMatch;
        return {
          ...note,
          doesMatchSearch: hasMatch
        };
      }
    });
    this.setState({
      searchText: searchText,
      notes: updatedNotes
    });
  };

  remove = (deleteMeID) => {
    const notIdMatch = (note) => note.id !== deleteMeID;
    const updatedNotes = this.state.notes.filter(notIdMatch);
    this.setState({ notes: updatedNotes });
  };

  componentDidUpdate() {
    const stringifiedNotes = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", stringifiedNotes);
  }

  componentDidMount() {
    const stringifiedNotes = localStorage.getItem("savedNotes");
    if (stringifiedNotes) {
      const savedNotes = JSON.parse(stringifiedNotes);
      this.setState({ notes: savedNotes });
    }
  }

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <StickyList
          notes={this.state.notes}
          onType={this.onType}
          remove={this.remove}
        />
      </div>
    );
  }
}

export default App;
