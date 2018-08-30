// Create a function every new customers coming will be called by their name & position 

function takeANumber(currentLine, newName) {
  currentLine.push(newName)
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}

//

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"
  } else{
    var i = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift();
    return i
  }
}


// tell customers who are in line and position in place.
//if it's empty; have it call The line is currently empty.

// katzDeliLine = Bill,Jane,Ann


function currentLine(katzDeliLine){
  var line = [];
  if(katzDeliLine.length === 0){
  return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    line.push(' ' + (i+1) + '. ' + name);
  
  }
    return "The line is currently:" + line;
  }
}


