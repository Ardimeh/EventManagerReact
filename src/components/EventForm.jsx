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
      setError("Titulli, data dhe organizatori janë të detyrueshme!");
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
        placeholder="Titulli*"
        required
      />
      <input
        name="date"
        value={form.date}
        onChange={handleChange}
        placeholder="Data*"
        type="date"
        required
      />
      <input
        name="organizer"
        value={form.organizer}
        onChange={handleChange}
        placeholder="Organizatori*"
        required
      />
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Lokacioni"
      />
      <input
        name="link"
        value={form.link}
        onChange={handleChange}
        placeholder="Link (opsional)"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Përshkrimi"
        rows={2}
      />
      <button type="submit">Shto Event</button>
      {error && <span className="error">{error}</span>}
    </form>
  );
}