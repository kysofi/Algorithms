// Title Case a Sentance
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .taplaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join("");
}
