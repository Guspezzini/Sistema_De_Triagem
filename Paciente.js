class Paciente {
    constructor(nome, peso, altura, circCintura, circQuadril, sexo) {

        this.nome = nome,
            this.peso = peso,
            this.altura = altura,
            this.circCintura = circCintura,
            this.circQuadril = circQuadril,
            this.sexo = sexo

    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }
    calcularRCQ() {
        let rcq = 0.0
        rcq = this.circCintura / this.circQuadril

        return rcq
    }
    classificarIMC() {
        let imc = this.calcularIMC()

        if (imc < 0.0) {
            return 'por favor, coloque sua altura real'
        } else if (imc >= 0 && imc < 18.5) {
            return 'Abaixo do peso'

        } else if (imc > 18.5 && imc < 25.0) {
            return 'Peso normal'

        } else if (imc >= 25.0 && imc < 30.0) {
            return 'Sobrepeso'

        } else if (imc >= 30.0 && imc < 35.0) {
            return 'Obesidade Grau I'

        } else if (imc >= 35.0 && imc < 40.0) {
            return 'Obesidade Grau II'

        } else if (imc >= 40.0) {
            return 'Obesidade Grau III (Grave)'
        } else {
            return 'coloque apenas numeros'
        }

    }
    classificarRCQ() {
        let rcq = this.calcularRCQ()
        if (this.sexo === 'M') {

            if (rcq < 0.90) {
                return 'risco baixo'
            } else if (rcq >= 0.90 && rcq < 1.0) {
                return 'risco moderado'

            }
        } else if (rcq > 1.0) {
            return 'risco alto'


        } else if (this.sexo === 'F') {
            
            if (rcq < 0.80) {
                return 'risco baixo'
            }else if (rcq >= 0.80 && rcq < .85) {
                return 'risco moderado'

            }
        } else if (rcq > 0.85) {
            return 'risco alto'
        }


    }
}
module.exports = Paciente