export default class ServicoDePagamento {
    #pagamentos

    constructor() {
        this.#pagamentos = [];
    }

    pagar(codigoDeBarras, empresa, valor) {
        if (typeof codigoDeBarras !== 'string' || codigoDeBarras.trim() === '') {
            throw new TypeError('CodigoDeBarras deve ser uma string não vazia');
        }
        if (typeof empresa !== 'string' || empresa.trim() === '') {
            throw new TypeError('Empresa deve ser uma string não vazia');
        }
        if (typeof valor !== 'number' || Number.isNaN(valor) || valor < 0) {
            throw new TypeError('Valor deve ser um número maior ou igual a 0');
        }

        const categoriaDefinida = valor > 100 ? 'cara' : 'padrão';

        const pagamento = {
            codigoBarras: codigoDeBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoriaDefinida
        };

        this.#pagamentos.push(pagamento);
    }

    consultarTodosPagamentos() {
        if (this.#pagamentos.length === 0) return null;
        return this.#pagamentos;
    }

    consultarUltimoPagamento() {
        if (this.#pagamentos.length === 0) return null;
        return this.#pagamentos.at(-1);
    }
}