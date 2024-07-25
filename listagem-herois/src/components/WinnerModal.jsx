import React from 'react';
import Modal from 'react-modal';

const compareHeroes = (hero1, hero2) => {
  const stats1 = hero1.powerstats;
  const stats2 = hero2.powerstats;

  const hero1Total = Object.values(stats1).reduce((a, b) => a + b, 0);
  const hero2Total = Object.values(stats2).reduce((a, b) => a + b, 0);

  return hero1Total > hero2Total ? hero1 : hero2;
};

const WinnerModal = ({ heroes, modalIsOpen, closeModal }) => {
  if (heroes.length < 2) {
    return null;
  }

  const winner = compareHeroes(heroes[0], heroes[1]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Winner Modal"
    >
      <h2>Battle Winner</h2>
      {winner ? (
        <div>
          <h3>{winner.name}</h3>
          <img src={winner.images.md} alt={winner.name} />
          <p>Total Stats: {Object.values(winner.powerstats).reduce((a, b) => a + b, 0)}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      ) : null}
    </Modal>
  );
};

export default WinnerModal;
