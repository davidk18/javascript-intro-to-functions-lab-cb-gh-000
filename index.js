function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var x = string.toLowerCase();
  if(string === x)
  return "I can\'t hear you!";
}

function sayHiToGrandma(string){
  var x = string.toUpperCase();
  if(string === x)
  return "YES INDEED!";
}
