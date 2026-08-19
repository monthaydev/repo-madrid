@AGENTS.md

# GUEDES MALLAS — MEMÓRIA DO PROJETO

> Este arquivo é a fonte da verdade do projeto. Leia por inteiro antes de qualquer tarefa.
> Se algum prompt conflitar com ele, este arquivo prevalece.

---

## O QUE É

Landing page da **Guedes Mallas de Protección**, instalação de redes de
proteção (varanda, janela, terraço, escada, pets) com base em **Alcalá de
Henares** e atuação em toda a Comunidad de Madrid.

Cliente ideal: **família com criança pequena e dono de gato**. A pessoa que
chega aqui não está comprando um produto, está tirando um medo da cabeça.

Objetivo de negócio, nesta ordem:

1. **Agendar visita técnica** (WhatsApp) — é o que vira orçamento e obra.
2. **Aparecer no Google local** — pedido explícito do cliente no briefing.

**Não é** um site institucional, não é catálogo e não tem loja. É uma página
única de conversão + páginas legais.

---

## IDIOMA — a regra que mais se erra aqui

| Onde | Idioma |
|---|---|
| Toda a copy do site, `alt`, metadata, páginas legais | **Espanhol (es-ES)** |
| Nomes de arquivo, componentes, variáveis, comentários | **Espanhol** |
| `CLAUDE.md`, vault, changelog, conversa com o João | **pt-BR** |

O vocabulário do código é o do domínio: `cabecera`, `pie`, `malla`, `hierro`,
`minio`, `datos`, `fotos`. Não misture pt e es dentro do código.

---

## DIREÇÃO VISUAL: "LA MALLA"

Um muro encalado de Madrid com estrutura de ferro por cima.

### Regra número um

**A malha é a gramática do site inteiro** — textura de fundo, favicon,
logotipo, desenho técnico, anotação do hero. Não é enfeite: é o produto
desenhado. Nada de textura decorativa que não seja a retícula.

E ela é **losango, não quadrado reto**. As 17 fotos de obra que o cliente
mandou mostram todas a rede montada a 45°: continua sendo um quadrado de
5 cm de lado, mas o que a pessoa vê é rombo. A primeira versão do site
desenhava grade reta — estava desenhando o catálogo do fabricante, não a
varanda do cliente. `.malla` usa `repeating-linear-gradient(45deg / -45deg)`.

### Regra número dois

**O minio é cor de ação, nunca fundo de área grande nem glow.** `#B4462F` é a
tinta antiferrugem que o bastidor de aço leva antes de ser instalado — por
isso ela existe aqui. Aparece em: CTA, uma linha do H1, cotas do desenho
técnico, numeração do processo, hover. Em mais nada.
(Mesma armadilha vermelho/preto já vista no SS Veículos e no Prisma.)

### Tokens (`app/globals.css`, Tailwind 4)

Duas camadas, e a distinção é obrigatória — igual ao ZP Pics:

**1. Tintas** (`@theme`) — valores crus. **Nunca escreva uma tinta direto num
componente**: ela não diz o que significa.
**2. Papéis** (`@theme inline`) — o que a cor significa. É o que o componente
escreve.

| Papel | Uso | Valor |
|---|---|---|
| `fondo` | fundo da página | `#F3EEE4` cal |
| `superficie` | faixa, cartão, campo | `#EBE4D7` |
| `superficie-2` | hover, hueco de foto | `#DFD6C7` |
| `tinta` | texto principal | `#1A1816` hierro |
| `tinta-2` | texto de apoio | `#5C5651` |
| `tinta-3` | rótulo técnico, terciário | `#6E6862` |
| `accion` | CTA, destaque pontual | `#B4462F` minio |
| `fondo-taller` / `tinta-taller` | o único bloco invertido | hierro / cal |
| `accion-taller` | minio sobre fundo escuro | `#E4714F` |

Contraste conferido: tinta/fundo 16,4:1 · tinta-2 6,2:1 · tinta-3 4,7:1 ·
minio/fundo 4,8:1 · cal/minio 4,8:1. **Não crie par novo sem medir.**

