# pgats-trabalho-conclusao-modulo3
[![Pipeline CI/CD](https://github.com/anaadila/pgats-trabalho-conclusao-modulo3/actions/workflows/pipeline.yaml/badge.svg)](https://github.com/anaadila/pgats-trabalho-conclusao-modulo3/actions)
![Node Version](https://img.shields.io/badge/Node.js-v22.x-green?style=flat-square&logo=node.js)
![Test Framework](https://img.shields.io/badge/Tests-Mocha-8D6748?style=flat-square&logo=mocha)
![Code Quality](https://img.shields.io/badge/Code%20Quality-MegaLinter-3178C6?style=flat-square)
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)

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
- Node.js 22.x instalado

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

### Gerar resultados de teste em XML

```bash
npm run test:junit
```

### Gerar resultados de teste em JSON

```bash
npm run test:json
```

### Executar todos os relatórios de teste

```bash
npm run test:all
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

## 🚀 Pipeline CI/CD

Este projeto possui uma pipeline automatizada de Integração Contínua/Entrega Contínua (CI/CD) configurada com **GitHub Actions**. A pipeline está localizada em [.github/workflows/pipeline.yaml](.github/workflows/pipeline.yaml) e é responsável por garantir a qualidade e confiabilidade do código através de verificações automáticas e testes.

### 📋 Acionadores da Pipeline

A pipeline é executada automaticamente nos seguintes cenários:

- **Push na branch `main`**: Toda vez que código é enviado para a branch principal
- **Pull Requests para `main`**: Antes de mesclar uma PR, a pipeline valida o código
- **Disparo Manual (Workflow Dispatch)**: Permite executar a pipeline manualmente com opções customizáveis
- **Agendamento (Cron)**: Executa a pipeline semanalmente (toda segunda-feira às 22h, horário de Fortaleza)

### 🔍 Jobs da Pipeline

#### 1️⃣ Job: Code Quality (MegaLinter)

**Nome:** 🔍 MegaLinter

**Objetivo:** Validar a qualidade do código através de análise estática.

**O que faz:**
- Executa o **MegaLinter** (v9) em todas as mudanças de código
- Verifica linting, formatação, segurança e padrões de código
- Detecta problemas de qualidade, segurança e estilo
- Aplica correções automáticas quando possível
- Gera relatórios detalhados de qualidade do código

**Artifacts gerados:**
- Relatórios do MegaLinter em `megalinter-reports/`
- Log de execução em `mega-linter.log`
- Retenção: 30 dias

**Configurações:**
- Timeout: 30 minutos
- Ambiente: Ubuntu Latest
- Docker Image Cache: Habilitado
- Modo de Correção: Pull Request automático (quando aplicável)

#### 2️⃣ Job: Unit Tests

**Nome:** ✅ Unit Tests

**Objetivo:** Executar todos os testes automatizados do projeto.

**O que faz:**
- Configura ambiente Node.js (versão 22.x)
- Instala dependências do projeto
- Executa suite completa de testes com Mocha
- Gera relatórios em múltiplos formatos:
  - Relatório visual HTML (Mochawesome)
  - Resultados em XML (JUnit)
  - Resultados em JSON
- Publica resultados de testes automaticamente
- Comenta em Pull Requests com resumo dos testes

**Artifacts gerados:**
- Relatórios de teste em `mochawesome-report/`
- Resultados em XML em `reports/test-results.xml`
- Resultados em JSON em `reports/test-results.json`
- Retenção: 30 dias

**Configurações:**
- Timeout: 15 minutos
- Ambiente: Ubuntu Latest
- Cache: npm (otimiza instalação de dependências)
- Depende do job `code_quality`

### 🔐 Variáveis de Ambiente

A pipeline utiliza as seguintes variáveis de ambiente:

- `NODE_VERSION`: 22.x (versão do Node.js a usar)
- `NODE_ENV`: test (ambiente de execução)
- `GITHUB_TOKEN`: Token automático do GitHub para permissões

### 🔧 Permissões

A pipeline possui as seguintes permissões configuradas:

- `contents: write` - Escrever no repositório (para commits automáticos)
- `actions: read` - Ler ações do GitHub
- `pull-requests: write` - Comentar em PRs
- `checks: write` - Criar relatórios de verificação

### ⚙️ Concorrência

A pipeline implementa controle de concorrência para evitar execuções simultâneas:

- **Grupo:** Workflow + referência de branch
- **Cancel in Progress:** Ativa - cancela execuções anteriores quando uma nova é disparada

### ✨ Recursos Principais

- ✅ **Qualidade de Código**: MegaLinter valida padrões e segurança
- ✅ **Testes Automatizados**: Execução completa de suite de testes
- ✅ **Relatórios Múltiplos**: HTML, XML, JSON para análise
- ✅ **Correções Automáticas**: Aplica fixes quando possível
- ✅ **Integração GitHub**: Publica resultados e comenta em PRs
- ✅ **Cache Otimizado**: Acelera instalação de dependências
- ✅ **Tolerância a Falhas**: MegaLinter não bloqueia pipeline se houver erros

### 📊 Fluxo de Execução

```
Push/PR → MegaLinter (Code Quality) → Unit Tests → Relatórios & Publicação
                          ↓
              (Se falhar, não impede testes)
```

### 📝 Interpretando Resultados

Ao acessar os detalhes da pipeline no GitHub Actions, você verá:

1. **Status de Code Quality**: Indica se há problemas de qualidade (avisos não bloqueiam)
2. **Status de Unit Tests**: Indica se todos os testes passaram (✅ passa / ❌ falha)
3. **Logs Detalhados**: Disponíveis para debug de falhas
4. **Artifacts**: Relatórios disponíveis para download (30 dias)
5. **Comentário em PR**: Resumo automático de testes (apenas PRs)
