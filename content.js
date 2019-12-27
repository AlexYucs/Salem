
function addPlayer(playerName){
  sessionStorage.setItem(playerName, "Alive");
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

