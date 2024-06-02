import readlineSync from "readline-sync";

const evenOdd = (n) => (n % 2 === 0 ? "yes" : "no");
const getCalcExpretion = (name) => {
    let result = '';
    const basicOperation = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (basicOperation.length - 1));
    const operationElement = basicOperation[randomIndex];

    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);

    if (operationElement === '+') {
        result = Number(num1) + Number(num2);
    } else if (operationElement === '-') {
        result = Number(num1) - Number(num2);
    } else if (operationElement === '*') {
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
}
const calculateGCD = (num1, num2) => {
    while(num2) {
        var t = num2;
        num2 = num1 % num2;
        num1 = t;
    }
    return num1;
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
}

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
    console.log('What is the result of the expression?');

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
    console.log('Find the greatest common divisor of given numbers.');

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
