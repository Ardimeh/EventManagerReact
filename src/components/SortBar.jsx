import React from "react";
export default function SortBar({ sortBy, setSortBy }) {
  return (
    <div className="sort-controls">
      <label style={{ marginRight: 6 }}>Rendit sipas:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="date">Data</option>
        <option value="title">Titulli</option>
        <option value="organizer">Organizatori</option>
      </select>
    </div>
  );
}