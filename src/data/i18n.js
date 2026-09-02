/**
 * Capa i18n del proyecto. El Google Sheet (fuente de verdad) sigue en español;
 * la UI se muestra en EN o ES según `macv_lang` (localStorage) con toggle en vivo.
 *
 * - UI: strings estáticos + del tracker, por idioma.
 * - GROUP_LABELS: id de grupo del Sheet (español) → etiqueta EN/ES.
 * - EQUIPO_META: token de equipo (Sheet/catálogo) → etiqueta EN/ES + ícono.
 * - Runtime: getLang / setLang / initLang + evento "macv:lang".
 *
 * Nota: los nombres oficiales de ejercicios viven en exercise-catalog.js (bilingüe).
 */

/* ── UI STRINGS ── */
export const UI = {
  en: {
    page_title: "MACV GYM — My Routine",
    brand_home_aria: "Home",
    new_ex_aria: "New exercise",
    lang_toggle_aria: "Switch to Spanish",
    footer_tagline: "Track. Progress. Surpass.",
    footer_credit_prefix: "Exercise illustrations:",
    footer_credit_mid: "by Bryl Lim ·",
    heading: "My Routine",
    sub: "Current weights & sets",
    loading: "Loading…",
    groups_word: "groups",
    exercises_word: "exercises",
    all: "All",
    select_group_aria: "Select muscle group",
    pick_group: "Choose a group",
    hint_pick: "Choose a group to see your exercises",
    group_label: "Muscle group",
    modal_title: "New exercise",
    edit_title: "Edit exercise",
    field_name: "Name",
    field_group: "Muscle group",
    field_equipment: "Equipment",
    field_sets: "Sets",
    field_reps: "Reps",
    field_weight: "Weight",
    ph_group: "Select or create group…",
    ph_search: "Search exercise…",
    btn_create: "Create",
    btn_cancel: "Cancel",
    btn_save: "Save",
    btn_edit: "Edit",
    btn_delete: "Delete",
    create_prefix: "+ Create",
    close_aria: "Close",
    reorder_aria: "Reorder",
    lbl_sets: "sets",
    lbl_reps: "reps",
    lbl_weight: "weight",
    pick_exercise: "Choose an exercise",
    change_exercise: "Change exercise",
    no_results: "No matches",
    all_muscles: "All muscles",
    pill_edited: "Exercise updated",
    pill_err_save: "Save failed",
    pill_created: "Exercise created",
    pill_err_create: "Create failed",
    pill_reorder: "Order saved",
    pill_err_reorder: "Reorder failed",
    pill_deleted: "Exercise deleted",
    pill_err_delete: "Delete failed",
  },
  es: {
    page_title: "MACV GYM — Mi Rutina",
    brand_home_aria: "Inicio",
    new_ex_aria: "Nuevo ejercicio",
    lang_toggle_aria: "Cambiar a inglés",
    footer_tagline: "Registra. Progresa. Supérate.",
    footer_credit_prefix: "Ilustraciones de ejercicios:",
    footer_credit_mid: "de Bryl Lim ·",
    heading: "Mi Rutina",
    sub: "Pesos y series actuales",
    loading: "Cargando…",
    groups_word: "grupos",
    exercises_word: "ejercicios",
    all: "Todos",
    select_group_aria: "Seleccionar grupo muscular",
    pick_group: "Elige un grupo",
    hint_pick: "Elige un grupo para ver tus ejercicios",
    group_label: "Grupo muscular",
    modal_title: "Nuevo ejercicio",
    edit_title: "Editar ejercicio",
    field_name: "Nombre",
    field_group: "Grupo muscular",
    field_equipment: "Equipo",
    field_sets: "Series",
    field_reps: "Reps",
    field_weight: "Peso",
    ph_group: "Seleccionar o crear grupo…",
    ph_search: "Buscar ejercicio…",
    btn_create: "Crear",
    btn_cancel: "Cancelar",
    btn_save: "Guardar",
    btn_edit: "Editar",
    btn_delete: "Eliminar",
    create_prefix: "+ Crear",
    close_aria: "Cerrar",
    reorder_aria: "Reordenar",
    lbl_sets: "series",
    lbl_reps: "reps",
    lbl_weight: "peso",
    pick_exercise: "Elige un ejercicio",
    change_exercise: "Cambiar ejercicio",
    no_results: "Sin resultados",
    all_muscles: "Todos los músculos",
    pill_edited: "Ejercicio actualizado",
    pill_err_save: "Error al guardar",
    pill_created: "Ejercicio creado",
    pill_err_create: "Error al crear",
    pill_reorder: "Orden guardado",
    pill_err_reorder: "Error al ordenar",
    pill_deleted: "Ejercicio eliminado",
    pill_err_delete: "Error al eliminar",
  },
};

