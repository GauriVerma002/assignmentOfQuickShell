import React from 'react';
import './TicketCard.css';

function TicketCard({ ticket, user }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Tag: {ticket.tag.join(', ')}</p>
      {user ? (
        <>
          <p>Assigned to: {user.name}</p>
          <p>Available: {user.available ? 'Yes' : 'No'}</p>
        </>
      ) : (
        <p>Assigned to: Unknown</p>
      )}
    </div>
  );
}

export default TicketCard;
