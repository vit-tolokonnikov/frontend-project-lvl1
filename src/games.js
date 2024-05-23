import readlineSync from "readline-sync";

const evenOdd = (n) => (n % 2 === 0 ? "yes" : "no");

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
