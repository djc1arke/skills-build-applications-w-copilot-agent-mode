import { useEffect, useState } from 'react';
import { extractResults } from '../api';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
const ACTIVITIES_API_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(ACTIVITIES_API_URL)
      .then((response) => response.json())
      .then((data) => setActivities(extractResults(data)))
      .catch((fetchError) => setError(fetchError.message));
  }, []);

  return (
    <section>
      <h1>Activities</h1>
      {error && <p className="text-danger">Failed to load activities: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Duration (min)</th>
            <th>Distance (km)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.type}</td>
              <td>{activity.durationMinutes}</td>
              <td>{activity.distanceKm}</td>
              <td>{activity.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Activities;
