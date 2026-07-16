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

/***/ "./Paciente.js"
/*!*********************!*\
  !*** ./Paciente.js ***!
  \*********************/
(module) {

eval("{class Paciente {\r\n    constructor(nome, peso, altura, circCintura, circQuadril, sexo) {\r\n\r\n        this.nome = nome,\r\n            this.peso = peso,\r\n            this.altura = altura,\r\n            this.circCintura = circCintura,\r\n            this.circQuadril = circQuadril,\r\n            this.sexo = sexo\r\n\r\n    }\r\n    calcularIMC() {\r\n        return this.peso / (this.altura * this.altura)\r\n    }\r\n    calcularRCQ() {\r\n        let rcq = 0.0\r\n        rcq = this.circCintura / this.circQuadril\r\n\r\n        return rcq\r\n    }\r\n    classificarIMC() {\r\n        let imc = this.calcularIMC()\r\n\r\n        if (imc < 0.0) {\r\n            return 'por favor, coloque sua altura real'\r\n        } else if (imc >= 0 && imc < 18.5) {\r\n            return 'Abaixo do peso'\r\n\r\n        } else if (imc > 18.5 && imc < 25.0) {\r\n            return 'Peso normal'\r\n\r\n        } else if (imc >= 25.0 && imc < 30.0) {\r\n            return 'Sobrepeso'\r\n\r\n        } else if (imc >= 30.0 && imc < 35.0) {\r\n            return 'Obesidade Grau I'\r\n\r\n        } else if (imc >= 35.0 && imc < 40.0) {\r\n            return 'Obesidade Grau II'\r\n\r\n        } else if (imc >= 40.0) {\r\n            return 'Obesidade Grau III (Grave)'\r\n        } else {\r\n            return 'coloque apenas numeros'\r\n        }\r\n\r\n    }\r\n    classificarRCQ() {\r\n        let rcq = this.calcularRCQ()\r\n        if (this.sexo === 'M') {\r\n\r\n            if (rcq < 0.90) {\r\n                return 'risco baixo'\r\n            } else if (rcq >= 0.90 && rcq < 1.0) {\r\n                return 'risco moderado'\r\n\r\n            }\r\n        } else if (rcq > 1.0) {\r\n            return 'risco alto'\r\n\r\n\r\n        } else if (this.sexo === 'F') {\r\n            \r\n            if (rcq < 0.80) {\r\n                return 'risco baixo'\r\n            }else if (rcq >= 0.80 && rcq < .85) {\r\n                return 'risco moderado'\r\n\r\n            }\r\n        } else if (rcq > 0.85) {\r\n            return 'risco alto'\r\n        }\r\n\r\n\r\n    }\r\n}\r\nmodule.exports = Paciente\n\n//# sourceURL=webpack://prog_classe3/./Paciente.js?\n}");

/***/ },

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const Paciente = __webpack_require__(/*! ./Paciente */ \"./Paciente.js\")\r\n\r\nlet resposta = document.getElementById('resposta')\r\n\r\nlet progPrincipal = document.getElementById('progPrincipal')\r\n\r\nprogPrincipal.addEventListener('click',()=>{\r\n\r\n    let nome = document.getElementById('nome').value\r\n    let peso = Number(document.getElementById('peso').value)\r\n    let altura = Number(document.getElementById('altura').value)\r\n    let circCintura = Number(document.getElementById('circCintura').value)\r\n    let circQuadril = Number(document.getElementById('circQuadril').value)\r\n    let genero = document.getElementById('sexo').value\r\n\r\n    console.log(`Nome: ${nome}`)\r\n    console.log(`Nome: ${altura}`)\r\n    console.log(`Nome: ${genero}`)\r\n\r\n    let pac1 = new Paciente(nome, peso, altura, circCintura, circQuadril, sexo)\r\n\r\n    console.log(pac1)\r\n\r\n    let imc = pac1.calcularIMC()\r\n    let classificarIMC = pac1.classificarIMC()\r\n    let rcq = pac1.calcularRCQ()\r\n    let classificarRCQ = pac1.classificarRCQ()\r\n\r\n  resposta.innerHTML = ''; // Limpa a resposta anterior\r\n\r\n// Use += para adicionar texto sem apagar a linha de cima\r\n// Adicionei <br> no final para pular linha na tela do navegador\r\nresposta.innerHTML += `O nome do paciente é: ${pac1.nome}<br>`;\r\nresposta.innerHTML += `A classificação do IMC é: ${pac1.classificarIMC()}<br>`; // Com ()\r\nresposta.innerHTML += `O RCQ é: ${pac1.calcularRCQ().toFixed(2)}<br>`; // Com () e F maiúsculo\r\nresposta.innerHTML += `A classificação do RCQ é: ${pac1.classificarRCQ()}<br>`; // Com ()\r\n\r\n})\r\n\r\n\n\n//# sourceURL=webpack://prog_classe3/./index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;