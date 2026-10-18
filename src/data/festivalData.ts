import { FestivalStall, FestivalCharacter, Question } from '../types';

export const FESTIVAL_STALLS: FestivalStall[] = [
  {
    id: 'stall-tapas',
    title: 'El Rincón de las Tapas y la Gastronomía',
    spanishTitle: 'Puesto de Tapas Tradicionales',
    vendorName: 'Chef Iñaki & Maite',
    side: 'left',
    canopyColor: '#C60B1E',
    icon: '🍲',
    description: 'Saborea la mejor tortilla de patatas, jamón ibérico, gazpacho andaluz y pulpo a la gallega.',
    specialty: 'Platos Típicos y Bebidas de las 15 Ciudades',
    miniQuiz: {
      id: 'fest-q1',
      type: 'multiple-choice',
      prompt: '¿Cuál es el ingrediente principal de la paella valenciana tradicional?',
      englishPrompt: 'What is the main ingredient of traditional Valencian paella?',
      audioText: 'el arroz',
      options: ['el arroz', 'el pan', 'el queso', 'la manzana'],
      correctAnswer: 'el arroz',
      explanation: 'El arroz bomba cocinado en paella plana con azafrán es el elemento medular de la paella valenciana.',
      hints: ['Grano blanco que absorbe el caldo con azafrán.'],
      syllabusRef: 'M5-COMIDA',
      difficulty: 'medium'
    },
    rewardCoins: 200,
    rewardBadge: 'Cuchara de Oro Festiva'
  },
  {
    id: 'stall-flamenco',
    title: 'El Tablao Flamenco y Música Popular',
    spanishTitle: 'Pabellón del Compás y la Danza',
    vendorName: 'Doña Carmen de Triana',
    side: 'left',
    canopyColor: '#E07A5F',
    icon: '💃',
    description: 'Siente el tañido de la guitarra española y el zapateado de los bailaores sevillanos.',
    specialty: 'Cultura, Días Festivos y Ritmos Populares',
    miniQuiz: {
      id: 'fest-q2',
      type: 'fill-blank',
      prompt: 'Completa: "En la feria de abril las bailaoras ______ vestidas con trajes de lunares (estar)."',
      englishPrompt: 'Complete: "In the April fair the dancers are dressed in polka-dot dresses."',
      audioText: 'están',
      options: ['están', 'son', 'tienen', 'hacen'],
      correctAnswer: 'están',
      explanation: 'Estar vestidas describe la condición o atuendo adoptado en ese momento ceremonial.',
      hints: ['Verbo ESTAR en tercera persona plural.'],
      syllabusRef: 'M2-SER-ESTAR',
      difficulty: 'medium'
    },
    rewardCoins: 200,
    rewardBadge: 'Castañuelas de Plata'
  },
  {
    id: 'stall-libreria',
    title: 'La Librería de Nebrija y la Gramática',
    spanishTitle: 'Pabellón de la Lengua y las Letras',
    vendorName: 'Catedrática Lucía de Salamanca',
    side: 'left',
    canopyColor: '#1D3557',
    icon: '📚',
    description: 'Manuscritos, poemas de Federico García Lorca y la sabiduría de las 15 ciudades.',
    specialty: 'Artículos, Abecedario y Diferencia SER vs ESTAR',
    miniQuiz: {
      id: 'fest-q3',
      type: 'multiple-choice',
      prompt: '¿Quién redactó la primera gramática de la lengua castellana en 1492?',
      englishPrompt: 'Who wrote the first Spanish grammar book in 1492 in Salamanca?',
      audioText: 'Antonio de Nebrija',
      options: ['Antonio de Nebrija', 'Miguel de Cervantes', 'Federico García Lorca', 'Diego Velázquez'],
      correctAnswer: 'Antonio de Nebrija',
      explanation: 'Antonio de Nebrija publicó en Salamanca la "Gramática de la lengua castellana", hito fundacional del español.',
      hints: ['Catedrático de la Universidad de Salamanca.'],
      syllabusRef: 'M1-ALPHA',
      difficulty: 'medium'
    },
    rewardCoins: 200,
    rewardBadge: 'La Pluma Cervantina'
  },
  {
    id: 'stall-relojero',
    title: 'El Relojero Mayor y Calendario Histórico',
    spanishTitle: 'Puesto del Tiempo y el Clima',
    vendorName: 'Astrónomo Rafael de Córdoba',
    side: 'right',
    canopyColor: '#2A9D8F',
    icon: '⏳',
    description: 'Relojes de sol, astrolabios andalusíes y predicciones meteorológicas para toda España.',
    specialty: 'Las Horas, Meses del Año, Fechas y el Verbo HACER',
    miniQuiz: {
      id: 'fest-q4',
      type: 'multiple-choice',
      prompt: '¿Cómo se dice en español que son exactamente las 12:00 del día?',
      englishPrompt: 'How do you say in Spanish that it is exactly 12:00 noon?',
      audioText: 'Es mediodía o son las doce en punto',
      options: ['Es mediodía en punto', 'Son las doce de la noche', 'Es la una del mediodía', 'Son doce horas'],
      correctAnswer: 'Es mediodía en punto',
      explanation: 'Las 12:00 diurnas se expresan comúnmente como "Es mediodía" o "Son las doce en punto del mediodía".',
      hints: ['La mitad del día: mediodía.'],
      syllabusRef: 'M3-HORA',
      difficulty: 'medium'
    },
    rewardCoins: 200,
    rewardBadge: 'El Astrolabio de Oro'
  },
  {
    id: 'stall-estacion',
    title: 'La Estación Central de Viajeros',
    spanishTitle: 'Pabellón del Metro y Rutinas',
    vendorName: 'Marc & Pau',
    side: 'right',
    canopyColor: '#F59E0B',
    icon: '🚆',
    description: 'Mapas de metro de Barcelona y Valencia, horarios universitarios y guías de transporte.',
    specialty: 'Rutinas Cotidianas, Verbos Reflexivos y Movilidad',
    miniQuiz: {
      id: 'fest-q5',
      type: 'fill-blank',
      prompt: 'Completa: "Por la mañana el estudiante se despierta, se ducha y ______ en metro a la facultad (ir)."',
      englishPrompt: 'Complete: "In the morning the student wakes up, showers and goes by metro to faculty."',
      audioText: 'va',
      options: ['va', 'vamos', 'van', 'voy'],
      correctAnswer: 'va',
      explanation: 'Tercera persona singular del verbo ir: él va.',
      hints: ['Tercera persona singular del verbo IR.'],
      syllabusRef: 'M5-IR',
      difficulty: 'medium'
    },
    rewardCoins: 200,
    rewardBadge: 'El Billete de Honor del Viajero'
  },
  {
    id: 'stall-capitania',
    title: 'La Capitanía del Puerto y el Mirador Marino',
    spanishTitle: 'Pabellón de la Brisa y los Deseos',
    vendorName: 'Capitán Manuel & Xoán',
    side: 'right',
    canopyColor: '#0284C7',
    icon: '⛵',
    description: 'Faros, banderas náuticas, brújulas y la bienvenida oficial a los peregrinos del Camino.',
    specialty: 'Verbos Modales PODER y QUERER, Clima y Orientación',
    miniQuiz: {
      id: 'fest-q6',
      type: 'multiple-choice',
      prompt: '¿Cuál es la forma correcta para decir "We can achieve everything with effort"?',
      englishPrompt: 'What is the correct form for "We can achieve everything with effort"?',
      audioText: 'Podemos lograr todo con esfuerzo',
      options: [
        'Podemos lograr todo con esfuerzo',
        'Puedemos lograr todo con esfuerzo',
        'Podéis lograr todo con esfuerzo',
        'Puden lograr todo con esfuerzo'
      ],
      correctAnswer: 'Podemos lograr todo con esfuerzo',
      explanation: 'Nosotros concuerda con "podemos" (la primera persona plural de PODER no diptonga).',
      hints: ['Nosotros podemos (sin diptongo ue).'],
      syllabusRef: 'M5-PODER',
      difficulty: 'medium'
    },
    rewardCoins: 200,
    rewardBadge: 'El Timón de Oro'
  }
];

