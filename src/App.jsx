import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./components/EventDetails";

const LOCAL_KEY = "eventManagerEvents";

export default function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const localEvents = localStorage.getItem(LOCAL_KEY);
    if (localEvents) {
      setEvents(JSON.parse(localEvents));
      setLoading(false);
    } else {
      fetch("/events.json")
        .then((r) => r.json())
        .then((data) => {
          setEvents(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, []);

  
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(events));
    }
  }, [events, loading]);

  const addEvent = (event) => {
    setEvents((prev) => [{ ...event, id: Date.now() }, ...prev]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const updateEvent = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === updatedEvent.id ? updatedEvent : e))
    );
  };

  return (
    <div>
      <header className="main-header">
        <svg height="32" width="32" fill="#755cdd" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#ede9fe" />
          <path d="M8 13h8v2H8zm0-4h8v2H8z" fill="#755cdd" />
        </svg>
        <h1>Event Manager</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              events={events}
              loading={loading}
              addEvent={addEvent}
              deleteEvent={deleteEvent}
              updateEvent={updateEvent}
            />
          }
        />
        <Route
          path="/events/:id"
          element={<EventDetails events={events} />}
        />
      </Routes>
      <footer className="footer">
        <span>
          Punuar nga <b>Ardi</b> &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}