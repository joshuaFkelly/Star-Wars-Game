// Character Object
const characters = [
  {
    id: 1,
    name: "Obi-Wan Kenobi",
    hp: 150,
    ap: 8,
    cap: 12,
  },
  {
    id: 2,
    name: "Anakin Skywalker",
    hp: 175,
    ap: 10,
    cap: 10,
  },
  {
    id: 3,
    name: "Darth Maul",
    hp: 125,
    ap: 4,
    cap: 15,
  },
  {
    id: 4,
    name: "Darth Sidious",
    hp: 100,
    ap: 5,
    cap: 10,
  },
];
// Variables for DOM manipulation
const allCharacters = document.querySelectorAll(".card");
const playerOne = document.querySelector("#playerOne");
const opponent = document.querySelector("#currentOpponent");

// Select Character

allCharacters.forEach((value, index, array) => {
  const characterDiv = value;

  function moveCharacterNode() {
    if (playerOne.hasChildNodes() === false) {
      playerOne.append(characterDiv);
    } else if (opponent.hasChildNodes() === false) {
      opponent.append(characterDiv);
    } else {
      console.log(
        "youre ready for battle. defeat your opponent before selecting a new one!"
      );
    }
  }
  characterDiv.addEventListener("click", moveCharacterNode);
});
// allow character cards to be clickable

// if no player is selected, then fill player slot
// if no opponent is selected, fill opponent slot

// arena
const attack = () => {
  // player clicks attack button which makes the player ap subtract from villain hp
  // each attack will add its own ap to itself(8+8+8+8), villain cap stays the same
  // if either player or vilain hp is brought to 0 or less than 0, game is over
  // if player hp reachs 0, player loses
  // if villain hp reachs 0, villain card is moved to graveyard(cards in graveyard are not clickable)
  // another villain must be selected
};
// restart game
const restartGame = () => {
  // all stats are reset back to original
  // all cards are put back in character select
};
