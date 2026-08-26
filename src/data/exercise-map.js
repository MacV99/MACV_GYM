/**
 * Mapa de ilustraciones de ejercicios (assets @bryllim/workout-guide, CC BY-SA 4.0).
 * PNG mono 512×512 copiados a /public/exercises/<slug>/frame-{1,2,3}.png.
 *
 * La data en runtime viene del Google Sheet (nombres en español). El match se
 * resuelve en cliente por `normalize(nombre)|equipo`, independiente del Sheet.
 * Fallback por nombre inglés del catálogo, para si algún día se renombra el Sheet.
 *
 * frame-1 = pose inicial (thumbnail); 2 y 3 = fases del movimiento (hover anima).
 */

/** normaliza texto: minúsculas, sin acentos, espacios colapsados */
function normKey(str) {
  return String(str ?? "")
    .trim()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/** clave = normKey(nombre)|normKey(equipo) → { slug, name (inglés del catálogo) } */
export const ASSET_BY_KEY = {
  "plano|barra":              { slug: "bench-press",                         name: "Bench Press" },
  "inclinado|mancuerna":      { slug: "incline-dumbbell-press",              name: "Incline Dumbbell Press" },
  "declinado|maquina":        { slug: "decline-bench-press",                 name: "Decline Bench Press" },
  "apertura|maquina":         { slug: "pec-deck",                            name: "Pec Deck" },
  "push ups|corporal":        { slug: "push-up",                             name: "Push-up" },
  "plano|mancuerna":          { slug: "dumbbell-bench-press",                name: "Dumbbell Bench Press" },
  "plano|maquina":            { slug: "machine-chest-press",                 name: "Machine Chest Press" },
  "pull over|mancuerna":      { slug: "straight-arm-pulldown",              name: "Straight-Arm Pulldown" },
  "curl barra|barra":         { slug: "ez-bar-curl",                         name: "EZ-Bar Curl" },
  "martillo|mancuerna":       { slug: "hammer-curl",                         name: "Hammer Curl" },
  "dominadas|corporal":       { slug: "pull-up",                             name: "Pull-up" },
  "low grip|maquina":         { slug: "seated-row",                          name: "Seated Cable Row" },
  "polea v|maquina":          { slug: "tricep-pushdown",                     name: "Tricep Pushdown" },
  "copa|mancuerna":           { slug: "dumbbell-overhead-tricep-extension",  name: "Dumbbell Overhead Tricep Extension" },
  "lazo|maquina":             { slug: "rope-tricep-pushdown",                name: "Rope Tricep Pushdown" },
  "prensa|maquina":           { slug: "leg-press",                           name: "Leg Press" },
  "extension|maquina":        { slug: "leg-extension",                       name: "Leg Extension" },
  "aductor interno|maquina":  { slug: "hip-adduction-machine",               name: "Hip Adduction Machine" },
  "aductor externo|maquina":  { slug: "hip-abduction-machine",               name: "Hip Abduction Machine" },
  "femoral|maquina":          { slug: "leg-curl",                            name: "Leg Curl" },
  "militar|mancuerna":        { slug: "seated-dumbbell-press",               name: "Dumbbell Seated Shoulder Press" },
  "militar|maquina":          { slug: "machine-shoulder-press",             name: "Machine Shoulder Press" },
  "lateral|maquina":          { slug: "machine-lateral-raise",              name: "Machine Lateral Raise" },
  "elevacion cuello|barra":   { slug: "upright-row",                         name: "Upright Row" },
  "trapecio|disco":           { slug: "shrug",                               name: "Barbell Shrug" },
  "militar frente|barra":     { slug: "overhead-press",                      name: "Overhead Press" },
  "laterales|mancuerna":      { slug: "lateral-raise",                       name: "Lateral Raise" },
  "frontales|barra":          { slug: "front-raise",                         name: "Front Raise" },
};

/** índice secundario por nombre inglés normalizado → slug (fallback rename EN) */
export const ASSET_BY_NAME = Object.fromEntries(
  Object.values(ASSET_BY_KEY).map((v) => [normKey(v.name), v.slug]),
);
