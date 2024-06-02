#!/usr/bin/env node
import askName from "../src/cli.js";
import { prime } from "../src/games.js";

console.log("Welcome to the Brain Games!");
const name = askName();

prime(name);
