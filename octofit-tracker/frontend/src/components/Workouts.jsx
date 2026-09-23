import { useEffect, useState } from 'react';
import { apiUrl, extractResults } from '../api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl('workouts'))
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
