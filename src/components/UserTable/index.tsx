import React from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  age: number;
  address: {
    city: string;
  };
  birthDate: string;
  
}

interface UserTableProps {
  users: User[];
  highlightOldest: boolean;
  getOldestUserInCity: (city: string) => User | null;
}

const UserTable: React.FC<UserTableProps> = ({ users, highlightOldest, getOldestUserInCity }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        border: '1px solid #ccc',
        padding: '0px',
        marginTop: '20px',
        overflow: 'auto',
        borderRadius: '8px',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', alignItems:"center" }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '5px', color: 'black' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '5px', color: 'black' }}>City</th>
            <th style={{ textAlign: 'left', padding: '5px', color: 'black' }}>Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const isOldestInCity = highlightOldest && getOldestUserInCity(user.address.city)?.id === user.id;
            const birthDate = new Date(user.birthDate);
            const birthDateString = `${birthDate.getDate()}.${birthDate.getMonth() + 1}.${birthDate.getFullYear()}`;

            return (
              <tr key={user.id} style={{ borderBottom: '0px solid #ccc', marginBottom: '10px' }}>
                <td
                  style={{
                    textAlign:"left",
                    padding: '0px 0px',
                    backgroundColor: isOldestInCity ? 'rgba(100, 149, 237, 0.2)' : 'transparent',
                    color: 'black',
                    marginBottom: isOldestInCity ? '32px' : '0',
                    borderRadius: isOldestInCity ? '8px 0 0 8px' : '0',
                  }}
                >
                  {user.firstName} {user.lastName}
                </td>
                <td
                  style={{
                    padding: '0px',
                    textAlign:"left",
                    backgroundColor: isOldestInCity ? 'rgba(100, 149, 237, 0.2)' : 'transparent',
                    color: 'black',
                    marginBottom: isOldestInCity ? '32px' : '0',
                    borderRadius: isOldestInCity ? '0px' : '0',
                  }}
                >
                  {user.address.city}
                </td>
                <td
                  style={{
                    padding: '0px',
                    
                    textAlign: 'left',
                    backgroundColor: isOldestInCity ? 'rgba(100, 149, 237, 0.2)' : 'transparent',
                    color: 'black',
                    marginBottom: isOldestInCity ? '32px' : '0',
                    borderRadius: isOldestInCity ? '0 8px 8px 0' : '0',
                  }}
                >
                  {birthDateString}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
