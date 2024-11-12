class Utilitario {

    consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']
    vogais = ['a', 'e', 'i', 'o', 'u']

    geraNomeArquivo () {
        let c1, c2, c3, v1, v2, v3 = ''
        for (let i = 1; i <= 3; i++) {
            c1 = this.consoantes[Math.floor(Math.random() * 17)]
            c2 = this.consoantes[Math.floor(Math.random() * 17)]
            c3 = this.consoantes[Math.floor(Math.random() * 17)]
            v1 = this.vogais[Math.floor(Math.random() * 4)]
            v2 = this.vogais[Math.floor(Math.random() * 4)]
            v3 = this.vogais[Math.floor(Math.random() * 4)]
        }
        let tempo = (new Date()).getTime()
        let nomeArquivo = c1 + v1 + c2 + v2 + c3 + v3 + '-' + tempo + '.js'
        console.log(nomeArquivo)
    }
}

const U1 = new Utilitario()
U1.geraNomeArquivo()