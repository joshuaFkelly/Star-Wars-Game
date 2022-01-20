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
let incrementAttack = 1;
const characterSelect = document.querySelector("#characterSelect");
const modal = document.querySelector("#gameOverModal");
const graveyard = document.querySelector("#graveyard");
const allCharacters = document.querySelectorAll(".card");
const playerOne = document.querySelector("#playerOne");
const opponent = document.querySelector("#currentOpponent");
const characterSelectWarning = document.querySelector("#warning");
const attackBtn = document.querySelector("#attackButton");
console.log(characterSelectWarning);
// Select Character

allCharacters.forEach((value, index, array) => {
  const characterDiv = value;
  function moveCharacterNode() {
    if (!playerOne.hasChildNodes()) {
      playerOne.append(characterDiv);
    } else if (!opponent.hasChildNodes()) {
      opponent.append(characterDiv);
    } else if (playerOne.hasChildNodes() && !opponent.hasChildNodes()) {
    } else {
      console.log(
        "youre ready for battle. defeat your opponent before selecting a new one!"
      );
    }
    if (playerOne.hasChildNodes() && !opponent.hasChildNodes()) {
      characterSelectWarning.textContent = "*Pick an Opp*";
      characterSelectWarning.className = "fs-1 text-danger";
    }
    if (playerOne.hasChildNodes() && opponent.hasChildNodes()) {
      characterSelectWarning.textContent = "";
    }
  }

  characterDiv.addEventListener("click", moveCharacterNode);
});
// arena
const attack = () => {
  const selectedCharacter = playerOne.childNodes[0].id;
  const currentPlayer = document.querySelector(`#${selectedCharacter}`);

  const selectedOpponent = opponent.childNodes[0].id;
  const currentOpponent = document.querySelector(`#${selectedOpponent}`);

  let playerHp = parseInt(currentPlayer.dataset.hp);
  let playerAp = parseInt(currentPlayer.dataset.ap);
  let playerCap = parseInt(currentPlayer.dataset.cap);

  let opponentHp = parseInt(currentOpponent.dataset.hp);
  let opponentAp = parseInt(currentOpponent.dataset.ap);
  let opponentCap = parseInt(currentOpponent.dataset.cap);

  let updatedOpponentHp = opponentHp - playerAp * incrementAttack;

  currentOpponent.dataset.hp = updatedOpponentHp;

  let updatedPlayerHp = playerHp - opponentCap;

  currentPlayer.dataset.hp = updatedPlayerHp;

  incrementAttack++;

  currentPlayer.querySelector("#hp").textContent = updatedPlayerHp;
  currentOpponent.querySelector("#hp").textContent = updatedOpponentHp;

  console.log(`${selectedCharacter} attacks ${selectedOpponent}`);
  console.log(`player ap: ${playerAp}`);
  console.log(`updated opponent hp: ${updatedOpponentHp}`);
  console.log(`opponent cap: ${opponentCap}`);
  console.log(`updated hp: ${updatedPlayerHp}`);
  console.log(`increment attack : ${incrementAttack}`);
  // player clicks attack button which makes the player ap subtract from villain hp
  // each attack will add its own ap to itself(8+8+8+8), villain cap stays the same
  // if either player or vilain hp is brought to 0 or less than 0, game is over
  if (!currentOpponent.hasChildNodes()) {
    characterSelectWarning.textContent = "*Pick an Opp*";
    characterSelectWarning.className = "fs-1 text-danger";
  }
  if (updatedOpponentHp <= 0) {
    currentOpponent.classList.add("col-3");
    graveyard.append(currentOpponent);
    console.log("he need sum milk");
  }
  if (!characterSelect.hasChildNodes()) {
    console.log("You won!");
    window.location.reload();
  }
  if (updatedPlayerHp <= 0) {
    alert("You lose!");
    window.location.reload();
  }
  // if player hp reachs 0, player loses
  // if villain hp reachs 0, villain card is moved to graveyard(cards in graveyard are not clickable)
  // another villain must be selected
};
// restart game
const restartGame = () => {
  // all stats are reset back to original
  // all cards are put back in character select
};
attackBtn.addEventListener("click", attack);
