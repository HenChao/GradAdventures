tutorial = {
  "welcome":{
    "text":"Welcome, {playerName}, to the first day of the rest of your life! Today, you take your first step in the grand road down the graduate program at Generic State U, home of the nation's best graduate program in... err, what field were you studying again?",
    "options":{
      "A":{"text":"Liberal Arts","next":"tutorial.programA"},
      "B":{"text":"Engineering","next":"tutorial.programB"},
      "C":{"text":"Undecided","next":"tutorial.programC"},
      "D":{"text":"Huge-manatees","next":"tutorial.programD"},
    }
  },

  "programA":{
    "text":"Liberal arts! We didn't put a hard mode into this game, but I guess that's not going to stop you, is it?",
    "jump":"tutorial.breakfast"},
  "programB":{
    "text":"Engineering! I suppose since you decided to attend graduate school, you're not aiming to have much of a life anyway, right? So might as well get paid for it.",
    "jump":"tutorial.breakfast"},
  "programC":{
    "text":"Seriously? For graduate school?",
    "jump":"tutorial.breakfast"},
  "programD":{
    "text":"I'm going to assume you mean humanities, or possibly marine biology. In either case, poor life choices, my friend.",
    "jump":"tutorial.breakfast"},

  "breakfast":{
    text:"The most important meal of the day.",
  }
};

stages = {
  "tutorial": this.tutorial,
};
