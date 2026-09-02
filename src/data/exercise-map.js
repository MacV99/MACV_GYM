/**
 * Resolución ejercicio → ilustración (assets @bryllim/workout-guide, CC BY-SA 4.0).
 * Frames en /public/exercises/<slug>/frame-{1,2,3}.png. Catálogo bilingüe en exercise-catalog.js.
 *
 * Dos índices de resolución (cliente):
 *   1) ASSET_BY_KEY  — nombres CORTOS/legacy en español del Google Sheet: `normKey(nombre)|normKey(equipo)` → slug.
 *   2) ASSET_BY_NAME — nombres OFICIALES del catálogo (EN y ES) normalizados → slug.
 *      Cubre lo que se crea/edita desde el selector de catálogo, sin importar el idioma guardado.
 *
 * frame-1 = pose inicial (thumbnail); 2 y 3 = fases (tap/hover animan el gesto).
 */
import { CATALOG } from "./exercise-catalog.js";

/** normaliza texto: minúsculas, sin acentos, espacios colapsados */
function normKey(str) {
  return String(str ?? "")
    .trim()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/** clave = normKey(nombreCortoES)|normKey(equipoES) → slug (data histórica del Sheet) */
export const ASSET_BY_KEY = {
  "plano|barra": "bench-press",
  "inclinado|mancuerna": "incline-dumbbell-press",
  "declinado|maquina": "decline-bench-press",
  "apertura|maquina": "pec-deck",
  "push ups|corporal": "push-up",
  "plano|mancuerna": "dumbbell-bench-press",
  "plano|maquina": "machine-chest-press",
  "pull over|mancuerna": "straight-arm-pulldown",
  "curl barra|barra": "ez-bar-curl",
  "martillo|mancuerna": "hammer-curl",
  "dominadas|corporal": "pull-up",
  "low grip|maquina": "seated-row",
  "polea v|maquina": "tricep-pushdown",
  "copa|mancuerna": "dumbbell-overhead-tricep-extension",
  "lazo|maquina": "rope-tricep-pushdown",
  "prensa|maquina": "leg-press",
  "extension|maquina": "leg-extension",
  "aductor interno|maquina": "hip-adduction-machine",
  "aductor externo|maquina": "hip-abduction-machine",
  "femoral|maquina": "leg-curl",
  // hombro
  "militar|mancuerna": "seated-dumbbell-press",
  "militar|maquina": "machine-shoulder-press",
  "lateral|maquina": "machine-lateral-raise",
  "elevacion cuello|barra": "upright-row",
  "trapecio|disco": "shrug",
  "militar frente|barra": "overhead-press",
  "laterales|mancuerna": "lateral-raise",
  "frontales|barra": "front-raise",
  // core
  "abdominales|corporal": "crunch",
};

/** índice por nombre oficial (EN y ES) normalizado → slug */
export const ASSET_BY_NAME = (() => {
  const idx = {};
  for (const x of CATALOG) {
    idx[normKey(x.en)] = x.slug;
    idx[normKey(x.es)] = x.slug;
  }
  return idx;
})();
