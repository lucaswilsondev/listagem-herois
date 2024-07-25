import React, { useState, useEffect } from 'react';
import HeroList from './components/HeroList';
import SearchBar from './components/SearchBar';
import WinnerModal from './components/WinnerModal';
import './App.css';

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans')
      .then(response => response.json())
      .then(data => {
        setHeroes(data);
      })
      .catch(error => {
        console.error("There was an error fetching the heroes!", error);
      });
  }, []);

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectHero = (hero) => {
    if (selectedHeroes.length < 2) {
      setSelectedHeroes([...selectedHeroes, hero]);
      if (selectedHeroes.length === 1) {
        setModalIsOpen(true);
      }
    } else {
      setSelectedHeroes([hero]);
      setModalIsOpen(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedHeroes([]);
  };

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm} />
      <HeroList heroes={filteredHeroes} selectHero={selectHero} />
      <WinnerModal
        heroes={selectedHeroes}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default App;
