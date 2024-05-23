// import readlineSync from "readline-sync";
import askName from "../src/cli.js";
import { even } from "../src/games.js";

console.log("Welcome to the Brain Games!");
const name = askName();

even(name);
