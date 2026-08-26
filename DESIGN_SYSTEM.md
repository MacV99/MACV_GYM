# MACV GYM — Sistema de Diseño

> Fuente de identidad: referencia editorial monocroma (landing dark, tipografía display
> enorme, line-art, code en mono).
> Objetivo: no replicar la referencia, sino su versión ordenada para el tracker.
> **Fuente de verdad de valores:** `src/styles/project.css` (`:root`). Este doc explica el
> **porqué**; nunca duplica hex ni px que puedan quedar viejos.

---

## 1. Personalidad de marca
Minimalista · técnico · editorial · confiado · oscuro. Sensación objetivo: herramienta de dev
seria, premium, silenciosa — se siente como leer buena documentación, no como una app fitness.
Anti-referencia: nada de app fitness gamificada — cero gradientes, cero emojis, cero colores
de estado chillones, cero sombras infladas tipo SaaS.

## 2. Principios de diseño
1. **Oscuro por defecto.** Negro profundo de base, todo se construye elevando con blanco.
2. **El acento se gana su lugar (70/20/10) — y el acento es el blanco.** No hay color de vida;
   el blanco puro sobre negro ES el acento. Se reserva para lo que importa (CTA, dato clave).
3. **Line-art + display bold = firma.** Trazo fino monocromo y tipografía display enorme
   apretada. Si un solo recurso unifica la web, es ese contraste tipográfico.
4. **Micro-etiqueta en mono, título en display.** Los eyebrows/labels van en `--font-mono`,
   uppercase con tracking amplio; los títulos grandes en display, sentence-case, tracking negativo.
5. **Aire.** Mucho negro entre bloques. La web respira.

## 3. Color — jerarquía de uso (70/20/10)
| Peso | Rol | Token |
| ---- | --- | ----- |
| 70% | Fondo / superficies | `--clr-dark`, `--surface-1/2/3` |
| 20% | Texto / estructura | `--clr-white`, `--clr-dark2`, bordes `--border-*` |
| 10% | Acento | `--clr-accent` (= blanco puro) |

> Monocromo total: negro + blanco + grises derivados. No existe color de marca. Los valores
> viven en `project.css`; aquí solo roles. Elevación de superficie = mezcla del negro base con
> blanco (`color-mix`), nunca un hex nuevo.

## 4. Tipografía
- **Display / títulos:** `--font-display` (Montserrat) — peso 700–800, sentence-case, tracking
  `-0.01em` a `-0.03em` en tamaños grandes. Sin uppercase en títulos.
- **Cuerpo / UI:** `--font-body` (Montserrat) — 400–600.
- **Labels:** `--font-mono` (Montserrat) — eyebrows, labels (SERIES/REPS/PESO), `code`. Se
  mantiene el token `--font-mono` por rol (uppercase + tracking amplio), aunque hoy también
  es Montserrat. La distinción es de peso/tracking/mayúsculas, no de familia.
- **Micro-etiqueta:** clase `.eyebrow` — mono, uppercase, tracking `0.18em`, gris `--clr-dark2`.
- Escala hero: H1 hasta `5.2rem` en desktop. Caja: sentence-case en títulos y párrafos;
  UPPERCASE **solo** en micro-labels/eyebrows y navegación.

## 5. Espaciado
Escala fija (solo estos pasos): `4·8·12·16·24·32·48·64·96` → tokens `--space-1..9`.

## 6. Bordes, radius y sombras
- Bordes = **blanco a baja opacidad** sobre negro: `--border-soft` (.08), `--border-hover` (.20).
- Radius: `--radius-sm/md/lg` + `--radius-pill` (botones = pill).
- Sombras: `--shadow-sm/md/lg` (negro profundo, poco visibles sobre negro) + `--glow-white`
  (halo blanco sutil, α .12) para foco/hover de CTA.

## 7. Firma gráfica — line-art + trama de puntos
El recurso que unifica la web: contraste entre **display bold enorme** y **trazo/mono fino**,
sobre negro con `--dot-grid` (puntos blancos a α .05). Aparece en: hero, misión/visión, navbar
overlay, footer.

## 8. Contratos de componente
Concepto ↔ clase real ↔ tokens. Mantener sincronizado con el código.

