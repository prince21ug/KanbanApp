import PropTypes from 'prop-types';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets }) => {
  return (
    <div className="kanban-board">
      {Object.keys(tickets).map((group) => (
        <div key={group} className="kanban-group">
          <h3>{group}</h3>
          {tickets[group].length > 0 ? (
            tickets[group].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <p>No tickets in this group</p>
          )}
        </div>
      ))}
    </div>
  );
};

// Define prop types for KanbanBoard
KanbanBoard.propTypes = {
  tickets: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        priority: PropTypes.number.isRequired,
      })
    )
  ).isRequired,
};

export default KanbanBoard;
