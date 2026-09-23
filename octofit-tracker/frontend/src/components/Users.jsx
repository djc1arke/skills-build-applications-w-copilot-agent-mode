import { useEffect, useState } from 'react';
import { apiUrl, extractResults } from '../api';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl('users'))
      .then((response) => response.json())
      .then((data) => setUsers(extractResults(data)))
      .catch((fetchError) => setError(fetchError.message));
  }, []);

  return (
    <section>
      <h1>Users</h1>
      {error && <p className="text-danger">Failed to load users: {error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Level</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.level}</td>
              <td>{user.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Users;
