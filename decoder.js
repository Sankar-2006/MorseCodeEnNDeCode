window.alert("Note, This converter will not add space between words.")

let input = document.getElementById("text")
const convertBtn = document.getElementById("convert");
let outputArea = document.getElementById("outPutContainer");

const deCode = {

  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  ".----.": "'",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  ".-..-.": "\"",
  "...-..-": "$",
  ".--.-.": "@",
  "/":" "
}


convertBtn.addEventListener("click", () => {
  const morseCode = input.value.trim();
  const morseCodeSplit = morseCode.split(" ");
  let plainText = "";

  for (let i = 0; i < morseCodeSplit.length; i++) {
    const morseCodeChar = morseCodeSplit[i];
    if (morseCodeChar != "") {
      const plaintextChar = deCode[morseCodeChar] || "Invalid";
      plainText += plaintextChar;
    } else {
      plainText += " ";
    }
  }

  outputArea.textContent = plainText.toLowerCase();
});