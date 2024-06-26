import readlineSync from "readline-sync";

const evenOdd = (n) => (n % 2 === 0 ? "yes" : "no");
const getCalcExpretion = (name) => {
  let result = "";
  const basicOperation = ["+", "-", "*"];
  const randomIndex = Math.floor(Math.random() * (basicOperation.length - 1));
  const operationElement = basicOperation[randomIndex];

  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);

  if (operationElement === "+") {
    result = Number(num1) + Number(num2);
  } else if (operationElement === "-") {
    result = Number(num1) - Number(num2);
  } else if (operationElement === "*") {
    result = Number(num1) * Number(num2);
  }

  const answer = readlineSync.question(
    `Question: ${num1} ${operationElement} ${num2}\nYour answer: `,
  );

  if (Number(result) === Number(answer)) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`,
    );
    return false;
  }
};
const calculateGCD = (num1, num2) => {
  while (num2) {
    var t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return num1;
};

const calculateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const getGcdExpretion = (name) => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  var result = calculateGCD(num1, num2);

  const answer = readlineSync.question(
    `Question: ${num1} ${num2}\nYour answer: `,
  );

  if (Number(result) === Number(answer)) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`,
    );
    return false;
  }
};

const getProgression = (name) => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = calculateProgression(start, step, progressionLength);
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = "..";

  const progressionString = progression.join(", ");

  const answer = readlineSync.question(
    `Question: ${progressionString}\nYour answer: `,
  );

  if (Number(hiddenNumber) === Number(answer)) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.\nLet's try again, ${name}!`,
    );
    return false;
  }
};

const isPrime = (num) => {
  if (num < 2) return "no";
  if (num === 2) return "yes";
  if (num % 2 === 0) return "no";
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return "no";
  }
  return "yes";
};

const getPrime = (name) => {
  const num1 = Math.floor(Math.random() * 100) + 1;

  var result = isPrime(num1);

  const answer = readlineSync.question(`Question: ${num1}\nYour answer: `);

  if (String(result) === String(answer)) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`,
    );
    return false;
  }
};

export const even = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const curNumber = Math.ceil(Math.random() * 100);
    const scriptAnswer = evenOdd(curNumber);

    const answer = readlineSync.question(
      `Question: ${curNumber}\nYour answer: `,
    );

    if (scriptAnswer === answer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${scriptAnswer}'.\nLet's try again, ${name}!`,
      );
      break;
    }

    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const calc = (name) => {
  console.log("What is the result of the expression?");

  let i = 0;

  while (i < 3) {
    const result = getCalcExpretion(name);

    if (!result) {
      break;
    }

    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const gcd = (name) => {
  console.log("Find the greatest common divisor of given numbers.");

  let i = 0;

  while (i < 3) {
    const result = getGcdExpretion(name);

    if (!result) {
      break;
    }

    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export const progression = (name) => {
  console.log("What number is missing in the progression?");

  let i = 0;

  while (i < 3) {
    const result = getProgression(name);

    if (!result) {
      break;
    }

    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export const prime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const result = getPrime(name);

    if (!result) {
      break;
    }

    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
