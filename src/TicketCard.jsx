
import PropTypes from 'prop-types';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.user}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

// Define prop types for TicketCard
TicketCard.propTypes = {
  ticket: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
  }).isRequired,
};

export default TicketCard;
