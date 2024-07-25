import React, { useState } from 'react';
import useFetchUsers from '@/hooks/useFetchUsers';
import useDebouncedValue from '@/hooks/useDebouncedValue';
import UserTable from '@/components/UserTable';
import SearchBar from '@/components/SearchBar';
import {User} from "@/components/Item";

const UserSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [highlightOldest, setHighlightOldest] = useState(false);

  const { users, cities } = useFetchUsers();
  const debouncedSearchTerm = useDebouncedValue(searchTerm);

  const filteredUsers = users.filter(
    (user) =>
      (user.firstName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) &&
      (cityFilter === '' || user.address.city.toLowerCase() === cityFilter.toLowerCase())
  );

  const getOldestUserInCity = (city: string): User | null => {
    const usersInCity = filteredUsers.filter((user) => user.address.city === city);
    if (usersInCity.length === 0) {
      return null;
    }
    return usersInCity.reduce((oldest, user) => (user.age > oldest.age ? user : oldest), usersInCity[0]);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '300px',
        border: '1px solid #ccc',
        padding: '20px',
        backgroundColor: '#fff',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
      }}
    >
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        highlightOldest={highlightOldest}
        setHighlightOldest={setHighlightOldest}
        cities={cities}
      />
      <UserTable users={filteredUsers} highlightOldest={highlightOldest} getOldestUserInCity={getOldestUserInCity} />
    </div>
  );
};

export default UserSearch;