export const FESTIVAL_CHARACTERS: FestivalCharacter[] = [
  {
    id: 'char-elena',
    name: 'Elena',
    originCity: 'Madrid',
    role: 'Estudiante de Filosofía y Guía Madrileña',
    avatar: '👩‍🎓',
    avatarColor: '#C60B1E',
    xPercent: 24,
    yPercent: 44,
    dialogue: '¡Qué emoción verte aquí en La Gran Fiesta! Recuerdo cuando aterrizaste en Barajas y apenas sabías decir "¿Cómo estás?". ¡Ahora hablas con una soltura impresionante!',
    englishDialogue: 'What a thrill to see you here at La Gran Fiesta! I remember when you landed at Barajas airport and could barely say "How are you?". Now you speak with impressive fluency!',
    trivia: 'Madrid alberga el restaurante más antiguo del mundo en funcionamiento continuo: Sobrino de Botín, fundado en 1725.',
    interactiveQuestion: {
      prompt: 'Elena te pregunta con una sonrisa: "Para brindar por tu aventura en Madrid, ¿qué solemos exclamar en España al chocar los vasos?"',
      options: ['¡Salud!', '¡Por favor!', '¡Buen provecho!'],
      correctAnswer: '¡Salud!',
      reactionCorrect: '¡Exacto! ¡Salud y viva tu aventura en España!',
      reactionIncorrect: 'Casi, decimos "¡Salud!" al brindar.',
      explanation: '"¡Salud!" es la expresión universal para brindar en los países hispanohablantes.'
    }
  },
  {
    id: 'char-alonso',
    name: 'Maestro Don Alonso',
    originCity: 'Toledo',
    role: 'Maestro Artesano Espadero',
    avatar: '👨‍🏭',
    avatarColor: '#D97706',
    xPercent: 18,
    yPercent: 62,
    dialogue: 'Has templado tu conocimiento del español con la misma paciencia y nobleza con que forjamos el acero toledano. ¡Eres un auténtico maestro!',
    englishDialogue: 'You tempered your knowledge of Spanish with the same patience and nobility we forge Toledan steel. You are a true master!',
    trivia: 'Toledo fue capital de España y es célebre por la convivencia de las tres culturas: judía, cristiana y musulmana.',
    interactiveQuestion: {
      prompt: 'Don Alonso te pone a prueba: "¿Qué verbo usamos para las profesiones permanentes: SER o ESTAR?"',
      options: ['SER (Soy artesano)', 'ESTAR (Estoy artesano)', 'TENER (Tengo artesano)'],
      correctAnswer: 'SER (Soy artesano)',
      reactionCorrect: '¡Bien dicho! Como un buen acero toledano, la profesión se expresa con el verbo SER.',
      reactionIncorrect: 'Recuerda: las profesiones se expresan con el verbo SER.',
      explanation: 'Las profesiones y oficios se expresan siempre con SER: "Soy profesor", "Es artesano".'
    }
  },
  {
    id: 'char-lucia',
    name: 'Catedrática Lucía',
    originCity: 'Salamanca',
    role: 'Decana de Filología Hispánica',
    avatar: '👩‍🏫',
    avatarColor: '#4338CA',
    xPercent: 32,
    yPercent: 72,
    dialogue: 'Tu dominio de los pronombres, la concordancia y los tiempos verbales honra a la Universidad de Salamanca. ¡La rana de oro está orgullosa de ti!',
    englishDialogue: 'Your mastery of pronouns, agreement and verb tenses honors the University of Salamanca. The golden frog is proud of you!',
    trivia: 'La fachada de la Universidad de Salamanca esconde una célebre ranita sobre una calavera; encontrarla augura éxito en los exámenes.',
    interactiveQuestion: {
      prompt: 'La decana Lucía te consulta: "¿Cómo concuerda el adjetivo femenino plural para las universidades históricas?"',
      options: ['Las universidades históricas', 'Las universidades históricos', 'La universidad históricas'],
      correctAnswer: 'Las universidades históricas',
      reactionCorrect: '¡Magnífica concordancia de género y número!',
      reactionIncorrect: 'Atención: "universidades" es femenino plural, por tanto "históricas".',
      explanation: 'El sustantivo femenino plural (las universidades) exige el adjetivo en femenino plural (históricas).'
    }
  },
  {
    id: 'char-carmen',
    name: 'Doña Carmen',
    originCity: 'Sevilla',
    role: 'Matriarca Flamenca de Triana',
    avatar: '💃',
    avatarColor: '#E11D48',
    xPercent: 20,
    yPercent: 82,
    dialogue: '¡Ay mi alma! Has aprendido a hablar de la familia y de las emociones con todo el duende y la gracia de Andalucía. ¡Brindemos por tu triunfo!',
    englishDialogue: 'Bless your soul! You learned to speak of family and emotions with all the soul and grace of Andalusia. Let us toast to your triumph!',
    trivia: 'La Giralda de Sevilla fue durante siglos la torre más alta del mundo cristiano y musulmán con sus 104 metros.',
    interactiveQuestion: {
      prompt: 'Doña Carmen te sonríe con palmas: "Dime, mi corazón, ¿cómo se dice en español \'I am 20 years old\'?"',
      options: ['Tengo 20 años', 'Soy 20 años', 'Estoy 20 años'],
      correctAnswer: 'Tengo 20 años',
      reactionCorrect: '¡Olé! ¡En español los años se tienen, con el verbo TENER!',
      reactionIncorrect: '¡Cuidado! En español la edad no se es ni se está, se tiene (Tengo 20 años).',
      explanation: 'En español la edad se expresa obligatoriamente con el verbo TENER.'
    }
  },
  {
    id: 'char-tariq',
    name: 'Historiador Tariq',
    originCity: 'Granada',
    role: 'Guardián del Generalife',
    avatar: '👳‍♂️',
    avatarColor: '#059669',
    xPercent: 42,
    yPercent: 40,
    dialogue: 'Desentrañaste los laberintos de la Alhambra y aprendiste a orientarte por las colinas andaluzas con admirable precisión geográfica.',
    englishDialogue: 'You unraveled the Alhambra labyrinths and learned to navigate Andalusian hills with admirable geographic precision.',
    trivia: 'El nombre de la Alhambra proviene del árabe "al-Qal\'a al-Hamra", que significa la fortaleza roja.',
    interactiveQuestion: {
      prompt: 'Tariq te indica un mapa: "Para ubicar la Alhambra en la colina, ¿qué preposición indica \'cerca de\'?"',
      options: ['Cerca de la colina', 'Lejos de la colina', 'Debajo de la colina'],
      correctAnswer: 'Cerca de la colina',
      reactionCorrect: '¡Exacto! La preposición de lugar indica proximidad.',
      reactionIncorrect: '"Cerca de" es la locución preposicional que indica proximidad.',
      explanation: '"Cerca de" indica poca distancia a un punto de referencia.'
    }
  },
  {
    id: 'char-rafael',
    name: 'Astrónomo Rafael',
    originCity: 'Córdoba',
    role: 'Cronista Mayor del Califato',
    avatar: '🧔',
    avatarColor: '#0D9488',
    xPercent: 78,
    yPercent: 42,
    dialogue: 'El tiempo y las horas ya no tienen secretos para ti. Las campanas de la Mezquita tocan hoy en tu honor.',
    englishDialogue: 'Time and hours no longer have secrets for you. The Mezquita bells toll in your honor today.',
    trivia: 'La Mezquita-Catedral de Córdoba alberga más de 850 columnas de jaspe, granito y mármol bicolor.',
    interactiveQuestion: {
      prompt: 'Rafael consulta su astrolabio: "Si son las 15:30, ¿cómo se expresa en lenguaje natural?"',
      options: ['Son las tres y media', 'Es las tres y media', 'Son las tres y treinta horas'],
      correctAnswer: 'Son las tres y media',
      reactionCorrect: '¡Muy bien calculado! El tiempo en español se canta con naturalidad.',
      reactionIncorrect: 'Se dice "Son las tres y media" (plural "son" para las horas distintas de la una).',
      explanation: 'Para todas las horas excepto la una se usa el plural "Son las...".'
    }
  },
  {
    id: 'char-manuel',
    name: 'Capitán Manuel',
    originCity: 'Málaga',
    role: 'Patrón de Barco del Mediterráneo',
    avatar: '⛵',
    avatarColor: '#0284C7',
    xPercent: 82,
    yPercent: 62,
    dialogue: 'Navegaste con viento de proa y aprendiste a describir el sol, las olas y las tempestades como el más experto marinero de la Costa del Sol.',
    englishDialogue: 'You sailed through headwind and learned to describe sun, waves and storms like the most expert sailor of Costa del Sol.',
    trivia: 'Málaga disfruta de más de 300 días de sol al año y vio nacer al universal pintor Pablo Picasso.',
    interactiveQuestion: {
      prompt: 'El capitán Manuel otea el horizonte: "¿Cómo decimos que hace buen clima con el verbo HACER?"',
      options: ['Hace buen tiempo', 'Está buen tiempo', 'Es buen tiempo'],
      correctAnswer: 'Hace buen tiempo',
      reactionCorrect: '¡Buen viento y buena mar! Usamos HACER para los fenómenos atmosféricos.',
      reactionIncorrect: 'Los fenómenos meteorológicos usan el verbo HACER ("Hace sol", "Hace frío", "Hace buen tiempo").',
      explanation: 'El clima y temperatura se construyen con HACER impersonal: "Hace frío / calor / sol / viento".'
    }
  },
  {
    id: 'char-lola',
    name: 'Lola la del Falla',
    originCity: 'Cádiz',
    role: 'Directora de Chirigotas Gaditanas',
    avatar: '🎭',
    avatarColor: '#F43F5E',
    xPercent: 72,
    yPercent: 80,
    dialogue: '¡Con el arte que tienes, te vienes conmigo a cantar al concurso del Carnaval el año que viene! ¡Vivan los gustos y la alegría!',
    englishDialogue: 'With your talent, you\'re coming with me to sing at the Carnival competition next year! Long live joy and tastes!',
    trivia: 'Cádiz fue fundada hacia el 1104 a.C. por navegantes fenicios, siendo considerada la ciudad más antigua de Occidente.',
    interactiveQuestion: {
      prompt: 'Lola toca el pito de carnaval: "Si a ti te entusiasma la música de Cádiz, ¿cómo dices \'I like music very much\'?"',
      options: ['Me gusta mucho la música', 'Me gusta muy la música', 'Me gustan mucho la música'],
      correctAnswer: 'Me gusta mucho la música',
      reactionCorrect: '¡Olé tu gracia gaditana! MUCHO acompaña al verbo, no MUY.',
      reactionIncorrect: 'Recuerda: MUCHO modifica verbos ("Me gusta mucho"), mientras que MUY modifica adjetivos.',
      explanation: 'MUCHO funciona como adverbio de cantidad con verbos ("gusta mucho"). MUY solo acompaña adjetivos o adverbios ("muy alegre").'
    }
  },
  {
    id: 'char-pau',
    name: 'Pau de Ruzafa',
    originCity: 'Valencia',
    role: 'Atleta y Biotecnólogo',
    avatar: '🏃‍♂️',
    avatarColor: '#EA580C',
    xPercent: 38,
    yPercent: 84,
    dialogue: 'Dominaste los verbos reflexivos y las rutinas diarias con la disciplina de un verdadero corredor de fondo. ¡Felicidades, campeón!',
    englishDialogue: 'You mastered reflexive verbs and daily routines with the discipline of a true long-distance runner. Congratulations, champion!',
    trivia: 'El parque del Turia en Valencia es uno de los mayores parques urbanos de España, con 9 kilómetros en un antiguo cauce fluvial.',
    interactiveQuestion: {
      prompt: 'Pau estira los gemelos: "¿Cuál es el pronombre reflexivo correcto para la primera persona: \'Yo ____ levanto temprano\'?"',
      options: ['me', 'se', 'te'],
      correctAnswer: 'me',
      reactionCorrect: '¡Ritmo perfecto de carrera! "Yo me levanto" es el pronombre reflexivo de primera persona.',
      reactionIncorrect: 'El pronombre reflexivo de "yo" es "me" (Yo me levanto).',
      explanation: 'Los pronombres reflexivos son: me, te, se, nos, os, se.'
    }
  },
  {
    id: 'char-marc',
    name: 'Marc de Gaudí',
    originCity: 'Barcelona',
    role: 'Arquitecto y Universitario',
    avatar: '📐',
    avatarColor: '#7C3AED',
    xPercent: 58,
    yPercent: 42,
    dialogue: 'Construiste tus frases con la misma audacia con que Gaudí diseñó la Sagrada Família y el Parc Güell. ¡Impresionante trabajo!',
    englishDialogue: 'You built your sentences with the same audacity Gaudí designed the Sagrada Família and Park Güell. Impressive work!',
    trivia: 'La Sagrada Família de Barcelona es el monumento más visitado de España, en construcción continua desde 1882.',
    interactiveQuestion: {
      prompt: 'Marc revisa sus planos arquitectónicos: "Para preguntar por el horario del metro en la universidad, ¿cuál es la fórmula más correcta?"',
      options: ['¿A qué hora pasa el metro?', '¿Dónde es el metro de hora?', '¿Cuánto metro pasa la hora?'],
      correctAnswer: '¿A qué hora pasa el metro?',
      reactionCorrect: '¡Excelente estructura arquitectónica de la pregunta!',
      reactionIncorrect: 'Se pregunta "¿A qué hora...?" para indagar sobre horarios específicos.',
      explanation: '"¿A qué hora...?" es la interrogativa estándar para solicitar un momento exacto en el horario.'
    }
  },
  {
    id: 'char-pilar',
    name: 'Pilar del Ebro',
    originCity: 'Zaragoza',
    role: 'Custodia del Arte Aragonés',
    avatar: '🕊️',
    avatarColor: '#CA8A04',
    xPercent: 62,
    yPercent: 70,
    dialogue: 'Retrataste la amistad, las virtudes humanas y las habilidades con una nobleza aragonesa intachable. ¡Tienes un corazón de oro!',
    englishDialogue: 'You portrayed friendship, human virtues and skills with irreproachable Aragonese nobility. You have a heart of gold!',
    trivia: 'La Basílica de Nuestra Señora del Pilar en Zaragoza es el primer templo mariano de la cristiandad.',
    interactiveQuestion: {
      prompt: 'Pilar te sonríe afectuosamente: "Para describir a un buen amigo como sincero y generoso, ¿qué verbo usamos?"',
      options: ['SER (Es sincero y generoso)', 'ESTAR (Está sincero y generoso)', 'HACER (Hace sincero y generoso)'],
      correctAnswer: 'SER (Es sincero y generoso)',
      reactionCorrect: '¡Muy bien! Las cualidades de la personalidad se describen con el verbo SER.',
      reactionIncorrect: 'Las cualidades de carácter y personalidad permanentes requieren el verbo SER.',
      explanation: 'Las características intrínsecas de las personas (cualidades morales) se expresan con SER.'
    }
  },
  {
    id: 'char-inaki',
    name: 'Chef Iñaki',
    originCity: 'Bilbao',
    role: 'Maestro Tabernero del Nervión',
    avatar: '👨‍🍳',
    avatarColor: '#B91C1C',
    xPercent: 12,
    yPercent: 48,
    dialogue: '¡Aupa viajero! En mis fogones se celebra tu victoria con un banquete de pintxos insuperable. ¡Te has ganado el título de gastrónomo honorífico!',
    englishDialogue: 'Well done traveler! In my kitchen your victory is celebrated with an unbeatable feast of pintxos. You earned the title of honorary gourmet!',
    trivia: 'El Museo Guggenheim de Bilbao, diseñado por Frank Gehry, está recubierto por más de 33.000 planchas de titanio.',
    interactiveQuestion: {
      prompt: 'Iñaki te ofrece una bandeja humeante: "En la taberna vasca, ¿cómo dices que vas hacia el mercado?"',
      options: ['Voy al mercado', 'Voy a el mercado', 'Voy en el mercado'],
      correctAnswer: 'Voy al mercado',
      reactionCorrect: '¡Perfecto! La contracción A + EL = AL es obligatoria en español.',
      reactionIncorrect: 'Recuerda: la preposición "a" más el artículo "el" siempre se contrae en "al".',
      explanation: 'En español se contrae obligatoriamente: a + el = al (Voy al mercado).'
    }
  },
  {
    id: 'char-maite',
    name: 'Chef Maite',
    originCity: 'San Sebastián',
    role: 'Chef Estrella Michelin de La Concha',
    avatar: '⭐',
    avatarColor: '#047857',
    xPercent: 88,
    yPercent: 52,
    dialogue: 'Tu cortesía en el restaurante y tu precisión al valorar cada plato demuestran una educación y sensibilidad lingüística excepcional.',
    englishDialogue: 'Your dining etiquette and precision in evaluating each dish demonstrate exceptional linguistic sensitivity and manners.',
    trivia: 'San Sebastián cuenta con una de las mayores densidades de estrellas Michelin por metro cuadrado del planeta.',
    interactiveQuestion: {
      prompt: 'Maite te muestra la carta del restaurante: "Si quieres reservar una mesa para dos personas, ¿qué verbo modal de deseo utilizas?"',
      options: ['Quiero reservar una mesa', 'Puedo reservo una mesa', 'Tengo reservar una mesa'],
      correctAnswer: 'Quiero reservar una mesa',
      reactionCorrect: '¡Mesa reservada con el verbo QUERER + Infinitivo!',
      reactionIncorrect: 'El deseo se expresa con QUERER + Infinitivo ("Quiero reservar").',
      explanation: 'El verbo modal QUERER seguido de infinitivo expresa intenciones y peticiones corteses.'
    }
  },
  {
    id: 'char-xoan',
    name: 'Hospitalero Xoán',
    originCity: 'Santiago de Compostela',
    role: 'Guardián del Obradoiro',
    avatar: '🐚',
    avatarColor: '#1E40AF',
    xPercent: 50,
    yPercent: 82,
    dialogue: '¡El Camino ha terminado y tu dominio del español Level I ha comenzado para toda la vida! Eres bienvenido siempre en Galicia y en España.',
    englishDialogue: 'The Camino has concluded and your lifelong Spanish Level I mastery has begun! You are always welcome in Galicia and in Spain.',
    trivia: 'El Botafumeiro de la Catedral de Santiago pesa más de 50 kilos y alcanza velocidades de casi 70 km/h al oscilar.',
    interactiveQuestion: {
      prompt: 'Xoán sella tu credencial de peregrino: "Para expresar que eres capaz de comunicarte en español, ¿qué verbo de habilidad usas?"',
      options: ['Puedo comunicarme en español', 'Pongo comunicarme en español', 'Voy comunicarme en español'],
      correctAnswer: 'Puedo comunicarme en español',
      reactionCorrect: '¡Enhorabuena, peregrino! Con PODER demuestras tu capacidad y competencia lingüística.',
      reactionIncorrect: 'El verbo modal PODER expresa capacidad o posibilidad ("Puedo comunicarme").',
      explanation: 'El verbo modal PODER + Infinitivo se utiliza para expresar habilidad, permiso y posibilidad.'
    }
  }
];

