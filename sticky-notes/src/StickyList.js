import React from "react";
import Sticky from "./Sticky.js";

const stickySearchMatches = (note) => note.doesMatchSearch;

const StickyList = (props) => {
  const renderSticky = (note) => (
    <Sticky
      note={note}
      key={note.id}
      onType={props.onType}
      remove={props.remove}
    />
  );

  const searchMatches = props.notes.filter(stickySearchMatches);
  const noteElements = searchMatches.map(renderSticky);

  return <ul className="sticky-list">{noteElements} </ul>;
};

export default StickyList;
