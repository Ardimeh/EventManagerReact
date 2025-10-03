import React, { useState } from "react";
export default function EventForm({ addEvent }) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    organizer: "",
    location: "",
    description: "",
    link: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.date.trim() || !form.organizer.trim()) {
      setError("Title, date and organizer are mandatory!");
      return;
    }
    addEvent({ ...form });
    setForm({
      title: "",
      date: "",
      organizer: "",
      location: "",
      description: "",
      link: "",
    });
    setError("");
  };

  return (
    <form className="eventform" onSubmit={handleSubmit}>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title*"
        required
      />
      <input
        name="date"
        value={form.date}
        onChange={handleChange}
        placeholder="Date*"
        type="date"
        required
      />
      <input
        name="organizer"
        value={form.organizer}
        onChange={handleChange}
        placeholder="Organizer*"
        required
      />
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        name="link"
        value={form.link}
        onChange={handleChange}
        placeholder="Link (optional)"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        rows={2}
      />
      <button type="submit">Add Event</button>
      {error && <span className="error">{error}</span>}
    </form>
  );
}