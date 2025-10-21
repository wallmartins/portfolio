# 📸 Como Criar a Imagem Open Graph (og-image.jpg)

## Especificações Técnicas

- **Dimensões:** 1200 x 630 pixels
- **Formato:** JPG ou PNG
- **Peso:** Máximo 2-3 MB
- **Localização:** `public/og-image.jpg`

---

## Opção 1: Criar Online (Grátis e Rápido)

### Usando Canva
1. Acesse: https://www.canva.com/
2. Crie um novo design
3. Dimensões: 1200 x 630
4. Adicione:
   - Fundo sólido ou gradiente
   - Seu nome: "Wallace Martins"
   - Seu título: "Senior Software Engineer"
   - Seus ícones/logo pessoal
5. Exporte como JPG
6. Salve em `public/og-image.jpg`

### Usando Plaiceholder
1. https://plaiceholder.co/
2. Gere uma imagem
3. Customize com seu nome

---

## Opção 2: Usar Template Pronto

Aqui está um template em HTML/CSS que você pode renderizar:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, #0d1220 0%, #1a1f3a 50%, #2d1b4e 100%);
      font-family: 'Arial', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      text-align: center;
      color: white;
      padding: 40px;
      max-width: 1000px;
    }

    .title {
      font-size: 72px;
      font-weight: bold;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .subtitle {
      font-size: 48px;
      color: #00d4ff;
      margin-bottom: 30px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .description {
      font-size: 32px;
      color: #c0c0c0;
      margin-bottom: 40px;
    }

    .badge {
      display: inline-block;
      background: #00d4ff;
      color: #0d1220;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 24px;
      font-weight: bold;
    }

    .footer {
      margin-top: 40px;
      font-size: 24px;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="title">Wallace Martins</div>
    <div class="subtitle">Senior Software Engineer</div>
    <div class="description">Frontend • Fullstack • AI Solutions</div>
    <div class="badge">🚀 Transformando Ideias em Realidade Digital</div>
    <div class="footer">wallacemartins.dev</div>
  </div>
</body>
</html>
```

**Como usar:**
1. Copie o HTML acima
2. Salve como `og-image.html`
3. Abra no navegador
4. Pressione `PrintScreen` ou use uma ferramenta de captura
5. Crop para 1200x630
6. Salve como `public/og-image.jpg`

---

## Opção 3: Usar Gerador Automático (Recomendado!)

### Next.js Open Graph Image Generation
Você pode usar uma ferramenta que gera automaticamente:

```typescript
// src/app/og/route.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to right, #0d1220, #2d1b4e)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Wallace Martins
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
```

---

## Opção 4: Ferramentas Online Recomendadas

| Ferramenta | Link | Qualidade |
|-----------|------|-----------|
| Canva | https://canva.com | ⭐⭐⭐⭐⭐ |
| Figma | https://figma.com | ⭐⭐⭐⭐⭐ |
| Photopea | https://photopea.com | ⭐⭐⭐⭐ |
| Piktochart | https://piktochart.com | ⭐⭐⭐⭐ |
| Remove.bg | https://remove.bg/create | ⭐⭐⭐ |

---

## Exemplo de Design

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                   Wallace Martins                          │
│              Senior Software Engineer                       │
│                                                             │
│     Frontend • Fullstack • AI & Automation                 │
│                                                             │
│    🚀 Transformando Ideias em Realidade Digital            │
│                                                             │
│                wallacemartins.dev                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Verificar Resultado

Depois de criar, teste em:
- https://www.opengraphcheck.com/
- Cole sua URL
- Verifique como fica

---

## Dicas de Design

✅ **Faça:**
- Use cores que combinam com seu portfólio
- Adicione seu nome e profissão em evidência
- Use fonte grande (48-72px)
- Fundo simples ou gradiente
- Logo/ícone pessoal

❌ **Evite:**
- Muita poluição visual
- Fontes muito pequenas
- Cores que não contrastam
- Imagens low quality
- Texto muito longo

---

## Otimização de Arquivo

Depois de criada, optimize o arquivo:

```bash
# Usando ImageOptim (Mac) ou similar
# Ou use https://imagecompressor.com/

# Tamanho ideal: 200-500 KB
# Não menos de 1200x630px
```

---

## Teste Final

1. Abra seu portfólio: https://wallacemartins.dev
2. Copie a URL
3. Acesse: https://www.opengraphcheck.com/
4. Cole a URL
5. Você deve ver:
   - Seu nome
   - Sua profissão
   - A imagem og-image.jpg

Se não aparecer, aguarde 1-2 horas para cache limpar.

---

**Dica:** Se criar a imagem em Figma, pode compartilhar e pedir feedback antes de exportar!
