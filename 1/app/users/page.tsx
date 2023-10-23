import React, { cache } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' });
  const users: User[] = await res.json();

  return (
    <div>
      <h1>Users Page</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>

            </tr>
          )))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage
