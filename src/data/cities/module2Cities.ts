import { City } from '../../types';

export const MODULE2_CITIES: City[] = [
  {
    id: 'segovia',
    number: 4,
    name: 'Segovia',
    region: 'Castilla y León',
    landmark: 'Acueducto Romano & Alcázar',
    description: 'La ciudad del impresionante acueducto bimilenario. Aquí dominarás el vocabulario de la casa, los colores, el verbo ESTAR y la distinción entre SER y ESTAR.',
    moduleIndex: 2,
    moduleName: 'Módulo 2: Mi Habitación, Colores, ESTAR y SER vs ESTAR',
    coordinates: { x: 47, y: 45 },
    accentColor: '#0284C7',
    levels: [
      {
        id: 'segovia-1',
        cityId: 'segovia',
        levelNumber: 1,
        title: 'Mi Habitación en el Parador',
        subtitle: 'Partes de la habitación y mobiliario básico',
        tier: 'easy',
        syllabusTopic: 'M2.Habitacion',
        description: 'Te hospedas con vistas al acueducto e identificas los muebles de tu estancia.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se llama el mueble donde dormimos por la noche?',
            englishPrompt: 'What is the furniture where we sleep at night called?',
            audioText: 'la cama',
            options: ['la cama', 'la mesa', 'la silla', 'el armario'],
            correctAnswer: 'la cama',
            explanation: '"La cama" es el mueble donde dormimos. "El armario" es para la ropa y "la silla" para sentarse.',
            hints: ['Palabra femenina de cuatro letras: c-a-m-a.'],
            syllabusRef: 'M2-CASA',
            difficulty: 'easy'
          },
          {
            id: 'm2-seg-2',
            type: 'fill-blank',
            prompt: 'Para guardar los abrigos y la ropa usamos: "el ______".',
            englishPrompt: 'To store coats and clothes we use: "el armario".',
            audioText: 'armario',
            options: ['armario', 'escritorio', 'suelo', 'techo'],
            correctAnswer: 'armario',
            explanation: '"El armario" es el mueble destinado a colgar y guardar ropa.',
            hints: ['Mueble alto con puertas para colgar perchas.'],
            syllabusRef: 'M2-CASA',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'segovia-2',
        cityId: 'segovia',
        levelNumber: 2,
        title: 'Los Colores de Castilla',
        subtitle: 'Gama cromática y concordancia',
        tier: 'easy',
        syllabusTopic: 'M2.Colores',
        description: 'Pintores y artesanos capturan los colores de la sierra y la piedra segoviana.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-3',
            type: 'multiple-choice',
            prompt: '¿Cuál es la forma correcta para concordar el color "blanco" con "las paredes"?',
            englishPrompt: 'What is the correct form to agree the color "blanco" with "las paredes"?',
            audioText: 'las paredes blancas',
            options: ['las paredes blancas', 'las paredes blanco', 'las paredes blanca', 'las paredes blanquecinas'],
            correctAnswer: 'las paredes blancas',
            explanation: '"Paredes" es sustantivo femenino plural (la pared -> las paredes), por tanto el adjetivo de color adopta "-as": blancas.',
            hints: ['Femenino plural: termina en -as.'],
            syllabusRef: 'M2-COLORES',
            difficulty: 'easy'
          },
          {
            id: 'm2-seg-4',
            type: 'fill-blank',
            prompt: 'El color "azul" termina en consonante, por lo que su plural es: "azules" y su femenino es: "______".',
            englishPrompt: 'The color "azul" ends in a consonant, so its plural is "azules" and its feminine singular is: "azul".',
            audioText: 'azul',
            options: ['azul', 'azula', 'azule', 'azulaa'],
            correctAnswer: 'azul',
            explanation: 'Los adjetivos que terminan en consonante (como azul, verde, gris) no tienen forma femenina diferenciada en singular.',
            hints: ['No cambia en femenino.'],
            syllabusRef: 'M2-COLORES',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'segovia-3',
        cityId: 'segovia',
        levelNumber: 3,
        title: 'El Verbo ESTAR para Ubicación',
        subtitle: 'Conjugación de ESTAR: estoy, estás, está, estamos, estáis, están',
        tier: 'medium',
        syllabusTopic: 'M2.VerboESTAR',
        description: 'Junto a los arcos romanos aprendes a localizar monumentos y personas.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-5',
            type: 'multiple-choice',
            prompt: 'Para preguntar dónde se encuentra la catedral de Segovia decimos:',
            englishPrompt: 'To ask where Segovia\'s cathedral is located we say:',
            audioText: '¿Dónde está la catedral?',
            options: ['¿Dónde está la catedral?', '¿Dónde es la catedral?', '¿Dónde tiene la catedral?', '¿Dónde hay la catedral?'],
            correctAnswer: '¿Dónde está la catedral?',
            explanation: 'Para ubicar en el espacio un lugar o monumento concreto y determinado (la catedral) se usa obligatoriamente el verbo ESTAR.',
            hints: ['Ubicación espacial de algo específico = verbo ESTAR.'],
            syllabusRef: 'M2-ESTAR',
            difficulty: 'medium'
          },
          {
            id: 'm2-seg-6',
            type: 'fill-blank',
            prompt: 'Completa con la forma correcta de ESTAR: "Mis amigos y yo ______ en la plaza del Azoguejo."',
            englishPrompt: 'Complete with the correct form of ESTAR: "My friends and I are in Azoguejo square."',
            audioText: 'estamos',
            options: ['estamos', 'están', 'estáis', 'somos'],
            correctAnswer: 'estamos',
            explanation: '"Mis amigos y yo" es primera persona plural (nosotros), por tanto corresponde "estamos".',
            hints: ['Nosotros + estamos.'],
            syllabusRef: 'M2-ESTAR',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'segovia-4',
        cityId: 'segovia',
        levelNumber: 4,
        title: 'Muebles y Espacio en la Casa',
        subtitle: 'Vocabulario extendido de la vivienda',
        tier: 'medium',
        syllabusTopic: 'M2.Habitacion',
        description: 'Describes el salón y la cocina en una tradicional casa castellana.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-7',
            type: 'multiple-choice',
            prompt: '¿Cómo se llama el electrodoméstico donde guardamos los alimentos fríos?',
            englishPrompt: 'What is the appliance where we keep cold food called?',
            audioText: 'la nevera o el frigorífico',
            options: ['la nevera', 'el horno', 'el microondas', 'la lámpara'],
            correctAnswer: 'la nevera',
            explanation: '"La nevera" (o el frigorífico) es el aparato para mantener fríos los alimentos y bebidas.',
            hints: ['Viene de la raíz de "nieve".'],
            syllabusRef: 'M2-CASA',
            difficulty: 'medium'
          },
          {
            id: 'm2-seg-8',
            type: 'fill-blank',
            prompt: 'La habitación donde cocinamos la comida es: "la ______".',
            englishPrompt: 'The room where we cook food is: "la cocina".',
            audioText: 'cocina',
            options: ['cocina', 'terraza', 'baño', 'salón'],
            correctAnswer: 'cocina',
            explanation: '"La cocina" es la estancia donde se preparan los alimentos.',
            hints: ['Palabra que empieza por c-o-c...'],
            syllabusRef: 'M2-CASA',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'segovia-5',
        cityId: 'segovia',
        levelNumber: 5,
        title: 'Diferencia Esencial: ¿SER o ESTAR?',
        subtitle: 'Esencia e identidad vs Estado y ubicación',
        tier: 'tough',
        syllabusTopic: 'M2.SerVsEstar',
        description: 'La regla de oro del español: cuándo usar SER y cuándo usar ESTAR.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-9',
            type: 'multiple-choice',
            prompt: '¿Por qué decimos "El acueducto ES antiguo" pero "El acueducto ESTÁ en Segovia"?',
            englishPrompt: 'Why do we say "El acueducto ES antiguo" but "El acueducto ESTÁ en Segovia"?',
            audioText: 'SER para características intrínsecas; ESTAR para ubicación',
            options: [
              'SER para características intrínsecas; ESTAR para ubicación',
              'SER solo se usa para personas; ESTAR solo para cosas',
              'Son sinónimos intercambiables en cualquier frase',
              'ESTAR es para el pasado y SER para el presente'
            ],
            correctAnswer: 'SER para características intrínsecas; ESTAR para ubicación',
            explanation: 'SER define la naturaleza y rasgos permanentes de algo (antiguo, alto, de piedra). ESTAR señala su localización geográfica y sus estados transitorios.',
            hints: ['La localización siempre lleva ESTAR.'],
            syllabusRef: 'M2-SER-ESTAR',
            difficulty: 'tough'
          },
          {
            id: 'm2-seg-10',
            type: 'fill-blank',
            prompt: 'Para expresar cansancio temporal decimos: "Yo ______ muy cansado hoy."',
            englishPrompt: 'To express temporary tiredness we say: "I am very tired today."',
            audioText: 'estoy',
            options: ['estoy', 'soy', 'tengo', 'hago'],
            correctAnswer: 'estoy',
            explanation: 'El cansancio es un estado físico temporal, por lo que se utiliza rigurosamente el verbo ESTAR ("estoy cansado").',
            hints: ['Estado físico temporal = ESTAR.'],
            syllabusRef: 'M2-SER-ESTAR',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'segovia-6',
        cityId: 'segovia',
        levelNumber: 6,
        title: 'Estados de Ánimo y Condiciones',
        subtitle: 'Adjetivos con ESTAR: contento, triste, ocupado, limpio',
        tier: 'tough',
        syllabusTopic: 'M2.VerboESTAR',
        description: 'Reconoces cómo los adjetivos cambian de significado según el verbo.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-11',
            type: 'multiple-choice',
            prompt: '¿Qué significa la frase "La habitación está limpia"?',
            englishPrompt: 'What does the sentence "La habitación está limpia" mean?',
            audioText: 'The room is clean (in a cleaned state)',
            options: [
              'The room is clean (its current state)',
              'The room clean itself',
              'The room is a cleaner by profession',
              'The room has clean books'
            ],
            correctAnswer: 'The room is clean (its current state)',
            explanation: 'ESTAR + adjetivo describe el estado o condición resultante de una acción previa en ese momento concreto.',
            hints: ['Indica una condición actual y no una esencia eterna.'],
            syllabusRef: 'M2-SER-ESTAR',
            difficulty: 'tough'
          },
          {
            id: 'm2-seg-12',
            type: 'fill-blank',
            prompt: 'Completa: "Mis maletas ______ preparadas para el viaje."',
            englishPrompt: 'Complete: "My suitcases are packed/ready for the trip."',
            audioText: 'están',
            options: ['están', 'son', 'tienen', 'hacen'],
            correctAnswer: 'están',
            explanation: '"Estar preparadas" es un estado temporal que afecta al sujeto plural femenino (maletas -> están).',
            hints: ['Tercera persona plural de ESTAR.'],
            syllabusRef: 'M2-ESTAR',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'segovia-7',
        cityId: 'segovia',
        levelNumber: 7,
        title: 'Construcción Espacial en el Alcázar',
        subtitle: 'Sintaxis de ubicación y adjetivos descriptivos',
        tier: 'hard',
        syllabusTopic: 'M2.Sintaxis',
        description: 'Subes a la torre de Juan II y describes la panorámica castellana.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-13',
            type: 'word-order',
            prompt: 'Ordena la frase: "El Alcázar de Segovia está sobre una colina verde"',
            englishPrompt: 'Order the sentence: "The Alcázar of Segovia is on a green hill"',
            audioText: 'El Alcázar de Segovia está sobre una colina verde',
            sentencePieces: ['verde', 'sobre', 'está', 'El', 'de', 'colina', 'Segovia', 'Alcázar', 'una'],
            correctAnswer: 'El Alcázar de Segovia está sobre una colina verde',
            explanation: 'Sujeto complejo (El Alcázar de Segovia) + verbo ESTAR (está) + sintagma preposicional (sobre una colina verde).',
            hints: ['Empieza por "El Alcázar de Segovia".'],
            syllabusRef: 'M2-ESTAR',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'segovia-8',
        cityId: 'segovia',
        levelNumber: 8,
        title: 'Conversación en la Posada Segoviana',
        subtitle: 'Diálogo sobre comodidades y ubicación de la habitación',
        tier: 'hard',
        syllabusTopic: 'M2.Comunicacion',
        description: 'Hablas con el encargado sobre el equipamiento y vista de tu aposento.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-14',
            type: 'dialogue',
            prompt: 'Petición en recepción:',
            englishPrompt: 'Request at the hotel front desk:',
            audioText: 'Buenas noches. ¿Su habitación está a su gusto o necesita algo más?',
            correctAnswer: 'Buenas noches. La habitación es preciosa y la cama es muy cómoda, gracias.',
            explanation: 'Fórmula que describe apropiadamente con SER las características del aposento.',
            hints: ['Agradece e indica que las cualidades son excelentes.'],
            syllabusRef: 'M2-SER-ESTAR',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Don Gonzalo',
              npcRole: 'Encargado de la Posada del Acueducto',
              prompt: 'Buenas noches. ¿Su habitación está a su gusto o necesita algo más?',
              englishPrompt: 'Good evening. Is your room to your liking or do you need anything else?',
              choices: [
                {
                  id: 'c1',
                  text: 'Buenas noches. La habitación es preciosa y la cama es muy cómoda, gracias.',
                  englishHint: 'Good evening. The room is lovely and the bed is very comfortable, thank you.',
                  isCorrect: true,
                  npcResponse: '¡Me alegro enormemente! Que descanse muy bien esta noche.',
                  explanation: 'Uso impecable de SER para describir cualidades del cuarto.'
                },
                {
                  id: 'c2',
                  text: 'El martes soy en Segovia.',
                  englishHint: 'On Tuesday I am in Segovia (incorrectly using ser).',
                  isCorrect: false,
                  npcResponse: '¿Cómo dice? Recuerde que para estar en un lugar usamos el verbo ESTAR.',
                  explanation: 'Error gramatical: ubicación requiere ESTAR.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'segovia-9',
        cityId: 'segovia',
        levelNumber: 9,
        title: 'Taller de Arquitectura con Clara',
        subtitle: 'Diferenciación rápida SER vs ESTAR bajo presión',
        tier: 'hot',
        syllabusTopic: 'M2.SerVsEstar',
        description: 'La restauradora Clara te hace un test rápido distinguiendo la piedra y su estado.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-15',
            type: 'multiple-choice',
            prompt: '¿Cuál es la combinación correcta para rellenar los huecos? "El acueducto _____ de piedra romana y hoy _____ perfectamente conservado."',
            englishPrompt: 'Which is the correct pair? "The aqueduct is made of Roman stone and today is perfectly preserved."',
            audioText: 'es / está',
            options: ['es / está', 'está / es', 'es / es', 'está / está'],
            correctAnswer: 'es / está',
            explanation: 'Materia o composición intrínseca ("es de piedra", SER) frente a estado temporal/resultado de conservación ("está conservado", ESTAR).',
            hints: ['Primero SER para el material y luego ESTAR para el estado.'],
            syllabusRef: 'M2-SER-ESTAR',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'segovia-10',
        cityId: 'segovia',
        levelNumber: 10,
        title: 'Reto de Descripción Espacial',
        subtitle: 'Consolidación de habitaciones, colores y verbos copulativos',
        tier: 'hot',
        syllabusTopic: 'M2.Sintesis',
        description: 'Prueba final de descripción antes de la gran inspección del Alcázar.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm2-seg-16',
            type: 'fill-blank',
            prompt: 'Completa: "Las toallas de mi baño ______ amarillas y suaves."',
            englishPrompt: 'Complete: "The towels in my bathroom are yellow and soft."',
            audioText: 'son',
            options: ['son', 'están', 'tienen', 'hacen'],
            correctAnswer: 'son',
            explanation: 'El color permanente y la textura característica de las toallas se definen con el verbo SER (ellas son).',
            hints: ['Característica permanente del objeto = SER.'],
            syllabusRef: 'M2-SER-ESTAR',
            difficulty: 'hot'
          },
          {
            id: 'm2-seg-17',
            type: 'multiple-choice',
            prompt: '¿Cuál de estos adjetivos de color es invariable para masculino y femenino?',
            englishPrompt: 'Which of these color adjectives is invariable for masculine and feminine?',
            audioText: 'verde',
            options: ['verde', 'rojo', 'blanco', 'negro'],
            correctAnswer: 'verde',
            explanation: '"Verde" termina en -e, por lo que se utiliza igual para sustantivos masculinos ("el árbol verde") y femeninos ("la colina verde").',
            hints: ['Termina en la vocal -e.'],
            syllabusRef: 'M2-COLORES',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-segovia',
      cityId: 'segovia',
      title: 'La Inspección del Alcázar de Segovia',
      characterName: 'Conservadora Clara de la Cerda',
      characterRole: 'Jefa de Patrimonio Histórico de Segovia',
      scenario: 'Clara necesita verificar el inventario de la Sala de Reyes y las torres del Alcázar. Debes demostrar maestría absoluta distinguiendo entre SER y ESTAR, colores y mobiliario para conseguir el salvoconducto a Sevilla.',
      objectives: [
        { id: 'seg-obj1', description: 'Distinguir sin fallos los usos de SER y ESTAR', syllabusTopic: 'M2.SerVsEstar' },
        { id: 'seg-obj2', description: 'Describir con precisión colores y concordancia de mobiliario', syllabusTopic: 'M2.Colores' },
        { id: 'seg-obj3', description: 'Localizar salas y elementos espaciales', syllabusTopic: 'M2.VerboESTAR' }
      ],
      requiredScorePercent: 80,
      xpReward: 350,
      coinReward: 500,
      badgeName: 'La Piedra Bicolor del Alcázar',
      badgeIcon: '🏰',
      questions: [
        {
          id: 'b-seg-1',
          type: 'multiple-choice',
          prompt: 'Clara: "Observe esta sala. ¿Cuál es el informe lingüístico perfectamente formulado?"',
          englishPrompt: 'Clara: "Look at this hall. Which is the perfectly formulated linguistic report?"',
          audioText: 'El salón es muy amplio y los tapices antiguos están en la pared norte.',
          options: [
            'El salón es muy amplio y los tapices antiguos están en la pared norte.',
            'El salón está muy amplio y los tapices antiguos son en la pared norte.',
            'El salón es muy amplio y los tapices antiguos tienen en la pared norte.',
            'El salón son amplio y los tapices está en la pared norte.'
          ],
          correctAnswer: 'El salón es muy amplio y los tapices antiguos están en la pared norte.',
          explanation: 'SER (es muy amplio) define la dimensión y atributo intrínseco de la sala; ESTAR (están en la pared) sitúa la localización física de los tapices.',
          hints: ['Dimensión con SER; localización física con ESTAR.'],
          syllabusRef: 'M2-SER-ESTAR',
          difficulty: 'hard'
        },
        {
          id: 'b-seg-2',
          type: 'fill-blank',
          prompt: 'Clara: "Las armaduras de los caballeros ______ de hierro y ______ limpias para la exposición."',
          englishPrompt: 'Clara: "The knights\' armor is made of iron and is clean for the exhibition."',
          audioText: 'son / están',
          options: ['son / están', 'están / son', 'son / son', 'están / están'],
          correctAnswer: 'son / están',
          explanation: 'Composición material ("son de hierro", SER) y condición transitoria de higiene ("están limpias", ESTAR).',
          hints: ['Primero material y luego estado resultante.'],
          syllabusRef: 'M2-SER-ESTAR',
          difficulty: 'hard'
        },
        {
          id: 'b-seg-3',
          type: 'word-order',
          prompt: 'Ordena la conclusión del informe: "La torre del homenaje está abierta al público hoy"',
          englishPrompt: 'Order the report conclusion: "The keep tower is open to the public today"',
          audioText: 'La torre del homenaje está abierta al público hoy',
          sentencePieces: ['del', 'al', 'abierta', 'público', 'homenaje', 'está', 'hoy', 'La', 'torre'],
          correctAnswer: 'La torre del homenaje está abierta al público hoy',
          explanation: 'Sujeto (La torre del homenaje) + verbo ESTAR (está) + participio atributivo femenino (abierta) + complemento (al público hoy).',
          hints: ['Empieza por "La torre del homenaje".'],
          syllabusRef: 'M2-ESTAR',
          difficulty: 'hot'
        }
      ]
    }
  },
  {
    id: 'sevilla',
    number: 5,
    name: 'Sevilla',
    region: 'Andalucía',
    landmark: 'Giralda & Plaza de España',
    description: 'La capital andaluza rebosante de luz, azahar y compás flamenco. Aquí aprenderás a hablar de la familia, la edad y posesión con TENER y los verbos regulares en -AR.',
    moduleIndex: 2,
    moduleName: 'Módulo 2: Mi Familia, Verbo TENER, Edad y Verbos Regulares -AR',
    coordinates: { x: 35, y: 76 },
    accentColor: '#EA580C',
    levels: [
      {
        id: 'sevilla-1',
        cityId: 'sevilla',
        levelNumber: 1,
        title: 'Mi Familia en Santa Cruz',
        subtitle: 'Miembros de la familia y vocabulario de parentesco',
        tier: 'easy',
        syllabusTopic: 'M2.Familia',
        description: 'En un florido patio sevillano conversas sobre los miembros de tu familia.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se llama el padre de mi padre en español?',
            englishPrompt: 'What is my father\'s father called in Spanish?',
            audioText: 'mi abuelo',
            options: ['mi abuelo', 'mi tío', 'mi primo', 'mi hermano'],
            correctAnswer: 'mi abuelo',
            explanation: 'El padre de tu padre o de tu madre es tu "abuelo". La madre es tu "abuela".',
            hints: ['Palabra cariñosa para el padre del padre.'],
            syllabusRef: 'M2-FAM',
            difficulty: 'easy'
          },
          {
            id: 'm2-sev-2',
            type: 'fill-blank',
            prompt: 'El hijo de mis tíos es mi: "______".',
            englishPrompt: 'The son of my aunt and uncle is my: "primo".',
            audioText: 'primo',
            options: ['primo', 'hermano', 'sobrino', 'nieto'],
            correctAnswer: 'primo',
            explanation: 'Los hijos de tus tíos son tus "primos" (masculino) o "primas" (femenino).',
            hints: ['Empieza por p-r-i...'],
            syllabusRef: 'M2-FAM',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'sevilla-2',
        cityId: 'sevilla',
        levelNumber: 2,
        title: 'El Verbo TENER y la Posesión',
        subtitle: 'Conjugación completa de TENER en presente',
        tier: 'easy',
        syllabusTopic: 'M2.VerboTENER',
        description: 'Junto a la Torre del Oro practicas el verbo TENER (tengo, tienes, tiene...).',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-3',
            type: 'multiple-choice',
            prompt: '¿Cuál es la primera persona singular (yo) del verbo irregular TENER en presente?',
            englishPrompt: 'What is the first person singular (yo) form of the irregular verb TENER in present?',
            audioText: 'yo tengo',
            options: ['tengo', 'teno', 'tienes', 'tiengo'],
            correctAnswer: 'tengo',
            explanation: 'TENER tiene una primera persona irregular con sufijo -go: Yo tengo. Luego diptonga en tú tienes, él tiene, ellos tienen.',
            hints: ['Termina en -go.'],
            syllabusRef: 'M2-TENER',
            difficulty: 'easy'
          },
          {
            id: 'm2-sev-4',
            type: 'fill-blank',
            prompt: 'Completa: "Nosotros no ______ coche en Sevilla; viajamos en tranvía."',
            englishPrompt: 'Complete: "We do not have a car in Seville; we travel by tram."',
            audioText: 'tenemos',
            options: ['tenemos', 'tienen', 'tenéis', 'tengo'],
            correctAnswer: 'tenemos',
            explanation: 'La forma de nosotros para TENER es regular en su raíz: "tenemos" (sin diptongo ie).',
            hints: ['Nosotros + tenemos.'],
            syllabusRef: 'M2-TENER',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'sevilla-3',
        cityId: 'sevilla',
        levelNumber: 3,
        title: 'La Edad y Fechas Familiares',
        subtitle: 'Expresión de la edad con TENER y años',
        tier: 'medium',
        syllabusTopic: 'M2.Edad',
        description: 'Repasas las edades de tus hermanos y parientes para una reunión familiar.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-5',
            type: 'multiple-choice',
            prompt: '¿Cómo se traduce correctamente al español "My sister is 22 years old"?',
            englishPrompt: 'How is "My sister is 22 years old" correctly translated into Spanish?',
            audioText: 'Mi hermana tiene veintidós años',
            options: [
              'Mi hermana tiene veintidós años',
              'Mi hermana es veintidós años',
              'Mi hermana está veintidós años',
              'Mi hermana hace veintidós años'
            ],
            correctAnswer: 'Mi hermana tiene veintidós años',
            explanation: 'En español la edad se expresa de forma obligatoria con el verbo TENER: Sujeto + TENER + número + años.',
            hints: ['Recuerda: en español la edad se TIENE, no se es.'],
            syllabusRef: 'M2-TENER',
            difficulty: 'medium'
          },
          {
            id: 'm2-sev-6',
            type: 'fill-blank',
            prompt: 'Para preguntar la edad a un amigo informalmente: "¿Cuántos años ______?"',
            englishPrompt: 'To ask a friend\'s age informally: "How old are you?"',
            audioText: 'tienes',
            options: ['tienes', 'eres', 'estás', 'tenga'],
            correctAnswer: 'tienes',
            explanation: '"¿Cuántos años tienes?" es la pregunta estándar para la edad en segunda persona informal (tú).',
            hints: ['Segunda persona singular del verbo TENER.'],
            syllabusRef: 'M2-TENER',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'sevilla-4',
        cityId: 'sevilla',
        levelNumber: 4,
        title: 'Verbos Regulares en -AR en Triana',
        subtitle: 'Conjugación regular: hablar, bailar, cantar, escuchar',
        tier: 'medium',
        syllabusTopic: 'M2.VerbosRegulares',
        description: 'Al otro lado del puente de Isabel II, en Triana, resuenan la guitarra y el cante.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-7',
            type: 'multiple-choice',
            prompt: '¿Cuáles son las terminaciones de presente para los verbos regulares en -AR?',
            englishPrompt: 'What are the present tense endings for regular -AR verbs?',
            audioText: '-o, -as, -a, -amos, -áis, -an',
            options: [
              '-o, -as, -a, -amos, -áis, -an',
              '-o, -es, -e, -emos, -éis, -en',
              '-o, -es, -e, -imos, -ís, -en',
              '-i, -iste, -ió, -imos, -isteis, -ieron'
            ],
            correctAnswer: '-o, -as, -a, -amos, -áis, -an',
            explanation: 'Ejemplo con cantar: yo canto, tú cantas, él canta, nosotros cantamos, vosotros cantáis, ellos cantan.',
            hints: ['La vocal temática predominante es la A.'],
            syllabusRef: 'M2-REG-VERBS',
            difficulty: 'medium'
          },
          {
            id: 'm2-sev-8',
            type: 'fill-blank',
            prompt: 'Completa con el verbo BAILAR en presente para "Ella": "Carmen ______ flamenco con mucha pasión."',
            englishPrompt: 'Complete with the verb BAILAR in present for "Ella": "Carmen dances flamenco with great passion."',
            audioText: 'baila',
            options: ['baila', 'bailas', 'bailo', 'baile'],
            correctAnswer: 'baila',
            explanation: 'Tercera persona singular de bailar: ella baila.',
            hints: ['Termina en -a para él o ella.'],
            syllabusRef: 'M2-REG-VERBS',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'sevilla-5',
        cityId: 'sevilla',
        levelNumber: 5,
        title: 'Descripciones Físicas de la Familia',
        subtitle: 'Rasgos con TENER vs SER: pelo, ojos, altura',
        tier: 'tough',
        syllabusTopic: 'M2.Descripciones',
        description: 'Describes los ojos, el cabello y las características de tus familiares.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-9',
            type: 'multiple-choice',
            prompt: 'Para describir el color de los ojos o el tipo de cabello usamos el verbo:',
            englishPrompt: 'To describe eye color or hair type we use the verb:',
            audioText: 'TENER',
            options: ['TENER', 'SER', 'ESTAR', 'HACER'],
            correctAnswer: 'TENER',
            explanation: 'En español decimos: "Tiene los ojos marrones", "Tiene el pelo rizado y negro". Pero para la altura o complexión general usamos SER: "Es alto y delgado".',
            hints: ['Decimos "tener los ojos..." y "tener el pelo...".'],
            syllabusRef: 'M2-TENER',
            difficulty: 'tough'
          },
          {
            id: 'm2-sev-10',
            type: 'fill-blank',
            prompt: 'Completa: "Mi abuela tiene el pelo ______ y los ojos verdes."',
            englishPrompt: 'Complete: "My grandmother has grey hair and green eyes."',
            audioText: 'blanco',
            options: ['blanco', 'blanca', 'blancos', 'blancas'],
            correctAnswer: 'blanco',
            explanation: '"Pelo" es un sustantivo masculino singular, por lo que el color concuerda en masculino singular: "pelo blanco" o "pelo canoso".',
            hints: ['Concuerda con "pelo" (masculino singular).'],
            syllabusRef: 'M2-COLORES',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'sevilla-6',
        cityId: 'sevilla',
        levelNumber: 6,
        title: 'Verbos Regulares en -ER en Plaza de España',
        subtitle: 'Conjugación regular: comer, beber, aprender, comprender',
        tier: 'tough',
        syllabusTopic: 'M2.VerbosRegulares',
        description: 'Paseando en barca por los canales de la Plaza de España practicas verbos en -ER.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-11',
            type: 'multiple-choice',
            prompt: '¿Cómo se conjuga el verbo "aprender" para "Nosotros"?',
            englishPrompt: 'How is the verb "aprender" conjugated for "Nosotros"?',
            audioText: 'aprendemos',
            options: ['aprendemos', 'aprendamos', 'aprendéis', 'aprenden'],
            correctAnswer: 'aprendemos',
            explanation: 'Los verbos regulares en -ER toman la terminación "-emos" en la primera persona plural: nosotros aprendemos español.',
            hints: ['Termina en -emos.'],
            syllabusRef: 'M2-REG-VERBS',
            difficulty: 'tough'
          },
          {
            id: 'm2-sev-12',
            type: 'fill-blank',
            prompt: 'Completa: "En Sevilla la gente ______ tapas deliciosas en los bares."',
            englishPrompt: 'Complete: "In Seville people eat delicious tapas in the bars."',
            audioText: 'come',
            options: ['come', 'comen', 'comemos', 'comes'],
            correctAnswer: 'come',
            explanation: '"La gente" es un sustantivo colectivo que va obligatoriamente en tercera persona del singular en español: la gente come.',
            hints: ['"La gente" es singular en español (ella come).'],
            syllabusRef: 'M2-REG-VERBS',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'sevilla-7',
        cityId: 'sevilla',
        levelNumber: 7,
        title: 'SER vs ESTAR en la Familia',
        subtitle: 'Parentesco e identidad vs Estados de ánimo',
        tier: 'hard',
        syllabusTopic: 'M2.SerVsEstar',
        description: 'Distingues entre quién es cada pariente y cómo se siente hoy.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-13',
            type: 'multiple-choice',
            prompt: 'Selecciona la opción con los verbos correctos: "Mi hermano Carlos _____ médico y hoy _____ muy contento."',
            englishPrompt: 'Select the option with correct verbs: "My brother Carlos is a doctor and today is very happy."',
            audioText: 'es / está',
            options: ['es / está', 'está / es', 'es / es', 'está / está'],
            correctAnswer: 'es / está',
            explanation: 'Profesión permanente o vocacional (es médico, SER) frente a estado de ánimo transitorio (está contento, ESTAR).',
            hints: ['SER para profesión y ESTAR para alegría temporal.'],
            syllabusRef: 'M2-SER-ESTAR',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'sevilla-8',
        cityId: 'sevilla',
        levelNumber: 8,
        title: 'Diálogo con Doña Carmen en el Patio',
        subtitle: 'Conversación sobre familias y tradiciones andaluzas',
        tier: 'hard',
        syllabusTopic: 'M2.Comunicacion',
        description: 'Doña Carmen te invita a tomar un té de azahar y te pregunta por tu familia.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-14',
            type: 'dialogue',
            prompt: 'Charla con Doña Carmen:',
            englishPrompt: 'Chat with Doña Carmen:',
            audioText: '¡Qué alegría tenerte aquí! Cuéntame, hijo, ¿tienes hermanos o eres hijo único?',
            correctAnswer: 'Tengo dos hermanos menores y nos llevamos muy bien.',
            explanation: 'Responde comunicativamente a la pregunta usando el verbo TENER para familiares.',
            hints: ['Declara cuántos hermanos tienes usando el verbo tener.'],
            syllabusRef: 'M2-FAM',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Doña Carmen',
              npcRole: 'Matriarca del Barrio de Triana',
              prompt: '¡Qué alegría tenerte aquí! Cuéntame, hijo, ¿tienes hermanos o eres hijo único?',
              englishPrompt: 'What a joy to have you here! Tell me, child, do you have siblings or are you an only child?',
              choices: [
                {
                  id: 'c1',
                  text: 'Tengo dos hermanos menores y nos llevamos muy bien.',
                  englishHint: 'I have two younger brothers and we get along very well.',
                  isCorrect: true,
                  npcResponse: '¡Qué bendición! La familia unida es el mayor tesoro de la vida.',
                  explanation: 'Respuesta cordial, estructurada y correcta con TENER.'
                },
                {
                  id: 'c2',
                  text: 'La catedral de Sevilla está lejos.',
                  englishHint: 'Seville\'s cathedral is far.',
                  isCorrect: false,
                  npcResponse: 'Sí que es hermosa la catedral, pero te preguntaba por tus hermanos.',
                  explanation: 'No responde a la pregunta de parentesco.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'sevilla-9',
        cityId: 'sevilla',
        levelNumber: 9,
        title: 'Construir Frases Familiares Complejas',
        subtitle: 'Orden y sintaxis combinando TENER y adjetivos posesivos',
        tier: 'hot',
        syllabusTopic: 'M2.Sintaxis',
        description: 'Organizas la dedicatoria de un álbum familiar sevillano.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-15',
            type: 'word-order',
            prompt: 'Ordena la frase: "Mis padres viven en una casa blanca con jardín"',
            englishPrompt: 'Order the sentence: "My parents live in a white house with a garden"',
            audioText: 'Mis padres viven en una casa blanca con jardín',
            sentencePieces: ['viven', 'blanca', 'jardín', 'padres', 'con', 'en', 'casa', 'una', 'Mis'],
            correctAnswer: 'Mis padres viven en una casa blanca con jardín',
            explanation: 'Sujeto posesivo (Mis padres) + verbo vivir regular (viven) + preposición y objeto (en una casa blanca) + adjunto (con jardín).',
            hints: ['Comienza por "Mis padres viven".'],
            syllabusRef: 'M2-REG-VERBS',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'sevilla-10',
        cityId: 'sevilla',
        levelNumber: 10,
        title: 'Dominio de la Familia y Verbos',
        subtitle: 'Evaluación rápida de verbos regulares y posesión',
        tier: 'hot',
        syllabusTopic: 'M2.Sintesis',
        description: 'El último ensayo previo a la gran reunión familiar en Triana.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm2-sev-16',
            type: 'multiple-choice',
            prompt: '¿Cuál de las siguientes oraciones utiliza correctamente el verbo TENER para una posesión?',
            englishPrompt: 'Which of the following sentences correctly uses the verb TENER for a possession?',
            audioText: 'Nosotros tenemos una guitarra española antigua',
            options: [
              'Nosotros tenemos una guitarra española antigua',
              'Nosotros somos una guitarra española antigua',
              'Nosotros estamos una guitarra española antigua',
              'Nosotros hacemos una guitarra española antigua'
            ],
            correctAnswer: 'Nosotros tenemos una guitarra española antigua',
            explanation: 'La posesión de objetos materiales se expresa siempre con TENER: Nosotros tenemos una guitarra.',
            hints: ['Posesión material = verbo TENER.'],
            syllabusRef: 'M2-TENER',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-sevilla',
      cityId: 'sevilla',
      title: 'La Gran Reunión Familiar Sevillana',
      characterName: 'Doña Carmen de Triana',
      characterRole: 'Anfitriona del Tablao y Familia Flamenca',
      scenario: 'Doña Carmen reúne a cuatro generaciones en su casa solariega. Para ser nombrado huésped honorífico y abrir la ruta hacia Granada, debes superar las preguntas sobre el árbol genealógico, edades y verbos regulares.',
      objectives: [
        { id: 'sev-obj1', description: 'Reconocer todas las relaciones de parentesco familiar', syllabusTopic: 'M2.Familia' },
        { id: 'sev-obj2', description: 'Conjugación infalible de TENER y expresión de la edad', syllabusTopic: 'M2.VerboTENER' },
        { id: 'sev-obj3', description: 'Conjugación correcta de verbos regulares en -AR y -ER', syllabusTopic: 'M2.VerbosRegulares' }
      ],
      requiredScorePercent: 80,
      xpReward: 350,
      coinReward: 500,
      badgeName: 'El Clavel de Oro de Sevilla',
      badgeIcon: '💃',
      questions: [
        {
          id: 'b-sev-1',
          type: 'multiple-choice',
          prompt: 'Doña Carmen: "Te presento a Antonio, que es el hermano de mi madre. Por tanto, Antonio es mi..."',
          englishPrompt: 'Doña Carmen: "I introduce Antonio, who is my mother\'s brother. Therefore, Antonio is my..."',
          audioText: 'tío',
          options: ['tío', 'primo', 'abuelo', 'sobrino'],
          correctAnswer: 'tío',
          explanation: 'El hermano de la madre es el tío.',
          hints: ['Hermano de la madre = tío.'],
          syllabusRef: 'M2-FAM',
          difficulty: 'hard'
        },
        {
          id: 'b-sev-2',
          type: 'fill-blank',
          prompt: 'Doña Carmen: "Mis nietos pequeños ______ ocho y diez años y ______ muy aplicados."',
          englishPrompt: 'Doña Carmen: "My young grandchildren are 8 and 10 years old and are very diligent."',
          audioText: 'tienen / son',
          options: ['tienen / son', 'son / tienen', 'están / tienen', 'tienen / están'],
          correctAnswer: 'tienen / son',
          explanation: 'Para la edad se usa TENER (tienen ocho y diez años) y para la cualidad personal esencial se usa SER (son aplicados).',
          hints: ['Primero TENER para la edad y luego SER para la cualidad.'],
          syllabusRef: 'M2-TENER',
          difficulty: 'hard'
        },
        {
          id: 'b-sev-3',
          type: 'word-order',
          prompt: 'Ordena el brindis familiar: "Nosotros celebramos la vida y cantamos con alegría"',
          englishPrompt: 'Order the family toast: "We celebrate life and sing with joy"',
          audioText: 'Nosotros celebramos la vida y cantamos con alegría',
          sentencePieces: ['la', 'con', 'celebramos', 'alegría', 'vida', 'Nosotros', 'cantamos', 'y'],
          correctAnswer: 'Nosotros celebramos la vida y cantamos con alegría',
          explanation: 'Sujeto plural (Nosotros) + verbo regular -AR 1 (celebramos) + objeto (la vida) + conjunción (y) + verbo regular -AR 2 (cantamos) + complemento (con alegría).',
          hints: ['Comienza por "Nosotros celebramos la vida".'],
          syllabusRef: 'M2-REG-VERBS',
          difficulty: 'hot'
        }
      ]
    }
  },
  {
    id: 'granada',
    number: 6,
    name: 'Granada',
    region: 'Andalucía',
    landmark: 'La Alhambra & El Albaicín',
    description: 'La joya nazarí a los pies de Sierra Nevada. Aquí culminarás el Módulo 2 dominando las direcciones, preposiciones de lugar, verbos en -IR y la navegación urbana.',
    moduleIndex: 2,
    moduleName: 'Módulo 2: Direcciones, Preposiciones de Lugar y Verbos en -IR',
    coordinates: { x: 42, y: 78 },
    accentColor: '#059669',
    levels: [
      {
        id: 'granada-1',
        cityId: 'granada',
        levelNumber: 1,
        title: 'Direcciones Básicas en el Albaicín',
        subtitle: 'Izquierda, derecha, todo recto y cruzar',
        tier: 'easy',
        syllabusTopic: 'M2.Direcciones',
        description: 'Entre callejuelas empedradas y miradores aprendes las indicaciones de orientación.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice en español "Turn to the left"?',
            englishPrompt: 'How do you say in Spanish "Turn to the left"?',
            audioText: 'Gira a la izquierda',
            options: ['Gira a la izquierda', 'Gira a la derecha', 'Sigue todo recto', 'Cruza la plaza'],
            correctAnswer: 'Gira a la izquierda',
            explanation: '"A la izquierda" significa to the left; "a la derecha" to the right; "todo recto" straight ahead.',
            hints: ['Lo contrario de la derecha.'],
            syllabusRef: 'M2-DIR',
            difficulty: 'easy'
          },
          {
            id: 'm2-gra-2',
            type: 'fill-blank',
            prompt: 'Para continuar en línea recta sin desviarse decimos: "Sigue todo ______".',
            englishPrompt: 'To continue in a straight line without turning we say: "Sigue todo recto".',
            audioText: 'recto',
            options: ['recto', 'derecho', 'curvo', 'girado'],
            correctAnswer: 'recto',
            explanation: '"Todo recto" o "hacia adelante" indica no tomar desvíos.',
            hints: ['Palabra que significa en línea directa: r-e-c-t-o.'],
            syllabusRef: 'M2-DIR',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'granada-2',
        cityId: 'granada',
        levelNumber: 2,
        title: 'Frases Preposicionales de Lugar',
        subtitle: 'Encima de, debajo de, al lado de, delante de, detrás de',
        tier: 'easy',
        syllabusTopic: 'M2.Preposiciones',
        description: 'Junto a la fuente del patio de los Leones practicas las posiciones relativas.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-3',
            type: 'multiple-choice',
            prompt: '¿Qué preposición compuesta significa "next to / beside"?',
            englishPrompt: 'Which compound preposition means "next to / beside"?',
            audioText: 'al lado de',
            options: ['al lado de', 'debajo de', 'delante de', 'lejos de'],
            correctAnswer: 'al lado de',
            explanation: '"Al lado de" expresa contigüidad lateral.',
            hints: ['Menciona la palabra "lado".'],
            syllabusRef: 'M2-PREP',
            difficulty: 'easy'
          },
          {
            id: 'm2-gra-4',
            type: 'fill-blank',
            prompt: 'El gato duerme ______ la mesa (under the table) -> "debajo ____ la mesa".',
            englishPrompt: 'The cat sleeps under the table -> "debajo de la mesa".',
            audioText: 'de',
            options: ['de', 'en', 'a', 'por'],
            correctAnswer: 'de',
            explanation: 'Las locuciones preposicionales de lugar se construyen casi todas con la preposición "de": debajo de, encima de, delante de, detrás de.',
            hints: ['Preposición de dos letras: d-e.'],
            syllabusRef: 'M2-PREP',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'granada-3',
        cityId: 'granada',
        levelNumber: 3,
        title: 'Verbos Regulares en -IR en el Carmen Nazarí',
        subtitle: 'Conjugación regular: vivir, escribir, abrir',
        tier: 'medium',
        syllabusTopic: 'M2.VerbosRegulares',
        description: 'En un carmen granadino con jardín descubres cómo se conjugan los verbos en -IR.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-5',
            type: 'multiple-choice',
            prompt: '¿Cómo se conjuga el verbo "vivir" para "Yo"?',
            englishPrompt: 'How is the verb "vivir" conjugated for "Yo"?',
            audioText: 'yo vivo',
            options: ['vivo', 'vives', 'vive', 'vivimos'],
            correctAnswer: 'vivo',
            explanation: 'La primera persona de los verbos en -IR en presente también termina en -o: Yo vivo.',
            hints: ['Termina en -o como casi todos los verbos en presente.'],
            syllabusRef: 'M2-REG-VERBS',
            difficulty: 'medium'
          },
          {
            id: 'm2-gra-6',
            type: 'fill-blank',
            prompt: 'Completa para "Nosotros": "Nosotros ______ postales desde Granada."',
            englishPrompt: 'Complete for "Nosotros": "We write postcards from Granada."',
            audioText: 'escribimos',
            options: ['escribimos', 'escribemos', 'escriban', 'escribís'],
            correctAnswer: 'escribimos',
            explanation: 'Los verbos en -IR llevan la terminación "-imos" para nosotros: escribir -> escribimos, vivir -> vivimos.',
            hints: ['Termina en -imos para verbos en -IR.'],
            syllabusRef: 'M2-REG-VERBS',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'granada-4',
        cityId: 'granada',
        levelNumber: 4,
        title: 'Ubicar Monumentos en el Mapa de Granada',
        subtitle: 'Cerca de, lejos de, en el centro',
        tier: 'medium',
        syllabusTopic: 'M2.Direcciones',
        description: 'Consultas el mapa para subir a la colina de la Sabika.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-7',
            type: 'multiple-choice',
            prompt: '¿Cuál es el antónimo (opuesto) de "cerca de"?',
            englishPrompt: 'What is the antonym (opposite) of "cerca de"?',
            audioText: 'lejos de',
            options: ['lejos de', 'delante de', 'encima de', 'dentro de'],
            correctAnswer: 'lejos de',
            explanation: '"Cerca de" (near) es lo opuesto de "lejos de" (far from).',
            hints: ['Empieza por la letra L.'],
            syllabusRef: 'M2-PREP',
            difficulty: 'medium'
          },
          {
            id: 'm2-gra-8',
            type: 'fill-blank',
            prompt: 'La Alhambra ______ en lo alto de la colina.',
            englishPrompt: 'The Alhambra is on top of the hill.',
            audioText: 'está',
            options: ['está', 'es', 'tiene', 'hace'],
            correctAnswer: 'está',
            explanation: 'Ubicación física geográfica = verbo ESTAR.',
            hints: ['Tercera persona singular de ESTAR.'],
            syllabusRef: 'M2-ESTAR',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'granada-5',
        cityId: 'granada',
        levelNumber: 5,
        title: 'Preguntar por el Mirador de San Nicolás',
        subtitle: 'Fórmulas comunicativas de orientación en la calle',
        tier: 'tough',
        syllabusTopic: 'M2.Direcciones',
        description: 'Preguntas a los vecinos del Albaicín cómo alcanzar la mejor vista panorámica.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-9',
            type: 'multiple-choice',
            prompt: '¿Cómo se pide educadamente orientación a un transeúnte en la calle?',
            englishPrompt: 'How do you politely ask a passer-by for directions on the street?',
            audioText: 'Perdone, ¿para ir al mirador de San Nicolás?',
            options: [
              'Perdone, ¿para ir al mirador de San Nicolás?',
              '¡Oye tú! ¿Dónde pongo el mirador?',
              'Dime el mirador rápido.',
              '¿Por qué eres el mirador?'
            ],
            correctAnswer: 'Perdone, ¿para ir al mirador de San Nicolás?',
            explanation: '"Perdone, ¿para ir a...?" o "Disculpe, ¿cómo se va a...?" son las fórmulas corteses estándar.',
            hints: ['Comienza por una disculpa educada: Perdone.'],
            syllabusRef: 'M2-DIR',
            difficulty: 'tough'
          },
          {
            id: 'm2-gra-10',
            type: 'fill-blank',
            prompt: 'Completa la respuesta del vecino: "______ la plaza y sube por la cuesta de San Gregorio."',
            englishPrompt: 'Complete the neighbour\'s reply: "Cross the square and go up San Gregorio slope."',
            audioText: 'Cruza',
            options: ['Cruza', 'Bebe', 'Escribe', 'Aprende'],
            correctAnswer: 'Cruza',
            explanation: '"Cruza la plaza" o "atraviesa la calle" indica pasar de un lado al otro del espacio.',
            hints: ['Verbo cruzar.'],
            syllabusRef: 'M2-DIR',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'granada-6',
        cityId: 'granada',
        levelNumber: 6,
        title: 'Conjugación Mixta -AR, -ER, -IR',
        subtitle: 'Diferenciación de terminaciones verbales en presente',
        tier: 'tough',
        syllabusTopic: 'M2.VerbosRegulares',
        description: 'Un repaso integral de los tres modelos de conjugación regular del español.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-11',
            type: 'multiple-choice',
            prompt: 'Empareja los verbos con su conjugación para "Él/Ella": hablar, comer, vivir.',
            englishPrompt: 'Match the verbs with their "Él/Ella" conjugation: hablar, comer, vivir.',
            audioText: 'habla, come, vive',
            options: ['habla, come, vive', 'hablo, como, vivo', 'hablas, comes, vives', 'hable, coma, viva'],
            correctAnswer: 'habla, come, vive',
            explanation: 'En tercera persona singular, los verbos en -AR terminan en -a (habla), mientras que los verbos en -ER y en -IR terminan en -e (come, vive).',
            hints: ['-AR termina en -a; -ER e -IR terminan en -e.'],
            syllabusRef: 'M2-REG-VERBS',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'granada-7',
        cityId: 'granada',
        levelNumber: 7,
        title: 'Ordenar Indicaciones Callejeras',
        subtitle: 'Sintaxis de orientación y pasos secuenciales',
        tier: 'hard',
        syllabusTopic: 'M2.Sintaxis',
        description: 'Construyes la ruta paso a paso desde Plaza Nueva hasta el Generalife.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-12',
            type: 'word-order',
            prompt: 'Ordena las instrucciones: "Gira a la derecha y camina doscientos metros todo recto"',
            englishPrompt: 'Order instructions: "Turn right and walk two hundred meters straight ahead"',
            audioText: 'Gira a la derecha y camina doscientos metros todo recto',
            sentencePieces: ['recto', 'derecha', 'camina', 'la', 'todo', 'a', 'Gira', 'y', 'doscientos', 'metros'],
            correctAnswer: 'Gira a la derecha y camina doscientos metros todo recto',
            explanation: 'Indicación 1 (Gira a la derecha) + conjunción (y) + indicación 2 de distancia (camina doscientos metros) + dirección (todo recto).',
            hints: ['Comienza por "Gira a la derecha".'],
            syllabusRef: 'M2-DIR',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'granada-8',
        cityId: 'granada',
        levelNumber: 8,
        title: 'Diálogo con el Guía Nazarí Tariq',
        subtitle: 'Orientación histórica en los Palacios Nazaríes',
        tier: 'hard',
        syllabusTopic: 'M2.Comunicacion',
        description: 'Tariq te orienta para acceder al Patio de los Arrayanes.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-13',
            type: 'dialogue',
            prompt: 'En la entrada de los palacios:',
            englishPrompt: 'At the entrance to the palaces:',
            audioText: 'Salam aleikum y bienvenido. ¿Deseas visitar primero la Alcazaba militar o los Palacios Nazaríes?',
            correctAnswer: 'Buenos días. Prefiero visitar primero los Palacios Nazaríes, por favor.',
            explanation: 'Respuesta cortés que responde con claridad a la opción planteada.',
            hints: ['Saluda cortésmente e indica tu preferencia.'],
            syllabusRef: 'M2-DIR',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Tariq',
              npcRole: 'Guía Mayor de la Alhambra',
              prompt: 'Salam aleikum y bienvenido. ¿Deseas visitar primero la Alcazaba militar o los Palacios Nazaríes?',
              englishPrompt: 'Welcome. Do you wish to visit first the military Alcazaba or the Nasrid Palaces?',
              choices: [
                {
                  id: 'c1',
                  text: 'Buenos días. Prefiero visitar primero los Palacios Nazaríes, por favor.',
                  englishHint: 'Good morning. I prefer to visit the Nasrid Palaces first, please.',
                  isCorrect: true,
                  npcResponse: 'Excelente elección. Siga todo recto por esta galería y gire a la izquierda.',
                  explanation: 'Respuesta comunicativa óptima.'
                },
                {
                  id: 'c2',
                  text: 'Mi hermano tiene una mesa verde.',
                  englishHint: 'My brother has a green table.',
                  isCorrect: false,
                  npcResponse: 'Curioso dato... pero debemos elegir qué palacio visitar ahora.',
                  explanation: 'Fuera de contexto.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'granada-9',
        cityId: 'granada',
        levelNumber: 9,
        title: 'En el Laberinto del Generalife',
        subtitle: 'Ubicación precisa en jardines escalonados',
        tier: 'hot',
        syllabusTopic: 'M2.Preposiciones',
        description: 'Rodeado de cipreses, acequias y rosas localizas los miradores.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-14',
            type: 'fill-blank',
            prompt: 'Completa: "El patio de la Acequia está ______ la muralla y los jardines altos (between).',
            englishPrompt: 'Complete: "The Acequia courtyard is between the wall and high gardens."',
            audioText: 'entre',
            options: ['entre', 'sobre', 'hacia', 'sin'],
            correctAnswer: 'entre',
            explanation: '"Entre" es la preposición española equivalente a between/among.',
            hints: ['Preposición de cinco letras: e-n-t-r-e.'],
            syllabusRef: 'M2-PREP',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'granada-10',
        cityId: 'granada',
        levelNumber: 10,
        title: 'Culminación del Módulo 2',
        subtitle: 'Gran síntesis de familia, habitaciones, verbos regulares y direcciones',
        tier: 'hot',
        syllabusTopic: 'M2.Sintesis',
        description: 'La prueba decisiva antes de descifrar el laberinto de la Alhambra.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm2-gra-15',
            type: 'multiple-choice',
            prompt: '¿Cuál de las siguientes afirmaciones sobre la gramática española es FALSA?',
            englishPrompt: 'Which of the following statements about Spanish grammar is FALSE?',
            audioText: 'Los verbos en -IR terminan en -amos en primera persona plural',
            options: [
              'Los verbos en -IR terminan en -amos en primera persona plural (ej. vivamos)',
              'La edad se expresa con el verbo TENER',
              'ESTAR se usa para localizar geográficamente un lugar',
              'Los verbos regulares en -AR terminan en -o en la primera persona singular (yo)'
            ],
            correctAnswer: 'Los verbos en -IR terminan en -amos en primera persona plural (ej. vivamos)',
            explanation: 'Es falsa porque los verbos en -IR terminan en "-imos" en presente de indicativo: nosotros vivimos, escribimos.',
            hints: ['Busca la terminación errónea de los verbos en -IR.'],
            syllabusRef: 'M2-REG-VERBS',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-granada',
      cityId: 'granada',
      title: 'El Laberinto de la Alhambra',
      characterName: 'Arquitecto Historiador Tariq',
      characterRole: 'Conservador Mayor de la Fortaleza Roja',
      scenario: 'Para desvelar la llave del Patio de los Leones y desbloquear el Módulo 3 hacia Córdoba, debes guiar con exactitud matemática a una delegación internacional usando preposiciones de lugar, verbos regulares y direcciones precisas.',
      objectives: [
        { id: 'gra-obj1', description: 'Orientar itinerarios con direcciones sin error alguno', syllabusTopic: 'M2.Direcciones' },
        { id: 'gra-obj2', description: 'Emplear preposiciones compuestas de lugar exactas', syllabusTopic: 'M2.Preposiciones' },
        { id: 'gra-obj3', description: 'Dominar la conjugación combinada de verbos -AR, -ER, -IR', syllabusTopic: 'M2.VerbosRegulares' }
      ],
      requiredScorePercent: 80,
      xpReward: 400,
      coinReward: 500,
      badgeName: 'La Llave Nazarí de Granada',
      badgeIcon: '🗝️',
      questions: [
        {
          id: 'b-gra-1',
          type: 'multiple-choice',
          prompt: 'Tariq: "Para llegar a la Torre de las Infantas desde el Partal, ¿cuál es la instrucción precisa?"',
          englishPrompt: 'Tariq: "To reach the Infantas Tower from the Partal, which is the precise instruction?"',
          audioText: 'Camina todo recto por los jardines y gira a la izquierda detrás de la muralla.',
          options: [
            'Camina todo recto por los jardines y gira a la izquierda detrás de la muralla.',
            'Está todo recto por los jardines y tienes a la izquierda.',
            'Eres todo recto y giras sobre de la muralla.',
            'Haces recto y caminas dentro el jardín.'
          ],
          correctAnswer: 'Camina todo recto por los jardines y gira a la izquierda detrás de la muralla.',
          explanation: 'Combina imperativo/indicativo de movimiento (camina todo recto), giro (gira a la izquierda) y locución preposicional exacta (detrás de la muralla).',
          hints: ['Movimiento recto + giro + detrás de.'],
          syllabusRef: 'M2-DIR',
          difficulty: 'hard'
        },
        {
          id: 'b-gra-2',
          type: 'fill-blank',
          prompt: 'Tariq: "Los artesanos nazaríes ______ poemas en las paredes de yeso (escribir)."',
          englishPrompt: 'Tariq: "Nasrid artisans write poems on the plaster walls (escribir)."',
          audioText: 'escriben',
          options: ['escriben', 'escriban', 'escribieron', 'escribe'],
          correctAnswer: 'escriben',
          explanation: 'Tercera persona plural del verbo escribir en presente: ellos escriben.',
          hints: ['Tercera persona plural termina en -en para verbos en -IR.'],
          syllabusRef: 'M2-REG-VERBS',
          difficulty: 'hard'
        },
        {
          id: 'b-gra-3',
          type: 'word-order',
          prompt: 'Ordena la inscripción del sultán: "La fuente de mármol está en el centro del patio"',
          englishPrompt: 'Order the sultan\'s inscription: "The marble fountain is in the center of the courtyard"',
          audioText: 'La fuente de mármol está en el centro del patio',
          sentencePieces: ['centro', 'está', 'fuente', 'de', 'patio', 'en', 'La', 'el', 'del', 'mármol'],
          correctAnswer: 'La fuente de mármol está en el centro del patio',
          explanation: 'Sujeto (La fuente de mármol) + verbo ESTAR (está) + sintagma locativo (en el centro del patio).',
          hints: ['Empieza por "La fuente de mármol".'],
          syllabusRef: 'M2-PREP',
          difficulty: 'hot'
        }
      ]
    }
  }
];
