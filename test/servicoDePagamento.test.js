import ServicoDePagamento from '../src/servicoDePagamento.js'
import assert from 'node:assert'

describe('Testes relacionados a pagamentos', () => {

    it('Valida pagamento abaixo ou igual a R$100,00 realizado com sucesso com categoria "padrão"', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 56.87);
        const meuPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(meuPagamento.codigoBarras, '0987-7656-3475');
        assert.strictEqual(meuPagamento.empresa, 'Samar');
        assert.strictEqual(meuPagamento.valor, 56.87);
        assert.strictEqual(meuPagamento.categoria, 'padrão');

        // Act
        servicoDePagamento.pagar('0987-7656-1234', 'Mercado', 100);
        const meuSegundoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(meuSegundoPagamento.codigoBarras, '0987-7656-1234');
        assert.strictEqual(meuSegundoPagamento.empresa, 'Mercado');
        assert.strictEqual(meuSegundoPagamento.valor, 100);
        assert.strictEqual(meuSegundoPagamento.categoria, 'padrão');

    });

    it('Valida pagamento acima de R$100,00 realizado com sucesso com categoria "cara"', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 158.27);
        const meuPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(meuPagamento.codigoBarras, '0987-7656-3475');
        assert.strictEqual(meuPagamento.empresa, 'Samar');
        assert.strictEqual(meuPagamento.valor, 158.27);
        assert.strictEqual(meuPagamento.categoria, 'cara');
    });

    it('Valida todos os pagamentos retornados', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 158.27);
        servicoDePagamento.pagar('1234-7656-3475', 'PGATS', 500);
        servicoDePagamento.pagar('1234-5678-3475', 'Mercado', 7.50);
        const pagamentos = servicoDePagamento.consultarTodosPagamentos();

        // Assert
        assert.strictEqual(pagamentos[0].codigoBarras, '0987-7656-3475');
        assert.strictEqual(pagamentos[0].empresa, 'Samar');
        assert.strictEqual(pagamentos[0].valor, 158.27);
        assert.strictEqual(pagamentos[0].categoria, 'cara');

        assert.strictEqual(pagamentos[1].codigoBarras, '1234-7656-3475');
        assert.strictEqual(pagamentos[1].empresa, 'PGATS');
        assert.strictEqual(pagamentos[1].valor, 500);
        assert.strictEqual(pagamentos[1].categoria, 'cara');

        assert.strictEqual(pagamentos[2].codigoBarras, '1234-5678-3475');
        assert.strictEqual(pagamentos[2].empresa, 'Mercado');
        assert.strictEqual(pagamentos[2].valor, 7.50);
        assert.strictEqual(pagamentos[2].categoria, 'padrão');
    });

    it('Valida último pagamento retornado', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 158.27);
        servicoDePagamento.pagar('1234-7656-3475', 'PGATS', 500);
        servicoDePagamento.pagar('1234-5678-3475', 'Mercado', 7.50);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.strictEqual(ultimoPagamento.codigoBarras, '1234-5678-3475');
        assert.strictEqual(ultimoPagamento.empresa, 'Mercado');
        assert.strictEqual(ultimoPagamento.valor, 7.50);
        assert.strictEqual(ultimoPagamento.categoria, 'padrão');
    });

    it('Valida entrada inválida para valor de pagamento', () => {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act & Assert 
        assert.throws(() => servicoDePagamento.pagar('1234-5678-3475', 'Mercado', -1), TypeError);
    });

    it('Valida entrada vazia de código de barras ao realizar pagamento', () => {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act & Assert 
        assert.throws(() => servicoDePagamento.pagar('', 'Mercado', 10), TypeError);
    });

    it('Valida retorno null ao consultar pagamentos e não houver nenhum pagamento realizado', () => {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act & Assert 
        assert.strictEqual(servicoDePagamento.consultarUltimoPagamento(), null);
        assert.strictEqual(servicoDePagamento.consultarTodosPagamentos(), null);
    });
});