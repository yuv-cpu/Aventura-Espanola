import { City } from '../../types';

export const MODULE3_CITIES: City[] = [
  {
    id: 'cordoba',
    number: 7,
    name: 'Córdoba',
    region: 'Andalucía',
    landmark: 'La Mezquita-Catedral & Puente Romano',
    description: 'La legendaria capital del califato omeya. En el bosque de columnas bicolores aprenderás a decir la hora, los meses del año y a formular fechas históricas.',
    moduleIndex: 3,
    moduleName: 'Módulo 3: Expresar la Hora, Las Fechas y Meses del Año',
    coordinates: { x: 41, y: 70 },
    accentColor: '#9333EA',
    levels: [
      {
        id: 'cordoba-1',
        cityId: 'cordoba',
        levelNumber: 1,
        title: '¿Qué Hora Es? en el Campanario',
        subtitle: 'La hora en punto y la diferencia entre la una y las demás horas',
        tier: 'easy',
        syllabusTopic: 'M3.Hora',
        description: 'Miras el reloj de la torre de la Mezquita para consultar la hora.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice en español "It is one o\'clock"?',
            englishPrompt: 'How do you say in Spanish "It is one o\'clock"?',
            audioText: 'Es la una en punto',
            options: ['Es la una en punto', 'Son las una en punto', 'Son la una en punto', 'Es las una en punto'],
            correctAnswer: 'Es la una en punto',
            explanation: 'Para la 1:00 se usa el singular: "Es la una". Para todas las demás horas (2:00 a 12:00) se usa el plural: "Son las dos", "Son las tres", etc.',
            hints: ['La una es singular, por tanto lleva "Es la una".'],
            syllabusRef: 'M3-HORA',
            difficulty: 'easy'
          },
          {
            id: 'm3-cor-2',
            type: 'fill-blank',
            prompt: 'Para las 4:00 decimos: "______ las cuatro en punto."',
            englishPrompt: 'For 4:00 we say: "Son las cuatro en punto."',
            audioText: 'Son',
            options: ['Son', 'Es', 'Está', 'Hay'],
            correctAnswer: 'Son',
            explanation: 'A partir de las dos se utiliza el verbo SER en plural: "Son las cuatro".',
            hints: ['Forma plural del verbo SER.'],
            syllabusRef: 'M3-HORA',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'cordoba-2',
        cityId: 'cordoba',
        levelNumber: 2,
        title: 'Las Fracciones de Hora',
        subtitle: 'Y cuarto, y media, menos cuarto',
        tier: 'easy',
        syllabusTopic: 'M3.Hora',
        description: 'Ajustas tu horario para la visita guiada al mihrab.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-3',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice en español "It is 2:30"?',
            englishPrompt: 'How do you say in Spanish "It is 2:30"?',
            audioText: 'Son las dos y media',
            options: ['Son las dos y media', 'Son las dos y treinta minutos', 'Es las dos y media', 'Son dos con treinta'],
            correctAnswer: 'Son las dos y media',
            explanation: 'La media hora (30 min) se expresa con la fórmula tradicional "y media": Son las dos y media.',
            hints: ['La mitad de la hora es "media".'],
            syllabusRef: 'M3-HORA',
            difficulty: 'easy'
          },
          {
            id: 'm3-cor-4',
            type: 'fill-blank',
            prompt: 'Las 6:45 se expresan como un cuarto para las siete: "Son las siete ______ cuarto."',
            englishPrompt: '6:45 is expressed as a quarter to seven: "Son las siete menos cuarto."',
            audioText: 'menos',
            options: ['menos', 'y', 'para', 'sin'],
            correctAnswer: 'menos',
            explanation: 'En los últimos 30 minutos de la hora se suele restar del siguiente número: "Son las siete menos cuarto" (6:45) o "menos diez" (6:50).',
            hints: ['La palabra para restar: m-e-n-o-s.'],
            syllabusRef: 'M3-HORA',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'cordoba-3',
        cityId: 'cordoba',
        levelNumber: 3,
        title: 'Los Doce Meses del Año',
        subtitle: 'Vocabulario de las estaciones y meses',
        tier: 'medium',
        syllabusTopic: 'M3.Meses',
        description: 'Paseando por los patios cordobeses aprendes el calendario de floración.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-5',
            type: 'multiple-choice',
            prompt: 'El famoso Festival de los Patios de Córdoba se celebra en el quinto mes del año. ¿Qué mes es?',
            englishPrompt: 'The famous Cordoba Courtyard Festival is celebrated in the fifth month. Which month is it?',
            audioText: 'mayo',
            options: ['mayo', 'marzo', 'abril', 'junio'],
            correctAnswer: 'mayo',
            explanation: 'El quinto mes es mayo: enero, febrero, marzo, abril, mayo, junio...',
            hints: ['Mes de las flores y la primavera cordobesa.'],
            syllabusRef: 'M3-FECHAS',
            difficulty: 'medium'
          },
          {
            id: 'm3-cor-6',
            type: 'fill-blank',
            prompt: 'El último mes del año en español es: "______".',
            englishPrompt: 'The last month of the year in Spanish is: "diciembre".',
            audioText: 'diciembre',
            options: ['diciembre', 'noviembre', 'enero', 'octubre'],
            correctAnswer: 'diciembre',
            explanation: 'Diciembre es el duodécimo y último mes del calendario gregoriano.',
            hints: ['Mes de la Navidad.'],
            syllabusRef: 'M3-FECHAS',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'cordoba-4',
        cityId: 'cordoba',
        levelNumber: 4,
        title: 'Expresar Fechas y Cumpleaños',
        subtitle: 'Estructura: el + número + de + mes',
        tier: 'medium',
        syllabusTopic: 'M3.Fechas',
        description: 'Aprendes a decir cuándo naciste y las fiestas nacionales.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-7',
            type: 'multiple-choice',
            prompt: '¿Cómo se expresa correctamente la fecha del 12 de octubre en español?',
            englishPrompt: 'How is the date October 12 correctly stated in Spanish?',
            audioText: 'El doce de octubre',
            options: ['El doce de octubre', 'En octubre doce', 'El doce en octubre', 'Octubre el doce'],
            correctAnswer: 'El doce de octubre',
            explanation: 'La estructura obligatoria en español es: Artículo "El" + día en número cardinal + preposición "de" + mes: "El doce de octubre". (Solo el primer día del mes puede decirse "el primero de...").',
            hints: ['El + número + de + mes.'],
            syllabusRef: 'M3-FECHAS',
            difficulty: 'medium'
          },
          {
            id: 'm3-cor-8',
            type: 'fill-blank',
            prompt: 'Para preguntar el cumpleaños a alguien decimos: "¿Cuándo es tu ______?"',
            englishPrompt: 'To ask someone their birthday: "¿Cuándo es tu cumpleaños?"',
            audioText: 'cumpleaños',
            options: ['cumpleaños', 'reloj', 'fecha', 'hora'],
            correctAnswer: 'cumpleaños',
            explanation: '"El cumpleaños" es la fecha de aniversario de nacimiento.',
            hints: ['Palabra compuesta: cumple + años.'],
            syllabusRef: 'M3-FECHAS',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'cordoba-5',
        cityId: 'cordoba',
        levelNumber: 5,
        title: 'Horarios de Apertura y "A qué hora"',
        subtitle: 'Diferencia entre ¿Qué hora es? y ¿A qué hora abre?',
        tier: 'tough',
        syllabusTopic: 'M3.Hora',
        description: 'Consultas el panel del Museo Arqueológico en la plaza de Jerónimo Páez.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-9',
            type: 'multiple-choice',
            prompt: '¿Cuál es la diferencia entre "¿Qué hora es?" y "¿A qué hora abre el museo?"?',
            englishPrompt: 'What is the difference between "¿Qué hora es?" and "¿A qué hora abre el museo?"?',
            audioText: 'La primera pregunta por la hora actual; la segunda por el momento de un acontecimiento',
            options: [
              'La primera pregunta por la hora actual; la segunda por el momento de un evento',
              'Son exactamente idénticas',
              'La primera es formal y la segunda informal',
              'La primera es para la tarde y la segunda para la mañana'
            ],
            correctAnswer: 'La primera pregunta por la hora actual; la segunda por el momento de un evento',
            explanation: '"¿Qué hora es?" inquiere por la hora actual. "¿A qué hora...?" pregunta por el horario en que ocurre una acción ("A las diez de la mañana").',
            hints: ['La preposición "A" indica hora fijada de un evento.'],
            syllabusRef: 'M3-HORA',
            difficulty: 'tough'
          },
          {
            id: 'm3-cor-10',
            type: 'fill-blank',
            prompt: 'Completa: "El concierto en el Alcázar empieza ______ las nueve de la noche."',
            englishPrompt: 'Complete: "The concert at the Alcázar begins at nine at night."',
            audioText: 'a',
            options: ['a', 'en', 'de', 'por'],
            correctAnswer: 'a',
            explanation: 'Para indicar a qué hora tiene lugar una actividad usamos la preposición "a": "a las nueve", "a la una". Nunca "en las nueve".',
            hints: ['Preposición "a".'],
            syllabusRef: 'M3-HORA',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'cordoba-6',
        cityId: 'cordoba',
        levelNumber: 6,
        title: 'Uso de HAY para Existencia de Lugares',
        subtitle: 'HAY impersonal con sustantivos indeterminados',
        tier: 'tough',
        syllabusTopic: 'M3.HAY',
        description: 'Descubres la existencia de baños árabes y sinagogas históricas con HAY.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-11',
            type: 'multiple-choice',
            prompt: '¿Por qué decimos "En Córdoba HAY muchos monumentos" pero "La Mezquita ESTÁ en el centro"?',
            englishPrompt: 'Why do we say "En Córdoba HAY muchos monumentos" but "La Mezquita ESTÁ en el centro"?',
            audioText: 'HAY para existencia indeterminada; ESTAR para ubicación determinada',
            options: [
              'HAY para existencia indeterminada; ESTAR para ubicación determinada',
              'HAY es solo singular y ESTAR es solo plural',
              'Son intercambiables sin diferencia de sentido',
              'HAY se usa solo para personas y ESTAR para edificios'
            ],
            correctAnswer: 'HAY para existencia indeterminada; ESTAR para ubicación determinada',
            explanation: 'HAY señala existencia de algo indeterminado o cuantitativo (un, una, muchos, tres...). ESTAR ubica un elemento concreto y determinado (con artículo el/la).',
            hints: ['Existencia indeterminada vs ubicación de algo conocido.'],
            syllabusRef: 'M3-HAY',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'cordoba-7',
        cityId: 'cordoba',
        levelNumber: 7,
        title: 'Ordenar Frases Temporales e Históricas',
        subtitle: 'Sintaxis de oraciones cronológicas completas',
        tier: 'hard',
        syllabusTopic: 'M3.Sintaxis',
        description: 'Redactas la ficha de visitas históricas en el Puente Romano.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-12',
            type: 'word-order',
            prompt: 'Ordena la frase: "La visita guiada comienza a las diez y media de la mañana"',
            englishPrompt: 'Order the sentence: "The guided tour begins at ten thirty in the morning"',
            audioText: 'La visita guiada comienza a las diez y media de la mañana',
            sentencePieces: ['a', 'media', 'mañana', 'visita', 'las', 'La', 'guiada', 'comienza', 'diez', 'de', 'y', 'la'],
            correctAnswer: 'La visita guiada comienza a las diez y media de la mañana',
            explanation: 'Sujeto (La visita guiada) + verbo (comienza) + locución de tiempo (a las diez y media) + franja del día (de la mañana).',
            hints: ['Empieza por "La visita guiada comienza".'],
            syllabusRef: 'M3-HORA',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'cordoba-8',
        cityId: 'cordoba',
        levelNumber: 8,
        title: 'Conversación en la Taquilla de la Mezquita',
        subtitle: 'Diálogo interactivo de compra con horarios',
        tier: 'hard',
        syllabusTopic: 'M3.Comunicacion',
        description: 'Compras entradas para la sesión nocturna de luz y sonido.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-13',
            type: 'dialogue',
            prompt: 'En la taquilla del Patio de los Naranjos:',
            englishPrompt: 'At the ticket counter in the Orange Tree Courtyard:',
            audioText: 'Buenas tardes. Tenemos pases a las ocho y a las nueve y cuarto. ¿Cuál prefiere?',
            correctAnswer: 'Buenas tardes. Dos entradas para el pase de las nueve y cuarto, por favor.',
            explanation: 'Respuesta comunicativa precisa que indica cantidad y el horario elegido.',
            hints: ['Pide dos entradas para uno de los dos horarios propuestos.'],
            syllabusRef: 'M3-HORA',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Rafael',
              npcRole: 'Taquillero de la Mezquita de Córdoba',
              prompt: 'Buenas tardes. Tenemos pases a las ocho y a las nueve y cuarto. ¿Cuál prefiere?',
              englishPrompt: 'Good afternoon. We have time slots at eight and at quarter past nine. Which do you prefer?',
              choices: [
                {
                  id: 'c1',
                  text: 'Buenas tardes. Dos entradas para el pase de las nueve y cuarto, por favor.',
                  englishHint: 'Good afternoon. Two tickets for the quarter past nine slot, please.',
                  isCorrect: true,
                  npcResponse: 'Excelente. Aquí tiene sus dos entradas para las nueve y cuarto.',
                  explanation: 'Elección clara y educada.'
                },
                {
                  id: 'c2',
                  text: 'Mi perro tiene cinco meses.',
                  englishHint: 'My dog is five months old.',
                  isCorrect: false,
                  npcResponse: '¡Qué tierno! Pero necesito saber qué horario de visita desea.',
                  explanation: 'No responde a la elección de pases.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'cordoba-9',
        cityId: 'cordoba',
        levelNumber: 9,
        title: 'Cita en la Calle de las Flores',
        subtitle: 'Fijar fecha y hora para un encuentro',
        tier: 'hot',
        syllabusTopic: 'M3.Comunicacion',
        description: 'Quedas con un grupo de estudiantes de guitarra junto al icónico callejón.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-14',
            type: 'fill-blank',
            prompt: 'Para proponer quedar a una hora decimos: "¿______ a las siete en la plaza?" (quedar).',
            englishPrompt: 'To propose meeting at a time: "¿Quedamos a las siete en la plaza?"',
            audioText: 'Quedamos',
            options: ['Quedamos', 'Somos', 'Hacemos', 'Estamos'],
            correctAnswer: 'Quedamos',
            explanation: 'El verbo "quedar" en primera persona plural (¿Quedamos?) es la fórmula conversacional por excelencia para proponer una cita.',
            hints: ['Verbo quedar en primera persona plural.'],
            syllabusRef: 'M3-HORA',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'cordoba-10',
        cityId: 'cordoba',
        levelNumber: 10,
        title: 'Maestría Cronológica Cordobesa',
        subtitle: 'Prueba de velocidad temporal previa al reto del reloj astrológico',
        tier: 'hot',
        syllabusTopic: 'M3.Sintesis',
        description: 'El último examen de horas, fechas y calendario.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cor-15',
            type: 'multiple-choice',
            prompt: 'Si son las 13:15 en formato 24 horas, ¿cómo se dice en la conversación cotidiana española?',
            englishPrompt: 'If it is 13:15 in 24h format, how is it spoken in daily Spanish conversation?',
            audioText: 'Es la una y cuarto de la tarde',
            options: [
              'Es la una y cuarto de la tarde',
              'Son las trece y quince minutos',
              'Son la una y cuarto',
              'Es las una y quince'
            ],
            correctAnswer: 'Es la una y cuarto de la tarde',
            explanation: 'En lenguaje coloquial se usa formato de 12 horas con especificación de la tarde: "Es la una y cuarto de la tarde". Recuerda que la 1 siempre va en singular ("Es la...").',
            hints: ['Formato 12h: es la una y cuarto de la tarde.'],
            syllabusRef: 'M3-HORA',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-cordoba',
      cityId: 'cordoba',
      title: 'El Reloj Astrológico de la Mezquita',
      characterName: 'Maestro Astrónomo Rafael de Córdoba',
      characterRole: 'Guardián del Tiempo Califal y las Efemérides',
      scenario: 'El antiguo reloj astrológico del minarete se ha descalibrado. Para restablecer las campanas y recibir el mapa hacia la Costa del Sol en Málaga, debes sincronizar las horas, los meses y las fechas históricas sin margen de error.',
      objectives: [
        { id: 'cor-obj1', description: 'Expresar horas exactas en singular y plural con fracciones', syllabusTopic: 'M3.Hora' },
        { id: 'cor-obj2', description: 'Formular fechas completas con preposiciones obligatorias', syllabusTopic: 'M3.Fechas' },
        { id: 'cor-obj3', description: 'Distinguir el uso de HAY para servicios frente a ESTAR', syllabusTopic: 'M3.HAY' }
      ],
      requiredScorePercent: 80,
      xpReward: 350,
      coinReward: 500,
      badgeName: 'El Reloj de Sol de Córdoba',
      badgeIcon: '⌛',
      questions: [
        {
          id: 'b-cor-1',
          type: 'multiple-choice',
          prompt: 'Rafael: "Sincronice el toque mayor: son exactamente las 08:45 de la mañana. ¿Cómo debe anunciarlo?"',
          englishPrompt: 'Rafael: "Sync the main chime: it is exactly 8:45 AM. How must it be announced?"',
          audioText: 'Son las nueve menos cuarto de la mañana',
          options: [
            'Son las nueve menos cuarto de la mañana',
            'Es las ocho y cuarenta y cinco',
            'Son las ocho menos cuarto',
            'Es la nueve menos cuarto'
          ],
          correctAnswer: 'Son las nueve menos cuarto de la mañana',
          explanation: '8:45 se expresa en relación a la hora siguiente: "Son las nueve menos cuarto de la mañana".',
          hints: ['Nueve menos cuarto.'],
          syllabusRef: 'M3-HORA',
          difficulty: 'hard'
        },
        {
          id: 'b-cor-2',
          type: 'fill-blank',
          prompt: 'Rafael: "El primer califa de Córdoba proclamó el califato el dieciséis ______ enero del año 929."',
          englishPrompt: 'Rafael: "The first caliph proclaimed the caliphate on the sixteenth of January in 929."',
          audioText: 'de',
          options: ['de', 'en', 'a', 'por'],
          correctAnswer: 'de',
          explanation: 'En las fechas en español es obligatoria la preposición "de" entre el día y el mes: el 16 de enero.',
          hints: ['Preposición "de".'],
          syllabusRef: 'M3-FECHAS',
          difficulty: 'hard'
        },
        {
          id: 'b-cor-3',
          type: 'word-order',
          prompt: 'Ordena la inscripción del reloj: "El tiempo pasa pero el arte permanece para siempre"',
          englishPrompt: 'Order the clock inscription: "Time passes but art remains forever"',
          audioText: 'El tiempo pasa pero el arte permanece para siempre',
          sentencePieces: ['para', 'permanece', 'El', 'pasa', 'arte', 'tiempo', 'pero', 'el', 'siempre'],
          correctAnswer: 'El tiempo pasa pero el arte permanece para siempre',
          explanation: 'Oración compuesta: Proposición 1 (El tiempo pasa) + conjunción adversativa (pero) + Proposición 2 (el arte permanece para siempre).',
          hints: ['Comienza por "El tiempo pasa".'],
          syllabusRef: 'M3-Sintaxis',
          difficulty: 'hot'
        }
      ]
    }
  },
  {
    id: 'malaga',
    number: 8,
    name: 'Málaga',
    region: 'Andalucía',
    landmark: 'Playa de la Malagueta & Castillo de Gibralfaro',
    description: 'La capital de la Costa del Sol, bañada por el mar Mediterráneo. Aquí dominarás las expresiones del clima, el uso meteorológico del verbo HACER y fenómenos atmosféricos.',
    moduleIndex: 3,
    moduleName: 'Módulo 3: El Tiempo Atmosférico y el Verbo HACER',
    coordinates: { x: 44, y: 82 },
    accentColor: '#0EA5E9',
    levels: [
      {
        id: 'malaga-1',
        cityId: 'malaga',
        levelNumber: 1,
        title: 'El Tiempo en la Malagueta',
        subtitle: 'Expresiones con HACER: hace sol, hace calor, hace buen tiempo',
        tier: 'easy',
        syllabusTopic: 'M3.Clima',
        description: 'Bajo el radiante cielo costero aprendes a describir las condiciones del día.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-1',
            type: 'multiple-choice',
            prompt: '¿Cómo decimos en español "It is sunny and hot today"?',
            englishPrompt: 'How do we say in Spanish "It is sunny and hot today"?',
            audioText: 'Hoy hace sol y hace calor',
            options: ['Hoy hace sol y hace calor', 'Hoy está sol y está calor', 'Hoy es sol y es caliente', 'Hoy tiene sol y tiene calor'],
            correctAnswer: 'Hoy hace sol y hace calor',
            explanation: 'En español los fenómenos atmosféricos de temperatura y sol se construyen obligatoriamente con el verbo HACER impersonal: "Hace sol", "Hace calor", "Hace frío", "Hace viento".',
            hints: ['En español el clima "hace", no "está".'],
            syllabusRef: 'M3-HACER',
            difficulty: 'easy'
          },
          {
            id: 'm3-mal-2',
            type: 'fill-blank',
            prompt: 'Para decir que el clima es agradable decimos: "Hoy hace ______ tiempo."',
            englishPrompt: 'To say the weather is pleasant we say: "Hoy hace buen tiempo."',
            audioText: 'buen',
            options: ['buen', 'bien', 'bueno', 'bonito'],
            correctAnswer: 'buen',
            explanation: '"Buen tiempo" (bueno se apocopa a "buen" antes de un sustantivo masculino singular como tiempo).',
            hints: ['Forma apocopada de bueno: b-u-e-n.'],
            syllabusRef: 'M3-HACER',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'malaga-2',
        cityId: 'malaga',
        levelNumber: 2,
        title: 'Fenómenos: Llueve, Nieva y Nublado',
        subtitle: 'Verbos meteorológicos impersonales y ESTAR',
        tier: 'easy',
        syllabusTopic: 'M3.Clima',
        description: 'Divisas las nubes sobre Sierra Nevada desde el puerto de Málaga.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-3',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice "It is raining" en español?',
            englishPrompt: 'How do you say "It is raining" in Spanish?',
            audioText: 'Llueve o está lloviendo',
            options: ['Llueve', 'Hace lluvia', 'Es lloviendo', 'Tiene lluvia'],
            correctAnswer: 'Llueve',
            explanation: 'Llover es un verbo impersonal con cambio vocálico o -> ue: "Llueve" (o en perífrasis "está lloviendo"). No se dice "hace lluvia".',
            hints: ['Forma del verbo llover en presente.'],
            syllabusRef: 'M3-CLIMA',
            difficulty: 'easy'
          },
          {
            id: 'm3-mal-4',
            type: 'fill-blank',
            prompt: 'Cuando el cielo está cubierto de nubes decimos: "El cielo ______ nublado."',
            englishPrompt: 'When the sky is covered with clouds we say: "El cielo está nublado."',
            audioText: 'está',
            options: ['está', 'hace', 'es', 'tiene'],
            correctAnswer: 'está',
            explanation: 'Estar nublado / despejado se construye con ESTAR porque describe el estado transitorio del cielo.',
            hints: ['Estado temporal del cielo = verbo ESTAR.'],
            syllabusRef: 'M3-CLIMA',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'malaga-3',
        cityId: 'malaga',
        levelNumber: 3,
        title: 'El Verbo HACER en Presente',
        subtitle: 'Conjugación completa de HACER: hago, haces, hace, hacemos, hacéis, hacen',
        tier: 'medium',
        syllabusTopic: 'M3.VerboHACER',
        description: 'En el Palmeral de las Sorpresas repasas la conjugación personal de HACER.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-5',
            type: 'multiple-choice',
            prompt: '¿Cuál es la primera persona singular (yo) del verbo HACER?',
            englishPrompt: 'What is the first person singular (yo) of the verb HACER?',
            audioText: 'yo hago',
            options: ['hago', 'haco', 'haces', 'haze'],
            correctAnswer: 'hago',
            explanation: 'HACER tiene una primera persona singular irregular en -go: Yo hago.',
            hints: ['Termina en -go.'],
            syllabusRef: 'M3-HACER',
            difficulty: 'medium'
          },
          {
            id: 'm3-mal-6',
            type: 'fill-blank',
            prompt: 'Completa: "¿Qué ______ vosotros los fines de semana en Málaga?"',
            englishPrompt: 'Complete: "What do you all do on weekends in Malaga?"',
            audioText: 'hacéis',
            options: ['hacéis', 'hacemos', 'hacen', 'hago'],
            correctAnswer: 'hacéis',
            explanation: 'La forma de vosotros para HACER es "hacéis" con tilde en la e.',
            hints: ['Forma de vosotros del verbo hacer.'],
            syllabusRef: 'M3-HACER',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'malaga-4',
        cityId: 'malaga',
        levelNumber: 4,
        title: 'Las Cuatro Estaciones del Año',
        subtitle: 'Primavera, verano, otoño, invierno y temperaturas',
        tier: 'medium',
        syllabusTopic: 'M3.Clima',
        description: 'Comparas las estaciones del año y sus temperaturas medias.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-7',
            type: 'multiple-choice',
            prompt: '¿En qué estación del año hace más calor y la gente va a la playa?',
            englishPrompt: 'In which season of the year is it hottest and people go to the beach?',
            audioText: 'En verano',
            options: ['En verano', 'En invierno', 'En otoño', 'En primavera'],
            correctAnswer: 'En verano',
            explanation: 'El verano es la estación más calurosa (junio, julio, agosto). El invierno es la más fría.',
            hints: ['Estación de las vacaciones estivales.'],
            syllabusRef: 'M3-CLIMA',
            difficulty: 'medium'
          },
          {
            id: 'm3-mal-8',
            type: 'fill-blank',
            prompt: 'En Sierra Nevada durante el invierno ______ (snows) con frecuencia.',
            englishPrompt: 'In Sierra Nevada during the winter it snows frequently.',
            audioText: 'nieva',
            options: ['nieva', 'llueve', 'hace sol', 'está caliente'],
            correctAnswer: 'nieva',
            explanation: 'Nevar es verbo impersonal con diptongo e -> ie: "nieva".',
            hints: ['Del verbo nevar: n-i-e-v-a.'],
            syllabusRef: 'M3-CLIMA',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'malaga-5',
        cityId: 'malaga',
        levelNumber: 5,
        title: 'El Viento de Levante en el Puerto',
        subtitle: 'Expresiones: hace mucho viento, hay niebla',
        tier: 'tough',
        syllabusTopic: 'M3.Clima',
        description: 'Los pescadores amarran las barcas por el fuerte viento de Levante.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-9',
            type: 'multiple-choice',
            prompt: 'Para advertir que sopla mucho viento en el muelle decimos:',
            englishPrompt: 'To warn that a lot of wind is blowing on the pier we say:',
            audioText: 'Hoy hace mucho viento en el puerto',
            options: [
              'Hoy hace mucho viento en el puerto',
              'Hoy es mucho viento en el puerto',
              'Hoy está muy viento en el puerto',
              'Hoy tiene mucho viento en el puerto'
            ],
            correctAnswer: 'Hoy hace mucho viento en el puerto',
            explanation: 'Se utiliza "HACER + mucho + sustantivo": "Hace mucho viento", "Hace mucho frío", "Hace mucho calor". Nunca "muy viento".',
            hints: ['Hacer + mucho + viento.'],
            syllabusRef: 'M3-MUY-MUCHO',
            difficulty: 'tough'
          },
          {
            id: 'm3-mal-10',
            type: 'fill-blank',
            prompt: 'Para indicar presencia de niebla que dificulta la visibilidad: "En el mar ______ mucha niebla."',
            englishPrompt: 'To indicate fog hindering visibility: "In the sea there is a lot of fog."',
            audioText: 'hay',
            options: ['hay', 'hace', 'es', 'está'],
            correctAnswer: 'hay',
            explanation: 'Para la niebla, tormentas o nubes se emplea comúnmente el verbo impersonal "HAY": "Hay niebla", "Hay tormenta".',
            hints: ['Forma impersonal del verbo haber: h-a-y.'],
            syllabusRef: 'M3-HAY',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'malaga-6',
        cityId: 'malaga',
        levelNumber: 6,
        title: 'Previsión Meteorológica en el Faro',
        subtitle: 'Comprensión de boletines y pronósticos del tiempo',
        tier: 'tough',
        syllabusTopic: 'M3.Clima',
        description: 'Escuchas la radio marina junto a La Farola de Málaga.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-11',
            type: 'multiple-choice',
            prompt: 'El locutor dice: "Mañana bajan las temperaturas y estará nublado con posibilidad de chubascos". ¿Qué debes llevar?',
            englishPrompt: 'The announcer says: "Tomorrow temperatures drop and it will be cloudy with possible showers". What should you bring?',
            audioText: 'Un paraguas y una chaqueta',
            options: ['Un paraguas y una chaqueta', 'Bañador y crema solar', 'Gafas de sol y chanclas', 'Un sombrero de paja'],
            correctAnswer: 'Un paraguas y una chaqueta',
            explanation: 'Si bajan las temperaturas hace más frío (chaqueta) y si hay chubascos llueve (paraguas).',
            hints: ['Comprensión lógica de lluvia y frío.'],
            syllabusRef: 'M3-CLIMA',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'malaga-7',
        cityId: 'malaga',
        levelNumber: 7,
        title: 'Construir Pronósticos del Tiempo',
        subtitle: 'Sintaxis combinando tiempo, lugar y grados centígrados',
        tier: 'hard',
        syllabusTopic: 'M3.Sintaxis',
        description: 'Escribes el informe del tiempo para los visitantes del castillo de Gibralfaro.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-12',
            type: 'word-order',
            prompt: 'Ordena la frase: "En la costa mediterránea hace sol y veinticinco grados"',
            englishPrompt: 'Order the sentence: "On the Mediterranean coast it is sunny and 25 degrees"',
            audioText: 'En la costa mediterránea hace sol y veinticinco grados',
            sentencePieces: ['mediterránea', 'sol', 'la', 'veinticinco', 'hace', 'grados', 'costa', 'En', 'y'],
            correctAnswer: 'En la costa mediterránea hace sol y veinticinco grados',
            explanation: 'Locución de lugar (En la costa mediterránea) + verbo meteorológico HACER (hace sol) + conjunción y temperatura (y veinticinco grados).',
            hints: ['Comienza por "En la costa mediterránea".'],
            syllabusRef: 'M3-HACER',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'malaga-8',
        cityId: 'malaga',
        levelNumber: 8,
        title: 'Diálogo con el Marinero Manuel',
        subtitle: 'Conversación informal sobre el estado de la mar y el viento',
        tier: 'hard',
        syllabusTopic: 'M3.Comunicacion',
        description: 'Manuel prepara sus redes y te cuenta el parte marítimo.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-13',
            type: 'dialogue',
            prompt: 'Charla en el puerto pesquero:',
            englishPrompt: 'Chat at the fishing port:',
            audioText: '¡Buenos días! Parece que hoy el viento amaina. ¿Vas a subir al mirador de Gibralfaro?',
            correctAnswer: 'Buenos días, Manuel. Sí, hoy hace un día estupendo y hace sol.',
            explanation: 'Respuesta comunicativa óptima utilizando expresiones idiomáticas de clima con HACER.',
            hints: ['Saluda e indica que hace un día estupendo de sol.'],
            syllabusRef: 'M3-HACER',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Manuel',
              npcRole: 'Patrón de Barco Malagueño',
              prompt: '¡Buenos días! Parece que hoy el viento amaina. ¿Vas a subir al mirador de Gibralfaro?',
              englishPrompt: 'Good morning! Seems like wind is calming today. Are you going up to Gibralfaro viewpoint?',
              choices: [
                {
                  id: 'c1',
                  text: 'Buenos días, Manuel. Sí, hoy hace un día estupendo y hace sol.',
                  englishHint: 'Good morning, Manuel. Yes, today is a great day and it is sunny.',
                  isCorrect: true,
                  npcResponse: '¡Maravilloso! Desde arriba verás toda la bahía y hasta la costa africana.',
                  explanation: 'Excelente uso del verbo HACER para clima agradable.'
                },
                {
                  id: 'c2',
                  text: 'Mi primo tiene veintidós años y vive en Londres.',
                  englishHint: 'My cousin is 22 years old and lives in London.',
                  isCorrect: false,
                  npcResponse: 'Me parece estupendo, pero te preguntaba por tu excursión de hoy.',
                  explanation: 'Fuera de contexto.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'malaga-9',
        cityId: 'malaga',
        levelNumber: 9,
        title: 'Paseo por Gibralfaro con Brisa',
        subtitle: 'Distinguir sensaciones térmicas con TENER (tener calor/frío)',
        tier: 'hot',
        syllabusTopic: 'M3.TenerSensaciones',
        description: 'Tras subir la empinada cuesta sientes la temperatura del mediodía.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-14',
            type: 'multiple-choice',
            prompt: 'Para decir "I am cold / I am hot" refiriéndose a una persona en español decimos:',
            englishPrompt: 'To say "I am cold / I am hot" referring to a person in Spanish we say:',
            audioText: 'Tengo frío / Tengo calor',
            options: ['Tengo frío / Tengo calor', 'Soy frío / Soy caliente', 'Estoy frío / Estoy calor', 'Hago frío / Hago calor'],
            correctAnswer: 'Tengo frío / Tengo calor',
            explanation: 'Las sensaciones térmicas personales se expresan con TENER: "Tengo frío", "Tengo calor". El clima ambiental se expresa con HACER: "Hace frío", "Hace calor". ¡Nunca "Soy caliente"!',
            hints: ['Una persona TIENE frío o calor; el ambiente HACE frío o calor.'],
            syllabusRef: 'M3-CLIMA',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'malaga-10',
        cityId: 'malaga',
        levelNumber: 10,
        title: 'Reto Climatológico Mediterráneo',
        subtitle: 'Integración de verbos meteorológicos y sensaciones térmicas',
        tier: 'hot',
        syllabusTopic: 'M3.Sintesis',
        description: 'Evaluación rápida previa al examen del capitán del puerto.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm3-mal-15',
            type: 'fill-blank',
            prompt: 'Completa: "En la playa ______ mucho calor y los bañistas ______ sed."',
            englishPrompt: 'Complete: "On the beach it is very hot and swimmers are thirsty."',
            audioText: 'hace / tienen',
            options: ['hace / tienen', 'está / son', 'es / están', 'tiene / hacen'],
            correctAnswer: 'hace / tienen',
            explanation: 'El clima atmosférico lleva HACER (hace mucho calor) y la sensación fisiológica de sed lleva TENER (tienen sed).',
            hints: ['Hacer para el clima y TENER para la sed.'],
            syllabusRef: 'M3-HACER',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-malaga',
      cityId: 'malaga',
      title: 'El Capitán del Puerto de Málaga',
      characterName: 'Capitán Manuel del Mar',
      characterRole: 'Jefe de Capitanía Marítima y Meteorología Costera',
      scenario: 'Una regata de veleros históricos zarpará hacia la bahía de Cádiz. Para que el Capitán Manuel autorice tu salida por mar, debes descifrar sin equivocarte el mapa isobárico, la temperatura, el viento y las expresiones del clima.',
      objectives: [
        { id: 'mal-obj1', description: 'Dominar la distinción entre HACER (clima) y TENER (sensaciones corporales)', syllabusTopic: 'M3.Clima' },
        { id: 'mal-obj2', description: 'Reconocer verbos de precipitación y estados del cielo con ESTAR', syllabusTopic: 'M3.VerboHACER' },
        { id: 'mal-obj3', description: 'Formular boletines de navegación precisos', syllabusTopic: 'M3.Comunicacion' }
      ],
      requiredScorePercent: 80,
      xpReward: 350,
      coinReward: 500,
      badgeName: 'La Rosa de los Vientos de Málaga',
      badgeIcon: '🧭',
      questions: [
        {
          id: 'b-mal-1',
          type: 'multiple-choice',
          prompt: 'Capitán Manuel: "Describa las condiciones para la tripulación: el cielo no tiene nubes y el aire está caliente. ¿Cuál es la formulación náutica idónea?"',
          englishPrompt: 'Capitán Manuel: "Describe conditions: cloudless sky and hot air. Which is the correct nautical phrasing?"',
          audioText: 'El cielo está despejado y hace mucho calor en la bahía.',
          options: [
            'El cielo está despejado y hace mucho calor en la bahía.',
            'El cielo es despejado y está mucho calor en la bahía.',
            'El cielo tiene despejado y es mucho calor en la bahía.',
            'El cielo hace despejado y tiene mucho calor en la bahía.'
          ],
          correctAnswer: 'El cielo está despejado y hace mucho calor en la bahía.',
          explanation: 'ESTAR despejado (estado del cielo) + HACER mucho calor (clima ambiental).',
          hints: ['ESTAR para despejado y HACER para calor.'],
          syllabusRef: 'M3-CLIMA',
          difficulty: 'hard'
        },
        {
          id: 'b-mal-2',
          type: 'fill-blank',
          prompt: 'Capitán Manuel: "Los marineros ______ frío por la noche y por eso se abrigan bien (tener)."',
          englishPrompt: 'Capitán Manuel: "Sailors are cold at night and therefore bundle up well (tener)."',
          audioText: 'tienen',
          options: ['tienen', 'hacen', 'son', 'están'],
          correctAnswer: 'tienen',
          explanation: 'Sensación fisiológica personal = verbo TENER (ellos tienen frío).',
          hints: ['Tercera persona plural de TENER.'],
          syllabusRef: 'M3-CLIMA',
          difficulty: 'hard'
        },
        {
          id: 'b-mal-3',
          type: 'word-order',
          prompt: 'Ordena el parte de salida: "Zarpamos con viento favorable hacia el estrecho de Gibraltar"',
          englishPrompt: 'Order departure log: "We set sail with favorable wind towards the Strait of Gibraltar"',
          audioText: 'Zarpamos con viento favorable hacia el estrecho de Gibraltar',
          sentencePieces: ['favorable', 'Zarpamos', 'Gibraltar', 'hacia', 'el', 'viento', 'de', 'con', 'estrecho'],
          correctAnswer: 'Zarpamos con viento favorable hacia el estrecho de Gibraltar',
          explanation: 'Verbo de navegación (Zarpamos) + complemento instrumental (con viento favorable) + complemento de destino (hacia el estrecho de Gibraltar).',
          hints: ['Comienza por "Zarpamos con viento favorable".'],
          syllabusRef: 'M3-Sintaxis',
          difficulty: 'hot'
        }
      ]
    }
  },
  {
    id: 'cadiz',
    number: 9,
    name: 'Cádiz',
    region: 'Andalucía',
    landmark: 'Playa de La Caleta & Torre Tavira',
    description: 'La ciudad trimilenaria conocida como "La Tacita de Plata". Aquí culminarás el Módulo 3 dominando el verbo GUSTAR, los adjetivos posesivos, el uso de HAY y la diferencia vital entre MUY y MUCHO.',
    moduleIndex: 3,
    moduleName: 'Módulo 3: Gustos (GUSTAR), Posesivos, HAY y MUY vs MUCHO',
    coordinates: { x: 32, y: 80 },
    accentColor: '#D97706',
    levels: [
      {
        id: 'cadiz-1',
        cityId: 'cadiz',
        levelNumber: 1,
        title: 'Me Gusta y Me Encanta en La Caleta',
        subtitle: 'El funcionamiento singular y plural del verbo GUSTAR',
        tier: 'easy',
        syllabusTopic: 'M3.Gustos',
        description: 'Frente al castillo de San Sebastián expresas tus preferencias y pasiones.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-1',
            type: 'multiple-choice',
            prompt: '¿Por qué decimos "Me GUSTA la música" pero "Me GUSTAN las canciones"?',
            englishPrompt: 'Why do we say "Me GUSTA la música" but "Me GUSTAN las canciones"?',
            audioText: 'Porque el verbo concuerda con lo que nos gusta (el sujeto gramatical)',
            options: [
              'Porque el verbo concuerda con lo que nos gusta (el sujeto pospuesto)',
              'Porque "música" es femenina y "canciones" es masculino',
              'Porque depende de la edad de la persona que habla',
              'Es una variación opcional sin regla fija'
            ],
            correctAnswer: 'Porque el verbo concuerda con lo que nos gusta (el sujeto pospuesto)',
            explanation: 'En español el verbo GUSTAR funciona como "to please": lo que gusta es el sujeto gramatical. Singular: me gusta la música; Plural: me gustan las canciones.',
            hints: ['El sujeto es la cosa que produce el gusto.'],
            syllabusRef: 'M3-GUSTOS',
            difficulty: 'easy'
          },
          {
            id: 'm3-cad-2',
            type: 'fill-blank',
            prompt: 'Para expresar un entusiasmo aún mayor que gustar usamos encantar: "Me ______ el mar gaditano."',
            englishPrompt: 'To express even greater enthusiasm we use encantar: "Me encanta el mar gaditano."',
            audioText: 'encanta',
            options: ['encanta', 'encantan', 'encanto', 'encante'],
            correctAnswer: 'encanta',
            explanation: '"El mar gaditano" es singular, por tanto se usa "me encanta". Si fueran "las playas" diríamos "me encantan".',
            hints: ['Singular concordante con "el mar".'],
            syllabusRef: 'M3-GUSTOS',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'cadiz-2',
        cityId: 'cadiz',
        levelNumber: 2,
        title: 'Adjetivos Posesivos Átonos',
        subtitle: 'Mi, tu, su, nuestro, vuestro, su',
        tier: 'easy',
        syllabusTopic: 'M3.Posesivos',
        description: 'Describes tus pertenencias y las de tus compañeros de viaje.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-3',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice en español "Our friends" concordando en género y número?',
            englishPrompt: 'How do you say in Spanish "Our friends" agreeing in gender and number?',
            audioText: 'Nuestros amigos',
            options: ['Nuestros amigos', 'Nuestro amigos', 'Nuestras amigos', 'Mis amigos'],
            correctAnswer: 'Nuestros amigos',
            explanation: '"Nuestro" cambia en género y número: nuestro amigo, nuestra amiga, nuestros amigos, nuestras amigas.',
            hints: ['Masculino plural: termina en -os.'],
            syllabusRef: 'M3-POSESIVOS',
            difficulty: 'easy'
          },
          {
            id: 'm3-cad-4',
            type: 'fill-blank',
            prompt: 'Para referirnos al libro que te pertenece a ti (informal singular): "______ libro".',
            englishPrompt: 'To refer to the book belonging to you (informal): "tu libro".',
            audioText: 'tu',
            options: ['tu', 'tú', 'te', 'ti'],
            correctAnswer: 'tu',
            explanation: '"Tu" (sin tilde) es el adjetivo posesivo: "tu libro". "Tú" (con tilde diacrítica) es el pronombre personal de sujeto: "Tú lees".',
            hints: ['Sin tilde diacrítica: t-u.'],
            syllabusRef: 'M3-POSESIVOS',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'cadiz-3',
        cityId: 'cadiz',
        levelNumber: 3,
        title: 'Pronombres con GUSTAR',
        subtitle: 'Me, te, le, nos, os, les gusta/n',
        tier: 'medium',
        syllabusTopic: 'M3.Gustos',
        description: 'Preguntas a los integrantes de una comparsa gaditana qué aficiones tienen.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-5',
            type: 'multiple-choice',
            prompt: '¿Cómo le preguntas a un amigo qué cosas le gustan en su tiempo libre?',
            englishPrompt: 'How do you ask a friend what things they like in their free time?',
            audioText: '¿Qué te gusta hacer?',
            options: ['¿Qué te gusta hacer?', '¿Qué tú gustas hacer?', '¿Qué me gusta hacer?', '¿Cómo te gustas?'],
            correctAnswer: '¿Qué te gusta hacer?',
            explanation: 'Para la segunda persona informal (tú) se usa el pronombre de objeto indirecto "te": "¿Qué te gusta...?"',
            hints: ['Pronombre "te" para segunda persona.'],
            syllabusRef: 'M3-GUSTOS',
            difficulty: 'medium'
          },
          {
            id: 'm3-cad-6',
            type: 'fill-blank',
            prompt: 'A nosotros nos encanta el Carnaval de Cádiz: "A nosotros ______ gustan las chirigotas."',
            englishPrompt: 'We love Cadiz Carnival: "A nosotros nos gustan las chirigotas."',
            audioText: 'nos',
            options: ['nos', 'os', 'les', 'me'],
            correctAnswer: 'nos',
            explanation: 'Para la primera persona del plural (nosotros) corresponde el pronombre "nos": A nosotros nos gustan...',
            hints: ['Pronombre de objeto para nosotros: n-o-s.'],
            syllabusRef: 'M3-GUSTOS',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'cadiz-4',
        cityId: 'cadiz',
        levelNumber: 4,
        title: 'Posesivos Plurales y de Cortesía',
        subtitle: 'Su/sus para usted, él, ella y ustedes',
        tier: 'medium',
        syllabusTopic: 'M3.Posesivos',
        description: 'Manejas los posesivos de cortesía en el Gran Teatro Falla.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-7',
            type: 'multiple-choice',
            prompt: 'Si hablamos con respeto a una señora (usted), ¿cómo decimos "Your tickets, madam"?',
            englishPrompt: 'If addressing a lady with respect (usted), how do we say "Your tickets, madam"?',
            audioText: 'Sus entradas, señora',
            options: ['Sus entradas, señora', 'Tus entradas, señora', 'Vuestras entradas, señora', 'Mis entradas, señora'],
            correctAnswer: 'Sus entradas, señora',
            explanation: 'Para el tratamiento formal de "usted" y "ustedes", el adjetivo posesivo es "su" (singular) o "sus" (plural): sus entradas.',
            hints: ['Posesivo formal de tercera persona.'],
            syllabusRef: 'M3-POSESIVOS',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'cadiz-5',
        cityId: 'cadiz',
        levelNumber: 5,
        title: 'La Diferencia Vital: MUY vs MUCHO',
        subtitle: 'Muy + adjetivo/adverbio vs Mucho/a/os/as + sustantivo o verbo + mucho',
        tier: 'tough',
        syllabusTopic: 'M3.MuyVsMucho',
        description: 'La regla imprescindible para sonar natural y evitar el error más frecuente de los principiantes.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-8',
            type: 'multiple-choice',
            prompt: '¿Por qué decimos "Cádiz es MUY bonita" pero "En Cádiz hay MUCHAS flores"?',
            englishPrompt: 'Why do we say "Cádiz es MUY bonita" but "En Cádiz hay MUCHAS flores"?',
            audioText: 'MUY intensifica adjetivos (invariable); MUCHO cuantifica sustantivos (concordante)',
            options: [
              'MUY intensifica adjetivos (invariable); MUCHO cuantifica sustantivos (concordante)',
              'MUY es para el sur de España y MUCHO para el norte',
              'Son sinónimos intercambiables',
              'MUCHO solo se usa en preguntas y MUY en respuestas'
            ],
            correctAnswer: 'MUY intensifica adjetivos (invariable); MUCHO cuantifica sustantivos (concordante)',
            explanation: 'MUY es adverbio invariable y acompaña a adjetivos y adverbios (muy alta, muy bien). MUCHO es adjetivo cuantitativo y concuerda con el sustantivo (mucho dinero, muchas flores) o adverbio tras verbo (trabajo mucho).',
            hints: ['MUY + adjetivo; MUCHO + sustantivo.'],
            syllabusRef: 'M3-MUY-MUCHO',
            difficulty: 'tough'
          },
          {
            id: 'm3-cad-9',
            type: 'fill-blank',
            prompt: 'Completa: "Los gaditanos cantan ______ bien y tienen ______ alegría."',
            englishPrompt: 'Complete: "Gaditanos sing very well and have lots of joy."',
            audioText: 'muy / mucha',
            options: ['muy / mucha', 'mucho / muy', 'muy / muy', 'mucha / mucha'],
            correctAnswer: 'muy / mucha',
            explanation: '"Bien" es adverbio -> "muy bien". "Alegría" es sustantivo femenino -> "mucha alegría".',
            hints: ['Primero MUY ante adverbio, luego MUCHA ante sustantivo femenino.'],
            syllabusRef: 'M3-MUY-MUCHO',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'cadiz-6',
        cityId: 'cadiz',
        levelNumber: 6,
        title: 'HAY vs ESTAR en la Bahía de Cádiz',
        subtitle: 'Existencia vs Localización geográfica precisa',
        tier: 'tough',
        syllabusTopic: 'M3.HAY',
        description: 'Desde la Torre Tavira mediante la cámara oscura observas toda la bahía.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-10',
            type: 'multiple-choice',
            prompt: 'Identifica la frase con el uso correcto de HAY y ESTAR:',
            englishPrompt: 'Identify the sentence with correct use of HAY and ESTAR:',
            audioText: 'En el puerto hay tres barcos y la catedral está a la izquierda.',
            options: [
              'En el puerto hay tres barcos y la catedral está a la izquierda.',
              'En el puerto están tres barcos y la catedral hay a la izquierda.',
              'En el puerto son tres barcos y la catedral es a la izquierda.',
              'En el puerto tiene tres barcos y la catedral está a la izquierda.'
            ],
            correctAnswer: 'En el puerto hay tres barcos y la catedral está a la izquierda.',
            explanation: 'HAY con número cardinal indeterminado (hay tres barcos) y ESTAR con elemento determinado y dirección (la catedral está a la izquierda).',
            hints: ['Hay + cantidad; estar + lugar determinado.'],
            syllabusRef: 'M3-HAY',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'cadiz-7',
        cityId: 'cadiz',
        levelNumber: 7,
        title: 'Expresar Gustos y Desacuerdos',
        subtitle: 'A mí también, a mí tampoco, a mí sí, a mí no',
        tier: 'hard',
        syllabusTopic: 'M3.Gustos',
        description: 'Compartes gustos musicales y gastronómicos con la juventud gaditana.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-11',
            type: 'multiple-choice',
            prompt: 'Si alguien te dice "No me gusta el frío" y tú estás de acuerdo con esa negación, respondes:',
            englishPrompt: 'If someone tells you "I don\'t like the cold" and you agree with that negative statement, you reply:',
            audioText: 'A mí tampoco',
            options: ['A mí tampoco', 'A mí también', 'A mí sí', 'Yo también'],
            correctAnswer: 'A mí tampoco',
            explanation: 'Para coincidir con una frase negativa ("No me gusta...") se utiliza "A mí tampoco". ("A mí también" solo se usa para coincidir con afirmaciones).',
            hints: ['Coincidir con una frase negativa = tampoco.'],
            syllabusRef: 'M3-GUSTOS',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'cadiz-8',
        cityId: 'cadiz',
        levelNumber: 8,
        title: 'Diálogo con la Chirigota de Lola',
        subtitle: 'Conversación sobre disfraces, coplas y aficiones populares',
        tier: 'hard',
        syllabusTopic: 'M3.Comunicacion',
        description: 'Lola ensaya una letrilla y te pregunta qué tipo de música te apasiona.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-12',
            type: 'dialogue',
            prompt: 'En el local de ensayo de la chirigota:',
            englishPrompt: 'At the chirigota rehearsal hall:',
            audioText: '¡Oye pisha! ¿A ti te gusta cantar o prefieres tocar la guitarra española?',
            correctAnswer: 'Me encanta escuchar las chirigotas y me gusta mucho la guitarra española.',
            explanation: 'Respuesta comunicativa y natural que combina el verbo encantar y gustar con cuantificador.',
            hints: ['Indica tus gustos musicales con encantar y gustar.'],
            syllabusRef: 'M3-GUSTOS',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Lola la del Falla',
              npcRole: 'Directora de Chirigota de Cádiz',
              prompt: '¡Oye pisha! ¿A ti te gusta cantar o prefieres tocar la guitarra española?',
              englishPrompt: 'Hey friend! Do you like to sing or do you prefer playing Spanish guitar?',
              choices: [
                {
                  id: 'c1',
                  text: 'Me encanta escuchar las chirigotas y me gusta mucho la guitarra española.',
                  englishHint: 'I love listening to chirigotas and I like Spanish guitar very much.',
                  isCorrect: true,
                  npcResponse: '¡Ole tu arte! Con esa afición te vienes con nosotros en la carroza.',
                  explanation: 'Respuesta llena de compás comunicativo y gramática impecable.'
                },
                {
                  id: 'c2',
                  text: 'Son las cuatro menos diez de la tarde.',
                  englishHint: 'It is ten to four in the afternoon.',
                  isCorrect: false,
                  npcResponse: '¡Pues no queda tiempo ni ná! Pero te preguntaba por tus gustos.',
                  explanation: 'Fuera de contexto.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'cadiz-9',
        cityId: 'cadiz',
        levelNumber: 9,
        title: 'Debate de Aficiones en el Malecón',
        subtitle: 'Sintaxis de oraciones con gustar + infinitivo',
        tier: 'hot',
        syllabusTopic: 'M3.Sintaxis',
        description: 'Construyes frases expresando aficiones con verbos en infinitivo.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-13',
            type: 'word-order',
            prompt: 'Ordena la frase: "A mis amigos les gusta pasear por la playa al atardecer"',
            englishPrompt: 'Order the sentence: "My friends like to walk along the beach at sunset"',
            audioText: 'A mis amigos les gusta pasear por la playa al atardecer',
            sentencePieces: ['gusta', 'atardecer', 'playa', 'amigos', 'A', 'al', 'pasear', 'mis', 'les', 'por', 'la'],
            correctAnswer: 'A mis amigos les gusta pasear por la playa al atardecer',
            explanation: 'Enfático (A mis amigos) + pronombre OI (les) + gusta singular porque el sujeto es un infinitivo (pasear) + complementos de lugar y tiempo.',
            hints: ['Cuando lo que gusta es un infinitivo (pasear), el verbo siempre va en singular: gusta.'],
            syllabusRef: 'M3-GUSTOS',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'cadiz-10',
        cityId: 'cadiz',
        levelNumber: 10,
        title: 'Culminación del Módulo 3',
        subtitle: 'Gran síntesis de horas, fechas, clima, gustos y MUY vs MUCHO',
        tier: 'hot',
        syllabusTopic: 'M3.Sintesis',
        description: 'La prueba suprema antes de disputar el concurso de coplas.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm3-cad-14',
            type: 'fill-blank',
            prompt: 'Completa: "El concierto es ______ emocionante y hay ______ personas en el teatro."',
            englishPrompt: 'Complete: "The concert is very exciting and there are many people in the theater."',
            audioText: 'muy / muchas',
            options: ['muy / muchas', 'mucho / muy', 'mucha / muchos', 'muy / muy'],
            correctAnswer: 'muy / muchas',
            explanation: 'Emocionante es adjetivo -> "muy emocionante". Personas es sustantivo femenino plural -> "muchas personas".',
            hints: ['MUY ante adjetivo, MUCHAS ante sustantivo femenino plural.'],
            syllabusRef: 'M3-MUY-MUCHO',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-cadiz',
      cityId: 'cadiz',
      title: 'El Concurso de Coplas de Cádiz',
      characterName: 'Lola la del Falla',
      characterRole: 'Presidenta del Jurado del Gran Teatro Falla',
      scenario: 'Sobre las tablas del Gran Teatro Falla, debes componer e interpretar las estrofas oficiales del concurso demostrando maestría en gustos, posesivos, horas y la distinción perfecta entre MUY y MUCHO para desbloquear el Módulo 4 hacia Valencia.',
      objectives: [
        { id: 'cad-obj1', description: 'Dominar la concordancia de GUSTAR singular/plural y pronombres', syllabusTopic: 'M3.Gustos' },
        { id: 'cad-obj2', description: 'Aplicar la regla de oro entre MUY (adjetivos) y MUCHO (sustantivos)', syllabusTopic: 'M3.MuyVsMucho' },
        { id: 'cad-obj3', description: 'Utilizar adjetivos posesivos y expresiones temporales sin fallo', syllabusTopic: 'M3.Posesivos' }
      ],
      requiredScorePercent: 80,
      xpReward: 400,
      coinReward: 500,
      badgeName: 'El Pito de Caña de Oro de Cádiz',
      badgeIcon: '🎭',
      questions: [
        {
          id: 'b-cad-1',
          type: 'multiple-choice',
          prompt: 'Lola: "Para rimar con gracia, complete la copla: \'A mí me ______ las olas del mar y Cádiz es ______ hermosa\'"',
          englishPrompt: 'Lola: "To rhyme with grace, complete the verse: \'I like the sea waves and Cadiz is very beautiful\'"',
          audioText: 'gustan / muy',
          options: ['gustan / muy', 'gusta / mucho', 'gustan / mucho', 'gusta / muy'],
          correctAnswer: 'gustan / muy',
          explanation: '"Las olas del mar" es plural -> gustan. "Hermosa" es adjetivo -> muy hermosa.',
          hints: ['Plural para olas; MUY para adjetivo hermosa.'],
          syllabusRef: 'M3-GUSTOS',
          difficulty: 'hard'
        },
        {
          id: 'b-cad-2',
          type: 'fill-blank',
          prompt: 'Lola: "Los coristas tocan ______ bien sus guitarras y cantan con ______ fuerza (muy / mucho)."',
          englishPrompt: 'Lola: "The choir members play their guitars very well and sing with lots of strength."',
          audioText: 'muy / mucha',
          options: ['muy / mucha', 'mucho / muy', 'mucha / muy', 'muy / mucho'],
          correctAnswer: 'muy / mucha',
          explanation: '"Bien" es adverbio -> muy bien. "Fuerza" es sustantivo femenino singular -> mucha fuerza.',
          hints: ['MUY ante adverbio, MUCHA ante sustantivo femenino.'],
          syllabusRef: 'M3-MUY-MUCHO',
          difficulty: 'hard'
        },
        {
          id: 'b-cad-3',
          type: 'word-order',
          prompt: 'Ordena la letra del estribillo ganador: "Nuestra tierra tiene arte y nos gusta vivir con alegría"',
          englishPrompt: 'Order the winning chorus lyric: "Our land has art and we like to live with joy"',
          audioText: 'Nuestra tierra tiene arte y nos gusta vivir con alegría',
          sentencePieces: ['con', 'alegría', 'Nuestra', 'arte', 'tierra', 'gusta', 'tiene', 'vivir', 'y', 'nos'],
          correctAnswer: 'Nuestra tierra tiene arte y nos gusta vivir con alegría',
          explanation: 'Posesivo y sujeto (Nuestra tierra) + verbo tener (tiene arte) + nexo (y) + estructura con gustar (nos gusta vivir con alegría).',
          hints: ['Comienza por "Nuestra tierra tiene arte".'],
          syllabusRef: 'M3-Sintaxis',
          difficulty: 'hot'
        }
      ]
    }
  }
];
