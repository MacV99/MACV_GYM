export const muscleGroups = [
  {
    id: "pecho",
    nombre: "Pecho",
    ejercicios: [
      { nombre: "Plano",         equipo: "barra",     series: 3, reps: 10, peso: 75,   unidad: "lb" },
      { nombre: "Inclinado",     equipo: "mancuerna", series: 4, reps: 12, peso: 22.5, unidad: "lb" },
      { nombre: "Declinado",     equipo: "máquina",   series: 4, reps: 12, peso: 65,   unidad: null },
      { nombre: "Apertura",      equipo: "máquina",   series: 4, reps: 12, peso: 6,    unidad: null },
      { nombre: "Push Ups",      equipo: "corporal",  series: 4, reps: 12, peso: null, unidad: null },
      { nombre: "Plano",         equipo: "mancuerna", series: 3, reps: 10, peso: 27.5, unidad: "lb" },
      { nombre: "Pull Over",     equipo: "mancuerna", series: 3, reps: 10, peso: 27.5, unidad: "lb" },
      { nombre: "Plano",         equipo: "máquina",   series: 4, reps: 8,  peso: 9,    unidad: null },
    ],
  },
  {
    id: "biceps",
    nombre: "Bíceps",
    ejercicios: [
      { nombre: "Curl Barra", equipo: "barra",     series: 4, reps: 12, peso: 22.5, unidad: "lb" },
      { nombre: "Martillo",   equipo: "mancuerna", series: 4, reps: 12, peso: 17.5, unidad: "lb" },
    ],
  },
  {
    id: "espalda",
    nombre: "Espalda",
    ejercicios: [
      { nombre: "Dominadas", equipo: "corporal", series: 4, reps: 9,  peso: null, unidad: null },
      { nombre: "Low Grip",  equipo: "máquina",  series: 4, reps: 12, peso: 10,   unidad: null },
    ],
  },
  {
    id: "triceps",
    nombre: "Tríceps",
    ejercicios: [
      { nombre: "Polea V", equipo: "máquina",   series: 4, reps: 10, peso: 14, unidad: null },
      { nombre: "Copa",    equipo: "mancuerna", series: 3, reps: 12, peso: 25, unidad: "lb" },
      { nombre: "Lazo",    equipo: "máquina",   series: 4, reps: 12, peso: 8,  unidad: null },
    ],
  },
  {
    id: "pierna",
    nombre: "Pierna",
    ejercicios: [
      { nombre: "Prensa",          equipo: "máquina", series: 3, reps: 12, peso: 135,   unidad: "lb" },
      { nombre: "Extensión",       equipo: "máquina", series: 3, reps: 12, peso: 10,    unidad: null },
      { nombre: "Aductor Interno", equipo: "máquina", series: 3, reps: 17, peso: "Full", unidad: null },
      { nombre: "Aductor Externo", equipo: "máquina", series: 3, reps: 17, peso: "Full", unidad: null },
      { nombre: "Femoral",         equipo: "máquina", series: 4, reps: 10, peso: 7,     unidad: null },
    ],
  },
  {
    id: "hombro",
    nombre: "Hombro",
    ejercicios: [
      { nombre: "Militar",          equipo: "mancuerna", series: 3, reps: 12, peso: 20,   unidad: "lb" },
      { nombre: "Militar",          equipo: "máquina",   series: 4, reps: 12, peso: 6,    unidad: null },
      { nombre: "Lateral",          equipo: "máquina",   series: 4, reps: 12, peso: 1,    unidad: null },
      { nombre: "Elevación Cuello", equipo: "barra",     series: 4, reps: 12, peso: 22.5, unidad: "lb" },
      { nombre: "Trapecio",         equipo: "disco",     series: 4, reps: 12, peso: 45,   unidad: null },
      { nombre: "Militar Frente",   equipo: "barra",     series: 4, reps: 12, peso: 12.5, unidad: "lb" },
      { nombre: "Laterales",        equipo: "mancuerna", series: 4, reps: 12, peso: 12.5, unidad: "lb" },
    ],
  },
];

export const totalEjercicios = muscleGroups.reduce((sum, g) => sum + g.ejercicios.length, 0);
