import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EventDetails({ events }) {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);
  const navigate = useNavigate();

  if (!event)
    return (
      <div style={{ textAlign: "center", marginTop: 60 }}>
        Event not found! <br />
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        &larr; Back
      </button>
      <h2>{event.title}</h2>
      <div className="details-box">
        <div>
          <b>Date:</b> {event.date}
        </div>
        <div>
          <b>Organizer:</b> {event.organizer}
        </div>
        <div>
          <b>Location:</b> {event.location || "-"}
        </div>
        <div>
          <b>Description:</b> {event.description || "-"}
        </div>
        <div>
          <b>Link:</b>{" "}
          {event.link ? (
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              {event.link}
            </a>
          ) : (
            "-"
          )}
        </div>
      </div>
    </div>
  );
}