### De onde saíram esses valores

Não é gosto: foi extraído das 17 fotos de obra (quantização por cubos,
script em `scratchpad`). Os dominantes reais foram:

- pretos **quentes** — `#302F2E` (9,8%), `#111211` (5,6%), matiz 8–22.
  Por isso o hierro deixou de ser azulado: aquele preto não existia em
  nenhuma foto.
- creme de fachada — `#F2E5D4` e `#E9D9CD`. O cal foi aquecido pra isso.
- a própria rede — `#B0B0AD` / `#D1D0CF`. Não é branco puro.
- céu de Madrid — `#77AAEF` e companhia, ~5%.

**Não existe token azul, e é de propósito.** As fotos trazem muito céu; se
a marca também tiver azul, briga com elas. Os neutros são quentes justamente
pra que o único azul da página venha da foto. (Mesma lógica do ZP Studio:
a cor vem das fotos.)

### Tipografia — uma família só

| Papel | Fonte | Onde |
|---|---|---|
| `font-titulo` | **Archivo** `wdth 115–122`, 800, caixa alta | h1–h3 |
| `font-texto` | **Archivo** `wdth 100`, 400–700 | corpo, botão, nav |
| `font-tecnica` | **Martian Mono** | cotas, rótulos, `01/02`, medidas |

O eixo de largura variável do Archivo é a voz do projeto: expandido e pesado
= chapa de aço; normal = texto que se lê. **Não acrescente uma quarta fonte.**

### Proibido — já reprovado como "cara de IA" (Prisma, ZP Studio, e o próprio Guedes)

- **Serifa de alto contraste sobre fundo creme com acento terracota** — o
  combo mais datado de 2025/26. O creme e o terracota ficaram por decisão do
  João; a serifa foi cortada por isso.
- **Creme + terracota sem serifa também conta.** A skill `frontend-design`
  calibra isso como um dos três looks-padrão de IA de hoje (fundo creme
  ≈`#F4F1EA` + acento terracota), com ou sem serifa. Cortar só a serifa e
  manter o resto da receita **não** tira o cheiro — foi exatamente o erro
  cometido aqui em 17/08/2026, corrigido em 19/08 com o sistema
  "anclajes y vanos" abaixo. As cores em si (`cal`/`minio`) ficam — são
  material real, extraído de foto — o que muda é a estrutura ao redor.
- **Fios de 1px em quase toda seção, viram "layout de jornal".** É outro dos
  três looks-padrão (colunas densas, `border` fino em tudo, raio zero). Um
  hairline por divisor de lista está bem; a página inteira parecendo régua
  técnica, sem nenhum bloco sólido de cor, é o problema.
- Glassmorphism / `backdrop-blur` decorativo
- Aurora, mesh gradient, blobs, glow colorido
- Botão pílula (`rounded-full`); aqui botão é chapa: raio 2px
- Bento grid de "features"
- Texto com gradiente / `bg-clip-text`
- Emoji como ícone (usar Lucide; o glifo do WhatsApp é inline em
  `boton-whatsapp.tsx` porque Lucide não traz marcas)
- **Foto de banco de imagem** — só acervo real da Guedes

### A direção estrutural: **"anclajes y vanos"** (19/08/2026)

O vocabulário vem do próprio ofício: toda instalação da Guedes é fixar
**anclajes** (pontos duros, ancorados) e tensar a malla sobre o **vano**
(o vão aberto). A página segue essa mesma lógica em vez de nove seções
iguais no mesmo creme:

- **Vãos** (`.seccion`, fundo `cal`, `Encabezado` `tamano="grande"`): Hero,
  Por qué, Servicios, Trabajos, Zonas, Preguntas, Contacto. É onde se
  vende — respira mais, o título carrega peso.
- **Âncoras** (`.seccion-ancora`, fundo `hierro` — `bg-fondo-taller`,
  classes `malla malla-taller`, `Encabezado` `invertido tamano="pequeno"`):
  Ficha (`#ficha`), Herrería (`#herreria`), Proceso (`#proceso`) — as três,
  **contíguas**, formam um único bloco escuro de prova técnica no meio do
  scroll. Padding mais denso que um vão (`4rem` vs `5,5rem` desktop) — é
  onde a "conversa" já terminou e começa o dado duro.
