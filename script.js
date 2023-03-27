Byconst convertBtn = document.getElementById("convert");
let outputArea = document.getElementById("outPutContainer");

const enCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  "\"": ".-..-.",
  "$": "...-..-",
  "@": ".--.-."
};



convertBtn.addEventListener("click", () => {

const input = document.getElementById("text").value.toUpperCase();
let output = "";


  for (let i = 0; i < input.length; i++) {
    if (enCode[input[i]]) {
      output += enCode[input[i]] + " ";
    } else {
      if(enCode[input[i]] === " "){
      output += "\";
      }else {
      output += input[i] + " ";
      }
    }
  }
  outputArea.innerText = output;
});
  
  
  

