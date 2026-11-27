
import "./App.css";

function UserList({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const users = [
    {
      id: 1,
      name: "Cawaale Mohamed",
      email: "cawaale@gmail.com",
    },
    {
      id: 2,
      name: "Ahmed Ali",
      email: "ahmed@gmail.com",
    },
    {
      id: 3,
      name: "Mohamed Hassan",
      email: "mohamed@gmail.com",
    },
    {
      id: 4,
      name: "Abdi Omar",
      email: "abdi@gmail.com",
    },
  ];

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
