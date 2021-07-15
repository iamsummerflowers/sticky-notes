import React from "react";

const Header = (props) => (
  <header className="sticky-header">
    <h1 className="sticky-header-title">Super Sticky Notes</h1>
    <aside className="sticky-header-controls">
      <button className="add-sticky" onClick={props.addNote}>
        + New Note
      </button>
      <input
        className="search"
        type="text"
        placeholder="Type here to search..."
        value={props.searchText}
        onChange={props.onSearch}
      />
    </aside>
  </header>
);

export default Header;
