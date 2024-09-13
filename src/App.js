import { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from './KanbanBoard';
import Filters from './Filters';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState({});
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('title');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        if (Array.isArray(response.data.tickets)) {
          setTickets(response.data.tickets);
        } else {
          setError('Unexpected data format');
        }
      })
      .catch(error => {
        setError('Error fetching tickets: ' + error.message);
      });
  }, []);

  useEffect(() => {
    if (tickets.length === 0) return;

    let groupedTickets = groupTickets(tickets, grouping);
    groupedTickets = sortTickets(groupedTickets, sorting);
    setFilteredTickets(groupedTickets);
  }, [tickets, grouping, sorting]);

  const groupTickets = (tickets, grouping) => {
    return tickets.reduce((acc, ticket) => {
      const key = ticket[grouping] || 'Unassigned';
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});
  };

  const sortTickets = (tickets, sorting) => {
    for (const key in tickets) {
      tickets[key] = tickets[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    }
    return tickets;
  };

  return (
    <div className="App">
      {error && <div className="error">{error}</div>}
      <Filters setGrouping={setGrouping} setSorting={setSorting} />
      <KanbanBoard tickets={filteredTickets} />
    </div>
  );
};

export default App;
