import { useState } from 'react';
import { useCreateUserMutation, useGetUsersQuery } from '../api/apiSlice';


const Users = () => {
  const [inputValue, setInputValue] = useState('');
  const {
    data: users,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetUsersQuery();


  const [createUser] = useCreateUserMutation(); // hon la2ni badi 23ml mutation ye3ni lezem 23ml distraction [] ma object wl createUser hiye essm l method li m3arafa bl Slice
  const addUser = () => {
    createUser(inputValue);
    setInputValue('');
  };

  return (
    <div>
      {isLoading && !isError && <h1>Loading...</h1>}
      {!isLoading && isError ? <p>Error : {error}</p> : null}
      {!isLoading && isSuccess && users && <div>Total: {users.length}</div>}
      <div>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      <div>
        {!isLoading &&
          isSuccess &&
          users?.map((user, index) => <div key={index}>{user.name}</div>)}
      </div>
    </div>
  );
};
export default Users;