- **Hairline em fundo escuro nunca usa `--linea`/`--linea-fuerte`** — essas
  duas são tingidas de hierro e ficam invisíveis sobre hierro. Use
  `border-cal/15` (fraco) ou `border-cal/25` (forte). Para caixa/moldura
  (não lista), `var(--color-hierro-borde)` continua sendo a opção certa
  (é mais sutil — ver `herreria.tsx`, `pie.tsx`).
- **Minio pleno nunca em fundo escuro.** É a mesma regra do ZP Pics com o
  `rec`: `minio` sobre `hierro` mede ~3,3:1, reprova AA pra texto normal.
  Use `minio-claro` (`#E4714F`, já existe como `accion-taller`) — é o que
  `dibujo-tecnico.tsx` faz com a prop `invertido` e o que `proceso.tsx`
  faz na numeração dos passos.
- **`Encabezado` tem a prop `tamano`** (`"grande"` default | `"pequeno"`):
  grande vende, pequeno rotula um bloco de dado duro. Não é sobre tamanho
  de tela — é sobre o papel da seção.
- **`DibujoTecnico` tem a prop `invertido`**: troca `text-hierro`/
  `fill-hierro` por `text-cal`/`fill-cal`, e `minio` por `minio-claro`.
  Nunca reimplemente o SVG duas vezes — sempre passe a prop.

### Como o Guedes chegou a "cara de IA" mesmo seguindo a lista — resolvido em 19/08/2026

O João ouviu de fora que o Guedes estava com cara de IA. Vale registrar
**de onde essa frase vem no portfólio**, porque já tinha acontecido duas
vezes antes e as duas vezes ensinaram algo diferente — e a terceira vez
(aqui) ensinou uma terceira coisa.

**Origem 1 — Margem+, operação "Atelier" (15/05/2026).** O `claude.md`
original do Margem+ mandava usar a skill `ui-ux-pro-max` com glassmorphism,
bento grid e `bg-blue-600`. O próprio Claude diagnosticou por que isso lia
como "template Vercel default": botão azul chapado, sombra colorida, ícone
de pizza como mascote, cards `bg-blue-100` sem hierarquia. A correção não
foi trocar de skill — foi **parar de usar skill de UI genérica** e desenhar
um sistema autoral (tokens "Petróleo & Papel", tipografia fazendo o
trabalho de hierarquia, profundidade por camada tonal em vez de sombra
colorida, motion com causa e direção, e uma marca de verdade: o "+" do nome
virou motivo visual recorrente). Isso foi implementado — `app/globals.css`
do Margem+ hoje é literalmente o sistema Atelier.

**Achado colateral, e é um risco real pra cá também:** nem o `claude.md`
raiz do Margem+ nem o doc canônico da vault (`01 - Visão Geral e UI.md`)
foram atualizados depois do Atelier — os dois ainda descrevem o sistema
antigo, quatro meses depois. Isso quase custou caro: numa sessão de
30/06/2026 no ZP Studio, o João mandou "leia o claude.md e refaça agora" e
o Claude daquela sessão **voltou o site pro visual genérico azul-galáxia**
porque era isso que o `claude.md` (desatualizado) mandava fazer. **Lição:
atualizar este arquivo é parte da entrega, não um follow-up.** Se a Guedes
algum dia mudar de sistema visual, o `CLAUDE.md` muda na mesma sessão —
nunca depois.

**Origem 2 — ZP Studio, mesma frase, a mesma noite (30/06/2026).** O João
escreveu quase literalmente o que disse agora: *"esse site nao ta com um
design interessante, muito cara de ia"* — e pediu pra olhar sites tipo
21st.dev/Awwwards e usar "as skills de frontend". O que resolveu não foi a
skill genérica `ui-ux-pro-max`; foi a skill **`frontend-design`** (nativa do
Claude Code, sem instalar nada) somada a um princípio novo: **gastar a
ousadia num lugar só, o resto fica quieto** — um elemento-assinatura de
verdade (aqui, a régua de movimento do ZP Pics nasceu desse mesmo
aprendizado: "cinco linhas de 'não' e nenhuma de 'o que entra no lugar'"
= app correto e sem graça).

