import { useState, useEffect } from 'react';

import CardList from './Components/card-list/card-list.jsx';
import SearchBox from './Components/search-box/search-box.jsx';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    console.log(searchField);
  };

  return (
    <div className="App">
      <h1 className='title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder={'Search monsters'} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;