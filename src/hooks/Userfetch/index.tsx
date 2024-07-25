import { useState, useEffect } from 'react';

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

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users);

        const uniqueCities = Array.from(
          new Set(data.users.map((user: User) => user.address.city))
        ).map((city) => city as string);
        setCities(uniqueCities);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return { users, cities };
};

export default useFetchUsers;
