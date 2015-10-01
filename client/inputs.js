Template.body.helpers({
  playerNameNotSet: function() {
    return (typeof Session.get("playerName") === 'undefined') ? true : false;
  }
});

Template.startForm.events({
  "click .startFormStartButton": function(event) {
    var inputName = $('#username').val();
    if( inputName ) {
      $('.startForm').fadeOut();
      Session.set("playerName", inputName);  
    }
  }
});

Template.gameField.onRendered(function () {
  slowAppendConsoleText(tutorial.welcome.format(Session.get("playerName")));
});
