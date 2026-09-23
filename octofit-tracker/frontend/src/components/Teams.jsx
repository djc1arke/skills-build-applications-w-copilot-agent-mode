import { useEffect, useState } from 'react';
import { apiUrl, extractResults } from '../api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl('teams'))
      .then((response) => response.json())
      .then((data) => setTeams(extractResults(data)))
      .catch((fetchError) => setError(fetchError.message));
  }, []);

  return (
    <section>
      <h1>Teams</h1>
      {error && <p className="text-danger">Failed to load teams: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.members}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Teams;
