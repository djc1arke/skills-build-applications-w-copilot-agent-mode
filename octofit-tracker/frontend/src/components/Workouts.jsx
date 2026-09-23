import { useEffect, useState } from 'react';
import { extractResults } from '../api';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const WORKOUTS_API_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(WORKOUTS_API_URL)
      .then((response) => response.json())
      .then((data) => setWorkouts(extractResults(data)))
      .catch((fetchError) => setError(fetchError.message));
  }, []);

  return (
    <section>
      <h1>Workouts</h1>
      {error && <p className="text-danger">Failed to load workouts: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Duration (min)</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout) => (
            <tr key={workout.id}>
              <td>{workout.title}</td>
              <td>{workout.type}</td>
              <td>{workout.durationMinutes}</td>
              <td>{workout.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Workouts;
