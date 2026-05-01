import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/userSlice";

function App() {
  const [name, setName] = useState("");

  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>User List</h1>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={() => dispatch(addUser(name))}>Add User</button>

        {users.map((user, index) => (
          <p key={index}>{user}</p>
        ))}
      </div>
    </>
  );
}

export default App;
