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
        assert.strictEqual(minhaTransferencia.remetente, 'Joao');
        assert.strictEqual(minhaTransferencia.destinatario, 'Maria');
        assert.strictEqual(minhaTransferencia.valorTransferido, 100);
    });

    it('Valida todas transferências retornadas', () => {
        // Arrange
        const servicoDeTransferenciaBancaria = new ServicoDeTransferenciaBancaria();        

        // Act
        servicoDeTransferenciaBancaria.transferir('Joao', 'Maria', 100);
        servicoDeTransferenciaBancaria.transferir('Pinoquio', 'Gepeto', 300);
        servicoDeTransferenciaBancaria.transferir('Chapeuzinho Vermelho', 'Lobo Mal', 0.01);
        const transferencias = servicoDeTransferenciaBancaria.consultarTodasTransferencias();

        // Assert
        assert.strictEqual(transferencias[0].remetente, 'Joao');
        assert.strictEqual(transferencias[0].destinatario, 'Maria');
        assert.strictEqual(transferencias[0].valorTransferido, 100);

        assert.strictEqual(transferencias[1].remetente, 'Pinoquio');
        assert.strictEqual(transferencias[1].destinatario, 'Gepeto');
        assert.strictEqual(transferencias[1].valorTransferido, 300);

        assert.strictEqual(transferencias[2].remetente, 'Chapeuzinho Vermelho');
        assert.strictEqual(transferencias[2].destinatario, 'Lobo Mal');
        assert.strictEqual(transferencias[2].valorTransferido, 0.01);
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
        assert.strictEqual(ultimaTransferencia.remetente, 'Chapeuzinho Vermelho');
        assert.strictEqual(ultimaTransferencia.destinatario, 'Lobo Mal');
        assert.strictEqual(ultimaTransferencia.valorTransferido, 0.01);
    });

    it('Valida entrada vazia para remetente da transferência', () => {
        // Arrange
        const servicoDeTransferenciaBancaria = new ServicoDeTransferenciaBancaria();  

        // Act & Assert
        assert.throws(() => servicoDeTransferenciaBancaria.transferir('Joao', '', 100), TypeError);
    });

    it('Valida entrada vazia para destinatário da transferência', () => {
        // Arrange
        const servicoDeTransferenciaBancaria = new ServicoDeTransferenciaBancaria();  

        // Act & Assert
        assert.throws(() => servicoDeTransferenciaBancaria.transferir('', 'Maria', 100), TypeError);
    });

    it('Valida entrada inválida para valor da transferência', () => {
        // Arrange
        const servicoDeTransferenciaBancaria = new ServicoDeTransferenciaBancaria();  

        // Act & Assert
        assert.throws(() => servicoDeTransferenciaBancaria.transferir('Joao', 'Maria', -5), TypeError);
    });

    it('Valida retorno null ao consultar transferencias e não houver nenhuma transferência realizada', () => {
        // Arrange
        const servicoDeTransferenciaBancaria = new ServicoDeTransferenciaBancaria();  

        // Act & Assert
        assert.strictEqual(servicoDeTransferenciaBancaria.consultarUltimaTransferencia(), null);
        assert.strictEqual(servicoDeTransferenciaBancaria.consultarTodasTransferencias(), null);

    });
});