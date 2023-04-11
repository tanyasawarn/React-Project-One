import React, { useState } from 'react';

import AddUser from './component/User/AddUser';
import UserList from './component/User/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return  ([
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]);
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
