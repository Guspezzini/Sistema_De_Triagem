/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
() {

eval("{//const Pacient = require('./Paciente')\r\n\r\nlet resposta = document.getElementById('resposta')\r\n\r\nlet progPrincipal = document.getElementById('progPrincipal')\r\n\r\nprogPrincipal.addEventListener('click',()=>{\r\n\r\n    let nome = document.getElementById('nome').value\r\n    let circCintura = Number(document.getElementById('circCintura').value)\r\n    let altura = Number(document.getElementById('altura').value)\r\n    let circQuadril = Number(document.getElementById('circQuadril').value)\r\n    let genero = document.getElementById('sexo').value\r\n\r\n    console.log(`Nome: ${nome}`)\r\n    console.log(`Nome: ${altura}`)\r\n    console.log(`Nome: ${genero}`)\r\n\r\n    let pac1 = new Paciente(nome, peso, altura, circCintura, circQuadril, sexo)\r\n\r\n    console.log(pac1)\r\n\r\n    let imc = pac1.calcularIMC()\r\n    let classificarIMC = pac1.classificarIMC()\r\n    let rcq = pac1.calcularRCQ()\r\n    let classificarRCQ = pac1.classificarRCQ()\r\n\r\n    resposta.innerHTML= ''\r\n    resposta.innerHTML= `O IMC do ${pac1.nome}`\r\n})\r\n\r\n\n\n//# sourceURL=webpack://prog_classe3/./index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;