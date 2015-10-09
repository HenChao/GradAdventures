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
      if (typeof(currentLocationInScript.jump) != "undefined"){
        Session.set("scriptLocation", parseNextScriptLocation(currentLocationInScript.jump));
        showTextAndOptions();
      } else {
        setOptionValues(currentLocationInScript.options);
        Session.set("showInputs", true);
      }
  });
};

clearAndRedraw = function(){
  Session.set("showInputs", false);
  $(".console").html('');
  showTextAndOptions();
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

