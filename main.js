function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/${player1}-flag.svg" alt="${player1} Flag" />
    <strong>${hour}</strong>
    <img src="./assets/${player2}-flag.svg" alt="${player2} Flag" />
    <!-- li são os itens da lista-->
  </li>
  `
}
// criar variavel use let//
// criar variavel de controle para separar o tempo de aparecimento dos cards de forma variada na sequencia que os cartoes estao, use let delay//

let delay = -0.3

function createCard(date, day, games) {
  delay = delay + 0.3
  return ` 
  <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
          <!-- ul é uma lista nao ordenada-->
          ${games}
          </ul>
      </div>  
      `
}

document.querySelector("#cards").innerHTML =
  createCard(`24/11`, `quinta`, createGame(`Brazil`, `16:00`, `Serbia`)) +
  createCard(
    `28/11`,
    `segunda`,
    createGame(`Brazil`, `13:00`, `Switzerland`) +
      createGame(`Portugal`, `13:00`, `Uruguai`)
  ) +
  createCard(`02/12`, `sexta`, createGame(`Brazil`, `16:00`, `Cameroon`))
