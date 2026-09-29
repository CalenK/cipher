window.prompt("Enter a sentence:");

function capitalize(firstLetter, lastLetter) {
  const firstAndLast = toString(toUpperCase(firstLetter, lastLetter));
  return firstAndLast;
}

function reverse(firstLetter, lastLetter) {
  const reversed = (firstLetter, lastLetter);
  return reversed;
}

function calling(capitalize, reverse) {
  const cipher = capitalize() + reverse() + window.prompt();
  return capitalize() + reverse() + window.prompt();
}

function count(calling) {
  const newCipher = calling() / 4;
  return newCipher;
}

window.alert(count());