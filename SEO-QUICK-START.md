# 🚀 SEO Quick Start Guide

## ⚡ Primeiras Ações (Hoje!)

### 1. Configurar variável de ambiente
```bash
# Abra o arquivo .env e certifique-se de que tem:
NEXT_PUBLIC_BASE_URL=https://wallacemartins.dev
```

### 2. Criar imagem OG (Open Graph)
- Crie ou baixe uma imagem `1200x630px`
- Coloque em `public/og-image.jpg`
- Exemplo do que colocar:
  - Seu nome: "Wallace Martins"
  - Profissão: "Senior Software Engineer"
  - Um ícone ou seu avatar

### 3. Google Search Console
1. Acesse: https://search.google.com/search-console
2. Clique em "Adicionar propriedade"
3. Digite: `https://wallacemartins.dev`
4. Siga as instruções de verificação
5. Copie o código de verificação
6. Cole em `src/app/layout.tsx` na linha do `google` verification

### 4. Enviar sitemap
1. No Google Search Console
2. Vá para **Sitemaps**
3. Cole: `https://wallacemartins.dev/sitemap.xml`
4. Clique em "Enviar"

---

## 🎯 Tarefas Imediatas (Esta Semana)

### 1. Adicionar alt text em imagens
```html
<!-- Exemplos -->
<img src="/about.jpg" alt="Wallace Martins - Senior Software Engineer" />
<img src="/profile.jpg" alt="Foto de perfil de Wallace Martins, desenvolvedor" />
```

### 2. Criar página de serviços (Opcional mas muito eficaz)
```
/services
/services/web-development
/services/ai-integration
/services/chatbots
...
```

### 3. Adicionar alt text em ícones
```html
<img src="icon.svg" alt="Ícone de desenvolvimento web" />
```

---

## 📊 Checklist de Verificação

### ✅ Estrutura
- [x] `public/robots.txt` criado
- [x] `src/app/sitemap.ts` criado
- [x] Metadata global implementada
- [x] JSON-LD Schemas adicionados

### ⭕ Configuração (faça agora)
- [ ] Variável `NEXT_PUBLIC_BASE_URL` configurada
- [ ] Imagem `og-image.jpg` criado (1200x630)
- [ ] Google Search Console configurado
- [ ] Sitemap enviado ao Google

### ⭕ Conteúdo (próxima semana)
- [ ] Alt text em todas as imagens
- [ ] Página de serviços criada (opcional)
- [ ] Página About otimizada (descrição longa)

---

## 🧪 Testar SEO

### Google Rich Results Test
```
1. Acesse: https://search.google.com/test/rich-results
2. Cole: https://wallacemartins.dev
3. Clique em "Testar URL ao vivo"
4. Verifique se tem "JSON-LD"
```

### OG Debugger
```
1. Acesse: https://www.opengraphcheck.com/
2. Cole: https://wallacemartins.dev
3. Veja como fica compartilhado no Facebook/LinkedIn
```

### Page Speed Insights
```
1. Acesse: https://pagespeed.web.dev/
2. Cole: https://wallacemartins.dev
3. Analise Performance e SEO
```

---

## 🔑 Keywords Importantes

Lembre-se de usar naturalmente no conteúdo:

### Marca
- Wallace Martins
- wallm

### Genéricos
- desenvolvedor frontend
- engenheiro de software
- desenvolvedor fullstack

### Serviços
- desenvolvimento de landing page
- integração de IA
- chatbot WhatsApp
- automação

---

## 📈 Resultados Esperados

- **Semana 1-2:** Google indexa as novas páginas
- **Mês 1:** Começa a aparecer em buscas de marca
- **Mês 2-3:** Aparece em buscas genéricas ("desenvolvedor")
- **Mês 3+:** Posicionamento melhor em buscas específicas

---

## 🆘 Problemas Comuns

### "O Google não indexa meu site"
✅ Solução: Enviar sitemap no Search Console (passo 4 acima)

### "Open Graph image não aparece"
✅ Solução: Certifique-se que `public/og-image.jpg` existe e tem 1200x630px

### "Metadata não está aparecendo"
✅ Solução: Certifique-se que `NEXT_PUBLIC_BASE_URL` está em `.env`

### "JSON-LD não valida"
✅ Solução: Teste em https://validator.schema.org/

---

## 📚 Arquivos Importantes

| Arquivo | Função |
|---------|--------|
| `public/robots.txt` | Regras para buscadores |
| `src/app/sitemap.ts` | Mapa do site XML |
| `src/lib/seo.ts` | Utilitários de SEO |
| `src/app/layout.tsx` | Metadata global |
| `SEO-IMPROVEMENTS.md` | Documentação completa |

---

## 💬 Próximas Melhorias

Depois que tudo estiver rodando bem, você pode:

1. **Blog otimizado:** Adicionar mais posts com keywords
2. **Case studies:** Criar páginas detalhadas de projetos
3. **FAQ:** Página de perguntas frequentes
4. **Estrutura de links internos:** Vincular páginas relacionadas
5. **Backlinks:** Buscar menções em blogs e portais

---

**Implementado em:** 21 de Outubro de 2025
**Tempo estimado para Setup:** 30 minutos
**Tempo para primeiros resultados:** 2-4 semanas
