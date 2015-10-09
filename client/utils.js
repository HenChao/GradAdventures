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
  Session.set("optionA", options.A);
  Session.set("optionB", options.B);
  Session.set("optionC", options.C);
  Session.set("optionD", options.D);
};

showTextAndOptions = function(){
  currentLocationInScript = Session.get("scriptLocation");
  slowAppendConsoleText(currentLocationInScript.text.format(),
    function() {
      setOptionValues(currentLocationInScript.options);
      Session.set("showInputs", true);
  });
};

String.prototype.format = function() {
  var text = this;
  text = text.replace("{playerName}", Session.get("playerName"));
  return text;
};

