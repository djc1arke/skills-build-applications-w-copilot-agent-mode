import { useEffect, useState } from 'react';
import { apiUrl, extractResults } from '../api';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl('leaderboard'))
      .then((response) => response.json())
      .then((data) => setLeaderboard(extractResults(data)))
      .catch((fetchError) => setError(fetchError.message));
  }, []);

  return (
    <section>
      <h1>Leaderboard</h1>
      {error && <p className="text-danger">Failed to load leaderboard: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry) => (
            <tr key={entry.rank}>
              <td>{entry.rank}</td>
              <td>{entry.name}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Leaderboard;
