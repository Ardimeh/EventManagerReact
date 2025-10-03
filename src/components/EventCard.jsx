import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventCard({ event, deleteEvent, updateEvent }) {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    title: event.title,
    date: event.date,
    organizer: event.organizer,
    location: event.location,
    description: event.description,
    link: event.link,
  });

  const handleEdit = (e) => {
    e.preventDefault();
    updateEvent({
      ...event,
      ...form,
    });
    setEdit(false);
  };

  return (
    <div className="eventcard">
      {edit ? (
        <form onSubmit={handleEdit} className="editform">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
          <input
            value={form.organizer}
            onChange={(e) => setForm({ ...form, organizer: e.target.value })}
            required
          />
          <input
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <input
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
          />
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={2}
          />
          <button type="submit">Ruaj</button>
          <button type="button" onClick={() => setEdit(false)}>
            Anulo
          </button>
        </form>
      ) : (
        <>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/events/${event.id}`)}
          >
            <b>{event.title}</b> <br />
            <span style={{ color: "#583eaf" }}>{event.organizer}</span>
            <br />
            <span style={{ fontSize: 13 }}>{event.date}</span>
          </div>
          <div style={{ marginTop: 10 }}>
            <button className="sm-btn" onClick={() => setEdit(true)}>
              Ndrysho
            </button>
            <button
              className="sm-btn"
              style={{ background: "#f87171" }}
              onClick={() => deleteEvent(event.id)}
            >
              Fshi
            </button>
          </div>
        </>
      )}
    </div>
  );
}