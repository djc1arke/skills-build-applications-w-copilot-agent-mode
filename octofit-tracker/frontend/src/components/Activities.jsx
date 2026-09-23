import { useEffect, useState } from 'react';
import { apiUrl, extractResults } from '../api';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl('activities'))
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
