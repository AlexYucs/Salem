function addPlayer(){
  let playerName.value = document.getElementById("nameField");
  playerName && sessionStorage.setItem(playerName, "Alive");
  document.getElementById("nameField").value = "";
}

function swapPlayerStatus(playerName){
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
  let playerName = Object.keys(sessionStorage);
  playerName.map(
    name => {
      sessionStorage.setItem(name, "Alive");
    }
  )
}

function resetHard(){
  sessionStorage.clear();
}

document.getElementById("addPlayerButton").onclick=addPlayer

