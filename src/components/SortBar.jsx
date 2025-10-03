import React from "react";
export default function SortBar({ sortBy, setSortBy }) {
  return (
    <div className="sort-controls">
      <label style={{ marginRight: 6 }}>Sort by:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="date">Date</option>
        <option value="title">Title</option>
        <option value="organizer">Organizer</option>
      </select>
    </div>
  );
}