import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import SortBar from "../components/SortBar";

export default function Home({
  events,
  loading,
  addEvent,
  deleteEvent,
  updateEvent,
}) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const filteredEvents = events
    .filter(
      (e) =>
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.organizer.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date) - new Date(b.date);
      }
      if (sortBy === "organizer") {
        return a.organizer.localeCompare(b.organizer);
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="container">
      <EventForm addEvent={addEvent} />
      <SearchBar search={search} setSearch={setSearch} />
      <SortBar sortBy={sortBy} setSortBy={setSortBy} />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: 40 }}>Duke u ngarkuar...</div>
      ) : (
        <div className="eventlist">
          {filteredEvents.length === 0 && (
            <div style={{ marginTop: 30, color: "#888" }}>
              Asnje event nuk u gjet.
            </div>
          )}
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              deleteEvent={deleteEvent}
              updateEvent={updateEvent}
            />
          ))}
        </div>
      )}
    </div>
  );
}