| Componente | Clase | Tokens clave | Regla |
| ---------- | ----- | ------------ | ----- |
| CTA primario | `.button1` | `--clr-accent`, `--glow-white`, `--radius-pill` | fondo blanco, texto `--clr-dark`, glow en hover |
| Acción alterna | `.button2` | `--border-soft`, `--bg-subtle` | outline transparente; `.active` invierte a blanco/negro |
| Superficie base | `.surface` (`--surface-1`) | `--clr-dark` | fondo raíz de la app |
| Card / menú | mision-vision `div`, `.card-context-menu`, `.combo-portal` | `--surface-2/3`, `--border-soft`, `--shadow-md` | superficie elevada, borde tenue blanco |
| Micro-etiqueta | `.eyebrow` | `--font-mono`, `--clr-dark2` | uppercase + tracking amplio |
| Badge equipo | `.badge-*` (gym-tracker) | `--badge-*` (todos neutros) | **distinción por TEXTO, no color** |
| Toast/pill | `.gym-pill-ok/-err` | `rgba(--rgb-white, α)`, `--clr-dark2` | distinción por ícono (check/exclamación), no color |
| Botón destructivo | `.ctx-delete` | `--clr-danger` (= blanco) | señal por ícono papelera + hover, sin rojo |
| Header glass | `header` | `--header-bg`, `--border-soft` | blanco a α baja, blur |
| Input / combo | `.edit-field input`, `.combo-input` | `--border-soft`, `--focus-ring` | foco = anillo blanco visible |

## 9. Estados interactivos
| Elemento | Hover / Focus |
| -------- | ------------- |
| Botón primario | fondo blanco leve-atenuado + `--glow-white`, `translateY(-1px)` |
| Botón alterno | borde `--border-soft` → `--border-hover`, fondo `--bg-subtle` |
| Card | borde tenue → `--border-hover` |
| Link nav | gris (.7) → blanco, fondo `--bg-subtle` |
| Foco teclado | `:focus-visible` → `--focus-ring` (anillo blanco, siempre visible) |

## 10. Accesibilidad (mínimo AA)
- Texto normal ≥4.5:1, grande ≥3:1. Blanco `#fafafa` sobre negro `#0a0a0a` ≈ 19:1.
  Gris secundario `--clr-dark2` (#a1a1a1) sobre negro ≈ 8.9:1 → holgado.
- `:focus-visible` en todo interactivo. Respetar `prefers-reduced-motion` en animaciones.

## 11. Checklist do / don't
**Hacer:** blanco como único acento, superficies por `color-mix` con negro, mono para labels,
display bold sentence-case para títulos, mucho negro de respiro.
**Evitar:** cualquier color de marca/estado, hex hardcodeado fuera de `:root`, radius/sombra
fuera de escala, uppercase en títulos grandes, dots/bordes basados en `--rgb-primary` (negro
sobre negro = invisible → usar `--rgb-white`).

---

## Changelog
Registro fechado de cambios de identidad (fecha absoluta · qué cambió · por qué).

- `2026-08-26` — **Tipografía → Montserrat en todo** (display, cuerpo y labels). Motivo:
  fuente favorita del usuario. Se removió Inter + JetBrains Mono; se cargan solo pesos
  300–800 de Montserrat vía `<link>`. Los tokens `--font-*` siguen separados por rol.

- `2026-08-26` — **Rebrand monocromo dark-first.** Se abandonó la paleta previa (primary `#222`,
  accent verde salvia `#c2d8c4`, badges de equipo en color, estados cyan/rojo) por un sistema
  **monocromo total** (negro `#0a0a0a` + blanco `#fafafa` + grises). Motivo: dirección editorial
  premium pedida por el cliente (referencia de landing dark). Cambios: `project.css` reorganizado
  en 3 niveles con `--rgb-white`, escalas `--space-*`/`--radius-*` y tokens de fuente; tipografía
  a Inter (display/UI) + JetBrains Mono (labels/code); badges y toasts pasan a monocromo
  (distinción por texto/ícono); `--clr-danger` deja de ser rojo (blanco, señal por ícono);
  tokenizados los hex sueltos en `gym-tracker.astro`; corregidos bugs de contraste en
  `mision-vision` y `hero` (texto/dots antes en negro sobre negro).
