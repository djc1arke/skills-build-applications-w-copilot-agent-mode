import { useEffect, useState } from 'react';
import { extractResults } from '../api';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const LEADERBOARD_API_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(LEADERBOARD_API_URL)
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
