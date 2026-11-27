import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h1>User Information</h1>

      <UserCard
        name="Ahmed Mohamed"
        email="ahmed@gmail.com"
      />

      <UserCard
        name="Ali Hassan"
        email="ali@gmail.com"
      />

      <UserCard
        name="Mohamed Abdi"
        email="mohamed@gmail.com"
      />
    </div>
  );
}

export default App;