class DispositivoEletonico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        this.ligado = true
    }
}

class Smartphone extends DispositivoEletonico {

}

const d1 = new DispositivoEletonico('Smart TV')
console.log(d1)

const s1 = new Smartphone('Iphone 12')
s1.ligar()
console.log(s1)
