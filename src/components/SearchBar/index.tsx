import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  cityFilter: string;
  setCityFilter: (value: string) => void;
  highlightOldest: boolean;
  setHighlightOldest: (value: boolean) => void;
  cities: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  cityFilter,
  setCityFilter,
  highlightOldest,
  setHighlightOldest,
  cities,
}) => {
  return (
    <div style={{ display: 'flex', width: '100%', marginBottom: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <p style={{ color: 'black' }}>Name</p>
        <input
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1,
            color: "white",
            
            marginRight: '10px', border: '2px solid black', borderRadius: '10px' }}
        />
      </div>
      <div>
        <p style={{ color: 'black' }}>City</p>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          style={{ flex: 1, marginRight: '10px', border: '2px solid black', borderRadius: '10px' }}
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <label>
        <p style={{ color: 'black' }}>Highlight Oldest Users</p>
        <input
          type="checkbox"
          checked={highlightOldest}
          onChange={() => setHighlightOldest(!highlightOldest)}
          style={{ marginRight: '5px' }}
        />
      </label>
    </div>
  );
};

export default SearchBar;
