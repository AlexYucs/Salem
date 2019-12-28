function updatePlayerList(playerName){
  let playerList = document.getElementById("playerList")
  let playerStatus = sessionStorage.getItem(playerName);

  var item = document.createElement('li');
  var killButton = document.createElement('button');
  killButton.innerHTML = 'Kill';
  killButton.id = "kill"+playerName;
  killButton.onclick = function () {
      let killCheck = confirm("Are you sure you want to kill "+playerName+"?");
      killCheck && swapPlayerStatus(playerName);
  };

  var space = document.createElement('p');
  space.innerHTML = '&nbsp;&nbsp;';

  var saveButton = document.createElement('button');
  saveButton.innerHTML = 'Save';
  saveButton.onclick = function () {
      savedPlayer(playerName)
  };

  var aliveButton = document.createElement('input');
  aliveButton.type="checkbox";
  aliveButton.id="alive"+playerName;
  aliveButton.checked=true;

  aliveButton.onchange = function () {
      if(document.getElementById("alive"+playerName).checked){
          document.getElementById("kill"+playerName).disabled = false;
      }
      else {
          document.getElementById("kill"+playerName).disabled = true;
      }
  };


  var labelButton = document.createElement('label');
  labelButton.appendChild(aliveButton);
  labelButton.innerHTML = "  "+playerName+"  ";


  item.appendChild(aliveButton);
  item.appendChild(document.createTextNode("  "+playerName+"  "));
  item.appendChild(killButton);
  //item.appendChild(space);
  
  var br = document.createElement('br');  
  playerList.appendChild(item);  
  playerList.appendChild(br);
  
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
  document.getElementById("killedName").innerHTML =  "Killed: "+sessionStorage.getItem("killed");
  // document.getElementById("savedName").innerHTML =  "Saved: "+sessionStorage.getItem("saved");
}

function clearResults(){
  document.getElementById("killedName").innerHTML = "Killed:";
  // document.getElementById("savedName").innerHTML = "Saved:";
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
  /*
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true;
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    box.dispatchEvent(evt);
  }
  //*/
  clearResults();
}

function resetHard(){
  sessionStorage.clear();
  location.reload();
}

function start(){
  document.getElementById('witchUp').play();
  
  setTimeout(function () {
    document.getElementById('witchDown').play();
    
    if(true){
      setTimeout(function () {
        document.getElementById('constableUp').play();
        setTimeout(function () {
          document.getElementById('constableDown').play();
          setTimeout(function () {
            document.getElementById('end').play();
          }, 4000);
        }, 10000);
      }, 4000);
    }
    else {
      setTimeout(function () {
        document.getElementById('end').play();
      }, 4000);
    }
  }, 12000);
}

document.getElementById("addPlayerButton").onclick = addPlayer;
document.getElementById("resultsButton").onclick = getResults;
document.getElementById("clearResultsButton").onclick = clearResults;
document.getElementById("gameResetButton").onclick = resetSoft;
document.getElementById("fullResetButton").onclick = resetHard;
document.getElementById("start").onclick = start;

