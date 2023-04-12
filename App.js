import React, { useState } from 'react';

import AddUser from './component/User/AddUser';
import UserList from './component/User/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge,uCollege) => {
    setUsersList((prevUserList) => {
      return  ([
        ...prevUserList,
        { name: uName, age: uAge, collegename:uCollege, id: Math.random().toString() },
      ]);
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
