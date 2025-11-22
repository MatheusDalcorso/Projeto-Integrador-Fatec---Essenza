# Projeto Integrador Fatec - Essenza
Projeto Integrador de alunos da Fatec Jahu. Criado para atender uma necessidade da empresa Essenza

<p align="left" style="font-size:28px;"><strong><em>Documentação do PI</em></strong></p>

<details>
  <summary><strong>📑 Sumário</strong></summary>

- [1. Introdução](#1-introdução)
  - [Objetivos](#-objetivos)
  - [Metodologia](#-metodologia)
- [2. Requisitos](#2-requisitos)
  - [Requisitos funcionais](#-requisitos-funcionais)
  - [Requisitos não funcionais](#-requisitos-não-funcionais)
- [3. Estudo de viabilidade](#3-estudo-de-viabilidade)
- [4. Regras de negócio (Modelo canvas)](#4-regras-de-negócio-modelo-canvas)
- [5. Design](#5-design)
- [6. Protótipo](#6-protótipo)
- [7. Aplicação](#7-aplicação)

</details>

Para cada semestre, do 1º ao 6º, iremos utilizar este template para documentar o PI - incrementalmente.

# 1. Introdução

O Projeto consiste no desenvolvimento de um sistema personalizado para a empresa Essenza Collection, especializada na produção e comercialização de velas artesanais e decorativas. O sistema foi idealizado com o propósito de otimizar a comunicação interna entre gestores e colaboradores, além de agilizar os processos de gestão de produtos e vendas.

A iniciativa busca modernizar a forma como as informações são compartilhadas e administradas dentro da empresa, proporcionando maior integração entre os setores, melhor controle operacional e eficiência na tomada de decisões.

Desenvolvido como parte de um projeto acadêmico da Fatec Jahu, o sistema foi planejado com base no modelo de negócios da Essenza Collection, garantindo que todas as funcionalidades estejam alinhadas às suas necessidades reais e características do mercado de velas. O resultado esperado é uma ferramenta prática, segura e escalável, que contribua diretamente para o crescimento e a organização da empresa.

## • Objetivos

Objetivo Geral

Desenvolver um sistema personalizado para a empresa Essenza Collection, com o propósito de melhorar a comunicação interna entre gestores e colaboradores e otimizar os processos de gestão de produtos e vendas, promovendo maior eficiência, organização e integração das atividades da empresa.

Objetivos Específicos

Criar uma plataforma digital intuitiva que facilite a troca de informações entre os setores da empresa.

Automatizar e simplificar o controle de produtos e processos de venda.

Reduzir falhas de comunicação interna e retrabalho operacional.

Proporcionar relatórios e dados que auxiliem na tomada de decisões gerenciais.

Garantir suporte técnico contínuo e manutenção do sistema.

Implementar boas práticas de desenvolvimento e segurança da informação.

Integrar o sistema às necessidades reais e rotinas específicas da Essenza Collection.

## • Metodologia

Para o desenvolvimento do sistema personalizado para a Essenza Collection, adotaremos uma abordagem ágil, utilizando a metodologia Scrum. Essa metodologia permitirá uma maior flexibilidade e adaptação às necessidades do cliente ao longo do projeto.
Utilizaremos as seguintes tecnologias e ferramentas:
- Linguagens de Programação: PHP para o backend e JavaScript para o frontend.
- Banco de Dados: MySQL para armazenamento e gerenciamento dos dados.  
- Ferramentas de Desenvolvimento: Visual Studio Code como ambiente de desenvolvimento integrado (IDE).
- Controle de Versão: Git e GitHub para versionamento e colaboração no código-fonte
- Comunicação e Gestão de Projetos: Trello para organização das tarefas e Teams e Discord para comunicação entre a equipe.

# 2. Requisitos

## • Requisitos funcionais

- RF1 - Fazer login
  O sistema deve permitir o login de usuários. 
  O sistema só poderá ser acessado por usuários cadastrados.

- RF2 - Criar usuários
  O usuário do tipo administrador pode criar usuários do sistema. Os usuários podem ser do tipo administrador, vendedor e produção.

- RF3 - Adicionar/editar/remover produtos
  O sistema deve permitir que usuários do tipo administrador cadastrem/editem/removam produtos,com atributos do código de produto, nome, descrição, preço.

- RF4 - Cadastrar venda
  O sistema deve permitir que usuários do tipo vendedor e administrador cadastrem novas vendas.
  Ao iniciar o cadastro da venda o usuário deverá informar o tipo da venda, os tipos deverão ser “venda direta” ou “parceria comercial”.
  Na finalização do cadastro o sistema deve conferir o preço e aplicar os devidos descontos.
  As vendas devem possuir um status que poderá ser mudado por usuários. Os status serão “vendido”, “em produção”, “atraso”, “pronto para entrega” e “concluída”.
  Todas as vendas deverão ser visíveis para todos os usuários do tipo produção e administrador, mas os usuários do tipo vendedor só poderão ver seus próprios cadastros.

- RF5 - Enviar e-mail
  O sistema deve enviar e-mail para a equipe de produção quando houver um cadastro de uma nova venda. O sistema deve enviar e-mail para o vendedor que cadastrou a venda quando houver uma mudança de status para “em produção”, “atraso”, “pronto para entrega”.

- RF6 - Criar pdf
  O sistema deve criar um documento pdf com o conteúdo da venda cadastrada e permitir download desse documento. O todos os tipos de usuário devem ter acesso a esse documento. 

## • Requisitos não funcionais

- RNF1 - Responsividade
  O sistema deve se ajustar a diferentes tamanhos de tela, podendo assim ser usado em diferentes aparelhos.
  
- RNF2 - Portabilidade
  O sistema deve ser capaz de funcionar em diferentes navegadores sem perder suas qualidades. 
  
- RNF3 - Usabilidade
  O sistema deve ser fácil de usar e intuitivo.
  
- RNF4 - Segurança
  O sistema deve bloquear qualquer acesso que o usuário não tenha autorização para ver. O sistema deve ter cuidado com as informações cadastradas nele. 

# 3. Estudo de viabilidade

- Técnica:
Já possuímos mão de obra qualificada para a criação do software.

- Financeira:
Não estamos tendo do gastos com a criação de software, mas tenho nosso tempo empregado para a criação.

- Mercado:
Já possuímos uma empresa interessada no software que estamos desenvolvendo.

- Operacional:
A equipe está preparada para lidar com os desafios da criação do software.

### FOFA

**Forças:**
- Já possuímos um cliente interessado.
- Nosso time possuí experiência em programação.
- Contato direto com cliente, para realizar validações no projeto.

**Oportunidades:**
- Nosso principal cliente é dono de outras empresas, então podemos conseguir outros projetos.

**Fraquezas:**
- Tempo reduzido.
- Comunicação da equipe poderia ser melhor.

**Ameaças:**
- Cliente abandonar o projeto.
- Membros da equipe sairem.

# 4. Regras de negócio (Modelo canvas)

![modelo canva](https://github.com/user-attachments/assets/227b66a6-ad8a-49de-9a91-e21dfda3f44d)

# 5. Design

Nossa paleta de cores é composta por quatro cores:
 - #160f71
 - #554eae
 - #d1d1d1
 - #161616

![paleta de cores](https://github.com/user-attachments/assets/0a4e41aa-2201-4a92-a0e3-3c0494bbecdd)

Nossa tipografia é a seguinte:
 - Logo: Mokoto
 - Texto: Montserrat

Nosso logo é o seguinte:

![Imagem dos modelos da logo](https://github.com/user-attachments/assets/d3614d75-885c-4bfa-8a4a-97003a7f5746)


# 6. Protótipo

![Imagem do protótipo](https://github.com/user-attachments/assets/b9e8d652-7efe-4762-9089-8f89e7e30f02)


Link do protótipo: https://www.figma.com/design/QJWOUv8Bm4XrxgArD7DpXO/Synca?node-id=0-1&t=C34iWUdsTKxwXMT1-1

# 7. Aplicação

A aplicação está em desenvolvimento. Atualmente, só temos algumas das telas estáticas prontas. Nos próximos semestres iremos desenvolver o resto da aplicação, incluindo:
  Banco de dados, back-end e aprimorar o front-end.<br>
Eventualmente vamos desenvolver uma versão mobile da aplicação.