**Checklist consolidado do que já foi reprovado como "cara de IA" em
qualquer um dos cinco projetos** (além do que já está na lista de Proibido
acima): degradê azul, dot grid de fundo, aurora/blobs, botão pílula com
glow, ícone genérico dentro de caixa colorida, `bg-blue-600` chapado,
sombra colorida (`shadow-blue-500/20`), mascote clichê do nicho (o
equivalente aqui seria um emoji de rede/segurança), título de tela feito
de `capitalize()` no slug em vez de texto pensado, `confirm()`/`alert()`
nativo do browser, toast tipo "bem-vindo de volta".

**O diagnóstico:** o `globals.css` daqui já não tinha nenhum item da lista
clássica — a malha, o minio como cor-de-ação só, a tipografia Archivo/
Martian Mono, os tokens extraídos de foto real. Então a causa **não era
token de cor** — era estrutura: seis das nove seções com a mesma forma
(`Encabezado` à esquerda, grid de 12, listas com fio), nenhuma hierarquia
de importância, e zero momento de assinatura. Correto e sem graça, exatamente
como o ZP Pics já tinha descrito o próprio erro antes de ter uma régua de
movimento.

**A correção, plano em `CerebroGuedes\02 - Fluxo 2\Reformulacao Visual —
Ritmo e Assinatura.md`, aprovado e executado em 19/08/2026:**

1. Removido um bug real que ajudava a dar essa impressão: a lista de
   Serviços tinha um visor de foto que seguia o ponteiro (herdado do ZP
   Studio) e travava no meio da tela quando o visitante rolava com a roda
   do mouse — `pointermove`/`pointerleave` não disparam em scroll de roda.
   Virou miniatura fixa, em tudo — GSAP saiu do projeto inteiro.
2. Consertados os vazios de desktop: `por-que.tsx` pulava uma coluna
   inteira; `preguntas.tsx`/`zonas.tsx` tinham cabeçalho de 420px ao lado
   de conteúdo que não enchia a altura.
3. A direção **"anclajes y vanos"**, documentada acima.
4. A assinatura: o hero deixou de ter uma foto e passou a **ser** a foto,
   sangrando de ponta a ponta — ver `hero.tsx`.

**Achado que mudou o plano no meio da execução, e vale registrar:** a
proposta original punha o título do hero **direto sobre o céu da foto**,
apostando que céu é uma zona visualmente uniforme. Medi o contraste de
verdade, pixel a pixel, contra o arquivo real
(`atico-malla-blanca-alcala.jpg`) — e não é uniforme: antena, sombra da
própria malha e borda da cobertura cruzam a zona onde o título cairia, e em
vários pontos o contraste hierro/foto caía pra ~1:1. Texto direto ali teria
ficado ilegível em alguns pontos, mesmo sem eu poder ver a tela renderizada.
A solução foi a mesma receita que a cota do `<VistaAnotada>` já usa —
**chapa `bg-cal` sólida por baixo do texto**, nunca cor direto sobre foto de
tom variável — só que na escala do título inteiro, não só da legenda.
**Lição pro próximo hero-com-foto:** meça o contraste real do arquivo antes
de prometer "céu é seguro" — "parece uniforme" e "é uniforme" são coisas
diferentes, e dá pra medir sem precisar renderizar nada (`System.Drawing` +
fórmula de luminância relativa do WCAG resolve).

> [!warning] Não verificado visualmente
> Esta rodada não teve ferramenta de screenshot/browser disponível. `pnpm
> lint` e `pnpm build` estão limpos, mas ninguém olhou a página renderizada
> em 360/390/768/1440px. Isso ainda está em aberto — ver PENDÊNCIAS.

---

