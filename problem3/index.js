/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
let bull = 0;
let cow = 0;
const guessDict = {};
const secretDict = {};
var getHint = function (secret, guess) {
  const secretArray = secret.split("");
  const guessArray = guess.split("");
  // console.log(secretArray, guessArray);
  for (let index = 0; index < secretArray.length; index++) {
    if (secretArray[index] === guessArray[index]) {
      bull += 1;
      console.log("Bull", bull, index);
    } else {
      secretDict[secretArray[index]] =
        (secretDict[secretArray[index]] || 0) + 1;
      guessDict[guessArray[index]] = (guessDict[guessArray[index]] || 0) + 1;
    }
  }
  console.log(secretDict);
  console.log(guessDict);

  for (var key in guessDict) {
    console.log(key, guessDict[key] >= secretDict[key]);
    if (guessDict[key] >= secretDict[key]) {
      cow++;
    }
  }

  console.log(bull + "A" + cow + "B");
  return bull + "A" + cow + "B";
};

getHint("1123", "0111");
