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
- [3. Modelo de casos de uso](#3-modelo-de-casos-de-uso)
- [4. Modelo do banco de dados](#4-modelo-do-banco-de-dados)
- [5. Banco de dados](#5-banco-de-dados)
- [6. Diagrama de classes](#6-diagrama-de-classes)
- [7. Estudo de viabilidade](#7-estudo-de-viabilidade)
- [8. Regras de negócio (Modelo canvas)](#8-regras-de-negócio-modelo-canvas)
- [9. Design](#9-design)
- [10. Protótipo](#10-protótipo)
- [11. Aplicação](#11-aplicação)

</details>

Para cada semestre, do 1º ao 6º, iremos utilizar este template para documentar o PI - incrementalmente.

# 1. Introdução
(Contextualização, Justificativa (porquê?)

## • Objetivos

## • Metodologia
(Que métodos, tecnologias, modelos de processo, ferramentas irá utilizar?  
Responde à pergunta: Como? Com o que? Onde? Quando?)  

# 2. Requisitos

## • Requisitos funcionais

- RF1 - Fazer login
  O sistema deve permitir o login de usuários. 
  O sistema só poderá ser acessado por usuários cadastrados.

- RF2 - Criar usuários
  O usuário do tipo administrador pode criar usuários do sistema. Os usuários podem ser do tipo administrador, vendedor e produção.

- RF3 - Adicionar/editar/remover produtos
  O sistema deve permitir que usuários do tipo administrador cadastrem/editem/removam produtos.

- RF4 - Cadastrar venda
  O sistema deve permitir que usuários do tipo vendedor e administrador cadastrem novas vendas.
  Ao iniciar o cadastro da venda o usuário deverá informar o tipo da venda, os tipos deverão ser “venda direta” ou “parceria comercial”.
  Na finalização do cadastro o sistema deve conferir o preço e aplicar os devidos descontos.
  As vendas devem possuir um status que poderá ser mudado por usuários. Os status serão “vendido”, “em produção”, “atraso”, “pronto para entrega” e “concluída”.
  Todas as vendas deveram ser visíveis para todos os usuários do tipo produção e administrador, mas os usuários do tipo vendedor só poderão ver seus próprios cadastros.

- RF5 - Enviar e-mail
  O sistema deve enviar e-mail para a equipe de produção quando houver um cadastro de uma nova venda. O sistema deve enviar e-mail para o vendedor que cadastrou a venda quando houver uma mudança de status para “em produção”, “atraso”, “pronto para entrega”.

- RF6 - Criar pdf
  O sistema deve criar um documento pdf com o conteúdo da venda cadastrada e permitir download desse documento. O todos os tipos de usuário devem ter acesso a esse documento. 

## • Requisitos não funcionais
(Escreva os requisitos não funcionais da aplicação (qualidade))  
- RNF1 - Responsividade
  O sistema deve se ajustar a diferentes tamanhos de tela, podendo assim ser usado em diferentes aparelhos.
  
- RNF2 - Portabilidade
  O sistema deve ser capaz de funcionar em diferentes navegadores sem perder suas qualidades. 
  
- RNF3 - Usabilidade
  O sistema deve ser fácil de usar e intuitivo.
  
- RNF4 - Segurança
  O sistema deve bloquear qualquer acesso que o usuário não tenha autorização para ver. O sistema deve ter cuidado com as informações cadastradas nele. 
  
# 3. Modelo de casos de uso

# 4. Modelo do banco de dados
(Modelo conceitual, Modelo lógico, Físico)

# 5. Banco de dados

# 6. Diagrama de classes

# 7. Estudo de viabilidade

# 8. Regras de negócio (Modelo canvas)

# 9. Design
(Paleta de cor, Tipografia, Logo, Wireframes, Modelo de navegação)

# 10. Protótipo
(Gere um protótipo funcional na ferramenta que se sentir mais confortável (Figma, por exemplo) e apresente aqui, indicando o link).

# 11. Aplicação