## A REGRA QUE MAIS DOEU: ANIMAÇÃO NUNCA SEGURA CONTEÚDO

Esta página já ficou com **meia tela invisível** duas vezes durante a
construção, por dois motivos diferentes:

1. `ScrollTrigger.batch` escondendo os elementos e não disparando.
2. `gsap.from()` com `strokeDashoffset` deixando o desenho técnico apagado
   até um trigger que nunca veio.

Regra, então:

> **O estado final é o estado padrão.** Se o JS não carregar, se a animação
> não disparar ou se o usuário pedir menos movimento, **tudo tem que estar
> visível**. O estado escondido só pode existir depois que o JS provar que
> está vivo.

Na prática:

- O estado oculto mora atrás de `.js-reveal`, classe que o `<Revelados>`
  coloca no `<html>` — sem JS, nada se esconde.
- Os reveals são `IntersectionObserver` + CSS, não GSAP. Não há scrub nem
  pin nesta página; um observer é mais barato e mais previsível.
- Existe um seguro de 3s que revela o que já está na tela e continuou oculto.
- O desenho técnico (`dibujo-tecnico.tsx`) é **componente de servidor** e se
  traça com `stroke-dashoffset` em CSS puro.

### Outra que já mordeu: `mask-image` recorta os filhos

A malha de fundo **tem que ser uma camada própria** (`.malla::before`).
Aplicar o `mask-image` no elemento apagou uma seção inteira de texto junto
com a textura. Se for usar máscara, use em pseudo-elemento.

---

## STACK

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TS** · **Tailwind 4**
- **pnpm** — o projeto usa `pnpm-lock.yaml`. Nunca instalar com `npm`.
- **lucide-react** — ícones.
- **Sem lib de animação.** Teve GSAP até 19/08/2026, só na lista de Serviços
  (um visor de foto que seguia o ponteiro em desktop). Foi removido —
  congelava no meio da tela quando o visitante rolava com a roda do mouse
  em vez de mover o cursor (`pointermove`/`pointerleave` não disparam em
  scroll de roda), e no fim das contas mostrava **menos** obra no desktop
  do que a miniatura fixa já mostrava no mobile. Motion hoje é só CSS:
  `transition`, `.js-reveal` + `IntersectionObserver` (ver seção seguinte)
  e `stroke-dashoffset` no desenho técnico. **Antes de adicionar qualquer
  lib de animação de novo, escreva no vault por quê** — a régua é a mesma
  do ZP Pics: ~30 kB de menos numa página cujo objetivo declarado é
  ranquear, e cada lib nova é mais uma chance de decisão-por-timeout ou
  travamento silencioso (ver a seção seguinte).
- **Sem ScrollTrigger, sem `lib/gsap.ts`.** Se aparecer o primeiro momento de
  scroll de verdade que precise de uma lib, decide-se então — não antes.

### Regras de motion

1. Movimento só como **resposta a uma ação** ou como **entrada única** de um
   elemento. Nada em laço, nada que se mexa sozinho. (régua herdada do ZP Pics)
2. `prefers-reduced-motion` desliga de verdade — inclusive o `.js-reveal`.
3. Nada de motion cujo estado dependa de um evento que pode não disparar
   (viu a lição do visor da lista de Serviços, acima). Se o gesto depende
   de `pointermove`, cubra também `pointerleave` do contêiner inteiro,
   `scroll` e `blur` da janela — ou não use o gesto.

---

## ARQUITETURA

```
app/
  layout.tsx        fontes, metadata es-ES, JSON-LD (LocalBusiness + FAQPage)
  page.tsx          montagem das seções
  globals.css       tintas, papéis, .malla, .boton, reveals
  icon.tsx          favicon gerado: a própria malha 3×3
  robots.ts  sitemap.ts
  aviso-legal/  privacidad/     obrigatórias na Espanha (LSSI + RGPD)
components/
  cabecera · hero · por-que · servicios · trabajos · ficha · herreria
  proceso · zonas · preguntas · contacto · pie · barra-movil
  vista-anotada.tsx     ← A ASSINATURA (ver abaixo)
  dibujo-tecnico.tsx    plano do taller, CSS puro, server component
  lista-servicios.tsx   lista tipográfica + miniatura real, sem JS
  formulario-visita.tsx redige a mensagem do WhatsApp, sem servidor
  foto.tsx  marca.tsx  encabezado.tsx  boton-whatsapp.tsx  revelados.tsx
lib/
  datos.ts    FONTE ÚNICA do negócio (NAP, serviços, FAQ, zonas, mensagens)
  fotos.ts    MANIFESTO ÚNICO de fotos
```

