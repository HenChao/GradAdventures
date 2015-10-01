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
  }, 50);
};

setOptionValues = function(options){
  Session.set("optionA", options.A);
  Session.set("optionB", options.B);
  Session.set("optionC", options.C);
  Session.set("optionD", options.D);
};

String.prototype.format = function() {
  var text = this;
  for (var i = 0; i < arguments.length; i++){
    var replacement = '{' + i + '}';
    text = text.replace(replacement, arguments[i]);
  }
  return text;
};

