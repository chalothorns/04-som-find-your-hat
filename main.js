"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];
// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
	console.clear(); // call console.clear() before print each move
	for(let r = 0; r < board.length; r++){
		console.log(board[r].join(""));
	}
}

// Game play loop
function validatedInput(){
	const movementInput = ['w','a','s','d'];
	while(true){
		const input = prompt("Which way? (w/a/s/d): ");

	 if(movementInput.includes(input)) {
		return input;
	} else{
		console.log("Invalid move") 
	}
	}
	}

	

printBoard(board);
const userMove = validatedInput(); //validatedInput() ใช้เพื่อส่งค่าที่ถูกต้องกลับออกมา และ const userMove เพื่อเอาค่านั้นมาเก็บไว้
console.log(userMove); //clg userMove แสดงค่านั้นออกมา

