export default class ServicoDePagamento {
    #pagamentos

    constructor() {
        this.#pagamentos = [];
    }

    pagar(codigoDeBarras, empresa, valor) {
        let categoriaDefinida = 'padrão'

        if (valor > 100) {
            categoriaDefinida = 'cara'   
        } 
        
        this.#pagamentos.push( {
            codigoBarras: codigoDeBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoriaDefinida
        })
    }

    consultarTodosPagamentos() {
        return this.#pagamentos;
    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }


}