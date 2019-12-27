function updatePlayerList(){
  let playerList = document.getElementById("playerList")
  
  let playerNames = Object.keys(sessionStorage);
  playerNames.map(
    name => {
      alert(name);
      let playerStatus = sessionStorage.getItem(name);
      var item = document.createElement('li');
      item.appendChild(document.createTextNode(name));
      list.appendChild(item);
    }
  )
}

function addPlayer(){
  let playerName = document.getElementById("nameField").value;
  playerName && sessionStorage.setItem(playerName, "Alive");
  document.getElementById("nameField").value = "";
  updatePlayerList()
}

function swapPlayerStatus(){
  let playerName = "Alex";
  let status = sessionStorage.getItem(playerName);
  sessionStorage.setItem(saved, "None");
  if(status === "Alive"){
    sessionStorage.setItem(playerName, "Dead");
  }
  else {
    sessionStorage.setItem(killed, playerName);
    sessionStorage.setItem(playerName, "Alive");
  }
}

function savedPlayer(playerName){
  sessionStorage.setItem(saved, playerName);
}

function getSaved(){
  sessionStorage.getItem(killed);
}

function getKilled(){
  sessionStorage.getItem(saved);
}

function resetSoft(){
  let playerNames = Object.keys(sessionStorage);
  playerNames.map(
    name => {
      sessionStorage.setItem(name, "Alive");
    }
  )
}

function resetHard(){
  sessionStorage.clear();
}

document.getElementById("addPlayerButton").onclick = addPlayer;
document.getElementById("killPlayerButton").onclick = swapPlayerStatus;
document.getElementById("gameResetButton").onclick = resetSoft;
document.getElementById("fullResetButton").onclick = resetHard;

