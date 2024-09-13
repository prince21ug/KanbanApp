import PropTypes from 'prop-types';
import './Filters.css';

const Filters = ({ setGrouping, setSorting }) => {
  return (
    <div className="filters">
      <div className="filter-option">
        <label htmlFor="grouping">Group By:</label>
        <select id="grouping" onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="filter-option">
        <label htmlFor="sorting">Sort By:</label>
        <select id="sorting" onChange={(e) => setSorting(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

Filters.propTypes = {
  setGrouping: PropTypes.func.isRequired,
  setSorting: PropTypes.func.isRequired,
};

export default Filters;
