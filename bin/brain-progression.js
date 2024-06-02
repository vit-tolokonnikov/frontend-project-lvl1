import askName from "../src/cli.js";
import { progression } from "../src/games.js";

console.log("Welcome to the Brain Games!");
const name = askName();

progression(name);