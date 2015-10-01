Template.body.helpers({
  playerNameNotSet: function() {
    return (typeof Session.get("playerName") === 'undefined') ? true : false;
  },
  playerName: function(){return Session.get("playerName");},
  date: function(){return Session.get("date");},
});

Template.body.onRendered(function() {
  $('body').bind('touchmove', function(e){e.preventDefault()})
});

Template.startForm.events({
  "click .startFormStartButton": function(event) {
    var inputName = $('#username').val();
    if( inputName ) {
      Session.set("playerName", inputName);
      Session.set("scriptLocation", tutorial.welcome);
      Session.set("date",0);
    }
  }
});

Template.gameField.onRendered(function () {
  clearScreen();
  advanceScript();
  Ps.initialize(document.getElementById('console'));

  var elm = document.querySelector('#sprite');
  var sprite = new Motio(elm,{
    fps:8,
    frames: 15,
  });

  sprite.play();
});

Template.gameField.helpers({
  showInputButtons: function() {
    return Session.get("showInputs");
  },
  optionA: function() { return Session.get("optionA"); },
  optionB: function() { return Session.get("optionB"); },
  optionC: function() { return Session.get("optionC"); },
  optionD: function() { return Session.get("optionD"); },
});

Template.gameField.events({
  "click .option" : function(event) {
       var nextScriptLocation = getResultForOption($(event.toElement).text()); 
       Session.set("scriptLocation", nextScriptLocation);
       clearScreen();
       advanceScript();
  } 
});