### `lib/datos.ts` é lei

Nenhum componente escreve telefone, horário, serviço ou pergunta por conta
própria. Trocar o WhatsApp é mexer em **um** arquivo. O mesmo vale para as
mensagens pré-escritas do WhatsApp: cada CTA manda um texto diferente, e
todos moram lá.

### `lib/fotos.ts` é lei

Nenhum componente declara `src`. As 13 fotos em `public/fotos/` são **obra
real da Guedes** (Drive do cliente, 17/08/2026). Nunca banco de imagem.

Enquanto `archivo` for `null`, `<Foto>` pinta um **hueco técnico com o
encargo escrito**, e quem depende daquela foto se adapta sozinho — a lista
de serviços, por exemplo, simplesmente não reserva miniatura para
`escaleras` e `gato`, que são as duas que ainda faltam (o título ocupa o
espaço que a foto ocuparia, pra não desalinhar as colunas das outras
linhas). Nunca enseñe um placeholder de maquete no meio de fotos reais.

Foto nova = arquivo em `public/fotos/` + entrada no manifesto com `ancho`,
`alto` e `alt` reais.

### A assinatura: `vista-anotada.tsx`

Foto real de obra, **anotada como um plano**: rombo de chamada, linha de
referência e cota `5 × 5 cm · 28 hilos`. Mesma linguagem do desenho técnico
da ficha.

Antes de as fotos chegarem havia aqui outra coisa: uma malha sintética
desenhada por cima de um hueco, com um controle de opacidade pra "provar
que a rede está lá". Era uma boa ideia **enquanto não havia foto**. Com foto
real virou mentira visual: a rede já está na imagem, e desenhar uma malha
falsa em cima de uma verdadeira só podia sair desalinhado.

Lição, e vale pro projeto inteiro: **quando o material real chega, o
truque que existia no lugar dele morre.** Não tente salvar o truque.

É componente de servidor — zero JS no elemento mais pesado do hero.

---

## COPY

Espanhol de Madrid, frase curta, verbo forte, **específico**.

- Vende a cena, não o benefício: "el gato sale al balcón y no pasa nada".
- Números concretos onde a concorrência é vaga: 5 × 5 cm, 28 hilos, 3 años.
- **Nunca invente estatística de acidente doméstico.** Não há fonte no
  briefing e é o tipo de dado que destrói a confiança se for checado.
- Sem depoimento inventado. Não há nenhum ainda (briefing: "nao").

**Banido**: "soluciones", "calidad y confianza", "líderes del sector",
"experiencia única", "tu tranquilidad es nuestra prioridad", "profesionales
altamente cualificados" — vocabulário de reforma que não diz nada.

---

## SEO LOCAL (metade do pedido do cliente)

- `HomeAndConstructionBusiness` + `FAQPage` em JSON-LD no `layout.tsx`,
  alimentados por `lib/datos.ts`.
- `ZONAS` não é decoração: cada município é uma busca real. Ao acrescentar
  um, ele entra no `areaServed` do schema sozinho.
- FAQ em `<details>` nativo: Google lê fechado.
- `alt` descreve a cena real — é acesso e é SEO.

**Fora do código, e não menos importante:** o Google Business Profile é o que
mais move o ponteiro nesse setor. Sem ficha verificada em Alcalá de Henares,
nenhuma landing ranqueia sozinha.

---

## PERFORMANCE

