import React from "react";
export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for an event by title or organizer..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="searchbar"
      autoFocus
    />
  );
}