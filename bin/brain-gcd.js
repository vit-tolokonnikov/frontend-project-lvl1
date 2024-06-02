import askName from "../src/cli.js";
import { gcd } from "../src/games.js";

console.log("Welcome to the Brain Games!");
const name = askName();

gcd(name);
