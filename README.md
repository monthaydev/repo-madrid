# Guedes Mallas de Protección — landing page

Página de conversão para instalação de redes de proteção em Alcalá de
Henares e Comunidad de Madrid. Objetivo: **agendar visita técnica** e
**ranquear no Google local**.

A memória completa do projeto (direção visual, regras, pendências) está em
**`CLAUDE.md`**. Leia antes de mexer.

## Rodar

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # produção
pnpm lint
```

Nunca instalar com `npm` — o projeto usa `pnpm-lock.yaml`.

## Onde ficam as coisas

| Preciso mudar… | Arquivo |
|---|---|
| WhatsApp, e-mail, horário, endereço | `lib/datos.ts` |
| Serviços, FAQ, zonas, passos do processo | `lib/datos.ts` |
| Mensagens pré-escritas do WhatsApp | `lib/datos.ts` |
| Fotos | `public/fotos/` + `lib/fotos.ts` |
| Cores e tipografia | `app/globals.css` |
| Texto legal (NIF, endereço fiscal) | `app/aviso-legal/page.tsx` |

## Antes de publicar

Ver a tabela **PENDÊNCIAS DO CLIENTE** no `CLAUDE.md`. Resumo: fotos reais,
endereço, NIF e domínio definitivo.
