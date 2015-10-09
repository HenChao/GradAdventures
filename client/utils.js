slowAppendConsoleText = function(text, callback){
  var displayInterval;
  text = text.split('');
  displayInterval = setInterval(function() {
    var word = text.shift();
    if (word == null) {
      clearInterval(displayInterval);
      return callback();
    }
    $(".console").append(word);
  }, 30);
};

setOptionValues = function(options){
  Session.set("optionA", options.A.text);
  Session.set("optionB", options.B.text);
  Session.set("optionC", options.C.text);
  Session.set("optionD", options.D.text);
};

showTextAndOptions = function(){
  currentLocationInScript = Session.get("scriptLocation");
  slowAppendConsoleText(currentLocationInScript.text.format(),
    function() {
      setOptionValues(currentLocationInScript.options);
      Session.set("showInputs", true);
  });
};

clearAndRedraw = function(){
  Session.set("showInputs", false);
  $(".console").html('');
  showTextAndOptions();
};

getResultForOption = function(chosenOption) {
  var scriptOptions = Session.get("scriptLocation").options;
  for(var choice in scriptOptions){
    if(scriptOptions[choice].text == chosenOption){
      var nextScriptLocation = scriptOptions[choice].next;
      nextScriptLocation = nextScriptLocation.split(".");
      return stages[nextScriptLocation[0]][nextScriptLocation[1]];
    }
  }

  return "Result not found for the chosen option";
}

String.prototype.format = function() {
  var text = this;
  text = text.replace("{playerName}", Session.get("playerName"));
  return text;
};

