// src/UserContext.js
import React, { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = UserContext.Provider;
// src/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserContext;
