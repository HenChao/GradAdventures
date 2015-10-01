tutorial = {
  welcome:{
    text:"Welcome, {playerName}, to the first day of the rest of your life! " +
           "Today, you take your first step in the grand road down the graduate " +
           "program at Generic State U, home of the nation's best graduate program " +
           "in... err, what field were you studying again?",
    options:{
      A:{text:"Liberal Arts",next:"tutorial.programA"},
      B:{text:"Engineering",next:"tutorial.programB"},
      C:{text:"Undecided",next:"tutorial.programC"},
      D:{text:"Huge-manatees",next:"tutorial.programD"},
    }
  },

  programA:{
    text:"Liberal arts! We didn't put a hard mode into this game, " +
           "but I guess that's not going to stop you, is it?",
    jump:"tutorial.breakfast"},
  programB:{
    text:"Engineering! I suppose since you decided to attend graduate " +
           "school, you're not aiming to have much of a life anyway, right? " +
           "So might as well get paid for it.",
    jump:"tutorial.breakfast"},
  programC:{
    text:"Seriously? For graduate school?",
    jump:"tutorial.breakfast"},
  programD:{
    text:"I'm going to assume you mean humanities, or possibly marine biology. " + 
           "In either case, poor life choices, my friend.",
    jump:"tutorial.breakfast"},

  breakfast:{
    text:"The most important meal of the day: Breakfast. The decisions you make, " +
         "especially on an important day like today, will tell the world what type " +
         "of a student you'll be. Choose wisely.",
    options:{
      A:{text:"Bacon Pancakes",next:"tutorial.programA"},
      B:{text:"Rear Admiral Crunch",next:"tutorial.programB"},
      C:{text:"Donuts",next:"tutorial.programC"},
      D:{text:"Water",next:"tutorial.programD"},
    },
  },
};

stages = {
  "tutorial": this.tutorial,
};
