

(function(){
  var names = ["Vignesh", "Jaison", "John", "Joker", "Prajwal", "Luffy", "Naruto", "Goku", "Itachi", "jack"];
  for (var i = 0; i < names.length; i++) {

      var firstLetter = names[i].charAt(0).toLowerCase();

      if (firstLetter === 'j') {
           byeSpeaker.speak(names[i]);
      } else {

          helloSpeaker.speak(names[i]);
      }
  }
})();