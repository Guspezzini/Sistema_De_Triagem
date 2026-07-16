const Paciente = require('../Paciente')

describe('teste unitario do sistema de triagem', ()=>{
    test('testando calculo do imc', ()=>{
        const paciente = new Paciente('Ronaldo',95,1.80,90,110)
        expect(paciente.calcularIMC()).toBeCloseTo(33.75,2)

    })
    test('teste classificação de imc', ()=>{
        const paciente = new Paciente('Ronaldo',95,1.80,90,110)
        expect(paciente.classificarIMC()).toBe('Sobrepeso')

    })
    test('teste classificação de imc', ()=>{
        const paciente = new Paciente('Ronaldo', 95,1.80,90,110,'M')
        expect(paciente.calcularRCQ()).toBeCloseTo(0.81,2)

    })
    test('teste classificação de imc', ()=>{
        const paciente = new Paciente('Ronaldo',95,1.80,90,110)
        expect(paciente.classificarRCQ()).toBe('risco moderado')

    })


})