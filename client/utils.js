Session.set("globalTextSpeed", 30); //In ms
appendConsoleText = function(text, callback){
  var displayInterval;
  text = text.split('');

  var intervalFunc = function() {
    clearInterval(displayInterval);
    var word = text.shift();
    if (word == null) {
      clearInterval(displayInterval);
      if (typeof(callback) != "undefined"){
        return callback();
      }
    }
    $(".console").append(word);
    document.getElementById('console').scrollTop = 9999;
    Ps.update(document.getElementById('console'));
    displayInterval = setInterval(intervalFunc, Session.get("globalTextSpeed"));
  };

  displayInterval = setInterval(intervalFunc, Session.get("globalTextSpeed"));
};

setOptionValues = function(options){
  Session.set("optionA", options.A.text);
  Session.set("optionB", options.B.text);
  Session.set("optionC", options.C.text);
  Session.set("optionD", options.D.text);
};

advanceText = function(){
  Session.set("globalTextSpeed",0);
}

advanceScript = function(){
  currentLocationInScript = Session.get("scriptLocation");

  if (typeof(currentLocationInScript.changeStat) != "undefined"){
     changeStats(currentLocationInScript.changeStat);
  }

  appendConsoleText(currentLocationInScript.text.format(),
    function() {
      if (typeof(currentLocationInScript.jump) != "undefined"){
        Session.set("scriptLocation", parseNextScriptLocation(currentLocationInScript.jump));
        $(".console").append("<hr />");
        advanceScript();
      } else {
        setOptionValues(currentLocationInScript.options);
        Session.set("showInputs", true);
      }
  });
};

changeStats = function(statChanged){
  $.each(statChanged, function(stat, value){
    switch(stat) {
      case "setHealth":
        Session.set("health",value);
      case "setMoney":
        Session.set("money",value);
    }
  });
};

clearScreen = function(){
  Session.set("showInputs", false);
  $(".console").html('');
};

parseNextScriptLocation = function(location) {
  var nextScriptLocation = location;
  nextScriptLocation = nextScriptLocation.split(".");
  return stages[nextScriptLocation[0]][nextScriptLocation[1]];
};

getResultForOption = function(chosenOption) {
  var scriptOptions = Session.get("scriptLocation").options;
  for(var choice in scriptOptions){
    if(scriptOptions[choice].text == chosenOption){
      return parseNextScriptLocation(scriptOptions[choice].next);
    }
  }
  return "Result not found for the chosen option";
}

String.prototype.format = function() {
  var text = this;
  text = text.replace("{playerName}", Session.get("playerName"));
  return text;
};

