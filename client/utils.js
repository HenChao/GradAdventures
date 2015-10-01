slowAppendConsoleText = function(text){
  var displayInterval;
  text = text.split('');
  displayInterval = setInterval(function() {
    var word = text.shift();
    if (word == null) { return clearInterval(displayInterval); }
    $(".console").append(word);
  }, 50);
};

String.prototype.format = function() {
  var text = this;
  for (var i = 0; i < arguments.length; i++){
    var replacement = '{' + i + '}';
    text = text.replace(replacement, arguments[i]);
  }
  return text;
};

