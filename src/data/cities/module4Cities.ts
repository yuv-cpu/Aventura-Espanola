import { City } from '../../types';

export const MODULE4_CITIES: City[] = [
  {
    id: 'valencia',
    number: 10,
    name: 'Valencia',
    region: 'Comunidad Valenciana',
    landmark: 'Ciudad de las Artes y las Ciencias & Antiguo Cauce del Turia',
    description: 'La vanguardista urbe mediterránea del Turia. Aquí dominarás las actividades cotidianas, las rutinas diarias y los verbos y pronombres reflexivos indispensables para narrar tu vida diaria.',
    moduleIndex: 4,
    moduleName: 'Módulo 4: Rutinas Diarias, Verbos y Pronombres Reflexivos',
    coordinates: { x: 68, y: 55 },
    accentColor: '#10B981',
    levels: [
      {
        id: 'valencia-1',
        cityId: 'valencia',
        levelNumber: 1,
        title: 'La Rutina Matutina en el Turia',
        subtitle: 'Despertarse y levantarse con pronombres reflexivos',
        tier: 'easy',
        syllabusTopic: 'M4.Rutinas',
        description: 'Al amanecer junto al jardín del Turia repasas cómo comienzas tu jornada.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice en español "I wake up at seven in the morning"?',
            englishPrompt: 'How do you say in Spanish "I wake up at seven in the morning"?',
            audioText: 'Me despierto a las siete de la mañana',
            options: [
              'Me despierto a las siete de la mañana',
              'Yo despierto a las siete de la mañana',
              'Me levanto a las siete de la noche',
              'Despiértome en siete de la mañana'
            ],
            correctAnswer: 'Me despierto a las siete de la mañana',
            explanation: 'Despertarse es un verbo reflexivo (despertar-se) con cambio e -> ie en presente: Yo me despierto.',
            hints: ['Lleva pronombre reflexivo "me" y cambio vocálico ie.'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'easy'
          },
          {
            id: 'm4-val-2',
            type: 'fill-blank',
            prompt: 'El pronombre reflexivo correspondiente a "tú" es: "Tú ______ levantas temprano."',
            englishPrompt: 'The reflexive pronoun for "tú" is: "Tú te levantas temprano."',
            audioText: 'te',
            options: ['te', 'se', 'me', 'nos'],
            correctAnswer: 'te',
            explanation: 'Serie de pronombres reflexivos: me (yo), te (tú), se (él/ella/usted), nos (nosotros), os (vosotros), se (ellos/ustedes).',
            hints: ['Pronombre de segunda persona singular: t-e.'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'valencia-2',
        cityId: 'valencia',
        levelNumber: 2,
        title: 'Aseo Personal: Ducharse y Vestirse',
        subtitle: 'Verbos reflexivos de higiene y cuidado personal',
        tier: 'easy',
        syllabusTopic: 'M4.Rutinas',
        description: 'Aprendes el vocabulario para prepararte antes de salir a la ciudad.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-3',
            type: 'multiple-choice',
            prompt: '¿Cuál es la forma correcta para "She takes a shower every morning"?',
            englishPrompt: 'What is the correct form for "She takes a shower every morning"?',
            audioText: 'Ella se ducha todas las mañanas',
            options: [
              'Ella se ducha todas las mañanas',
              'Ella ducha todas las mañanas',
              'Ella te ducha todas las mañanas',
              'Ella le ducha todas las mañanas'
            ],
            correctAnswer: 'Ella se ducha todas las mañanas',
            explanation: 'Ducharse es reflexivo porque la acción recae sobre la misma persona: Ella se ducha.',
            hints: ['Tercera persona singular usa el pronombre "se".'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'easy'
          },
          {
            id: 'm4-val-4',
            type: 'fill-blank',
            prompt: 'Vestirse tiene cambio de vocal e -> i: "Yo me ______ con ropa cómoda."',
            englishPrompt: 'Vestirse has an e -> i vowel change: "Yo me visto con ropa cómoda."',
            audioText: 'visto',
            options: ['visto', 'vesto', 'vistas', 'viste'],
            correctAnswer: 'visto',
            explanation: 'Vestirse es irregular de cambio e -> i: me visto, te vistes, se viste, nos vestimos, os vestís, se visten.',
            hints: ['Primera persona con cambio a i: v-i-s-t-o.'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'valencia-3',
        cityId: 'valencia',
        levelNumber: 3,
        title: 'Verbos Reflexivos Plurales',
        subtitle: 'Nosotros nos levantamos, vosotros os acostáis',
        tier: 'medium',
        syllabusTopic: 'M4.VerbosReflexivos',
        description: 'Describes rutinas compartidas con tus compañeros de piso.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-5',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice en España "You all go to bed late" informalmente?',
            englishPrompt: 'How do you say in Spain "You all go to bed late" informally?',
            audioText: 'Vosotros os acostáis tarde',
            options: [
              'Vosotros os acostáis tarde',
              'Vosotros se acuestan tarde',
              'Vosotros nos acostamos tarde',
              'Vosotros acostáis tarde'
            ],
            correctAnswer: 'Vosotros os acostáis tarde',
            explanation: 'Con vosotros el pronombre reflexivo es "os" y acostarse diptonga o -> ue salvo en nosotros y vosotros: vosotros os acostáis.',
            hints: ['Vosotros lleva el pronombre reflexivo "os".'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'medium'
          },
          {
            id: 'm4-val-6',
            type: 'fill-blank',
            prompt: 'Completa para primera persona plural: "Nosotros ______ cepillamos los dientes después de comer."',
            englishPrompt: 'Complete for first person plural: "Nosotros nos cepillamos los dientes después de comer."',
            audioText: 'nos',
            options: ['nos', 'os', 'se', 'los'],
            correctAnswer: 'nos',
            explanation: 'Nosotros concuerda con el pronombre reflexivo "nos": nos cepillamos.',
            hints: ['Pronombre de nosotros.'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'valencia-4',
        cityId: 'valencia',
        levelNumber: 4,
        title: 'El Desayuno y la Alimentación Diaria',
        subtitle: 'Desayunar, comer, merendar, cenar',
        tier: 'medium',
        syllabusTopic: 'M4.Rutinas',
        description: 'Pruebas una horchata de chufa con fartons en la plaza del Mercado Central.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-7',
            type: 'multiple-choice',
            prompt: '¿Cuál es el orden cronológico habitual de las comidas del día en España?',
            englishPrompt: 'What is the usual chronological order of meals in Spain?',
            audioText: 'desayuno, comida / almuerzo, merienda, cena',
            options: [
              'desayuno, comida / almuerzo, merienda, cena',
              'almuerzo, desayuno, cena, merienda',
              'cena, desayuno, merienda, comida',
              'desayuno, cena, almuerzo, merienda'
            ],
            correctAnswer: 'desayuno, comida / almuerzo, merienda, cena',
            explanation: 'En España se desayuna por la mañana (8:00), se come a mediodía (14:00-15:00), se merienda por la tarde (18:00) y se cena tarde por la noche (21:00-22:00).',
            hints: ['Desayuno es la primera y cena la última.'],
            syllabusRef: 'M4-RUTINAS',
            difficulty: 'medium'
          },
          {
            id: 'm4-val-8',
            type: 'fill-blank',
            prompt: 'Completa: "Por la mañana yo ______ café con leche y tostadas con tomate."',
            englishPrompt: 'Complete: "In the morning I have coffee with milk and toast with tomato for breakfast."',
            audioText: 'desayuno',
            options: ['desayuno', 'ceno', 'meriendo', 'duermo'],
            correctAnswer: 'desayuno',
            explanation: 'Desayunar es la primera comida de la mañana: "yo desayuno".',
            hints: ['Primera persona singular de desayunar.'],
            syllabusRef: 'M4-RUTINAS',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'valencia-5',
        cityId: 'valencia',
        levelNumber: 5,
        title: 'La Ciudad y el Transporte en Metro',
        subtitle: 'Coger el metro, ir en autobús, desplazarse en bicicleta',
        tier: 'tough',
        syllabusTopic: 'M4.Transporte',
        description: 'Te desplazas desde la Estación del Norte hasta la Ciudad de las Artes.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-9',
            type: 'multiple-choice',
            prompt: '¿Qué preposición se usa en español para indicar el medio de transporte (autobús, metro, tren)?',
            englishPrompt: 'Which preposition is used in Spanish to indicate the means of transport (bus, metro, train)?',
            audioText: 'en (ir en metro, viajar en tren)',
            options: ['en', 'por', 'con', 'a'],
            correctAnswer: 'en',
            explanation: 'Para medios de transporte mecánicos usamos "en": en metro, en autobús, en tren, en coche, en avión. Solo decimos "a pie" o "a caballo".',
            hints: ['Preposición "en".'],
            syllabusRef: 'M4-CIUDAD',
            difficulty: 'tough'
          },
          {
            id: 'm4-val-10',
            type: 'fill-blank',
            prompt: 'Para caminar sin vehículo decimos: "Voy a la universidad ______ pie."',
            englishPrompt: 'To walk without a vehicle: "Voy a la universidad a pie."',
            audioText: 'a',
            options: ['a', 'en', 'por', 'con'],
            correctAnswer: 'a',
            explanation: 'La excepción fija es "a pie" (on foot).',
            hints: ['Preposición "a".'],
            syllabusRef: 'M4-CIUDAD',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'valencia-6',
        cityId: 'valencia',
        levelNumber: 6,
        title: 'Reflexivos: Posición del Pronombre',
        subtitle: 'Pronombre antes del verbo conjugado o pegado al infinitivo',
        tier: 'tough',
        syllabusTopic: 'M4.GramaticaReflexiva',
        description: 'La profesora explica dónde se coloca el pronombre en perífrasis verbales.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-11',
            type: 'multiple-choice',
            prompt: '¿Cuáles dos construcciones son gramaticalmente correctas para "I have to wake up early"?',
            englishPrompt: 'Which two constructions are grammatically correct for "I have to wake up early"?',
            audioText: 'Me tengo que despertar temprano / Tengo que despertarme temprano',
            options: [
              'Me tengo que despertar temprano / Tengo que despertarme temprano',
              'Tengo me que despertar temprano / Me tengo despertarme',
              'Tengo que me despertar temprano / Despertarme tengo',
              'Tengo que despierto temprano / Me despierto tengo'
            ],
            correctAnswer: 'Me tengo que despertar temprano / Tengo que despertarme temprano',
            explanation: 'Con infinitivo, el pronombre reflexivo puede ir antes del verbo conjugado ("Me tengo que despertar") o enclítico unido al infinitivo ("Tengo que despertarme").',
            hints: ['O antes del verbo conjugado o pegado al final del infinitivo.'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'valencia-7',
        cityId: 'valencia',
        levelNumber: 7,
        title: 'Ordenar una Rutina Diaria Completa',
        subtitle: 'Conectores temporales: primero, luego, después, finalmente',
        tier: 'hard',
        syllabusTopic: 'M4.Sintaxis',
        description: 'Construyes la secuencia narrativa de un día productivo en Ruzafa.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-12',
            type: 'word-order',
            prompt: 'Ordena la rutina: "Primero me ducho, después desayuno y luego salgo"',
            englishPrompt: 'Order the routine: "First I shower, then I eat breakfast and then I go out"',
            audioText: 'Primero me ducho, después desayuno y luego salgo',
            sentencePieces: ['salgo', 'después', 'me', 'y', 'Primero', 'luego', 'ducho,', 'desayuno'],
            correctAnswer: 'Primero me ducho, después desayuno y luego salgo',
            explanation: 'Conector 1 (Primero) + acción 1 (me ducho) + conector 2 (después) + acción 2 (desayuno) + conector 3 (y luego) + acción 3 (salgo).',
            hints: ['Comienza por el conector temporal "Primero me ducho".'],
            syllabusRef: 'M4-RUTINAS',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'valencia-8',
        cityId: 'valencia',
        levelNumber: 8,
        title: 'Diálogo con Pau en el Hemisfèric',
        subtitle: 'Conversación sobre hábitos saludables y horarios de estudio',
        tier: 'hard',
        syllabusTopic: 'M4.Comunicacion',
        description: 'Pau te explica cómo organiza sus horas de laboratorio y deporte.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-13',
            type: 'dialogue',
            prompt: 'Conversación junto al estanque del Hemisfèric:',
            englishPrompt: 'Conversation next to the Hemisfèric pool:',
            audioText: '¡Hola! Suelo correr por el río Turia a las siete de la mañana. ¿A qué hora te levantas tú normalmente?',
            correctAnswer: 'Normalmente me levanto a las siete y media, me ducho y voy a clase.',
            explanation: 'Respuesta comunicativa y natural con verbos reflexivos de rutina diaria.',
            hints: ['Indica a qué hora te levantas y qué haces a continuación.'],
            syllabusRef: 'M4-RUTINAS',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Pau',
              npcRole: 'Estudiante de Biotecnología en Valencia',
              prompt: '¡Hola! Suelo correr por el río Turia a las siete de la mañana. ¿A qué hora te levantas tú normalmente?',
              englishPrompt: 'Hello! I usually run in the Turia park at 7 AM. What time do you normally get up?',
              choices: [
                {
                  id: 'c1',
                  text: 'Normalmente me levanto a las siete y media, me ducho y voy a clase.',
                  englishHint: 'Normally I get up at 7:30, shower and go to class.',
                  isCorrect: true,
                  npcResponse: '¡Qué buen horario! La mañana cunde muchísimo cuando madrugas.',
                  explanation: 'Excelente narración con verbos reflexivos concordantes.'
                },
                {
                  id: 'c2',
                  text: 'En Valencia hace mucho calor en verano.',
                  englishHint: 'In Valencia it is very hot in summer.',
                  isCorrect: false,
                  npcResponse: 'Sí que hace calor, ¡pero te preguntaba por tu hora de levantarte!',
                  explanation: 'Fuera de contexto.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'valencia-9',
        cityId: 'valencia',
        levelNumber: 9,
        title: 'Rutina Nocturna y Acostarse',
        subtitle: 'Acostarse (o -> ue) y dormirse',
        tier: 'hot',
        syllabusTopic: 'M4.Rutinas',
        description: 'Cierras la jornada tras contemplar el atardecer en la playa de la Malvarrosa.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-14',
            type: 'fill-blank',
            prompt: 'Acostarse diptonga: "Por la noche yo leo un libro y me ______ a las once (acostarse)."',
            englishPrompt: 'Acostarse changes vowel: "At night I read a book and go to bed at eleven."',
            audioText: 'acuesto',
            options: ['acuesto', 'acosto', 'acuestas', 'acuestan'],
            correctAnswer: 'acuesto',
            explanation: 'Acostarse: yo me acuesto, tú te acuestas, él se acuesta, nosotros nos acostamos, vosotros os acostáis, ellos se acuestan.',
            hints: ['Primera persona con diptongo ue: a-c-u-e-s-t-o.'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'valencia-10',
        cityId: 'valencia',
        levelNumber: 10,
        title: 'Reto de Rutinas Valencianas',
        subtitle: 'Evaluación rápida de la conjugación reflexiva completa',
        tier: 'hot',
        syllabusTopic: 'M4.Sintesis',
        description: 'El último entrenamiento antes del Maratón Matutino de Valencia.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm4-val-15',
            type: 'multiple-choice',
            prompt: '¿Cuál de las siguientes frases NO contiene ningún error gramatical?',
            englishPrompt: 'Which of the following sentences contains NO grammatical error?',
            audioText: 'Mis hermanos se despiertan temprano y se preparan el desayuno',
            options: [
              'Mis hermanos se despiertan temprano y se preparan el desayuno',
              'Mis hermanos nos despiertan temprano y se prepara el desayuno',
              'Mis hermanos despiertan se temprano y preparan se el desayuno',
              'Mis hermanos se despiertan temprano y te preparan su desayuno'
            ],
            correctAnswer: 'Mis hermanos se despiertan temprano y se preparan el desayuno',
            explanation: 'Sujeto 3.ª persona plural (mis hermanos) concuerda con pronombre reflexivo "se" en ambos verbos (se despiertan, se preparan).',
            hints: ['Concordancia perfecta con el pronombre "se".'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-valencia',
      cityId: 'valencia',
      title: 'El Maratón Matutino de Valencia',
      characterName: 'Entrenador Pau de Ruzafa',
      characterRole: 'Coordinador Deportivo y Embajador Urbano del Turia',
      scenario: 'Pau coordina la apertura del circuito atlético del antiguo cauce del río Turia. Para registrar tu ficha oficial de atleta y desbloquear el viaje a Barcelona, debes demostrar dominio impecable de los verbos reflexivos, la secuencia de hábitos y el transporte.',
      objectives: [
        { id: 'val-obj1', description: 'Conjugar verbos reflexivos con cambio vocálico sin fallos', syllabusTopic: 'M4.Rutinas' },
        { id: 'val-obj2', description: 'Dominar la concordancia de pronombres reflexivos me/te/se/nos/os/se', syllabusTopic: 'M4.VerbosReflexivos' },
        { id: 'val-obj3', description: 'Estructurar cronogramas diarios con conectores lógicos', syllabusTopic: 'M4.Transporte' }
      ],
      requiredScorePercent: 80,
      xpReward: 350,
      coinReward: 500,
      badgeName: 'La Medalla del Murciélago de Valencia',
      badgeIcon: '🦇',
      questions: [
        {
          id: 'b-val-1',
          type: 'multiple-choice',
          prompt: 'Pau: "Para el plan de entrenamiento matinal, ¿cuál es la descripción de hábitos perfectamente redactada?"',
          englishPrompt: 'Pau: "For morning workout plan, which is the perfectly worded habits description?"',
          audioText: 'Nosotros nos levantamos a las seis, nos hidratamos y salimos a correr.',
          options: [
            'Nosotros nos levantamos a las seis, nos hidratamos y salimos a correr.',
            'Nosotros se levantamos a las seis, os hidratamos y salimos correr.',
            'Nosotros levantamos a las seis, hidratamos nos y vamos a correr.',
            'Nosotros nos levantan a las seis, nos hidrata y salen a correr.'
          ],
          correctAnswer: 'Nosotros nos levantamos a las seis, nos hidratamos y salimos a correr.',
          explanation: 'Primera persona plural con pronombre reflexivo "nos" en todos los verbos reflexivos.',
          hints: ['Nosotros concuerda con "nos levantamos" y "nos hidratamos".'],
          syllabusRef: 'M4-REFLEX',
          difficulty: 'hard'
        },
        {
          id: 'b-val-2',
          type: 'fill-blank',
          prompt: 'Pau: "Después del entrenamiento los atletas ______ duchan con agua templada y ______ visten (ducharse / vestirse)."',
          englishPrompt: 'Pau: "After training the athletes shower with lukewarm water and get dressed."',
          audioText: 'se / se',
          options: ['se / se', 'nos / nos', 'os / os', 'te / te'],
          correctAnswer: 'se / se',
          explanation: 'Sujeto en tercera persona plural ("los atletas") requiere el pronombre reflexivo "se" en ambas oraciones.',
          hints: ['Pronombre de tercera persona plural: se.'],
          syllabusRef: 'M4-REFLEX',
          difficulty: 'hard'
        },
        {
          id: 'b-val-3',
          type: 'word-order',
          prompt: 'Ordena la máxima deportiva: "Una rutina saludable mejora el cuerpo y la mente"',
          englishPrompt: 'Order the sports maxim: "A healthy routine improves the body and mind"',
          audioText: 'Una rutina saludable mejora el cuerpo y la mente',
          sentencePieces: ['mente', 'mejora', 'el', 'Una', 'cuerpo', 'rutina', 'saludable', 'la', 'y'],
          correctAnswer: 'Una rutina saludable mejora el cuerpo y la mente',
          explanation: 'Sujeto (Una rutina saludable) + verbo transitivo (mejora) + objetos directos coordinados (el cuerpo y la mente).',
          hints: ['Comienza por "Una rutina saludable".'],
          syllabusRef: 'M4-Sintaxis',
          difficulty: 'hot'
        }
      ]
    }
  },
  {
    id: 'barcelona',
    number: 11,
    name: 'Barcelona',
    region: 'Cataluña',
    landmark: 'Sagrada Família & Barrio Gótico',
    description: 'La metrópoli modernista de Gaudí. En las aulas de la Universidad de Barcelona y sus barrios emblemáticos dominarás los horarios de estudio, la vida de campus y la descripción urbana.',
    moduleIndex: 4,
    moduleName: 'Módulo 4: Horarios, Universidad, Vida Urbana y Ciudad',
    coordinates: { x: 80, y: 38 },
    accentColor: '#3B82F6',
    levels: [
      {
        id: 'barcelona-1',
        cityId: 'barcelona',
        levelNumber: 1,
        title: 'El Horario Universitario en la Diagonal',
        subtitle: 'Franjas horarias y días lectivos en el campus',
        tier: 'easy',
        syllabusTopic: 'M4.Horarios',
        description: 'Planificas tu matrícula en el campus de la Universidad de Barcelona.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-1',
            type: 'multiple-choice',
            prompt: '¿Cómo expresamos un intervalo horario: "From 9:00 to 11:00"?',
            englishPrompt: 'How do we express a time range: "From 9:00 to 11:00"?',
            audioText: 'De nueve a once / Desde las nueve hasta las once',
            options: [
              'De nueve a once / Desde las nueve hasta las once',
              'En nueve para once',
              'Por nueve a once',
              'Entre nueve con once'
            ],
            correctAnswer: 'De nueve a once / Desde las nueve hasta las once',
            explanation: 'Las dos estructuras normativas de intervalo temporal son: "De... a..." o "Desde las... hasta las...". Nunca mezclar "de... hasta..." ni "desde... a...".',
            hints: ['O usas "De... a..." o "Desde las... hasta las...".'],
            syllabusRef: 'M4-HORARIOS',
            difficulty: 'easy'
          },
          {
            id: 'm4-bar-2',
            type: 'fill-blank',
            prompt: 'Para las asignaturas de tarde decimos: "Tengo clases ______ la tarde."',
            englishPrompt: 'For afternoon subjects we say: "Tengo clases por la tarde."',
            audioText: 'por',
            options: ['por', 'en', 'a', 'sobre'],
            correctAnswer: 'por',
            explanation: 'Para partes del día en sentido general usamos "por": por la mañana, por la tarde, por la noche.',
            hints: ['Preposición "por".'],
            syllabusRef: 'M4-HORARIOS',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'barcelona-2',
        cityId: 'barcelona',
        levelNumber: 2,
        title: 'La Vida en la Biblioteca y el Campus',
        subtitle: 'Asignaturas, exámenes y espacios de estudio',
        tier: 'easy',
        syllabusTopic: 'M4.Universidad',
        description: 'Investigas en la biblioteca del edificio histórico de Plaza de la Universidad.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-3',
            type: 'multiple-choice',
            prompt: '¿Cómo se llama la prueba académica para evaluar lo aprendido al final de un cuatrimestre?',
            englishPrompt: 'What is the academic test at the end of a semester called?',
            audioText: 'el examen',
            options: ['el examen', 'la lección', 'el libro', 'la pizarra'],
            correctAnswer: 'el examen',
            explanation: '"El examen" (plural: los exámenes) es la prueba de evaluación académica.',
            hints: ['Palabra que empieza por e-x-a...'],
            syllabusRef: 'M4-UNIVERSIDAD',
            difficulty: 'easy'
          },
          {
            id: 'm4-bar-4',
            type: 'fill-blank',
            prompt: 'Para decir "I study Hispanic Literature": "Yo ______ Literatura Hispánica."',
            englishPrompt: 'To say "I study Hispanic Literature": "Yo estudio Literatura Hispánica."',
            audioText: 'estudio',
            options: ['estudio', 'estudias', 'estudia', 'estudian'],
            correctAnswer: 'estudio',
            explanation: 'Primera persona singular del verbo regular estudiar: yo estudio.',
            hints: ['Termina en -o para yo.'],
            syllabusRef: 'M4-UNIVERSIDAD',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'barcelona-3',
        cityId: 'barcelona',
        levelNumber: 3,
        title: 'Describir el Barrio Gótico',
        subtitle: 'Adjetivos urbanos: ruidoso, tranquilo, histórico, moderno',
        tier: 'medium',
        syllabusTopic: 'M4.Ciudad',
        description: 'Te adentras por las calles medievales entre la catedral y la Plaza del Rey.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-5',
            type: 'multiple-choice',
            prompt: '¿Cuál es el adjetivo opuesto de "ruidoso" para describir una calle o barrio?',
            englishPrompt: 'What is the opposite adjective of "ruidoso" to describe a street or neighborhood?',
            audioText: 'tranquilo o silencioso',
            options: ['tranquilo', 'antiguo', 'estrecho', 'luminoso'],
            correctAnswer: 'tranquilo',
            explanation: '"Tranquilo" o "silencioso" es el antónimo directo de "ruidoso" (noisy).',
            hints: ['Significa con paz y sin ruidos.'],
            syllabusRef: 'M4-CIUDAD',
            difficulty: 'medium'
          },
          {
            id: 'm4-bar-6',
            type: 'fill-blank',
            prompt: 'Completa con concordancia: "Las calles del Barrio Gótico son estrechas y ______ (antiguo)."',
            englishPrompt: 'Complete with agreement: "The streets of the Gothic Quarter are narrow and ancient."',
            audioText: 'antiguas',
            options: ['antiguas', 'antiguo', 'antigua', 'antiguos'],
            correctAnswer: 'antiguas',
            explanation: '"Calles" es femenino plural, por tanto el adjetivo debe ser "antiguas".',
            hints: ['Femenino plural concuerda con calles.'],
            syllabusRef: 'M4-CIUDAD',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'barcelona-4',
        cityId: 'barcelona',
        levelNumber: 4,
        title: 'La Red de Metro y Autobuses',
        subtitle: 'Líneas, transbordos y paradas de transporte público',
        tier: 'medium',
        syllabusTopic: 'M4.Ciudad',
        description: 'Usas la línea 3 (verde) para ir desde Passeig de Gràcia hasta Lesseps.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-7',
            type: 'multiple-choice',
            prompt: 'Para cambiar de una línea de metro a otra en una estación decimos:',
            englishPrompt: 'To switch from one metro line to another at a station we say:',
            audioText: 'hacer transbordo',
            options: ['hacer transbordo', 'hacer equipaje', 'hacer turismo', 'hacer compras'],
            correctAnswer: 'hacer transbordo',
            explanation: '"Hacer transbordo" (o transbordar) es cambiar de línea de metro o transporte en una estación de enlace.',
            hints: ['Empieza por trans...'],
            syllabusRef: 'M4-CIUDAD',
            difficulty: 'medium'
          },
          {
            id: 'm4-bar-8',
            type: 'fill-blank',
            prompt: 'Para saber en qué parada bajarse: "¿Cuál es la ______ de la Sagrada Família?"',
            englishPrompt: 'To know at which stop to get off: "¿Cuál es la parada de la Sagrada Família?"',
            audioText: 'parada',
            options: ['parada', 'calle', 'hora', 'puerta'],
            correctAnswer: 'parada',
            explanation: '"La parada" (de metro o autobús) es el punto reglamentario donde se detiene el transporte.',
            hints: ['Lugar donde se para el transporte.'],
            syllabusRef: 'M4-CIUDAD',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'barcelona-5',
        cityId: 'barcelona',
        levelNumber: 5,
        title: 'Rutina del Estudiante Internacional',
        subtitle: 'Combinación de reflexivos y horarios concretos',
        tier: 'tough',
        syllabusTopic: 'M4.Rutinas',
        description: 'Describes tu horario semanal en la residencia de estudiantes de Sarrià.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-9',
            type: 'multiple-choice',
            prompt: 'Selecciona la opción gramaticalmente perfecta para un cronograma estudiantil:',
            englishPrompt: 'Select the grammatically perfect option for a student schedule:',
            audioText: 'Me levanto a las ocho, voy a la facultad en metro y como con mis amigos',
            options: [
              'Me levanto a las ocho, voy a la facultad en metro y como con mis amigos',
              'Yo levanto a las ocho, voy en la facultad por metro y como mis amigos',
              'Me despierto en las ocho, viajo en metro para facultad y ceno con amigos',
              'Se levanto a las ocho, va a facultad con metro y comemos amigos'
            ],
            correctAnswer: 'Me levanto a las ocho, voy a la facultad en metro y como con mis amigos',
            explanation: 'Reflexivo correcto (me levanto), hora con preposición (a las ocho), desplazamiento (voy a... en metro) y acción social (como con mis amigos).',
            hints: ['Preposiciones impecables y reflexivo correcto.'],
            syllabusRef: 'M4-HORARIOS',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'barcelona-6',
        cityId: 'barcelona',
        levelNumber: 6,
        title: 'Comparar Barrios Barceloneses',
        subtitle: 'Más... que, menos... que, tan... como',
        tier: 'tough',
        syllabusTopic: 'M4.Ciudad',
        description: 'Comparas el ambiente del Eixample modernista con la Barceloneta marinera.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-10',
            type: 'multiple-choice',
            prompt: '¿Cómo decimos en español "The Eixample is calmer than the Gothic Quarter"?',
            englishPrompt: 'How do we say in Spanish "The Eixample is calmer than the Gothic Quarter"?',
            audioText: 'El Eixample es más tranquilo que el Barrio Gótico',
            options: [
              'El Eixample es más tranquilo que el Barrio Gótico',
              'El Eixample es más tranquilo de el Barrio Gótico',
              'El Eixample es muy tranquilo que el Barrio Gótico',
              'El Eixample es tan tranquilo que el Barrio Gótico'
            ],
            correctAnswer: 'El Eixample es más tranquilo que el Barrio Gótico',
            explanation: 'La estructura comparativa de superioridad es: más + adjetivo + que.',
            hints: ['Estructura: más + adjetivo + QUE.'],
            syllabusRef: 'M4-CIUDAD',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'barcelona-7',
        cityId: 'barcelona',
        levelNumber: 7,
        title: 'Planificar la Semana Universitaria',
        subtitle: 'Sintaxis de oraciones con marcadores temporales',
        tier: 'hard',
        syllabusTopic: 'M4.Sintaxis',
        description: 'Armas tu horario semanal con asignaturas y prácticas de laboratorio.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-11',
            type: 'word-order',
            prompt: 'Ordena la frase: "Los viernes por la tarde estudio en la biblioteca central"',
            englishPrompt: 'Order the sentence: "On Friday afternoons I study in the central library"',
            audioText: 'Los viernes por la tarde estudio en la biblioteca central',
            sentencePieces: ['tarde', 'biblioteca', 'Los', 'estudio', 'por', 'viernes', 'en', 'central', 'la', 'la'],
            correctAnswer: 'Los viernes por la tarde estudio en la biblioteca central',
            explanation: 'Tiempo (Los viernes por la tarde) + verbo conjugado (estudio) + complemento locativo (en la biblioteca central).',
            hints: ['Comienza por "Los viernes por la tarde".'],
            syllabusRef: 'M4-HORARIOS',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'barcelona-8',
        cityId: 'barcelona',
        levelNumber: 8,
        title: 'Diálogo con Marc en Plaza de Catalunya',
        subtitle: 'Conversación sobre la vida estudiantil y el transporte',
        tier: 'hard',
        syllabusTopic: 'M4.Comunicacion',
        description: 'Marc te orienta para comprar la tarjeta mensual de transporte joven.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-12',
            type: 'dialogue',
            prompt: 'En el vestíbulo de la estación de metro:',
            englishPrompt: 'In the metro station concourse:',
            audioText: '¡Hola! Para moverte por Barcelona todos los días te recomiendo el abono mensual T-Jove. ¿Cuántos viajes sueles hacer a la semana?',
            correctAnswer: 'Suelo hacer diez viajes a la semana para ir y volver de la universidad.',
            explanation: 'Respuesta comunicativa excelente indicando frecuencia y propósito del transporte.',
            hints: ['Indica cuántos viajes realizas para tus estudios.'],
            syllabusRef: 'M4-CIUDAD',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Marc',
              npcRole: 'Estudiante de Arquitectura en la UPC',
              prompt: '¡Hola! Para moverte por Barcelona todos los días te recomiendo el abono mensual T-Jove. ¿Cuántos viajes sueles hacer a la semana?',
              englishPrompt: 'Hello! To get around Barcelona every day I recommend the monthly T-Jove pass. How many trips do you usually make a week?',
              choices: [
                {
                  id: 'c1',
                  text: 'Suelo hacer diez viajes a la semana para ir y volver de la universidad.',
                  englishHint: 'I usually make 10 trips a week to go and return from university.',
                  isCorrect: true,
                  npcResponse: '¡Pues te sale a cuenta sin duda! Con ese título viajas de forma ilimitada.',
                  explanation: 'Respuesta bien construida con soltura y exactitud.'
                },
                {
                  id: 'c2',
                  text: 'Mi abuela vive en Sevilla y baila flamenco.',
                  englishHint: 'My grandma lives in Seville and dances flamenco.',
                  isCorrect: false,
                  npcResponse: '¡Muy bien por tu abuela! Pero estábamos hablando de tu bono de transporte.',
                  explanation: 'Fuera de contexto.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'barcelona-9',
        cityId: 'barcelona',
        levelNumber: 9,
        title: 'Cita en la Sagrada Família',
        subtitle: 'Fijar hora de encuentro frente a la fachada del Nacimiento',
        tier: 'hot',
        syllabusTopic: 'M4.Comunicacion',
        description: 'Coordinas la visita al templo expiatorio con tus compañeros de clase.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-13',
            type: 'fill-blank',
            prompt: 'Completa: "Las puertas del templo abren ______ las nueve de la mañana en punto."',
            englishPrompt: 'Complete: "The temple doors open at nine in the morning sharp."',
            audioText: 'a',
            options: ['a', 'en', 'de', 'por'],
            correctAnswer: 'a',
            explanation: 'Para la hora precisa de apertura de un monumento usamos la preposición "a": "a las nueve".',
            hints: ['Preposición "a".'],
            syllabusRef: 'M4-HORARIOS',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'barcelona-10',
        cityId: 'barcelona',
        levelNumber: 10,
        title: 'Reto de Gestión Estudiantil',
        subtitle: 'Síntesis de horarios, transporte y vida universitaria',
        tier: 'hot',
        syllabusTopic: 'M4.Sintesis',
        description: 'La última preparación antes de la prueba decisiva de la Universidad de Barcelona.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm4-bar-14',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice en español "The university campus has a large library and many classrooms"?',
            englishPrompt: 'How do you say in Spanish "The university campus has a large library and many classrooms"?',
            audioText: 'El campus universitario tiene una biblioteca grande y muchas aulas',
            options: [
              'El campus universitario tiene una biblioteca grande y muchas aulas',
              'El campus universitario es una biblioteca grande y mucho aulas',
              'El campus universitario está una biblioteca grande y muchas aulas',
              'El campus universitario hay una biblioteca grande y muy aulas'
            ],
            correctAnswer: 'El campus universitario tiene una biblioteca grande y muchas aulas',
            explanation: 'Sujeto específico tiene posesión de instalaciones (tiene). "Aulas" es femenino ("muchas aulas", aunque en singular lleve "el aula" por la a tónica inicial).',
            hints: ['Verbo tener para posesión de instalaciones; muchas aulas.'],
            syllabusRef: 'M4-UNIVERSIDAD',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-barcelona',
      cityId: 'barcelona',
      title: 'La Jornada del Estudiante de la UB',
      characterName: 'Coordinador Académico Marc de Gaudí',
      characterRole: 'Tutor de Relaciones Internacionales de la UB',
      scenario: 'Para convalidar tu expediente del cuatrimestre y obtener el salvoconducto hacia Zaragoza, Marc te somete a una simulación completa de gestión académica: horarios, transporte metropolitano y descripción de proyectos universitarios.',
      objectives: [
        { id: 'bar-obj1', description: 'Formular horarios complejos con de/a y desde/hasta sin confusión', syllabusTopic: 'M4.Horarios' },
        { id: 'bar-obj2', description: 'Expresar medios de transporte y rutas urbanas en metro', syllabusTopic: 'M4.Ciudad' },
        { id: 'bar-obj3', description: 'Describir la vida universitaria con vocabulario técnico A1', syllabusTopic: 'M4.Universidad' }
      ],
      requiredScorePercent: 80,
      xpReward: 350,
      coinReward: 500,
      badgeName: 'La Baldosa de Gaudí de Barcelona',
      badgeIcon: '🏛️',
      questions: [
        {
          id: 'b-bar-1',
          type: 'multiple-choice',
          prompt: 'Marc: "Indique la opción que expresa con absoluta corrección normativa el horario de conferencias:"',
          englishPrompt: 'Marc: "Indicate the option that expresses with absolute correctness the lecture schedule:"',
          audioText: 'El seminario tiene lugar desde las diez hasta las doce de la mañana.',
          options: [
            'El seminario tiene lugar desde las diez hasta las doce de la mañana.',
            'El seminario tiene lugar de las diez hasta las doce de la mañana.',
            'El seminario tiene lugar desde diez a doce de la mañana.',
            'El seminario tiene lugar en diez hasta doce de la mañana.'
          ],
          correctAnswer: 'El seminario tiene lugar desde las diez hasta las doce de la mañana.',
          explanation: '"Desde las... hasta las..." es la pareja correlativa correcta en español.',
          hints: ['Pareja correlativa: desde las... hasta las...'],
          syllabusRef: 'M4-HORARIOS',
          difficulty: 'hard'
        },
        {
          id: 'b-bar-2',
          type: 'fill-blank',
          prompt: 'Marc: "Para desplazarse al campus de la Diagonal los alumnos viajan ______ metro y bajan en Palau Reial."',
          englishPrompt: 'Marc: "To travel to the Diagonal campus, students travel by metro and get off at Palau Reial."',
          audioText: 'en',
          options: ['en', 'a', 'por', 'con'],
          correctAnswer: 'en',
          explanation: 'Medio de transporte mecánico = preposición "en" (viajar en metro).',
          hints: ['Preposición "en".'],
          syllabusRef: 'M4-CIUDAD',
          difficulty: 'hard'
        },
        {
          id: 'b-bar-3',
          type: 'word-order',
          prompt: 'Ordena la inscripción del claustro histórico: "El conocimiento científico y el arte conviven en nuestra universidad"',
          englishPrompt: 'Order the cloister inscription: "Scientific knowledge and art coexist in our university"',
          audioText: 'El conocimiento científico y el arte conviven en nuestra universidad',
          sentencePieces: ['conviven', 'científico', 'arte', 'universidad', 'nuestra', 'El', 'el', 'en', 'conocimiento', 'y'],
          correctAnswer: 'El conocimiento científico y el arte conviven en nuestra universidad',
          explanation: 'Sujeto compuesto (El conocimiento científico y el arte) + verbo intransitivo (conviven) + locución de lugar (en nuestra universidad).',
          hints: ['Comienza por "El conocimiento científico y el arte".'],
          syllabusRef: 'M4-Sintaxis',
          difficulty: 'hot'
        }
      ]
    }
  },
  {
    id: 'zaragoza',
    number: 12,
    name: 'Zaragoza',
    region: 'Aragón',
    landmark: 'Basílica del Pilar & Puente de Piedra',
    description: 'La histórica capital del Ebro con su gloriosa basílica del Pilar. Aquí culminarás el Módulo 4 aprendiendo a retratar personas, rasgos físicos y de carácter, y expresar habilidades y aptitudes con SABER + infinitivo.',
    moduleIndex: 4,
    moduleName: 'Módulo 4: Describir Personas, Cualidades y SABER + Infinitivo',
    coordinates: { x: 63, y: 39 },
    accentColor: '#EF4444',
    levels: [
      {
        id: 'zaragoza-1',
        cityId: 'zaragoza',
        levelNumber: 1,
        title: 'Describir a Mi Mejor Amigo',
        subtitle: 'Rasgos físicos esenciales: alto, moreno, barba, ojos',
        tier: 'easy',
        syllabusTopic: 'M4.Amigos',
        description: 'Junto a las orillas del río Ebro describes a tu compañero de aventuras.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-1',
            type: 'multiple-choice',
            prompt: 'Para describir la complexión general de un amigo decimos:',
            englishPrompt: 'To describe a friend\'s general build we say:',
            audioText: 'Mi amigo es alto y deportista',
            options: ['Mi amigo es alto y deportista', 'Mi amigo tiene alto y deportista', 'Mi amigo está alto y deportista', 'Mi amigo hace alto y deportista'],
            correctAnswer: 'Mi amigo es alto y deportista',
            explanation: 'Las cualidades físicas esenciales de estatura y complexión se expresan con SER: "Es alto", "Es delgado", "Es moreno".',
            hints: ['Cualidad física esencial = verbo SER.'],
            syllabusRef: 'M4-AMIGOS',
            difficulty: 'easy'
          },
          {
            id: 'm4-zar-2',
            type: 'fill-blank',
            prompt: 'Para la barba y el bigote usamos el verbo TENER: "Mi compañero ______ barba y bigote."',
            englishPrompt: 'For beard and mustache we use TENER: "Mi compañero tiene barba y bigote."',
            audioText: 'tiene',
            options: ['tiene', 'es', 'está', 'hace'],
            correctAnswer: 'tiene',
            explanation: 'Rasgos específicos como barba, pelo y ojos se construyen con TENER: "Tiene barba".',
            hints: ['Tercera persona singular de TENER.'],
            syllabusRef: 'M4-AMIGOS',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'zaragoza-2',
        cityId: 'zaragoza',
        levelNumber: 2,
        title: 'Rasgos de Personalidad y Carácter',
        subtitle: 'Simpático, trabajador, generoso, divertido, tímido',
        tier: 'easy',
        syllabusTopic: 'M4.Amigos',
        description: 'Analizas las cualidades morales y psicológicas de las personas queridas.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-3',
            type: 'multiple-choice',
            prompt: '¿Cuál es el antónimo (opuesto) de una persona "simpática"?',
            englishPrompt: 'What is the antonym (opposite) of a "simpática" person?',
            audioText: 'antipática',
            options: ['antipática', 'generosa', 'alegre', 'trabajadora'],
            correctAnswer: 'antipática',
            explanation: 'El opuesto de simpático/a es antipático/a (unpleasant/unfriendly).',
            hints: ['Lleva el prefijo anti-.'],
            syllabusRef: 'M4-AMIGOS',
            difficulty: 'easy'
          },
          {
            id: 'm4-zar-4',
            type: 'fill-blank',
            prompt: 'Una persona a la que le gusta mucho bromear y hacer reír es muy: "______" (femenino singular).',
            englishPrompt: 'A person who likes to joke and make people laugh is very: "divertida".',
            audioText: 'divertida',
            options: ['divertida', 'aburrida', 'seria', 'triste'],
            correctAnswer: 'divertida',
            explanation: '"Divertida" (fun/amusing) describe a alguien que entretiene y hace sonreír.',
            hints: ['Opuesto de aburrida.'],
            syllabusRef: 'M4-AMIGOS',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'zaragoza-3',
        cityId: 'zaragoza',
        levelNumber: 3,
        title: 'Habilidades con SABER + Infinitivo',
        subtitle: 'Expresar competencias: sé hablar, sabe cocinar, sabemos tocar',
        tier: 'medium',
        syllabusTopic: 'M4.Habilidades',
        description: 'Descubres los talentos artísticos de los músicos de la plaza del Pilar.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-5',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice en español "I know how to speak Spanish and I can play the guitar"?',
            englishPrompt: 'How do you say in Spanish "I know how to speak Spanish and I can play the guitar"?',
            audioText: 'Sé hablar español y sé tocar la guitarra',
            options: [
              'Sé hablar español y sé tocar la guitarra',
              'Conozco hablar español y conozco tocar guitarra',
              'Sabo hablar español y sabo tocar la guitarra',
              'Soy hablar español y estoy tocar la guitarra'
            ],
            correctAnswer: 'Sé hablar español y sé tocar la guitarra',
            explanation: 'Para habilidades y aptitudes aprendidas se usa el verbo SABER + infinitivo (primera persona irregular: Yo sé). Conocer es solo para lugares o personas.',
            hints: ['SABER + infinitivo (primera persona "Sé" con tilde).'],
            syllabusRef: 'M4-HABILIDADES',
            difficulty: 'medium'
          },
          {
            id: 'm4-zar-6',
            type: 'fill-blank',
            prompt: 'Completa para "Él": "Mi mejor amigo ______ cocinar paella riquísima (saber)."',
            englishPrompt: 'Complete for "Él": "My best friend knows how to cook delicious paella."',
            audioText: 'sabe',
            options: ['sabe', 'sé', 'saben', 'sabemos'],
            correctAnswer: 'sabe',
            explanation: 'Tercera persona singular del verbo saber: él sabe.',
            hints: ['Forma de él para el verbo saber.'],
            syllabusRef: 'M4-HABILIDADES',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'zaragoza-4',
        cityId: 'zaragoza',
        levelNumber: 4,
        title: 'Diferencia Vital: SABER vs CONOCER',
        subtitle: 'Habilidades e información vs Personas y lugares',
        tier: 'medium',
        syllabusTopic: 'M4.Habilidades',
        description: 'La regla imprescindible para no confundir saber hechos con conocer personas.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-7',
            type: 'multiple-choice',
            prompt: '¿Cuál es la diferencia fundamental entre SABER y CONOCER?',
            englishPrompt: 'What is the fundamental difference between SABER and CONOCER?',
            audioText: 'SABER para datos y habilidades; CONOCER para estar familiarizado con personas o lugares',
            options: [
              'SABER para datos y habilidades (sé nadar); CONOCER para personas o ciudades (conozco Zaragoza)',
              'SABER es formal y CONOCER informal',
              'Son sinónimos idénticos',
              'CONOCER solo se usa en preguntas y SABER en respuestas'
            ],
            correctAnswer: 'SABER para datos y habilidades (sé nadar); CONOCER para personas o ciudades (conozco Zaragoza)',
            explanation: 'SABER: información, hechos o habilidades prácticas (+ infinitivo). CONOCER: estar familiarizado con alguien (conozco a Pilar) o un lugar (conozco Madrid).',
            hints: ['SABER + infinitivo / datos; CONOCER + personas o ciudades.'],
            syllabusRef: 'M4-HABILIDADES',
            difficulty: 'medium'
          },
          {
            id: 'm4-zar-8',
            type: 'fill-blank',
            prompt: 'Para una persona se usa la "a" personal con conocer: "Yo conozco ______ la profesora de arte."',
            englishPrompt: 'For a person the personal "a" is used with conocer: "Yo conozco a la profesora de arte."',
            audioText: 'a',
            options: ['a', 'en', 'de', 'con'],
            correctAnswer: 'a',
            explanation: 'Cuando el objeto directo es una persona determinada, en español es preceptiva la "a" personal: conocer a alguien.',
            hints: ['La famosa "a" personal del español.'],
            syllabusRef: 'M4-HABILIDADES',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'zaragoza-5',
        cityId: 'zaragoza',
        levelNumber: 5,
        title: 'Combinar Descripción Física y Moral',
        subtitle: 'Retrato literario completo de un compañero',
        tier: 'tough',
        syllabusTopic: 'M4.Amigos',
        description: 'Redactas una semblanza biográfica en la Lonja de Zaragoza.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-9',
            type: 'multiple-choice',
            prompt: 'Selecciona la frase sin ningún fallo de concordancia ni selección de verbo:',
            englishPrompt: 'Select the sentence with no error in agreement or verb selection:',
            audioText: 'Pilar es morena, tiene los ojos castaños y es muy trabajadora',
            options: [
              'Pilar es morena, tiene los ojos castaños y es muy trabajadora',
              'Pilar está morena, es los ojos castaño y tiene muy trabajadora',
              'Pilar es moreno, tiene los ojos castaña y es muy trabajador',
              'Pilar tiene morena, está los ojos castaños y es muy trabajadora'
            ],
            correctAnswer: 'Pilar es morena, tiene los ojos castaños y es muy trabajadora',
            explanation: 'SER para tez esencial (es morena), TENER para rasgos específicos con concordancia (tiene los ojos castaños) y SER para cualidad moral (es muy trabajadora).',
            hints: ['Femenino concuerda con Pilar; ojos castaños en masculino plural.'],
            syllabusRef: 'M4-AMIGOS',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'zaragoza-6',
        cityId: 'zaragoza',
        levelNumber: 6,
        title: 'Los Talentos de la Pandilla',
        subtitle: 'Conjugación plural de SABER: sabemos, sabéis, saben',
        tier: 'tough',
        syllabusTopic: 'M4.Habilidades',
        description: 'Cada amigo del grupo aporta una destreza para el viaje.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-10',
            type: 'fill-blank',
            prompt: 'Completa para primera persona plural: "Nosotros ______ bailar la jota aragonesa (saber)."',
            englishPrompt: 'Complete for first person plural: "Nosotros sabemos bailar la jota aragonesa."',
            audioText: 'sabemos',
            options: ['sabemos', 'sabéis', 'saben', 'sé'],
            correctAnswer: 'sabemos',
            explanation: 'Nosotros concuerda con "sabemos": nosotros sabemos bailar.',
            hints: ['Primera persona plural del verbo saber.'],
            syllabusRef: 'M4-HABILIDADES',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'zaragoza-7',
        cityId: 'zaragoza',
        levelNumber: 7,
        title: 'Construir Retratos de Personas Complejos',
        subtitle: 'Sintaxis descriptiva con conectores de adición y contraste',
        tier: 'hard',
        syllabusTopic: 'M4.Sintaxis',
        description: 'Escribes la presentación de tu equipo en el Puente de Piedra.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-11',
            type: 'word-order',
            prompt: 'Ordena la frase: "Mi amigo es inteligente y sabe hablar tres idiomas con fluidez"',
            englishPrompt: 'Order the sentence: "My friend is smart and knows how to speak three languages fluently"',
            audioText: 'Mi amigo es inteligente y sabe hablar tres idiomas con fluidez',
            sentencePieces: ['tres', 'inteligente', 'Mi', 'amigo', 'fluidez', 'sabe', 'hablar', 'y', 'idiomas', 'con', 'es'],
            correctAnswer: 'Mi amigo es inteligente y sabe hablar tres idiomas con fluidez',
            explanation: 'Sujeto y cópula (Mi amigo es inteligente) + nexo coordinante (y) + perífrasis de habilidad (sabe hablar tres idiomas) + modo (con fluidez).',
            hints: ['Comienza por "Mi amigo es inteligente".'],
            syllabusRef: 'M4-HABILIDADES',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'zaragoza-8',
        cityId: 'zaragoza',
        levelNumber: 8,
        title: 'Diálogo con Pilar en la Plaza del Pilar',
        subtitle: 'Conversación sobre aficiones, carácter y talentos compartidos',
        tier: 'hard',
        syllabusTopic: 'M4.Comunicacion',
        description: 'Pilar te muestra las torres mudéjares y conversáis sobre vuestros proyectos.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-12',
            type: 'dialogue',
            prompt: 'Charla frente a la basílica:',
            englishPrompt: 'Chat in front of the basilica:',
            audioText: '¡Hola viajero! Soy Pilar. En Aragón somos personas muy nobles y trabajadoras. ¿Qué es lo que más valoras tú en un amigo?',
            correctAnswer: 'Valoro mucho la sinceridad, la generosidad y el buen sentido del humor.',
            explanation: 'Respuesta comunicativa madura que enumera cualidades éticas y personales.',
            hints: ['Menciona la sinceridad y las cualidades positivas de la amistad.'],
            syllabusRef: 'M4-AMIGOS',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Pilar del Ebro',
              npcRole: 'Historiadora del Arte Aragonés',
              prompt: '¡Hola viajero! Soy Pilar. En Aragón somos personas muy nobles y trabajadoras. ¿Qué es lo que más valoras tú en un amigo?',
              englishPrompt: 'Hello traveler! I am Pilar. In Aragon we are noble and hard-working people. What do you value most in a friend?',
              choices: [
                {
                  id: 'c1',
                  text: 'Valoro mucho la sinceridad, la generosidad y el buen sentido del humor.',
                  englishHint: 'I value honesty, generosity and a good sense of humor very much.',
                  isCorrect: true,
                  npcResponse: '¡Qué gran respuesta! Esas virtudes crean amistades para toda la vida.',
                  explanation: 'Expresión comunicativa admirable y rica en valores.'
                },
                {
                  id: 'c2',
                  text: 'Son las dos y cuarto de la tarde en mi reloj.',
                  englishHint: 'It is a quarter past two in the afternoon on my watch.',
                  isCorrect: false,
                  npcResponse: 'La hora es exacta, pero te preguntaba por lo que valoras en un amigo.',
                  explanation: 'Fuera de contexto.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'zaragoza-9',
        cityId: 'zaragoza',
        levelNumber: 9,
        title: 'Talentos Gastronómicos y Musicales',
        subtitle: 'Contraste entre saber hacer algo y gustar algo',
        tier: 'hot',
        syllabusTopic: 'M4.Habilidades',
        description: 'Pilar sabe tocar la guitarra y a ti te gusta cantar jotas.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-13',
            type: 'multiple-choice',
            prompt: '¿Cómo decimos "She knows how to dance and she loves dancing"?',
            englishPrompt: 'How do we say "She knows how to dance and she loves dancing"?',
            audioText: 'Ella sabe bailar y le encanta bailar',
            options: [
              'Ella sabe bailar y le encanta bailar',
              'Ella conoce bailar y le gusta baile',
              'Ella es bailar y tiene encanto',
              'Ella sabo bailar y se encanta'
            ],
            correctAnswer: 'Ella sabe bailar y le encanta bailar',
            explanation: 'Saber + infinitivo para la habilidad (sabe bailar) + pronombre de OI con encantar (le encanta bailar).',
            hints: ['Sabe bailar + le encanta bailar.'],
            syllabusRef: 'M4-HABILIDADES',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'zaragoza-10',
        cityId: 'zaragoza',
        levelNumber: 10,
        title: 'Culminación del Módulo 4',
        subtitle: 'Gran síntesis de rutinas, reflexivos, universidad, ciudad y amigos',
        tier: 'hot',
        syllabusTopic: 'M4.Sintesis',
        description: 'La prueba maestra que corona todo el Módulo 4 antes del reto del Pilar.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm4-zar-14',
            type: 'fill-blank',
            prompt: 'Completa: "Mi mejor amiga ______ levanta a las siete y ______ hablar español con mucha soltura."',
            englishPrompt: 'Complete: "My best friend gets up at seven and knows how to speak Spanish with great fluency."',
            audioText: 'se / sabe',
            options: ['se / sabe', 'me / sé', 'te / sabes', 'se / conoce'],
            correctAnswer: 'se / sabe',
            explanation: 'Tercera persona singular: pronombre reflexivo "se" (se levanta) + habilidad aprendida con saber "sabe" (sabe hablar).',
            hints: ['Pronombre "se" para levantarse y verbo "sabe" para la habilidad.'],
            syllabusRef: 'M4-REFLEX',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-zaragoza',
      cityId: 'zaragoza',
      title: 'El Encuentro en la Plaza del Pilar',
      characterName: 'Doña Pilar del Ebro',
      characterRole: 'Custodia del Patrimonio del Reino de Aragón',
      scenario: 'Bajo las cúpulas pintadas por Goya en la Basílica del Pilar, Doña Pilar evalúa tu informe completo sobre rutinas urbanas, perfiles de personajes y talentos del Módulo 4. Si demuestras maestría superior al 80%, desbloquearás el Módulo 5 y la ruta hacia Bilbao.',
      objectives: [
        { id: 'zar-obj1', description: 'Elaborar descripciones físicas y morales sin errores de concordancia', syllabusTopic: 'M4.Amigos' },
        { id: 'zar-obj2', description: 'Dominar la distinción absoluta entre SABER y CONOCER', syllabusTopic: 'M4.Habilidades' },
        { id: 'zar-obj3', description: 'Integrar rutinas cotidianas reflexivas con solvencia comunicativa', syllabusTopic: 'M4.Rutinas' }
      ],
      requiredScorePercent: 80,
      xpReward: 400,
      coinReward: 500,
      badgeName: 'La Cinta de la Virgen del Pilar',
      badgeIcon: '🕊️',
      questions: [
        {
          id: 'b-zar-1',
          type: 'multiple-choice',
          prompt: 'Doña Pilar: "Describa con precisión a nuestro guía voluntario: es amable, tiene ojos verdes y posee la destreza de orientar a los turistas. ¿Cuál es la formulación impecable?"',
          englishPrompt: 'Doña Pilar: "Describe our volunteer guide accurately. Which is the impeccable phrasing?"',
          audioText: 'El guía es muy amable, tiene los ojos verdes y sabe orientar a los visitantes.',
          options: [
            'El guía es muy amable, tiene los ojos verdes y sabe orientar a los visitantes.',
            'El guía está muy amable, es los ojos verdes y conoce orientar a los visitantes.',
            'El guía tiene muy amable, hace los ojos verdes y puede orientar a los visitantes.',
            'El guía es muy amable, tiene los ojos verdes y sabo orientar los visitantes.'
          ],
          correctAnswer: 'El guía es muy amable, tiene los ojos verdes y sabe orientar a los visitantes.',
          explanation: 'SER para carácter (es amable), TENER para rasgos anatómicos (tiene los ojos verdes) y SABER + infinitivo para competencia técnica (sabe orientar a...).',
          hints: ['SER amable, TENER ojos verdes, SABER orientar.'],
          syllabusRef: 'M4-AMIGOS',
          difficulty: 'hard'
        },
        {
          id: 'b-zar-2',
          type: 'fill-blank',
          prompt: 'Doña Pilar: "Nosotros ______ Zaragoza muy bien y ______ preparar la tradicional borraja aragonesa (conocer / saber)."',
          englishPrompt: 'Doña Pilar: "We know Zaragoza very well and know how to prepare traditional borage."',
          audioText: 'conocemos / sabemos',
          options: ['conocemos / sabemos', 'sabemos / conocemos', 'conocemos / conocemos', 'sabemos / sabemos'],
          correctAnswer: 'conocemos / sabemos',
          explanation: 'Para la ciudad se usa CONOCER ("conocemos Zaragoza") y para la técnica culinaria se usa SABER + infinitivo ("sabemos preparar").',
          hints: ['CONOCER para la ciudad, SABER para la receta.'],
          syllabusRef: 'M4-HABILIDADES',
          difficulty: 'hard'
        },
        {
          id: 'b-zar-3',
          type: 'word-order',
          prompt: 'Ordena el juramento aragonés: "La lealtad entre amigos resiste el paso de los siglos"',
          englishPrompt: 'Order the Aragonese pledge: "Loyalty among friends withstands the passage of centuries"',
          audioText: 'La lealtad entre amigos resiste el paso de los siglos',
          sentencePieces: ['amigos', 'siglos', 'entre', 'paso', 'La', 'resiste', 'de', 'lealtad', 'el', 'los'],
          correctAnswer: 'La lealtad entre amigos resiste el paso de los siglos',
          explanation: 'Sintagma sujeto (La lealtad entre amigos) + verbo transitivo (resiste) + sintagma objeto (el paso de los siglos).',
          hints: ['Comienza por "La lealtad entre amigos".'],
          syllabusRef: 'M4-Sintaxis',
          difficulty: 'hot'
        }
      ]
    }
  }
];