/* ── GRUPOS (id del Sheet, español) → etiqueta bilingüe + músculos del catálogo ── */
export const GROUP_LABELS = {
  pecho: { en: "Chest", es: "Pecho" },
  biceps: { en: "Biceps", es: "Bíceps" },
  espalda: { en: "Back", es: "Espalda" },
  triceps: { en: "Triceps", es: "Tríceps" },
  pierna: { en: "Legs", es: "Pierna" },
  hombro: { en: "Shoulders", es: "Hombro" },
  abdominales: { en: "Core", es: "Abdominales" },
};

/** id de grupo → músculos del catálogo (para priorizar el buscador de ejercicios) */
export const GROUP_MUSCLES = {
  pecho: ["Chest"],
  biceps: ["Biceps"],
  espalda: ["Back", "Lats", "Upper Back"],
  triceps: ["Triceps"],
  pierna: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors", "Legs"],
  hombro: ["Shoulders", "Rear Delts"],
  abdominales: ["Core"],
};

/* ── EQUIPO (token normalizado sin acento) → etiqueta bilingüe + ícono Bootstrap ── */
export const EQUIPO_META = {
  barra: { en: "Barbell", es: "Barra", icon: "bi-dash-lg" },
  mancuerna: { en: "Dumbbell", es: "Mancuerna", icon: "bi-plus-lg" },
  maquina: { en: "Machine", es: "Máquina", icon: "bi-gear-fill" },
  cable: { en: "Cable", es: "Cable", icon: "bi-reception-4" },
  corporal: { en: "Bodyweight", es: "Corporal", icon: "bi-person-fill" },
  disco: { en: "Plate", es: "Disco", icon: "bi-record-circle-fill" },
  kettlebell: { en: "Kettlebell", es: "Kettlebell", icon: "bi-lightbulb-fill" },
  banda: { en: "Band", es: "Banda", icon: "bi-bezier2" },
  cardio: { en: "Cardio", es: "Cardio", icon: "bi-heart-pulse-fill" },
  "barra-dominadas": { en: "Pull-up Bar", es: "Barra dominadas", icon: "bi-bar-chart-steps" },
  banco: { en: "Bench", es: "Banco", icon: "bi-list" },
  pared: { en: "Wall", es: "Pared", icon: "bi-square" },
  silla: { en: "Chair", es: "Silla", icon: "bi-dot" },
  puerta: { en: "Doorway", es: "Puerta", icon: "bi-door-closed-fill" },
  toalla: { en: "Towel", es: "Toalla", icon: "bi-dot" },
  cajon: { en: "Box", es: "Cajón", icon: "bi-box-fill" },
  fitball: { en: "Ball", es: "Fitball", icon: "bi-circle-fill" },
};

/** equipos ofrecidos en el combo del formulario (orden) */
export const EQUIPOS = ["barra", "mancuerna", "máquina", "disco", "corporal", "cable"];

/* ── RUNTIME DE IDIOMA (compartido: localStorage + evento en vivo) ── */
export const LANG_KEY = "macv_lang";

export function getLang() {
  try {
    return localStorage.getItem(LANG_KEY) === "es" ? "es" : "en";
  } catch {
    return "en";
  }
}

export function setLang(lang) {
  const l = lang === "es" ? "es" : "en";
  try {
    localStorage.setItem(LANG_KEY, l);
  } catch {}
  document.documentElement.lang = l;
  window.dispatchEvent(new CustomEvent("macv:lang", { detail: l }));
  return l;
}

/** aplica los strings estáticos ([data-i18n], [data-i18n-aria], [data-i18n-title]) */
export function applyStatic(root = document) {
  const l = getLang();
  const dict = UI[l];
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  root.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-aria")];
    if (v != null) el.setAttribute("aria-label", v);
  });
  root.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-title")];
    if (v != null) {
      el.setAttribute("title", v);
      document.title = v;
    }
  });
  // toggle: muestra el idioma ACTIVO como código corto (EN / ES)
  root.querySelectorAll("[data-lang-current]").forEach((el) => {
    el.textContent = l.toUpperCase();
  });
}

/** inicializa idioma + toggle; re-aplica estáticos en cada cambio */
export function initLang() {
  document.documentElement.lang = getLang();
  applyStatic();
  window.addEventListener("macv:lang", () => applyStatic());
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(getLang() === "en" ? "es" : "en"));
  });
}
