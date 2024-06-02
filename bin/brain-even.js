#!/usr/bin/env node

/**
 * Описание скрипта brain-even
 * Этот скрипт проверяет, является ли число чётным.
 */
import askName from "../src/cli.js";
import { even } from "../src/games.js";

console.log("Welcome to the Brain Games!");
const name = askName();

even(name);
