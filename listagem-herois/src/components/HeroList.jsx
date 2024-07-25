import React from 'react';

const HeroList = ({ heroes, selectHero }) => {
  return (
    <div>
      <h1>Metahumans</h1>
      <ul>
        {heroes.map(hero => (
          <li key={hero.id} onClick={() => selectHero(hero)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }}>
            <img src={hero.images.md} alt={hero.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            {hero.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
