// Sample array of names
var names = ["John", "Jane", "Jim", "Bob"];

// Loop over the array
for (var i = 0; i < names.length; i++) {
  var name = names[i];

  // Check if the name starts with 'J' or 'j'
  if (name.charAt(0).toLowerCase() === 'j') {
    // If yes, say Goodbye
    byeSpeaker.speak(name);
  } else {
    // If no, say Hello
    helloSpeaker.speak(name);
  }
}

