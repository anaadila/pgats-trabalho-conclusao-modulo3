export default class ServicoDeTransferenciaBancaria {
    #transferencias

    constructor() {
        this.#transferencias = [];
    }

    transferir(de, para, valor) {
        if (typeof de !== 'string' || de.trim() === '') {
            throw new TypeError('Remetente deve ser uma string não vazia');
        }
        if (typeof para !== 'string' || para.trim() === '') {
            throw new TypeError('Destinatario deve ser uma string não vazia');
        }
        if (typeof valor !== 'number' || Number.isNaN(valor) || valor < 0) {
            throw new TypeError('Valor deve ser um número maior ou igual a 0');
        }

        const transferencia = {
            remetente: de,
            destinatario: para,
            valorTransferido: valor
        };

        this.#transferencias.push(transferencia);
    }

    consultarTodasTransferencias() {
        if (this.#transferencias.length === 0) return null;
        return this.#transferencias;
    }

    consultarUltimaTransferencia() {
        if (this.#transferencias.length === 0) return null;
        return this.#transferencias.at(-1);
    }
}