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
      Session.set("showInputs", false);
      Session.set("playerName", inputName);
    }
  }
});

Template.gameField.onRendered(function () {
  slowAppendConsoleText(tutorial.welcome.text.format(Session.get("playerName")),
    function() {
      setOptionValues(tutorial.welcome.options);
      Session.set("showInputs", true);
  });
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
