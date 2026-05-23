export default class ServicoDeTransferenciaBancaria {
    #transferencias

    constructor() {
        this.#transferencias = [];
    }

    transferir(de, para, valor) {
        this.#transferencias.push( {
            remetente: de,
            destinatario: para,
            valorTransferido: valor
        });
    }

    consultarTodasTransferencia() {
        return this.#transferencias;
    }

    consultarUltimaTransferencia() {
        return this.#transferencias.at(-1);
    }

}