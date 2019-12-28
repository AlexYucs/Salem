function updatePlayerList(playerName){
  let playerList = document.getElementById("playerList")
  let playerStatus = sessionStorage.getItem(playerName);
  var item = document.createElement('li');
  var newButton = document.createElement('button');
  newButton.innerHTML = 'Kill';
  newButton.onclick = function () {
      swapPlayerStatus(playerName)
      // this.parentElement.removeChild(this);
  };
  item.appendChild(document.createTextNode(playerName));
  item.appendChild(newButton);
  playerList.appendChild(item);
}

function addPlayer(){
  let playerName = document.getElementById("nameField").value;
  if(playerName){
    sessionStorage.setItem(playerName, "Alive");
    updatePlayerList(playerName)
  }
  document.getElementById("nameField").value = "";
}

function swapPlayerStatus(playerName){
  let status = sessionStorage.getItem(playerName);
  sessionStorage.setItem("saved", "None");
  if(status === "Alive"){
    sessionStorage.setItem("killed", playerName);
    sessionStorage.setItem(playerName, "Dead");
  }
  else {
    sessionStorage.setItem(playerName, "Alive");
  }
}

function savedPlayer(playerName){
  sessionStorage.setItem("saved", playerName);
}

function getResults(){
  document.getElementById("killedName").innerHTML = sessionStorage.getItem("killed");
  document.getElementById("savedName").innerHTML = sessionStorage.getItem("saved");
}

function clearResults(){
  document.getElementById("addPlayerButton").innerHTML = "";
  document.getElementById("addPlayerButton").innerHTML = "";
  sessionStorage.setItem("killed", "");
  sessionStorage.setItem("saved", "");
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
document.getElementById("resultsButton").onclick = getResults;
document.getElementById("gameResetButton").onclick = resetSoft;
document.getElementById("fullResetButton").onclick = resetHard;

