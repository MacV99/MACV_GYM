/**
 * Seed de referencia de la rutina (la data en runtime vive en el Google Sheet).
 * Nombres en inglés que coinciden con el catálogo @bryllim/workout-guide.
 * `slug` = ilustración en /public/exercises/<slug>/. Ver src/data/exercise-map.js.
 */
export const muscleGroups = [
  {
    id: "chest",
    nombre: "Chest",
    ejercicios: [
      { nombre: "Bench Press",             equipo: "barbell",    slug: "bench-press",                        series: 3, reps: 10, peso: 75,   unidad: "lb" },
      { nombre: "Incline Dumbbell Press",  equipo: "dumbbell",   slug: "incline-dumbbell-press",             series: 4, reps: 12, peso: 22.5, unidad: "lb" },
      { nombre: "Decline Bench Press",     equipo: "barbell",    slug: "decline-bench-press",                series: 4, reps: 12, peso: 65,   unidad: null },
      { nombre: "Pec Deck",                equipo: "machine",    slug: "pec-deck",                           series: 4, reps: 12, peso: 6,    unidad: null },
      { nombre: "Push-up",                 equipo: "bodyweight", slug: "push-up",                            series: 4, reps: 12, peso: null, unidad: null },
      { nombre: "Dumbbell Bench Press",    equipo: "dumbbell",   slug: "dumbbell-bench-press",               series: 3, reps: 10, peso: 27.5, unidad: "lb" },
      { nombre: "Straight-Arm Pulldown",   equipo: "cable",      slug: "straight-arm-pulldown",              series: 3, reps: 10, peso: 27.5, unidad: "lb" },
      { nombre: "Machine Chest Press",     equipo: "machine",    slug: "machine-chest-press",                series: 4, reps: 8,  peso: 9,    unidad: null },
    ],
  },
  {
    id: "biceps",
    nombre: "Biceps",
    ejercicios: [
      { nombre: "EZ-Bar Curl", equipo: "barbell",  slug: "ez-bar-curl", series: 4, reps: 12, peso: 22.5, unidad: "lb" },
      { nombre: "Hammer Curl", equipo: "dumbbell", slug: "hammer-curl", series: 4, reps: 12, peso: 17.5, unidad: "lb" },
    ],
  },
  {
    id: "back",
    nombre: "Back",
    ejercicios: [
      { nombre: "Pull-up",          equipo: "bodyweight", slug: "pull-up",    series: 4, reps: 9,  peso: null, unidad: null },
      { nombre: "Seated Cable Row", equipo: "cable",      slug: "seated-row", series: 4, reps: 12, peso: 10,   unidad: null },
    ],
  },
  {
    id: "triceps",
    nombre: "Triceps",
    ejercicios: [
      { nombre: "Tricep Pushdown",                    equipo: "cable",    slug: "tricep-pushdown",                    series: 4, reps: 10, peso: 14, unidad: null },
      { nombre: "Dumbbell Overhead Tricep Extension", equipo: "dumbbell", slug: "dumbbell-overhead-tricep-extension", series: 3, reps: 12, peso: 25, unidad: "lb" },
      { nombre: "Rope Tricep Pushdown",               equipo: "cable",    slug: "rope-tricep-pushdown",               series: 4, reps: 12, peso: 8,  unidad: null },
    ],
  },
  {
    id: "legs",
    nombre: "Legs",
    ejercicios: [
      { nombre: "Leg Press",             equipo: "machine", slug: "leg-press",             series: 3, reps: 12, peso: 135,    unidad: "lb" },
      { nombre: "Leg Extension",         equipo: "machine", slug: "leg-extension",         series: 3, reps: 12, peso: 10,     unidad: null },
      { nombre: "Hip Adduction Machine", equipo: "machine", slug: "hip-adduction-machine", series: 3, reps: 17, peso: "Full", unidad: null },
      { nombre: "Hip Abduction Machine", equipo: "machine", slug: "hip-abduction-machine", series: 3, reps: 17, peso: "Full", unidad: null },
      { nombre: "Leg Curl",              equipo: "machine", slug: "leg-curl",              series: 4, reps: 10, peso: 7,      unidad: null },
    ],
  },
  {
    id: "shoulders",
    nombre: "Shoulders",
    ejercicios: [
      { nombre: "Dumbbell Seated Shoulder Press", equipo: "dumbbell", slug: "seated-dumbbell-press",   series: 3, reps: 12, peso: 20,   unidad: "lb" },
      { nombre: "Machine Shoulder Press",         equipo: "machine",  slug: "machine-shoulder-press",  series: 4, reps: 12, peso: 6,    unidad: null },
      { nombre: "Machine Lateral Raise",          equipo: "machine",  slug: "machine-lateral-raise",   series: 4, reps: 12, peso: 1,    unidad: null },
      { nombre: "Upright Row",                    equipo: "barbell",  slug: "upright-row",             series: 4, reps: 12, peso: 22.5, unidad: "lb" },
      { nombre: "Barbell Shrug",                  equipo: "barbell",  slug: "shrug",                   series: 4, reps: 12, peso: 45,   unidad: null },
      { nombre: "Overhead Press",                 equipo: "barbell",  slug: "overhead-press",          series: 4, reps: 12, peso: 12.5, unidad: "lb" },
      { nombre: "Lateral Raise",                  equipo: "dumbbell", slug: "lateral-raise",           series: 4, reps: 12, peso: 12.5, unidad: "lb" },
    ],
  },
];

export const totalEjercicios = muscleGroups.reduce((sum, g) => sum + g.ejercicios.length, 0);
