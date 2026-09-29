const sentence = window.prompt("Enter a sentence:", "");

function capitalize() {
  const firstLetter = sentence[0];
  const lastLetter = sentence[sentence.length - 1];
  const first = firstLetter.toUpperCase();
  const last = lastLetter.toUpperCase();
  return first + last;
}

function reverse(capitalizeResult) {
  return capitalizeResult[1] + capitalizeResult[0];
}

function calling() {
  const capitalizeResult = capitalize();
  window.alert("capitalizeResult, " + capitalizeResult);
  const reverseResult = reverse(capitalizeResult);
  window.alert("reverseResult, " + reverseResult);
  return sentence + reverseResult;
}

function count() {
  const callingResult = calling();
  window.alert("callingResult, " + callingResult);
  const divisonResult = Math.floor(sentence.length / 2);
  return sentence[divisonResult] + sentence;
}

window.alert(count());