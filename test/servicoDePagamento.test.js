import ServicoDePagamento from '../src/servicoDePagamento.js'
import assert from 'node:assert'

describe('Testes relacionados a pagamentos', () => {

    it('Valida pagamento abaixo de R$100,00 realizado com sucesso', () => {
            // Arrange
            const servicoDePagamento = new ServicoDePagamento();        
    
            // Act
            servicoDePagamento.pagar('0987-7656-3475', 'Samar', 56.87);
            const meuPagamento = servicoDePagamento.consultarUltimoPagamento();
    
            // Assert
            assert.equal(meuPagamento.codigoBarras, '0987-7656-3475');
            assert.equal(meuPagamento.empresa, 'Samar');
            assert.equal(meuPagamento.valor, 56.87);
            assert.equal(meuPagamento.categoria, 'padrão');
        });

    it('Valida pagamento acima de R$100,00 realizado com sucesso', () => {
            // Arrange
            const servicoDePagamento = new ServicoDePagamento();        
    
            // Act
            servicoDePagamento.pagar('0987-7656-3475', 'Samar', 158.27);
            const meuPagamento = servicoDePagamento.consultarUltimoPagamento();
    
            // Assert
            assert.equal(meuPagamento.codigoBarras, '0987-7656-3475');
            assert.equal(meuPagamento.empresa, 'Samar');
            assert.equal(meuPagamento.valor, 158.27);
            assert.equal(meuPagamento.categoria, 'cara');
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
            assert.equal(pagamentos[0].codigoBarras, '0987-7656-3475');
            assert.equal(pagamentos[0].empresa, 'Samar');
            assert.equal(pagamentos[0].valor, 158.27);
            assert.equal(pagamentos[0].categoria, 'cara');

            assert.equal(pagamentos[1].codigoBarras, '1234-7656-3475');
            assert.equal(pagamentos[1].empresa, 'PGATS');
            assert.equal(pagamentos[1].valor, 500);
            assert.equal(pagamentos[1].categoria, 'cara');

            assert.equal(pagamentos[2].codigoBarras, '1234-5678-3475');
            assert.equal(pagamentos[2].empresa, 'Mercado');
            assert.equal(pagamentos[2].valor, 7.50);
            assert.equal(pagamentos[2].categoria, 'padrão');
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
            assert.equal(ultimoPagamento.codigoBarras, '1234-5678-3475');
            assert.equal(ultimoPagamento.empresa, 'Mercado');
            assert.equal(ultimoPagamento.valor, 7.50);
            assert.equal(ultimoPagamento.categoria, 'padrão');
        });
        

});