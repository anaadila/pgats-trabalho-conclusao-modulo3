import ServicoDeTransferenciaBancaria from '../src/servicoDeTransferenciaBancaria.js'
import assert from 'node:assert'

describe('Testes relacionados a transferência bancária', () => {

    it('Valida transferência feita com sucesso', () => {
        // Arrange
        const servicoDeTransferenciaBancaria = new ServicoDeTransferenciaBancaria();        

        // Act
        servicoDeTransferenciaBancaria.transferir('Joao', 'Maria', 100);
        const minhaTransferencia = servicoDeTransferenciaBancaria.consultarUltimaTransferencia();

        // Assert
        assert.equal(minhaTransferencia.remetente, 'Joao');
        assert.equal(minhaTransferencia.destinatario, 'Maria');
        assert.equal(minhaTransferencia.valorTransferido, 100);
    });

    it('Valida todas transferências retornadas', () => {
        // Arrange
        const servicoDeTransferenciaBancaria = new ServicoDeTransferenciaBancaria();        

        // Act
        servicoDeTransferenciaBancaria.transferir('Joao', 'Maria', 100);
        servicoDeTransferenciaBancaria.transferir('Pinoquio', 'Gepeto', 300);
        servicoDeTransferenciaBancaria.transferir('Chapeuzinho Vermelho', 'Lobo Mal', 0.01);
        const transferencias = servicoDeTransferenciaBancaria.consultarTodasTransferencia();

        // Assert
        assert.equal(transferencias[0].remetente, 'Joao');
        assert.equal(transferencias[0].destinatario, 'Maria');
        assert.equal(transferencias[0].valorTransferido, 100);

        assert.equal(transferencias[1].remetente, 'Pinoquio');
        assert.equal(transferencias[1].destinatario, 'Gepeto');
        assert.equal(transferencias[1].valorTransferido, 300);

        assert.equal(transferencias[2].remetente, 'Chapeuzinho Vermelho');
        assert.equal(transferencias[2].destinatario, 'Lobo Mal');
        assert.equal(transferencias[2].valorTransferido, 0.01);
    });

    it('Valida última transferência retornada', () => {
        // Arrange
        const servicoDeTransferenciaBancaria = new ServicoDeTransferenciaBancaria();        

        // Act
        servicoDeTransferenciaBancaria.transferir('Joao', 'Maria', 100);
        servicoDeTransferenciaBancaria.transferir('Pinoquio', 'Gepeto', 300);
        servicoDeTransferenciaBancaria.transferir('Chapeuzinho Vermelho', 'Lobo Mal', 0.01);
        const ultimaTransferencia = servicoDeTransferenciaBancaria.consultarUltimaTransferencia();

        // Assert
        assert.equal(ultimaTransferencia.remetente, 'Chapeuzinho Vermelho');
        assert.equal(ultimaTransferencia.destinatario, 'Lobo Mal');
        assert.equal(ultimaTransferencia.valorTransferido, 0.01);
    });
});