export const CUMULATIVE_FINAL_ASSESSMENT: Question[] = [
  // Module 1 (Q1 - Q6)
  {
    id: 'final-1',
    type: 'multiple-choice',
    prompt: '¿Cómo te presentas formalmente diciendo tu nombre, procedencia y profesión?',
    englishPrompt: 'How do you introduce yourself formally stating name, origin, and profession?',
    audioText: 'Buenos días. Me llamo David, soy inglés y soy profesor.',
    options: [
      'Buenos días. Me llamo David, soy inglés y soy profesor.',
      'Hola. Tengo David, estoy de Inglaterra y hago profesor.',
      'Buenas tardes. Soy David por nombre, tengo inglés y estoy profesor.',
      'Adiós. Me llamo David, soy de inglés y tengo profesor.'
    ],
    correctAnswer: 'Buenos días. Me llamo David, soy inglés y soy profesor.',
    explanation: 'Combina cortesía, "me llamo", "soy inglés" (nacionalidad con SER) y "soy profesor" (profesión con SER).',
    hints: ['SER para nacionalidad y profesión.'],
    syllabusRef: 'M1-DATOS',
    difficulty: 'medium'
  },
  {
    id: 'final-2',
    type: 'fill-blank',
    prompt: 'Completa: "¿Cómo se ______ tu apellido? (para pedir que lo deletreen)."',
    englishPrompt: 'Complete: "How is your surname spelled?"',
    audioText: 'escribe',
    options: ['escribe', 'habla', 'dice', 'llama'],
    correctAnswer: 'escribe',
    explanation: '"¿Cómo se escribe?" o "¿Cómo se deletrea?" es la fórmula para solicitar ortografía.',
    hints: ['Verbo escribir.'],
    syllabusRef: 'M1-ALPHA',
    difficulty: 'easy'
  },
  {
    id: 'final-3',
    type: 'multiple-choice',
    prompt: '¿Cuál es la forma correcta de escribir en letras el número 15.420 en español?',
    englishPrompt: 'What is the correct way to write the number 15,420 in letters in Spanish?',
    audioText: 'quince mil cuatrocientos veinte',
    options: [
      'quince mil cuatrocientos veinte',
      'diez y cinco mil cuatrocientos veinte',
      'quince cientos cuatrocientos veinte',
      'quince mil cuatro cientos y veinte'
    ],
    correctAnswer: 'quince mil cuatrocientos veinte',
    explanation: '15.000 = quince mil; 400 = cuatrocientos; 20 = veinte.',
    hints: ['Quince mil + cuatrocientos + veinte.'],
    syllabusRef: 'M1-NUM1',
    difficulty: 'hard'
  },
  {
    id: 'final-4',
    type: 'multiple-choice',
    prompt: 'El sustantivo "idioma" es masculino singular, por lo tanto decimos:',
    englishPrompt: 'The noun "idioma" is masculine singular, so we say:',
    audioText: 'el idioma español',
    options: ['el idioma español', 'la idioma española', 'un idioma española', 'las idiomas españolas'],
    correctAnswer: 'el idioma español',
    explanation: 'Palabra de raíz griega terminada en -ma: "el idioma", y su adjetivo masculino "español".',
    hints: ['Excepción en -ma: es masculino.'],
    syllabusRef: 'M1-ART',
    difficulty: 'medium'
  },
  {
    id: 'final-5',
    type: 'fill-blank',
    prompt: 'Conjugación de SER para la segunda persona plural informal usada en España: "Vosotros ______."',
    englishPrompt: 'Conjugation of SER for informal second person plural in Spain: "Vosotros sois."',
    audioText: 'sois',
    options: ['sois', 'somos', 'son', 'erais'],
    correctAnswer: 'sois',
    explanation: 'Vosotros sois.',
    hints: ['Forma de vosotros de SER.'],
    syllabusRef: 'M1-SER',
    difficulty: 'medium'
  },
  {
    id: 'final-6',
    type: 'word-order',
    prompt: 'Ordena la frase: "Nosotros somos estudiantes universitarios y vivimos en Madrid"',
    englishPrompt: 'Order the sentence: "We are university students and live in Madrid"',
    audioText: 'Nosotros somos estudiantes universitarios y vivimos en Madrid',
    sentencePieces: ['vivimos', 'estudiantes', 'Madrid', 'universitarios', 'somos', 'en', 'y', 'Nosotros'],
    correctAnswer: 'Nosotros somos estudiantes universitarios y vivimos en Madrid',
    explanation: 'Sujeto nosotros + somos estudiantes universitarios + conjunción y + vivimos en Madrid.',
    hints: ['Empieza por "Nosotros somos estudiantes".'],
    syllabusRef: 'M1-Sintaxis',
    difficulty: 'medium'
  },

  // Module 2 (Q7 - Q12)
  {
    id: 'final-7',
    type: 'multiple-choice',
    prompt: '¿Por qué decimos "Mi abuela ES muy cariñosa" pero "Hoy ESTÁ cansada"?',
    englishPrompt: 'Why do we say "Mi abuela ES muy cariñosa" but "Hoy ESTÁ cansada"?',
    audioText: 'SER para carácter intrínseco; ESTAR para estado físico temporal',
    options: [
      'SER para carácter intrínseco; ESTAR para estado físico temporal',
      'SER es para ancianos y ESTAR para jóvenes',
      'Son palabras idénticas que se pueden intercambiar',
      'ESTAR solo se usa con la palabra "hoy"'
    ],
    correctAnswer: 'SER para carácter intrínseco; ESTAR para estado físico temporal',
    explanation: 'SER define la personalidad permanente; ESTAR define la condición o estado físico transitorio.',
    hints: ['Carácter vs estado transitorio.'],
    syllabusRef: 'M2-SER-ESTAR',
    difficulty: 'medium'
  },
  {
    id: 'final-8',
    type: 'fill-blank',
    prompt: 'Para expresar la edad en español usamos TENER: "Mi padre ______ cincuenta y cuatro años."',
    englishPrompt: 'To express age in Spanish we use TENER: "Mi padre tiene cincuenta y cuatro años."',
    audioText: 'tiene',
    options: ['tiene', 'es', 'está', 'hace'],
    correctAnswer: 'tiene',
    explanation: 'La edad se tiene: Sujeto + TENER + años.',
    hints: ['Tercera persona singular de TENER.'],
    syllabusRef: 'M2-TENER',
    difficulty: 'easy'
  },
  {
    id: 'final-9',
    type: 'multiple-choice',
    prompt: '¿Cómo se indica que un monumento está situado a la derecha después de girar?',
    englishPrompt: 'How do you indicate a monument is located on the right after turning?',
    audioText: 'Gira a la derecha y la catedral está al lado del parque',
    options: [
      'Gira a la derecha y la catedral está al lado del parque',
      'Gira en la derecha y la catedral es al lado del parque',
      'Haces la derecha y la catedral tiene al parque',
      'Pasa por derecha y la catedral hay al parque'
    ],
    correctAnswer: 'Gira a la derecha y la catedral está al lado del parque',
    explanation: 'Giro con "a la derecha", ubicación con ESTAR y locución preposicional "al lado del parque".',
    hints: ['Gira a la derecha + está al lado de.'],
    syllabusRef: 'M2-DIR',
    difficulty: 'hard'
  },
  {
    id: 'final-10',
    type: 'fill-blank',
    prompt: 'Conjugación regular de verbos en -IR para primera persona plural: "Nosotros ______ en España (vivir)."',
    englishPrompt: 'Regular -IR verb conjugation for first person plural: "Nosotros vivimos en España."',
    audioText: 'vivimos',
    options: ['vivimos', 'vivemos', 'viven', 'vivís'],
    correctAnswer: 'vivimos',
    explanation: 'Los verbos en -IR adoptan "-imos" en nosotros: vivimos.',
    hints: ['Termina en -imos.'],
    syllabusRef: 'M2-REG-VERBS',
    difficulty: 'medium'
  },
  {
    id: 'final-11',
    type: 'multiple-choice',
    prompt: '¿Cuál de los siguientes colores debe concordar en femenino plural con "las cortinas"?',
    englishPrompt: 'Which of the following colors must agree in feminine plural with "las cortinas"?',
    audioText: 'rojas',
    options: ['rojas', 'rojo', 'roja', 'rojos'],
    correctAnswer: 'rojas',
    explanation: '"Cortinas" es femenino plural -> rojas.',
    hints: ['Femenino plural en -as.'],
    syllabusRef: 'M2-COLORES',
    difficulty: 'easy'
  },
  {
    id: 'final-12',
    type: 'word-order',
    prompt: 'Ordena la frase: "La cama grande está al lado de la ventana luminosa"',
    englishPrompt: 'Order the sentence: "The big bed is next to the bright window"',
    audioText: 'La cama grande está al lado de la ventana luminosa',
    sentencePieces: ['al', 'está', 'grande', 'de', 'ventana', 'cama', 'La', 'lado', 'luminosa', 'la'],
    correctAnswer: 'La cama grande está al lado de la ventana luminosa',
    explanation: 'Sujeto (La cama grande) + verbo ESTAR (está) + preposición (al lado de) + término (la ventana luminosa).',
    hints: ['Comienza por "La cama grande".'],
    syllabusRef: 'M2-PREP',
    difficulty: 'medium'
  },

  // Module 3 (Q13 - Q18)
  {
    id: 'final-13',
    type: 'multiple-choice',
    prompt: '¿Cómo se dice en español "It is 1:45 PM" (un cuarto para las dos)?',
    englishPrompt: 'How do you say in Spanish "It is 1:45 PM" (quarter to two)?',
    audioText: 'Son las dos menos cuarto de la tarde',
    options: [
      'Son las dos menos cuarto de la tarde',
      'Es la una menos cuarto de la tarde',
      'Son la una y cuarenta y cinco',
      'Es las dos menos quince'
    ],
    correctAnswer: 'Son las dos menos cuarto de la tarde',
    explanation: '1:45 se expresa restando a la hora siguiente: "Son las dos menos cuarto de la tarde".',
    hints: ['Dos menos cuarto.'],
    syllabusRef: 'M3-HORA',
    difficulty: 'medium'
  },
  {
    id: 'final-14',
    type: 'fill-blank',
    prompt: 'Para el clima ambiental con calor o frío usamos HACER: "En verano ______ mucho calor en Sevilla."',
    englishPrompt: 'For ambient weather with heat or cold we use HACER: "En verano hace mucho calor en Sevilla."',
    audioText: 'hace',
    options: ['hace', 'está', 'es', 'tiene'],
    correctAnswer: 'hace',
    explanation: 'El clima atmosférico se construye con HACER impersonal: "hace mucho calor".',
    hints: ['Forma impersonal del verbo hacer.'],
    syllabusRef: 'M3-HACER',
    difficulty: 'easy'
  },
  {
    id: 'final-15',
    type: 'multiple-choice',
    prompt: '¿Por qué decimos "Me GUSTAN las canciones" y no "Me gusta las canciones"?',
    englishPrompt: 'Why do we say "Me GUSTAN las canciones" and not "Me gusta las canciones"?',
    audioText: 'Porque el sujeto de GUSTAR es \'las canciones\' (plural)',
    options: [
      'Porque el sujeto de GUSTAR es \'las canciones\' (plural)',
      'Porque quien habla es un grupo de personas',
      'Porque \'canciones\' es una palabra femenina',
      'Es un error gramatical y debería decirse \'gusto\''
    ],
    correctAnswer: 'Porque el sujeto de GUSTAR es \'las canciones\' (plural)',
    explanation: 'El verbo gustar concuerda con la cosa que gusta: si es plural (las canciones), el verbo adopta forma plural (gustan).',
    hints: ['Concordancia con el sujeto pospuesto plural.'],
    syllabusRef: 'M3-GUSTOS',
    difficulty: 'medium'
  },
  {
    id: 'final-16',
    type: 'fill-blank',
    prompt: 'Diferencia MUY vs MUCHO: "Cádiz es ______ alegre y en el teatro hay ______ gente."',
    englishPrompt: 'Difference MUY vs MUCHO: "Cádiz is very cheerful and in the theater there are many people."',
    audioText: 'muy / mucha',
    options: ['muy / mucha', 'mucho / muy', 'muy / muy', 'mucha / mucho'],
    correctAnswer: 'muy / mucha',
    explanation: '"Alegre" es adjetivo -> muy alegre. "Gente" es sustantivo femenino singular -> mucha gente.',
    hints: ['MUY ante adjetivo, MUCHA ante sustantivo femenino.'],
    syllabusRef: 'M3-MUY-MUCHO',
    difficulty: 'hard'
  },
  {
    id: 'final-17',
    type: 'multiple-choice',
    prompt: '¿Cuándo se usa HAY frente a ESTAR?',
    englishPrompt: 'When is HAY used versus ESTAR?',
    audioText: 'HAY para existencia de cosas indeterminadas; ESTAR para ubicación de cosas conocidas',
    options: [
      'HAY para existencia de cosas indeterminadas; ESTAR para ubicación de cosas conocidas',
      'HAY solo para personas y ESTAR para edificios',
      'Son sinónimos absolutos',
      'HAY se usa en pasado y ESTAR en presente'
    ],
    correctAnswer: 'HAY para existencia de cosas indeterminadas; ESTAR para ubicación de cosas conocidas',
    explanation: 'HAY señala existencia indeterminada ("Hay un banco", "Hay tres libros"). ESTAR sitúa elementos determinados ("El banco está en la plaza").',
    hints: ['Existencia indeterminada vs ubicación de algo determinado.'],
    syllabusRef: 'M3-HAY',
    difficulty: 'medium'
  },
  {
    id: 'final-18',
    type: 'word-order',
    prompt: 'Ordena la frase: "A nosotros nos gusta pasear por la playa en primavera"',
    englishPrompt: 'Order the sentence: "We like to walk along the beach in spring"',
    audioText: 'A nosotros nos gusta pasear por la playa en primavera',
    sentencePieces: ['primavera', 'A', 'nos', 'playa', 'la', 'nosotros', 'por', 'en', 'pasear', 'gusta'],
    correctAnswer: 'A nosotros nos gusta pasear por la playa en primavera',
    explanation: 'Enfático (A nosotros) + pronombre (nos) + verbo gustar singular (gusta) + infinitivo sujeto (pasear) + complementos.',
    hints: ['Comienza por "A nosotros nos gusta".'],
    syllabusRef: 'M3-GUSTOS',
    difficulty: 'medium'
  },

  // Module 4 (Q19 - Q24)
  {
    id: 'final-19',
    type: 'multiple-choice',
    prompt: '¿Cuál es el pronombre reflexivo correcto para la primera persona singular (yo)?',
    englishPrompt: 'What is the correct reflexive pronoun for first person singular (yo)?',
    audioText: 'me (yo me levanto)',
    options: ['me', 'te', 'se', 'nos'],
    correctAnswer: 'me',
    explanation: 'Pronombres reflexivos: yo me, tú te, él/ella se, nosotros nos, vosotros os, ellos se.',
    hints: ['Pronombre de primera persona singular.'],
    syllabusRef: 'M4-REFLEX',
    difficulty: 'easy'
  },
  {
    id: 'final-20',
    type: 'fill-blank',
    prompt: 'Completa con el cambio vocálico de despertarse (e -> ie): "Yo ______ a las siete de la mañana."',
    englishPrompt: 'Complete with the vowel change of despertarse (e -> ie): "Yo me despierto a las siete."',
    audioText: 'me despierto',
    options: ['me despierto', 'despierto', 'me desperto', 'te despiertas'],
    correctAnswer: 'me despierto',
    explanation: 'Despertarse: yo me despierto.',
    hints: ['Pronombre "me" + despierto.'],
    syllabusRef: 'M4-REFLEX',
    difficulty: 'medium'
  },
  {
    id: 'final-21',
    type: 'multiple-choice',
    prompt: '¿Cómo se dice en español "From Monday to Friday I have university classes from 9 to 13"?',
    englishPrompt: 'How do you say in Spanish "From Monday to Friday I have university classes from 9 to 13"?',
    audioText: 'De lunes a viernes tengo clases universitarias de nueve a una',
    options: [
      'De lunes a viernes tengo clases universitarias de nueve a una',
      'En lunes hasta viernes tengo clases universitarias de nueve para una',
      'Por lunes a viernes soy clases universitarias desde nueve a una',
      'Desde lunes a viernes hago clases universitarias de nueve hasta una'
    ],
    correctAnswer: 'De lunes a viernes tengo clases universitarias de nueve a una',
    explanation: 'Días: "De lunes a viernes" (sin preposición en). Horarios: "de nueve a una" (o "desde las nueve hasta la una").',
    hints: ['De lunes a viernes... de nueve a una.'],
    syllabusRef: 'M4-HORARIOS',
    difficulty: 'hard'
  },
  {
    id: 'final-22',
    type: 'fill-blank',
    prompt: 'Diferencia SABER vs CONOCER: "Pau ______ hablar catalán y ______ muy bien la ciudad de Valencia."',
    englishPrompt: 'Difference SABER vs CONOCER: "Pau knows how to speak Catalan and knows Valencia very well."',
    audioText: 'sabe / conoce',
    options: ['sabe / conoce', 'conoce / sabe', 'sabe / sabe', 'conoce / conoce'],
    correctAnswer: 'sabe / conoce',
    explanation: 'Saber + infinitivo para la habilidad lingüística (sabe hablar); Conocer para familiaridad geográfica con una ciudad (conoce la ciudad).',
    hints: ['Sabe para el idioma, conoce para la ciudad.'],
    syllabusRef: 'M4-HABILIDADES',
    difficulty: 'hard'
  },
  {
    id: 'final-23',
    type: 'multiple-choice',
    prompt: 'Para viajar en transporte público mecánico decimos con la preposición:',
    englishPrompt: 'To travel by mechanical public transport we say with the preposition:',
    audioText: 'en (en metro, en autobús, en tren)',
    options: ['en', 'por', 'a', 'con'],
    correctAnswer: 'en',
    explanation: 'En metro, en autobús, en tren, en tranvía. Solo a pie o a caballo.',
    hints: ['Preposición "en".'],
    syllabusRef: 'M4-CIUDAD',
    difficulty: 'easy'
  },
  {
    id: 'final-24',
    type: 'word-order',
    prompt: 'Ordena la rutina: "Por la mañana me ducho, desayuno fruta y voy a clase"',
    englishPrompt: 'Order the routine: "In the morning I shower, eat fruit for breakfast and go to class"',
    audioText: 'Por la mañana me ducho, desayuno fruta y voy a clase',
    sentencePieces: ['ducho,', 'voy', 'clase', 'fruta', 'Por', 'me', 'mañana', 'a', 'y', 'desayuno', 'la'],
    correctAnswer: 'Por la mañana me ducho, desayuno fruta y voy a clase',
    explanation: 'Marco temporal (Por la mañana) + reflexivo (me ducho) + acción 2 (desayuno fruta) + nexo y destino (y voy a clase).',
    hints: ['Comienza por "Por la mañana me ducho".'],
    syllabusRef: 'M4-RUTINAS',
    difficulty: 'medium'
  },

  // Module 5 (Q25 - Q30)
  {
    id: 'final-25',
    type: 'multiple-choice',
    prompt: '¿Cuál es la primera persona singular (yo) de los tres verbos: IR, QUERER, PODER?',
    englishPrompt: 'What is the first person singular (yo) of IR, QUERER, PODER?',
    audioText: 'voy, quiero, puedo',
    options: ['voy, quiero, puedo', 'va, quiere, puede', 'vamos, queremos, podemos', 'vo, quero, podo'],
    correctAnswer: 'voy, quiero, puedo',
    explanation: 'Yo voy (IR), Yo quiero (QUERER e -> ie), Yo puedo (PODER o -> ue).',
    hints: ['Voy, quiero, puedo.'],
    syllabusRef: 'M5-IR',
    difficulty: 'medium'
  },
  {
    id: 'final-26',
    type: 'fill-blank',
    prompt: 'Contracción obligatoria de preposición A y artículo masculino EL: "Nosotros vamos ______ restaurante (a + el)."',
    englishPrompt: 'Mandatory contraction of A and EL: "Nosotros vamos al restaurante."',
    audioText: 'al',
    options: ['al', 'a el', 'en el', 'a la'],
    correctAnswer: 'al',
    explanation: 'a + el = al.',
    hints: ['Contracción de dos letras: a-l.'],
    syllabusRef: 'M5-IR',
    difficulty: 'easy'
  },
  {
    id: 'final-27',
    type: 'multiple-choice',
    prompt: '¿Cómo se pide educadamente la cuenta en un restaurante español al terminar de comer?',
    englishPrompt: 'How do you politely ask for the bill in a Spanish restaurant when done eating?',
    audioText: 'Camarero, ¿nos trae la cuenta, por favor?',
    options: [
      'Camarero, ¿nos trae la cuenta, por favor?',
      'Oye, dame el cheque rápido.',
      'Quiero el dinero de la mesa.',
      '¿Cuánto es mi deuda con usted?'
    ],
    correctAnswer: 'Camarero, ¿nos trae la cuenta, por favor?',
    explanation: '"Camarero, ¿nos trae la cuenta, por favor?" o simplemente "La cuenta, por favor" es la fórmula universal y cortés.',
    hints: ['Pide "la cuenta, por favor".'],
    syllabusRef: 'M5-RESTAURANTE',
    difficulty: 'medium'
  },
  {
    id: 'final-28',
    type: 'fill-blank',
    prompt: 'Para solicitar un favor con cortesía usamos PODER: "Disculpe, ¿______ usted indicarme el camino a la catedral?"',
    englishPrompt: 'To politely ask a favor we use PODER: "Disculpe, ¿puede usted indicarme el camino a la catedral?"',
    audioText: 'puede',
    options: ['puede', 'puedo', 'pueden', 'podemos'],
    correctAnswer: 'puede',
    explanation: 'Tratamiento de usted en tercera persona singular: "¿Puede usted...?".',
    hints: ['Tercera persona singular de cortesía.'],
    syllabusRef: 'M5-PODER',
    difficulty: 'medium'
  },
  {
    id: 'final-29',
    type: 'multiple-choice',
    prompt: 'Para expresar la degustación culinaria de un plato en el momento usamos:',
    englishPrompt: 'To express culinary appreciation of a dish in the moment we use:',
    audioText: 'ESTAR (¡Este bacalao está riquísimo!)',
    options: [
      'ESTAR (¡Este bacalao está riquísimo!)',
      'SER (¡Este bacalao es riquísimo!)',
      'TENER (¡Este bacalao tiene riquísimo!)',
      'HACER (¡Este bacalao hace riquísimo!)'
    ],
    correctAnswer: 'ESTAR (¡Este bacalao está riquísimo!)',
    explanation: 'El sabor inmediato que se degusta se valora siempre con ESTAR: "Está rico", "Está delicioso", "Está caliente".',
    hints: ['Sabor en el momento = verbo ESTAR.'],
    syllabusRef: 'M5-OPINIONES',
    difficulty: 'medium'
  },
  {
    id: 'final-30',
    type: 'word-order',
    prompt: 'Ordena la máxima del viajero graduado: "He recorrido España, he aprendido su lengua y ahora puedo comunicarme con el mundo"',
    englishPrompt: 'Order the graduated traveler\'s maxim: "I have traveled Spain, learned its language and now can communicate with the world"',
    audioText: 'He recorrido España, he aprendido su lengua y ahora puedo comunicarme con el mundo',
    sentencePieces: [
      'he', 'recorrido', 'comunicarme', 'mundo', 'España,', 'aprendido', 'y', 'ahora', 'con', 'el', 'lengua', 'su', 'puedo', 'He'
    ],
    correctAnswer: 'He recorrido España, he aprendido su lengua y ahora puedo comunicarme con el mundo',
    explanation: 'Culminación perfecta del viaje: recorrido de las 15 ciudades, aprendizaje y dominio comunicativo.',
    hints: ['Comienza por "He recorrido España".'],
    syllabusRef: 'M5-COMUNICACION',
    difficulty: 'hot'
  }
];
