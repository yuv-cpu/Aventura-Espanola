import { Achievement } from '../types';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_steps',
    title: '¡Primeros Pasos!',
    description: 'Completa tu primer nivel en Madrid y saluda como un auténtico madrileño.',
    icon: '👟',
    unlocked: false,
    criteria: 'complete_1_level'
  },
  {
    id: 'ser_master',
    title: 'Maestro de SER',
    description: 'Domina la conjugación completa del verbo SER en las tres primeras ciudades.',
    icon: '👑',
    unlocked: false,
    criteria: 'master_ser'
  },
  {
    id: 'first_boss',
    title: 'Vencedor del Conserje',
    description: 'Supera la misión de jefe de Madrid con un 80% o más de puntuación.',
    icon: '🏆',
    unlocked: false,
    criteria: 'complete_boss_madrid'
  },
  {
    id: 'module1_graduate',
    title: 'Graduado del Módulo 1',
    description: 'Completa con éxito Salamanca y domina el primer módulo del sílabo.',
    icon: '🎓',
    unlocked: false,
    criteria: 'complete_module_1'
  },
  {
    id: 'ser_vs_estar',
    title: 'El Gran Dilema: SER vs ESTAR',
    description: 'Supera los niveles de Segovia distinguiendo esencia y ubicación.',
    icon: '⚖️',
    unlocked: false,
    criteria: 'master_ser_estar'
  },
  {
    id: 'flamenco_family',
    title: 'Corazón Sevillano',
    description: 'Presenta el árbol genealógico completo y usa el verbo TENER en Sevilla.',
    icon: '💃',
    unlocked: false,
    criteria: 'complete_city_sevilla'
  },
  {
    id: 'alhambra_guide',
    title: 'Guía del Albaicín',
    description: 'Resuelve el laberinto de la Alhambra con preposiciones y direcciones.',
    icon: '🗝️',
    unlocked: false,
    criteria: 'complete_boss_granada'
  },
  {
    id: 'module2_graduate',
    title: 'Graduado del Módulo 2',
    description: 'Domina los verbos regulares, la familia, la casa y las direcciones.',
    icon: '📜',
    unlocked: false,
    criteria: 'complete_module_2'
  },
  {
    id: 'clock_master',
    title: 'Amo del Tiempo',
    description: 'Di la hora y formula fechas exactas en Córdoba sin equivocarte.',
    icon: '⌛',
    unlocked: false,
    criteria: 'complete_city_cordoba'
  },
  {
    id: 'sun_navigator',
    title: 'Marinero de la Luz',
    description: 'Domina las expresiones meteorológicas con el verbo HACER en Málaga.',
    icon: '☀️',
    unlocked: false,
    criteria: 'complete_city_malaga'
  },
  {
    id: 'very_much',
    title: 'Maestro de MUY y MUCHO',
    description: 'Distingue perfectamente MUY (adjetivos) y MUCHO (sustantivos) en Cádiz.',
    icon: '🎭',
    unlocked: false,
    criteria: 'master_muy_mucho'
  },
  {
    id: 'module3_graduate',
    title: 'Graduado del Módulo 3',
    description: 'Completa con éxito el Módulo 3: horas, clima, gustos, HAY y HACER.',
    icon: '🌟',
    unlocked: false,
    criteria: 'complete_module_3'
  },
  {
    id: 'morning_runner',
    title: 'Madrugador Imparable',
    description: 'Domina los verbos reflexivos y las rutinas cotidianas en Valencia.',
    icon: '🌅',
    unlocked: false,
    criteria: 'complete_city_valencia'
  },
  {
    id: 'campus_scholar',
    title: 'Intelectual del Campus',
    description: 'Organiza horarios y rutas de metro en Barcelona con fluidez.',
    icon: '🏛️',
    unlocked: false,
    criteria: 'complete_city_barcelona'
  },
  {
    id: 'noble_friend',
    title: 'Amigo Incondicional',
    description: 'Describe rasgos físicos, morales y talentos con SABER en Zaragoza.',
    icon: '🤝',
    unlocked: false,
    criteria: 'complete_city_zaragoza'
  },
  {
    id: 'module4_graduate',
    title: 'Graduado del Módulo 4',
    description: 'Supera con honores el Módulo 4: rutinas, reflexivos, universidad y amigos.',
    icon: '🎖️',
    unlocked: false,
    criteria: 'complete_module_4'
  },
  {
    id: 'pintxo_master',
    title: 'Rey de los Pintxos',
    description: 'Pide en la barra y domina el verbo irregular IR y la contracción AL en Bilbao.',
    icon: '🍢',
    unlocked: false,
    criteria: 'complete_city_bilbao'
  },
  {
    id: 'michelin_diner',
    title: 'Comensal Gourmet',
    description: 'Ordena el menú completo y usa el verbo QUERER en San Sebastián.',
    icon: '🍷',
    unlocked: false,
    criteria: 'complete_city_san_sebastian'
  },
  {
    id: 'camino_conqueror',
    title: 'Peregrino Victorioso',
    description: 'Llega a la Plaza del Obradoiro en Santiago y domina el verbo PODER.',
    icon: '🐚',
    unlocked: false,
    criteria: 'complete_all_15_cities'
  },
  {
    id: 'fiesta_legend',
    title: '¡Leyenda de La Gran Fiesta!',
    description: 'Visita todos los puestos de La Gran Fiesta y aprueba el Examen Oficial BAESP101.',
    icon: '🎉',
    unlocked: false,
    criteria: 'pass_final_assessment'
  },
  {
    id: 'gold_hoarder',
    title: 'Ahorrador de Oro',
    description: 'Acumula más de 3.000 monedas de oro en tu bolsa de viaje.',
    icon: '💰',
    unlocked: false,
    criteria: 'reach_3000_coins'
  },
  {
    id: 'streak_hero',
    title: 'Viajero Constante',
    description: 'Mantén una racha de aprendizaje de 5 días o completa 5 jornadas del plan de estudio.',
    icon: '🔥',
    unlocked: false,
    criteria: 'study_5_days'
  }
];
