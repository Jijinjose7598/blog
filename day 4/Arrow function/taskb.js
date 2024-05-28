const strings = ["hello world", "good morning", "how are you"];
const titleCaseStrings = [];

const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

for (const string of strings) {
  titleCaseStrings.push(toTitleCase(string));
}

console.log(titleCaseStrings);
