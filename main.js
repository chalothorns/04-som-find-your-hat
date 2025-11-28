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
	while(true){ //ใช้ลูปเพื่อวนคำสั่งจนกว่าจะเป็นจริง
		const input = prompt("Which way? (w/a/s/d): "); //เป็นบรรทัดที่ให้ผู้ใช้งานส่งค่าเข้ามา

	 if(movementInput.includes(input)) { //ใช้ includes(input) เพื่อหาของ ก็คือ input ที่รับค่ามาจากผู้ใช้งาน ที่ๆจะไปหาคือใน movementInput ว่าเขามีค่าที่ตรงกันไหมกับใน []
		return input; //ใช้ return เพื่อส่งค่าที่ถูกต้องออกไป
	} else{
		console.log("Invalid move")  //ใช้ clg เพื่อแสดงข้อความแจ้งเตือนเฉยๆ แล้ววนลูปจนกว่า user จะใส่ข้อความที่ถูก
	}
	}
	}

	function calculateMovement(move){
	let row = 0;
	let col = 0;
	
	switch(move) {
		case "w": row = -1;
		break;
		case "a": col = -1;
		break;
		case "s": row = 1;
		break;
		case "d": col = 1;
		break;
	}
    
	const newRow = playerRow + row;
	const newCol = playerCol + col;
	return {newRow , newCol};
	
	}



function gameRules() {
	const rowLength = currentBoard.length;
    const colLength = currentBoard[0].length;

	const currentPosition = currentBoard[r][c]

	if(currentPosition === HAT){
		playing = false;
		console.log("YOU WIN!")
		return "win";
	}

	if (newCol > colLength || newRow >rowLength ){
		playing = false;
		console.log("GAME OVER! YOU OUT OF BOUNDS")
		return "lose";
    } else if (currentPosition === HOLE){
		console.log("GAME OVER! YOU STUCK IN THE HOLE")
	}
}






printBoard(board);
const userMove = validatedInput(); //validatedInput() ใช้เพื่อส่งค่าที่ถูกต้องกลับออกมา และ const userMove เพื่อเอาค่านั้นมาเก็บไว้
const cal = calculateMovement(userMove); //const cal = calculateMovement(userMove); ตรงนี้ หมายถึง เรียกฟังชัน calculateMovement เพื่อหาของใน (userMove) ว่าผู้ใช้ใส่อะไรมาให้ จากนั้นเอาไปเก็บไว้ใน cal ใช่ไหมคะ
const statusCheck = gameRules(cal)
console.log(userMove); //clg userMove แสดงค่านั้นออกมา
console.log(cal)

