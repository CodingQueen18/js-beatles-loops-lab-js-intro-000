// add solution here
function theBeatlesPlay(musicians, instruments) {
  let emptyArray = [];
  for(let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return emptyArray
}


var facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts(facts) {


  var newFacts = [];

  var i = 0;
  while(i < facts.length) {
  newFacts.push(`${facts[i]}!!!`);
  i++;

}
  return newFacts
}

function iLoveTheBeatles(num) {
  var array = [];
  

  do {
    array.push("I love the Beatles!");
    var num = 1;
    num++

  }
  while (num < 15)
  return array

}
