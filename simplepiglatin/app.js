// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  let sArr = str.split(" ");
  let newStr = sArr.map((element) => {
    let newArr;
    if (element.match(/[$-/:-?{-~!"^_`\[\]]/g)) {
     
      newArr = element;
    } else {
        let wordArr = element.split("");
        let firstLtr = wordArr.shift();
        wordArr.push(firstLtr);
        newArr = wordArr.join("") + "ay";
    }

    return newArr;
  });
  return newStr.join(" ");
}

console.log(pigIt("Pig latin is cool !"));
