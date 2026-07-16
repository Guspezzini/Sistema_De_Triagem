const Paciente = require('./Paciente')

let resposta = document.getElementById('resposta')

let progPrincipal = document.getElementById('progPrincipal')

progPrincipal.addEventListener('click',()=>{

    let nome = document.getElementById('nome').value
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let circCintura = Number(document.getElementById('circCintura').value)
    let circQuadril = Number(document.getElementById('circQuadril').value)
    let genero = document.getElementById('sexo').value

    console.log(`Nome: ${nome}`)
    console.log(`Nome: ${altura}`)
    console.log(`Nome: ${genero}`)

    let pac1 = new Paciente(nome, peso, altura, circCintura, circQuadril, sexo)

    console.log(pac1)

    let imc = pac1.calcularIMC()
    let classificarIMC = pac1.classificarIMC()
    let rcq = pac1.calcularRCQ()
    let classificarRCQ = pac1.classificarRCQ()

  resposta.innerHTML = ''; // Limpa a resposta anterior

// Use += para adicionar texto sem apagar a linha de cima
// Adicionei <br> no final para pular linha na tela do navegador
resposta.innerHTML += `O nome do paciente é: ${pac1.nome}<br>`;
resposta.innerHTML += `A classificação do IMC é: ${pac1.classificarIMC()}<br>`; // Com ()
resposta.innerHTML += `O RCQ é: ${pac1.calcularRCQ().toFixed(2)}<br>`; // Com () e F maiúsculo
resposta.innerHTML += `A classificação do RCQ é: ${pac1.classificarRCQ()}<br>`; // Com ()

})

