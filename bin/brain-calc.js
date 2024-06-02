#!/usr/bin/env node
import askName from "../src/cli.js";
import { calc } from "../src/games.js";

console.log("Welcome to the Brain Games!");
const name = askName();

calc(name);
