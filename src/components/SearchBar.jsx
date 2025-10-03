import React from "react";
export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Kerko event me titull ose organizator..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="searchbar"
      autoFocus
    />
  );
}