- Página estática (`○ prerendered`), sem chamada de servidor.
- `next/image` em tudo via `<Foto>`; `priority` só no Hero.
- Fontes self-hosted por `next/font`, `display: swap`.
- Comprimir imagem antes de subir — as fotos vêm de celular, pesadas.
- Alvo de toque mínimo **44px** em todo CTA (a `.boton` tem `min-height: 3rem`).

## ACESSIBILIDADE

- Contraste mínimo 4,5:1 em todo par texto/fundo (tabela acima).
- `:focus-visible` sempre visível, em minio.
- `prefers-reduced-motion` respeitado de verdade.
- A malha decorativa é `aria-hidden`; o desenho técnico tem `role="img"` com
  `aria-label` que descreve a medida.

---

## PENDÊNCIAS DO CLIENTE (bloqueiam a publicação)

| O que | Onde entra |
|---|---|
| ~~Fotos dos trabalhos~~ | ✅ 13 fotos reais entregues em 17/08/2026 |
| **Foto de escada/hueco interior** | `lib/fotos.ts` → `escalera` (único serviço sem foto) |
| **Foto com gato ou cachorro** | `lib/fotos.ts` → `gato` — é a que mais se compartilha |
| **Foto do taller com o minio** | seria a prova do diferencial de herrería; hoje só há foto de instalação |
| **Endereço exato** | `EMPRESA.direccion` — ele disse que quer mostrar |
| **NIF/NIE e nome fiscal** | `app/aviso-legal/page.tsx` — obrigatório por lei na Espanha |
| **Domínio definitivo** | `EMPRESA.sitio` (hoje `guedesmallas.es`, provisório) |
| **Instagram, se houver** | `EMPRESA.redes` + `sameAs` do schema |

---

## PENDÊNCIA TÉCNICA (bloqueia publicar a reforma "anclajes y vanos")

A rodada de 19/08/2026 (bug do visor, vazios de desktop, hero-firma) foi
inteira sem ferramenta de screenshot/browser disponível na sessão.
`pnpm lint` e `pnpm build` estão limpos, o contraste do hero foi medido
pixel a pixel contra o arquivo real — mas **ninguém olhou a página
renderizada**. Antes de considerar essa reforma pronta pra cliente:

- [ ] Rodar `pnpm dev` e olhar em 360, 390, 768, 1440 e 1920px
- [ ] Conferir se o card do hero não invade a área da cota (`marca: {x:78,
      y:76}` em `hero.tsx`) em nenhuma largura
- [ ] Conferir se "NO LE QUITA OJO." não quebra de forma estranha dentro do
      card em nenhum breakpoint (o card é bem mais estreito que o hero
      antigo — ver o porquê em DIREÇÃO VISUAL)
- [ ] Passar o dedo/mouse pela lista de Serviços em desktop — miniatura tem
      que aparecer sempre, sem depender de hover
- [ ] `prefers-reduced-motion` e navegação por teclado nas três âncoras
      novas (Ficha, Herrería, Proceso)

---

## FLUXO DE TRABALHO

1. Ler este arquivo.
2. Consultar a vault: `C:\Users\João\Documents\CerebroGuedes`
   Funcionalidade grande ou mudança visual ampla: escrever o plano em `.md`
   lá (Fluxo 2) **antes** de codar, e esperar validação do João.
3. Procurar componente existente antes de criar qualquer coisa.
4. Implementar (Fluxo 3).
5. Atualizar o changelog: `CerebroGuedes\Changelog.md`.
   Só entrega de valor. Data + 1–2 linhas. Nunca código. Nunca ajuste pequeno.

---

## ANTES DE FECHAR QUALQUER TAREFA

✓ Nada da lista de proibidos ✓ Copy em espanhol, sem jargão banido
✓ Dado novo saiu de `lib/datos.ts` ✓ Imagem saiu de `lib/fotos.ts`
✓ **Conteúdo visível sem JS e com reduced-motion**
✓ Mobile conferido em 360 e 390 px, zero overflow horizontal
✓ Contraste medido ✓ Alvo de toque ≥44px
✓ `pnpm lint` e `pnpm build` limpos ✓ Sem `console` esquecido
✓ Changelog atualizado, se foi entrega de valor
