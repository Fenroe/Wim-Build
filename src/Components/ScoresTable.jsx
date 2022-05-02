function ScoresTable({ handleScores, scoreboardData, selectedMap }) {
  return (
    <table className="scores-table">
      <thead>
        <tr className="scores-table-headings-container">
          <th>
            <h2 className="scores-table-heading">Place</h2>
          </th>
          <th>
            <h2 className="scores-table-heading">Name</h2>
          </th>
          <th>
            <h2 className="scores-table-heading">Time</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        {handleScores(scoreboardData, selectedMap)}
      </tbody>
    </table>
  );
}

export default ScoresTable;
