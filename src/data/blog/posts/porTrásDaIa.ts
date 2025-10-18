import { BlogPost } from "@/types/blog";

export const porTrasDaIa: BlogPost = {
  slug: "por-tras-da-ia",
  title: "porTrasDaIa", // Translation key
  subtitle: "porTrasDaIa", // Translation key
  date: "2025-09-25",
  tags: ["IA", "GitHub", "Jira", "Automação", "Backend", "DevTools"],
  content: "porTrasDaIa", // Translation key
};

/* Original content for reference:
  content: `
# Por trás da automação: como construímos PRs inteligentes com IA  
### _Um mergulho técnico em integrações, prompts e modelos que transformaram o fluxo de desenvolvimento_

<br />
Depois de contar a história de como a IA ajudou nosso time a amadurecer seus processos, chegou a hora de abrir o backstage técnico.  
Neste post, vamos falar sobre **como o backend foi construído**, quais integrações se tornaram vitais, e por que optamos por **dois modelos diferentes de IA** para garantir qualidade e clareza nos Pull Requests.

## Arquitetura do backend  
O projeto nasceu com a ideia de ser modular. Cada serviço tem sua responsabilidade clara:

- **GithubService** → responsável por criar e atualizar PRs, além de interagir com branches e commits.  
- **IssuesService** → integra com o Jira, trazendo título, descrição e status da issue selecionada.  
- **PrService** → organiza o fluxo completo: coleta dados, chama a IA e publica o PR no GitHub.  
- **OllamaService** → conecta o backend aos modelos de IA, cuidando dos prompts e do pós-processamento.

Essa separação trouxe escalabilidade e facilidade de manutenção, permitindo evoluir cada parte sem quebrar o todo.

## O fluxo entre Jira, GitHub e IA  
O ciclo de automação acontece em quatro etapas:

1. O dev seleciona a branch e a issue.  
2. O backend coleta as informações brutas do Jira e do GitHub.  
3. O dev faz a requisição para a criação do PR.
4. O backend organiza o prompt com as informações para que seja feita a análise técnica.
5. Ao que finaliza a análise técnica, é montado o prompt para que seja feita a criação do texto do PR baseada na análise técnica.  
6. O resultado retorna formatado no padrão da equipe e é publicado no GitHub.

Esse pipeline simples esconde uma escolha estratégica: **usar dois modelos em vez de um**.

## Dois modelos, dois papéis  
Usar apenas um modelo parecia o caminho mais fácil, mas os resultados mostraram inconsistência: descrições prolixas ou análises rasas.  
Foi aí que decidimos separar as funções:

1. **codellama** → foca na análise técnica do código, sugerindo melhorias, identificando bugs e mantendo o padrão do repositório.  
2. **phi4-mini** → atua como “escritor técnico”, transformando as recomendações do codellama em descrições claras, objetivas e compreensíveis.  

Essa divisão trouxe **clareza e consistência**, evitando que um único modelo ficasse sobrecarregado.

### Exemplo de prompts 

- Prompt enviado para o codellama:
\`\`\`ts
  ### CONTEXTO E REGRAS ###
  Você é um Staff Engineer com mais de 10 anos de experiência em análise forense de código e revisão de pull requests. 
  Sua tarefa é verificar RIGOROSAMENTE se os requisitos do Jira foram REALMENTE implementados no código, sem suposições.

  **REGRAS OBRIGATÓRIAS**:
  1. NUNCA mencione arquivos, classes ou métodos que não estejam EXPLICITAMENTE presentes nos commits fornecidos.
  2. Se não houver evidência clara, classifique como **NÃO IMPLEMENTADO** e explique por quê.
  3. PARA CADA afirmação sobre o código, CITE o nome exato do arquivo de onde veio a evidência.
  4. PROIBIDO inferir implementações baseadas apenas na descrição do Jira ou mensagens de commit.
  5. Seja sempre absurdamente HONESTO e PRECISO em suas análises.
  6. Escreva tudo SEMPRE em PORTUGUÊS, sem exceções.
  7. IGNORE arquivos como package.json, yarn.lock, .gitignore, etc para a sua análise de implementação.
  8. **NUNCA INVENTE ARQUIVOS OU CÓDIGO**. Use APENAS os arquivos e commits fornecidos como referência.

  ### DADOS PARA ANÁLISE ###
  **Descrição do Jira**:  
  {truncatedJiraDescription}

  **Commits**:  
  {truncatedCommits}

  **Arquivos Modificados**:  
  {truncatedFiles}

  ### INSTRUÇÃO FINAL ###
  Analise os commits e determine se os requisitos do Jira foram implementados corretamente. 
  Siga rigorosamente as regras acima e gere um relatório técnico detalhado. 
  **NUNCA INVENTE ARQUIVOS OU CÓDIGO**. Use APENAS as informações fornecidas.
\
\`\`\`

- Prompt enviado para o phi4-mini:
\`\`\`ts

  ### CONTEXTO ###
  Você é um engenheiro de software experiente responsável por criar descrições claras, profissionais e bem formatadas para Pull Requests (PRs) no GitHub. Sua tarefa é transformar um relatório técnico em uma descrição de PR que seja fácil de entender e útil para revisores (DEVs e QA).

  ### INSTRUÇÕES ###
  1. **Formato Markdown**:
    - Use o formato Markdown para estruturar o texto.
    - **NÃO use blocos de código** (como \`\`\`markdown\`\`\` ou \`\`\`\`\`\`) para envolver o Markdown.
    - O Markdown deve ser renderizável diretamente no GitHub.

  2. **Tom e Estilo**: 
    - Seja técnico, direto e profissional.
    - Escreva em **PORTUGUÊS** (sem exceções).
    - Use uma linguagem clara e evite jargões desnecessários.

  3. **Estrutura do PR**:
    - Siga a estrutura típica de um Pull Request, incluindo os seguintes tópicos:
      - **Título do PR**: Um resumo curto e objetivo das mudanças.
      - **Descrição do PR**: Uma explicação detalhada do que foi feito.
      - **Motivação**: Por que essas mudanças foram necessárias?
      - **Alterações Realizadas**: Liste as principais mudanças no código.
      - **Impacto**: Quais são os efeitos dessas mudanças no sistema?
      - **Recomendações para Revisores**: Destaque pontos específicos que precisam de atenção durante a revisão.

  4. **Verificação de Implementação**:
    - Se você **não conseguir confirmar** que algo foi implementado com base no relatório técnico fornecido, indique claramente isso no PR.

  5. **Destaque os Pontos Principais**:
    - Priorize clareza e organização.
    - Inclua detalhes técnicos relevantes, mas sem ser excessivamente verboso.

  6. **Relatório Técnico**:
    - Use o relatório técnico fornecido como base para gerar o PR.

  ### RELATÓRIO TÉCNICO ###
  {codeAnalysis}

  ### INSTRUÇÃO FINAL ###
  Agora, gere a descrição do PR no formato Markdown, seguindo a estrutura e as instruções fornecidas acima. 
  **NÃO use blocos de código** para envolver o Markdown. O texto deve ser renderizável diretamente no GitHub.
\
\`\`\`

## Ollama como aliado  
Para orquestrar os modelos, usamos a **Ollama**.  
Ela foi fundamental no desenvolvimento por três motivos:

- **Baixa latência em testes locais**, acelerando iterações nos prompts.  
- **Flexibilidade na escolha e troca de modelos**, sem reescrever o backend.  
- **Integração simples via API**, encaixando-se naturalmente ao fluxo assíncrono.  

Em fase de desenvolvimento, essa agilidade fez toda a diferença para validar ideias rapidamente.<br />
Claro que existem os seus contras ou, digamos, requisitos:
- **Configurações elevadas na máquina**, vai ser necessário que o computador tenha uma configuração robusta para dar conta de rodar os modelos na sua memória ou placa de vídeo.
- **Configuração do modelo**, será necessário configurar temperatura e ir ajustando os prompts ponto por ponto até que ele chegue em uma resposta satisfatória, visto que ele não é um modelo treinado como o CHATGPT ou Claude.  

## Desafios técnicos  
Nem tudo foram flores. Alguns pontos exigiram ajustes:

- **Rate limits** das APIs de GitHub e Jira.  
- **Consistência das respostas** dos modelos, que precisavam de validação extra.  
- **Jobs assíncronos** para que o PR fosse gerado sem travar a aplicação.

Ainda assim, cada decisão trouxe aprendizado sobre como alinhar IA com engenharia de software tradicional.

## O resultado final  
Com a arquitetura consolidada e os modelos bem definidos, os PRs deixaram de ser um gargalo.  
Hoje, cada descrição traz **contexto, clareza e consistência**, reduzindo retrabalho e aumentando a confiança de devs, revisores e QAs.

## Conclusão  
Mais do que gerar textos automáticos, este projeto mostrou como IA pode se tornar parte da **infraestrutura invisível de produtividade**.  
Separar modelos por função, integrar com ferramentas do dia a dia e orquestrar tudo com a Ollama foi o que transformou uma ideia ousada em solução prática.  

E o mais importante: abriu espaço para que os desenvolvedores gastem menos tempo com burocracia e mais tempo com **criação e inovação**.
`,
*/
