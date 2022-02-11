import React from 'react';

type SearchBarProps = {
  placeholder: string;
  search: string;
  setSearch: (search: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, search, setSearch }) => {
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <input placeholder={placeholder} type="text" value={search} onChange={onSearchChange} />
    </div>
  );
};
