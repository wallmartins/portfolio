import { BlogPost } from "@/types/blog";

export const pullRequestsFalamPouco: BlogPost = {
  slug: "pull-requests-falam-pouco",
  title: "pullRequestsFalamPouco", // Translation key
  subtitle: "pullRequestsFalamPouco", // Translation key
  date: "2025-09-25",
  tags: ["IA", "GitHub", "Jira", "Automação", "DevTools"],
  content: "pullRequestsFalamPouco", // Translation key
};

/* Original content for reference:
  content: `
# Quando os Pull Requests falavam pouco demais  
### _Uma crônica sobre IA, Jira, GitHub e maturidade em desenvolvimento_

<br />
Era uma terça-feira qualquer, dessas em que a equipe já estava no limite das entregas.  
Um novo PR surgia no repositório: título genérico, descrição rasa, sem contexto.  
O desenvolvedor que revisava olhava para o código como quem encara um quebra-cabeça sem figura de referência.  
E o QA? Tinha de adivinhar se o que chegava ao teste correspondia mesmo ao que o Jira pedia.  
Era o retrato de um processo falho, onde a pressa engolia a clareza.

## O problema  
O time enfrentava um dilema comum: PRs com descrições superficiais.  
Isso tornava o **code review quase às cegas**.  
Sem entender a motivação da mudança, os revisores perdiam tempo, os QAs testavam no escuro e as brechas passavam despercebidas.  
O resultado? Retrabalho, falhas em produção e frustração acumulada.

## A virada: unir IA, Jira e GitHub  
Foi então que surgiu a ideia de automatizar o processo.  
E se uma IA pudesse **cruzar os dados do Jira, do GitHub e das branches**, entregando de bandeja uma descrição completa, estruturada e contextualizada para cada PR?  

A proposta era ousada:  
- O dev escolhia a branch no GitHub.  
- Selecionava o card do Jira correspondente.  
- A ferramenta, com IA integrada, gerava uma **descrição robusta** no formato padrão da equipe: título, motivação, alterações realizadas, impacto, recomendações e verificação de implementação.

Sem esforço adicional, o que antes era um gargalo transformava-se em **um fluxo claro, objetivo e confiável**.

## As escolhas técnicas  
Para erguer esse automatizador, algumas decisões se mostraram cruciais:

- **Integração com APIs do GitHub e Jira**, para coletar branches e tarefas ativas do dev.  
- **Camada de processamento com IA**, responsável por transformar dados crus em texto fluido e detalhado.  
- **Interface simples**, que guiava o desenvolvedor de forma intuitiva.  
- **Padronização automática das descrições**, eliminando variações e garantindo consistência nos PRs.  

Mais do que código, foi preciso **pensar em experiência do time**: não se tratava de criar um sistema novo, mas de somar sem atrapalhar.

## Resultados  
A mudança foi sentida rapidamente:  
- Revisores passaram a ter **clareza total** sobre o que estavam avaliando.  
- O QA ganhou **confiança** ao testar, sabendo exatamente o que validar.  
- Os desenvolvedores se livraram do peso de escrever descrições complexas sob pressão.  
- E o time, como um todo, deu um salto de **maturidade** em seu processo de entrega.

## Reflexão final  
Mais do que automatizar descrições, o projeto mostrou que a IA pode ser uma aliada poderosa para times de desenvolvimento.  
Ela não substitui o olhar crítico humano, mas **abre espaço para que esse olhar seja mais preciso e produtivo**.  
Foi um passo importante rumo a um processo de engenharia de software mais transparente, seguro e eficiente.  

Porque, no fim das contas, todo time merece que seus PRs contem histórias completas — e não apenas frases soltas.
`,
*/
