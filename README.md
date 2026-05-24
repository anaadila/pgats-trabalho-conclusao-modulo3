# pgats-trabalho-conclusao-modulo3

Parte prática do trabalho de conclusão do módulo 3 da pós-graduação em Automação de Testes com classe de consulta e realização de pagamentos, incluindo testes automatizados.

## 📋 Descrição do Desafio

### Objetivo:
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara', caso contrário, a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o último pagamento.

### Exemplo:
```javascript
   const servicoDePagamento = new ServicoDePagamento();
   servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
   console.log(servicoDePagamento.consultarUltimoPagamento());
   {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 156.87,
      categoria: 'cara'
   }
```
   
### Entrega:
A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.

## 🧠 Objetivo do Projeto

Implementar uma classe de serviço de pagamento que permita:

- registrar pagamentos
- consultar o último pagamento realizado

Os pagamentos são armazenados como objetos JavaScript em uma lista.

## ✅ Regras do desafio

- Cada pagamento deve conter as propriedades:
  - `codigoBarras`
  - `empresa`
  - `valor`
  - `categoria`
- Se o valor for maior que `100.00`, a categoria deve ser `cara`
- Caso contrário, a categoria deve ser `padrão`
- O método de consulta deve retornar apenas o último pagamento registrado

## 🚀 Instalação

### Pré-requisitos
- Node.js 14+ instalado

### Passos

1. Clone ou baixe o repositório
```bash
git clone <url-do-repositorio>
cd pgats-trabalho-conclusao-modulo3
```
2. Instale as dependências
```bash
npm install
```

## 📝 Como usar

### Executar testes

```bash
npm test
```

### Gerar relatório visual

```bash
npm run test:report
```

#### Abrir relatório HTML

**Windows:**
```bash
start .\mochawesome-report\mochawesome.html
```

**Mac:**
```bash
open ./mochawesome-report/mochawesome.html
```

**Linux:**
```bash
xdg-open ./mochawesome-report/mochawesome.html
```

## 📂 Estrutura do Projeto

```
pgats-trabalho-conclusao-modulo3/
├── src/
│   ├── servicoDePagamento.js
│   └── servicoDeTransferenciaBancaria.js
├── test/
│   ├── servicoDePagamento.test.js
│   └── servicoDeTransferenciaBancaria.test.js
├── package.json
└── README.md
```

## 🧪 Detalhes dos testes

### 💵 Serviço de Pagamento

Os testes cobrem os seguintes cenários de pagamento:

- Pagamento realizado com valor menor ou igual a R$100,00 com categoria `padrão`
- Pagamento realizado com valor maior que R$100,00 com categoria `cara`
- Retorno do último pagamento após várias entradas
- Retorno de todos os pagamentos registrados
- Validação de entrada inválida para valor negativo
- Validação de entrada vazia para código de barras
- Retorno `null` ao consultar pagamentos quando não há nenhum registro

### 💸 Serviço de Transferência Bancária

Os testes cobrem os seguintes cenários de transferência:

- Transferência realizada com sucesso
- Retorno de todas as transferências registradas
- Retorno da última transferência registrada
- Validação de entrada vazia para remetente
- Validação de entrada vazia para destinatário
- Validação de entrada inválida para valor negativo
- Retorno `null` ao consultar transferências quando não há nenhum registro

## 📦 Dependências

- `mocha`: framework de testes
- `mochawesome`: reporter visual para Mocha

## 🔧 Tecnologias usadas

- Node.js
- ECMAScript Modules (`type": "module"`)
- Mocha
- Mochawesome
- Node Assert
