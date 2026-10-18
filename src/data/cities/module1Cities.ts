import { City } from '../../types';

export const MODULE1_CITIES: City[] = [
  {
    id: 'madrid',
    number: 1,
    name: 'Madrid',
    region: 'Comunidad de Madrid',
    landmark: 'Puerta del Sol & Plaza Mayor',
    description: 'La vibrante capital de España. Aquí inicias tu aventura aprendiendo el abecedario, los saludos y a presentarte.',
    moduleIndex: 1,
    moduleName: 'Módulo 1: Saludos, Abecedario, Pronombres y SER',
    coordinates: { x: 50, y: 48 },
    accentColor: '#C60B1E',
    levels: [
      {
        id: 'madrid-1',
        cityId: 'madrid',
        levelNumber: 1,
        title: 'Saludos en Barajas',
        subtitle: 'Aprende a saludar y responder cortesmente',
        tier: 'easy',
        syllabusTopic: 'M1.Saludos',
        description: 'Llegas al aeropuerto de Madrid-Barajas. La oficial de aduanas te saluda amablemente.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q1',
            type: 'multiple-choice',
            prompt: '¿Cómo saludas por la mañana de manera formal en español?',
            englishPrompt: 'How do you greet someone formally in the morning in Spanish?',
            audioText: 'Buenos días',
            options: ['Buenos días', 'Buenas noches', 'Hasta luego', 'Mucho gusto'],
            correctAnswer: 'Buenos días',
            explanation: 'En español usamos "Buenos días" por la mañana hasta el mediodía. "Buenas tardes" se usa por la tarde y "Buenas noches" al anochecer.',
            hints: ['Piensa en el sol saliendo: es el inicio del día.'],
            syllabusRef: 'M1-SALUDOS',
            difficulty: 'easy'
          },
          {
            id: 'm1-q2',
            type: 'multiple-choice',
            prompt: 'Si alguien te dice "¡Hola! ¿Cómo estás?", ¿cuál es la respuesta más natural?',
            englishPrompt: 'If someone asks "Hello! How are you?", what is the most natural reply?',
            audioText: 'Muy bien, gracias. ¿Y tú?',
            options: ['Muy bien, gracias. ¿Y tú?', 'Me llamo Carlos', 'Soy de Inglaterra', 'De nada'],
            correctAnswer: 'Muy bien, gracias. ¿Y tú?',
            explanation: '"Muy bien, gracias. ¿Y tú?" responde directamente a tu estado de ánimo y devuelve la pregunta amablemente.',
            hints: ['Agradeces el interés y preguntas por la otra persona.'],
            syllabusRef: 'M1-SALUDOS',
            difficulty: 'easy'
          },
          {
            id: 'm1-q3',
            type: 'dialogue',
            prompt: 'Conversación informal de bienvenida en la cafetería del aeropuerto:',
            englishPrompt: 'Informal welcome conversation at the airport cafe:',
            audioText: '¡Hola! Bienvenido a Madrid. ¿Qué tal el viaje?',
            correctAnswer: '¡Hola! Muy bien, gracias. El viaje fue excelente.',
            explanation: 'Responder con cortesía y entusiasmo muestra competencia comunicativa inicial.',
            hints: ['Saluda primero y comparte una respuesta positiva.'],
            syllabusRef: 'M1-SALUDOS',
            difficulty: 'easy',
            dialogue: {
              npcName: 'Lucía',
              npcRole: 'Recepcionista del Punto de Información',
              prompt: '¡Hola! Bienvenido a Madrid. ¿Qué tal el viaje?',
              englishPrompt: 'Hello! Welcome to Madrid. How was the trip?',
              choices: [
                {
                  id: 'c1',
                  text: '¡Hola! Muy bien, gracias. El viaje fue excelente.',
                  englishHint: 'Hello! Very well, thanks. The trip was excellent.',
                  isCorrect: true,
                  npcResponse: '¡Qué alegría! Que tengas una estancia maravillosa en España.',
                  explanation: 'Respuesta cordial y comunicativamente perfecta.'
                },
                {
                  id: 'c2',
                  text: 'Tengo treinta años.',
                  englishHint: 'I am thirty years old.',
                  isCorrect: false,
                  npcResponse: 'Esa es tu edad, ¡pero te preguntaba por tu viaje!',
                  explanation: 'No responde a "¿Qué tal el viaje?".'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'madrid-2',
        cityId: 'madrid',
        levelNumber: 2,
        title: 'El Abecedario en la Puerta del Sol',
        subtitle: 'Pronunciación de letras y sonidos característicos',
        tier: 'easy',
        syllabusTopic: 'M1.Abecedario',
        description: 'Paseando por el Kilómetro Cero en la Puerta del Sol, descubres los sonidos de la lengua española.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q4',
            type: 'multiple-choice',
            prompt: '¿Qué letra es exclusiva y muy representativa del alfabeto español?',
            englishPrompt: 'Which letter is exclusive and very representative of the Spanish alphabet?',
            audioText: 'La letra eñe',
            options: ['Ñ (eñe)', 'W (uve doble)', 'K (ka)', 'Y (i griega)'],
            correctAnswer: 'Ñ (eñe)',
            explanation: 'La letra Ñ (eñe) con su virgulilla (~) representa el sonido nasal palatal /ɲ/, como en España, año o niño.',
            hints: ['Tiene una ondita encima de la letra N.'],
            syllabusRef: 'M1-ALPHA',
            difficulty: 'easy'
          },
          {
            id: 'm1-q5',
            type: 'fill-blank',
            prompt: 'Para deletrear "HOLA" en español decimos: Hache - ___ - Ele - A.',
            englishPrompt: 'To spell "HOLA" in Spanish we say: Hache - O - Ele - A.',
            audioText: 'O',
            options: ['O', 'U', 'E', 'I'],
            correctAnswer: 'O',
            explanation: 'Las vocales en español tienen un único sonido puro: A, E, I, O, U. La palabra es H-O-L-A.',
            hints: ['La segunda letra de HOLA.'],
            syllabusRef: 'M1-ALPHA',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'madrid-3',
        cityId: 'madrid',
        levelNumber: 3,
        title: 'Datos Personales en el Hostal',
        subtitle: 'Nombre, procedencia y cómo presentarte',
        tier: 'medium',
        syllabusTopic: 'M1.DatosPersonales',
        description: 'Haces el check-in en un acogedor hostal en el céntrico barrio de Huertas.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q6',
            type: 'multiple-choice',
            prompt: 'Para presentarte diciendo tu nombre en español, ¿cuál expresión es la adecuada?',
            englishPrompt: 'To introduce yourself by saying your name in Spanish, which phrase is appropriate?',
            audioText: 'Me llamo David',
            options: ['Me llamo David', 'Tengo David', 'Estoy David', 'Voy David'],
            correctAnswer: 'Me llamo David',
            explanation: 'Usamos el verbo reflexivo llamarse: "Me llamo..." o el verbo SER: "Soy David". Nunca TENER ni ESTAR para el nombre.',
            hints: ['Viene del verbo llamarse.'],
            syllabusRef: 'M1-DATOS',
            difficulty: 'medium'
          },
          {
            id: 'm1-q7',
            type: 'fill-blank',
            prompt: 'Completa la pregunta: "¿De dónde _____ tú?"',
            englishPrompt: 'Complete the question: "Where are you from?"',
            audioText: '¿De dónde eres tú?',
            options: ['eres', 'estás', 'tienes', 'haces'],
            correctAnswer: 'eres',
            explanation: 'Para indicar procedencia u origen se utiliza el verbo SER: "¿De dónde eres?" -> "Soy de Inglaterra / de Estados Unidos".',
            hints: ['Forma de segunda persona singular (tú) del verbo SER.'],
            syllabusRef: 'M1-SER',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'madrid-4',
        cityId: 'madrid',
        levelNumber: 4,
        title: 'Números del 1 al 20 en la Gran Vía',
        subtitle: 'Aprende los números básicos para precios y billetes de metro',
        tier: 'medium',
        syllabusTopic: 'M1.Numeros',
        description: 'Compras un billete de metro de diez viajes en la estación de Gran Vía.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q8',
            type: 'multiple-choice',
            prompt: '¿Cómo se escribe en letras el número 15 en español?',
            englishPrompt: 'How is the number 15 written in letters in Spanish?',
            audioText: 'quince',
            options: ['quince', 'diez y cinco', 'cinco y diez', 'quinto'],
            correctAnswer: 'quince',
            explanation: 'Los números del 11 al 15 tienen formas singulares terminadas en -ce: once, doce, trece, catorce, quince.',
            hints: ['Termina en -ce, como doce o trece.'],
            syllabusRef: 'M1-NUM1',
            difficulty: 'medium'
          },
          {
            id: 'm1-q9',
            type: 'word-order',
            prompt: 'Ordena las palabras para formar la frase: "Un billete de diez viajes, por favor"',
            englishPrompt: 'Order the words: "A ten-trip ticket, please"',
            audioText: 'Un billete de diez viajes, por favor',
            sentencePieces: ['viajes,', 'billete', 'diez', 'Un', 'por favor', 'de'],
            correctAnswer: 'Un billete de diez viajes, por favor',
            explanation: 'La estructura usual para una petición educada es artículo + sustantivo + complemento + por favor.',
            hints: ['Comienza con "Un" y finaliza con la fórmula de cortesía "por favor".'],
            syllabusRef: 'M1-NUM1',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'madrid-5',
        cityId: 'madrid',
        levelNumber: 5,
        title: 'Pronombres Personales en el Retiro',
        subtitle: 'Sujetos: yo, tú, él, ella, nosotros, vosotros, ellos',
        tier: 'tough',
        syllabusTopic: 'M1.Pronombres',
        description: 'Junto al estanque del Retiro observas a la gente y practicas los pronombres de sujeto.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q10',
            type: 'multiple-choice',
            prompt: '¿Cuál pronombre personal corresponde a "we" en español cuando el grupo es mixto o masculino?',
            englishPrompt: 'Which personal pronoun corresponds to "we" in Spanish for a mixed or masculine group?',
            audioText: 'Nosotros',
            options: ['Nosotros', 'Vosotros', 'Ellos', 'Ustedes'],
            correctAnswer: 'Nosotros',
            explanation: '"Nosotros" es la primera persona del plural (nosotras si es exclusivamente femenino). "Vosotros" es "you all" informal en España.',
            hints: ['Primera persona del plural.'],
            syllabusRef: 'M1-PRON',
            difficulty: 'tough'
          },
          {
            id: 'm1-q11',
            type: 'fill-blank',
            prompt: 'Para dirigirte a una persona mayor o en situación formal con respeto, usas el pronombre: "____".',
            englishPrompt: 'To address an elder or someone in a formal situation with respect, you use the pronoun: "usted".',
            audioText: 'Usted',
            options: ['Usted', 'Tú', 'Vosotros', 'Ella'],
            correctAnswer: 'Usted',
            explanation: '"Usted" es la forma de tratamiento cortés y formal en español, y se conjuga con la 3.ª persona singular.',
            hints: ['Abreviado a menudo como Ud.'],
            syllabusRef: 'M1-PRON',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'madrid-6',
        cityId: 'madrid',
        levelNumber: 6,
        title: 'El Verbo SER en el Museo del Prado',
        subtitle: 'Conjugación completa del presente de SER',
        tier: 'tough',
        syllabusTopic: 'M1.VerboSER',
        description: 'Frente a las obras maestras de Velázquez y Goya, analizas la identidad esencial con el verbo SER.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q12',
            type: 'multiple-choice',
            prompt: '¿Cuál es la forma correcta del verbo SER para "Nosotros"?',
            englishPrompt: 'What is the correct form of the verb SER for "Nosotros"?',
            audioText: 'somos',
            options: ['somos', 'sois', 'son', 'estamos'],
            correctAnswer: 'somos',
            explanation: 'Conjugación de SER en presente: Yo soy, Tú eres, Él/Ella/Usted es, Nosotros somos, Vosotros sois, Ellos/Ustedes son.',
            hints: ['Nosotros + somos.'],
            syllabusRef: 'M1-SER',
            difficulty: 'tough'
          },
          {
            id: 'm1-q13',
            type: 'fill-blank',
            prompt: 'Completa con la forma adecuada de SER: "Diego Velázquez ____ un pintor español muy famoso."',
            englishPrompt: 'Complete with the appropriate form of SER: "Diego Velázquez is a very famous Spanish painter."',
            audioText: 'es',
            options: ['es', 'está', 'son', 'eres'],
            correctAnswer: 'es',
            explanation: 'Diego Velázquez es 3.ª persona singular (él), por lo que corresponde "es". Usamos SER para profesiones e identidades históricas.',
            hints: ['Él es...'],
            syllabusRef: 'M1-SER',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'madrid-7',
        cityId: 'madrid',
        levelNumber: 7,
        title: 'Nacionalidades en el Palacio Real',
        subtitle: 'Países, gentilicios y concordancia de género',
        tier: 'hard',
        syllabusTopic: 'M1.Nacionalidades',
        description: 'Turistas de todo el mundo visitan el Palacio Real. Aprendes a expresar procedencias y gentilicios.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q14',
            type: 'multiple-choice',
            prompt: 'Si Ana nació en España, ¿cómo decimos su nacionalidad en femenino?',
            englishPrompt: 'If Ana was born in Spain, how do we say her nationality in the feminine form?',
            audioText: 'Ana es española',
            options: ['Ana es española', 'Ana es español', 'Ana está española', 'Ana tiene español'],
            correctAnswer: 'Ana es española',
            explanation: 'Los adjetivos de nacionalidad que terminan en consonante forman el femenino añadiendo -a: español -> española. Se usa el verbo SER.',
            hints: ['El femenino añade una -a.'],
            syllabusRef: 'M1-DATOS',
            difficulty: 'hard'
          },
          {
            id: 'm1-q15',
            type: 'word-order',
            prompt: 'Ordena la frase para presentarse con nacionalidad: "Yo soy inglés y vivo en Londres"',
            englishPrompt: 'Order the sentence: "I am English and I live in London"',
            audioText: 'Yo soy inglés y vivo en Londres',
            sentencePieces: ['vivo', 'inglés', 'Yo', 'en', 'y', 'Londres', 'soy'],
            correctAnswer: 'Yo soy inglés y vivo en Londres',
            explanation: 'Sujeto + verbo SER + nacionalidad + conjunción + verbo vivir + preposición + ciudad.',
            hints: ['Empieza por "Yo soy inglés".'],
            syllabusRef: 'M1-DATOS',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'madrid-8',
        cityId: 'madrid',
        levelNumber: 8,
        title: 'Artículos y Género en la Plaza Mayor',
        subtitle: 'Artículos determinados e indeterminados',
        tier: 'hard',
        syllabusTopic: 'M1.Articulos',
        description: 'Bajo los arcos de la Plaza Mayor descubres la distinción entre masculino y femenino.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q16',
            type: 'multiple-choice',
            prompt: '¿Cuáles son los cuatro artículos definidos (determinados) en español?',
            englishPrompt: 'What are the four definite articles in Spanish?',
            audioText: 'el, la, los, las',
            options: ['el, la, los, las', 'un, una, unos, unas', 'este, esta, estos, estas', 'mi, tu, su, nuestro'],
            correctAnswer: 'el, la, los, las',
            explanation: 'Los artículos determinados corresponden a "the" en inglés: el (masc. sing.), la (fem. sing.), los (masc. pl.), las (fem. pl.).',
            hints: ['Empiezan con la letra ele.'],
            syllabusRef: 'M1-ART',
            difficulty: 'hard'
          },
          {
            id: 'm1-q17',
            type: 'fill-blank',
            prompt: 'La palabra "plaza" es femenina singular, por lo tanto decimos: "____ plaza".',
            englishPrompt: 'The word "plaza" is feminine singular, so we say: "la plaza".',
            audioText: 'la',
            options: ['la', 'el', 'los', 'un'],
            correctAnswer: 'la',
            explanation: 'Los sustantivos que terminan en -a son generalmente femeninos y toman el artículo "la" (definido) o "una" (indefinido).',
            hints: ['Artículo femenino singular.'],
            syllabusRef: 'M1-ART',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'madrid-9',
        cityId: 'madrid',
        levelNumber: 9,
        title: 'Conversación en la Chocolatería San Ginés',
        subtitle: 'Diálogo interactivo de bienvenida y pedidos iniciales',
        tier: 'hot',
        syllabusTopic: 'M1.Comunicacion',
        description: 'Pides unos tradicionales churros con chocolate mientras entablas conversación con el camarero.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q18',
            type: 'dialogue',
            prompt: 'Pides en la barra de la chocolatería:',
            englishPrompt: 'You order at the churrería counter:',
            audioText: '¡Buenas tardes! ¿Qué va a tomar?',
            correctAnswer: 'Buenas tardes. Un chocolate caliente con churros, por favor.',
            explanation: 'Una interacción fluida que combina saludo educado, orden clara y cortesía.',
            hints: ['Devuelve el saludo de la tarde y pide el producto tradicional.'],
            syllabusRef: 'M1-SALUDOS',
            difficulty: 'hot',
            dialogue: {
              npcName: 'Mateo',
              npcRole: 'Churrero de San Ginés',
              prompt: '¡Buenas tardes! ¿Qué va a tomar el señor/la señora?',
              englishPrompt: 'Good afternoon! What will you have?',
              choices: [
                {
                  id: 'c1',
                  text: 'Buenas tardes. Un chocolate caliente con churros, por favor.',
                  englishHint: 'Good afternoon. A hot chocolate with churros, please.',
                  isCorrect: true,
                  npcResponse: '¡Marchando una de churros con chocolate! Enseguida se lo sirvo.',
                  explanation: 'Excelente fórmula comunicativa para pedir en un café o chocolatería.'
                },
                {
                  id: 'c2',
                  text: 'Soy de Londres y tengo un hermano.',
                  englishHint: 'I am from London and I have a brother.',
                  isCorrect: false,
                  npcResponse: '¡Encantado de conocerte! Pero... ¿deseas pedir algo de merendar?',
                  explanation: 'Información fuera de contexto para una comanda.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'madrid-10',
        cityId: 'madrid',
        levelNumber: 10,
        title: 'Integración Rápida Madrileña',
        subtitle: 'Evaluación rápida de todos los conceptos del Módulo 1 en Madrid',
        tier: 'hot',
        syllabusTopic: 'M1.Sintesis',
        description: 'Prueba de fuego antes del reto del conserje: preguntas rápidas de integración lingüística.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm1-q19',
            type: 'multiple-choice',
            prompt: 'Identifica la frase gramaticalmente correcta con el verbo SER y adjetivos concordantes:',
            englishPrompt: 'Identify the grammatically correct sentence with SER and agreeing adjectives:',
            audioText: 'Nosotros somos estudiantes aplicados',
            options: [
              'Nosotros somos estudiantes aplicados',
              'Nosotros estamos estudiantes aplicado',
              'Nosotros son estudiantes aplicada',
              'Nosotros somos estudiante aplicadas'
            ],
            correctAnswer: 'Nosotros somos estudiantes aplicados',
            explanation: 'Sujeto plural masculino/mixto (nosotros) + verbo SER (somos) + sustantivo plural (estudiantes) + adjetivo plural concordante (aplicados).',
            hints: ['Busca la concordancia en plural en verbo, sustantivo y adjetivo.'],
            syllabusRef: 'M1-ADJ',
            difficulty: 'hot'
          },
          {
            id: 'm1-q20',
            type: 'fill-blank',
            prompt: 'Completa: "¿Cómo se ____ tu apellido?" (para pedir deletreo en español).',
            englishPrompt: 'Complete: "How do you spell your surname?"',
            audioText: 'escribe',
            options: ['escribe', 'habla', 'eres', 'tienes'],
            correctAnswer: 'escribe',
            explanation: '"¿Cómo se escribe?" o "¿Cómo se deletrea?" son las preguntas normativas para averiguar la ortografía de una palabra o apellido.',
            hints: ['Viene del verbo escribir.'],
            syllabusRef: 'M1-ALPHA',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-madrid',
      cityId: 'madrid',
      title: 'El Desafío del Conserje Mayor de Barajas',
      characterName: 'Don Rodrigo',
      characterRole: 'Conserje Mayor y Guía Oficial de Madrid',
      scenario: 'Para conseguir tu salvoconducto de viajero e iniciar tu travesía hacia Toledo, Don Rodrigo te somete a una entrevista oral y documental completa sobre datos personales, números y gramática del Módulo 1.',
      objectives: [
        { id: 'obj1', description: 'Completar el registro oficial de identidad con SER y nacionalidad', syllabusTopic: 'M1.DatosPersonales' },
        { id: 'obj2', description: 'Reconocer números y deletreo fonético exacto', syllabusTopic: 'M1.Abecedario' },
        { id: 'obj3', description: 'Demostrar dominio de los pronombres personales y el verbo SER', syllabusTopic: 'M1.VerboSER' }
      ],
      requiredScorePercent: 80,
      xpReward: 300,
      coinReward: 500,
      badgeName: 'Insignia de la Villa y Corte de Madrid',
      badgeIcon: '👑',
      questions: [
        {
          id: 'b-mad-1',
          type: 'multiple-choice',
          prompt: 'Don Rodrigo: "Primero, identifíquese formalmente. ¿Cuál es la formulación más correcta?"',
          englishPrompt: 'Don Rodrigo: "First, identify yourself formally. Which is the most correct phrasing?"',
          audioText: 'Buenos días. Me llamo Alexander y soy de Manchester.',
          options: [
            'Buenos días. Me llamo Alexander y soy de Manchester.',
            'Hola tío. Tengo Alexander y estoy Inglaterra.',
            'Buenas noches. Mi llamo es Alexander y vivo ser Manchester.',
            'Adiós. Yo llamo Alexander.'
          ],
          correctAnswer: 'Buenos días. Me llamo Alexander y soy de Manchester.',
          explanation: 'Combina el saludo matutino respetuoso, el reflexivo "me llamo" y el verbo SER de origen ("soy de").',
          hints: ['Formalidad matinal y corrección con SER de origen.'],
          syllabusRef: 'M1-DATOS',
          difficulty: 'hard'
        },
        {
          id: 'b-mad-2',
          type: 'fill-blank',
          prompt: 'Don Rodrigo comprueba tu pasaporte: "¿Cuántos años tienes? Yo ____ veinticinco años."',
          englishPrompt: 'Don Rodrigo checks your passport: "How old are you? I am 25 years old."',
          audioText: 'tengo',
          options: ['tengo', 'soy', 'estoy', 'hago'],
          correctAnswer: 'tengo',
          explanation: 'En español la edad se expresa obligatoriamente con el verbo TENER: "Tengo 25 años", a diferencia del inglés "I am 25".',
          hints: ['En español la edad no "se es", sino que "se tiene".'],
          syllabusRef: 'M1-DATOS',
          difficulty: 'hard'
        },
        {
          id: 'b-mad-3',
          type: 'word-order',
          prompt: 'Ordena la declaración oficial de viajero: "Nosotros somos estudiantes y queremos aprender español"',
          englishPrompt: 'Order the official traveler declaration: "We are students and we want to learn Spanish"',
          audioText: 'Nosotros somos estudiantes y queremos aprender español',
          sentencePieces: ['estudiantes', 'aprender', 'y', 'español', 'somos', 'Nosotros', 'queremos'],
          correctAnswer: 'Nosotros somos estudiantes y queremos aprender español',
          explanation: 'Sujeto nosotros + verbo SER (somos) + profesión/condición + conjunción + verbo auxiliar + infinitivo + objeto.',
          hints: ['Comienza por "Nosotros somos estudiantes".'],
          syllabusRef: 'M1-SER',
          difficulty: 'hot'
        },
        {
          id: 'b-mad-4',
          type: 'multiple-choice',
          prompt: 'Don Rodrigo: "Por último, indique qué día de la semana empieza la estancia si hoy es domingo."',
          englishPrompt: 'Don Rodrigo: "Lastly, indicate what day of the week the stay begins if today is Sunday."',
          audioText: 'El lunes',
          options: ['El lunes', 'El martes', 'El viernes', 'El sábado'],
          correctAnswer: 'El lunes',
          explanation: 'El primer día hábil tras el domingo es el lunes. En los países hispanohablantes la semana civil comienza habitualmente el lunes.',
          hints: ['Día después del domingo.'],
          syllabusRef: 'M1-DIAS',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'toledo',
    number: 2,
    name: 'Toledo',
    region: 'Castilla-La Mancha',
    landmark: 'Alcázar y Puente de San Martín',
    description: 'La legendaria Ciudad Imperial. Aquí aprenderás los números hasta 100, las profesiones artesanales, los días de la semana y el uso de SER.',
    moduleIndex: 1,
    moduleName: 'Módulo 1: Profesiones, Días, Números hasta 100 y SER',
    coordinates: { x: 48, y: 54 },
    accentColor: '#D97706',
    levels: [
      {
        id: 'toledo-1',
        cityId: 'toledo',
        levelNumber: 1,
        title: 'Los Días de la Semana en el Alcázar',
        subtitle: 'Lunes a domingo y su uso con artículos',
        tier: 'easy',
        syllabusTopic: 'M1.DiasSemana',
        description: 'En lo alto del Alcázar organizas tu itinerario semanal por Toledo.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-1',
            type: 'multiple-choice',
            prompt: '¿Cómo decimos en español "On Mondays I study Spanish"?',
            englishPrompt: 'How do we say in Spanish "On Mondays I study Spanish"?',
            audioText: 'Los lunes estudio español',
            options: ['Los lunes estudio español', 'En lunes estudio español', 'A los lunes estudio español', 'Por lunes estudio español'],
            correctAnswer: 'Los lunes estudio español',
            explanation: 'En español no se usa preposición "en" para los días de la semana. Se usa el artículo determinado masculino: "el lunes" (singular) o "los lunes" (hábito plural).',
            hints: ['Se usa el artículo "los", sin la preposición "en".'],
            syllabusRef: 'M1-DIAS',
            difficulty: 'easy'
          },
          {
            id: 'm1-tol-2',
            type: 'fill-blank',
            prompt: 'Completa la serie de días: Miércoles, Jueves, ______, Sábado.',
            englishPrompt: 'Complete the series of days: Wednesday, Thursday, Friday, Saturday.',
            audioText: 'Viernes',
            options: ['Viernes', 'Domingo', 'Martes', 'Lunes'],
            correctAnswer: 'Viernes',
            explanation: 'El orden de la semana es: lunes, martes, miércoles, jueves, viernes, sábado y domingo.',
            hints: ['El día antes del fin de semana.'],
            syllabusRef: 'M1-DIAS',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'toledo-2',
        cityId: 'toledo',
        levelNumber: 2,
        title: 'Números 20 a 100 en la Plaza Zocodover',
        subtitle: 'Decenas y formación de números compuestos',
        tier: 'easy',
        syllabusTopic: 'M1.Numeros',
        description: 'Pagas unos dulces toledanos y calculas los precios del mercado en Zocodover.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-3',
            type: 'multiple-choice',
            prompt: '¿Cuál es la forma correcta de escribir el número 45 en español?',
            englishPrompt: 'What is the correct way to write the number 45 in Spanish?',
            audioText: 'cuarenta y cinco',
            options: ['cuarenta y cinco', 'cuarenticinco', 'cuarenta cinco', 'cuarenta-cinco'],
            correctAnswer: 'cuarenta y cinco',
            explanation: 'A partir del 31, los números se escriben separados por la conjunción "y": treinta y uno, cuarenta y cinco, etc. Del 16 al 29 se escriben en una sola palabra (veinticinco).',
            hints: ['A partir del 30 se separan con la letra "y".'],
            syllabusRef: 'M1-NUM1',
            difficulty: 'easy'
          },
          {
            id: 'm1-tol-4',
            type: 'fill-blank',
            prompt: 'El número 100 en español solo se dice: "____".',
            englishPrompt: 'The number 100 on its own in Spanish is: "cien".',
            audioText: 'cien',
            options: ['cien', 'ciento', 'cientos', 'uno cien'],
            correctAnswer: 'cien',
            explanation: 'El número 100 exacto se apocopa a "cien". Si va seguido de otros números se convierte en "ciento" (ciento uno, ciento cincuenta).',
            hints: ['Cuatro letras: C-I-E-N.'],
            syllabusRef: 'M1-NUM1',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'toledo-3',
        cityId: 'toledo',
        levelNumber: 3,
        title: 'Profesiones y Oficios Artesanales',
        subtitle: 'Vocabulario de profesiones y concordancia masculina/femenina',
        tier: 'medium',
        syllabusTopic: 'M1.Profesiones',
        description: 'Visitas los centenarios talleres de damasquinado y espadas toledanas.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-5',
            type: 'multiple-choice',
            prompt: 'Si Marcos es "profesor", ¿cómo decimos la profesión de María?',
            englishPrompt: 'If Marcos is "profesor", how do we state María\'s profession?',
            audioText: 'María es profesora',
            options: ['María es profesora', 'María es profesor', 'María está profesora', 'María tiene profesora'],
            correctAnswer: 'María es profesora',
            explanation: 'Las profesiones masculinas terminadas en consonante forman el femenino añadiendo -a (profesor -> profesora, doctor -> doctora).',
            hints: ['Añade la vocal -a al final.'],
            syllabusRef: 'M1-PROF',
            difficulty: 'medium'
          },
          {
            id: 'm1-tol-6',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice "He is an architect" en español sin usar artículo indefinido innecesario?',
            englishPrompt: 'How do you say "He is an architect" in Spanish without unnecessary indefinite article?',
            audioText: 'Él es arquitecto',
            options: ['Él es arquitecto', 'Él es un arquitecto', 'Él está arquitecto', 'Él tiene arquitecto'],
            correctAnswer: 'Él es arquitecto',
            explanation: 'En español, al expresar la profesión con el verbo SER normalmente no se utiliza artículo indefinido: "Soy profesor", "Es arquitecto".',
            hints: ['En español no se dice "un" para la profesión básica.'],
            syllabusRef: 'M1-PROF',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'toledo-4',
        cityId: 'toledo',
        levelNumber: 4,
        title: 'Artículos en el Taller de Espadas',
        subtitle: 'Artículos indefinidos: un, una, unos, unas',
        tier: 'medium',
        syllabusTopic: 'M1.Articulos',
        description: 'Identificas objetos singulares y plurales en la fragua toledana.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-7',
            type: 'fill-blank',
            prompt: 'Para referirnos a varios objetos masculinos indeterminados (ej. libros), decimos: "____ libros".',
            englishPrompt: 'To refer to some masculine indefinite objects (e.g. books), we say: "unos libros".',
            audioText: 'unos',
            options: ['unos', 'unas', 'los', 'un'],
            correctAnswer: 'unos',
            explanation: '"Unos" es el artículo indefinido masculino plural (some).',
            hints: ['Indefinido masculino plural.'],
            syllabusRef: 'M1-ART',
            difficulty: 'medium'
          },
          {
            id: 'm1-tol-8',
            type: 'word-order',
            prompt: 'Ordena la frase: "El maestro forja una espada de acero"',
            englishPrompt: 'Order the sentence: "The master forges a steel sword"',
            audioText: 'El maestro forja una espada de acero',
            sentencePieces: ['de', 'El', 'espada', 'forja', 'una', 'acero', 'maestro'],
            correctAnswer: 'El maestro forja una espada de acero',
            explanation: 'Estructura clásica: Sujeto (El maestro) + Verbo (forja) + Objeto directo (una espada) + Complemento del nombre (de acero).',
            hints: ['El sujeto es "El maestro".'],
            syllabusRef: 'M1-ART',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'toledo-5',
        cityId: 'toledo',
        levelNumber: 5,
        title: 'SER para Oficios y Cualidades',
        subtitle: 'Conjugación de SER en contextos profesionales y descriptivos',
        tier: 'tough',
        syllabusTopic: 'M1.VerboSER',
        description: 'En el Puente de San Martín reflexionas sobre las identidades y vocaciones toledanas.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-9',
            type: 'multiple-choice',
            prompt: '¿Cuál es la forma de segunda persona plural informal usada en España para el verbo SER?',
            englishPrompt: 'What is the informal second-person plural form used in Spain for the verb SER?',
            audioText: 'Vosotros sois',
            options: ['Vosotros sois', 'Vosotros son', 'Vosotros soys', 'Vosotros eréis'],
            correctAnswer: 'Vosotros sois',
            explanation: 'En España "vosotros" se conjuga como "sois" con el verbo SER: "Vosotros sois artesanos".',
            hints: ['Termina en -is con acento en el diptongo oi.'],
            syllabusRef: 'M1-SER',
            difficulty: 'tough'
          },
          {
            id: 'm1-tol-10',
            type: 'fill-blank',
            prompt: 'Completa: "Mis amigos y yo ______ guías turísticos en Toledo."',
            englishPrompt: 'Complete: "My friends and I are tour guides in Toledo."',
            audioText: 'somos',
            options: ['somos', 'son', 'sois', 'estamos'],
            correctAnswer: 'somos',
            explanation: '"Mis amigos y yo" equivale a la primera persona del plural (nosotros), por tanto el verbo SER se conjuga como "somos".',
            hints: ['Equivale a "nosotros".'],
            syllabusRef: 'M1-SER',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'toledo-6',
        cityId: 'toledo',
        levelNumber: 6,
        title: 'Adjetivos en la Sinagoga del Tránsito',
        subtitle: 'Concordancia en género y número',
        tier: 'tough',
        syllabusTopic: 'M1.Adjetivos',
        description: 'Examinas los capiteles y las inscripciones artísticas observando los adjetivos.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-11',
            type: 'multiple-choice',
            prompt: '¿Cómo concuerda el adjetivo "antiguo" con el sustantivo plural femenino "ciudades"?',
            englishPrompt: 'How does the adjective "antiguo" agree with the plural feminine noun "ciudades"?',
            audioText: 'antiguas',
            options: ['antiguas', 'antiguo', 'antigua', 'antiguos'],
            correctAnswer: 'antiguas',
            explanation: 'El sustantivo "ciudades" es femenino y plural, por tanto el adjetivo debe adoptar la terminación femenina plural "-as": "ciudades antiguas".',
            hints: ['Femenino y plural termina en -as.'],
            syllabusRef: 'M1-ADJ',
            difficulty: 'tough'
          },
          {
            id: 'm1-tol-12',
            type: 'fill-blank',
            prompt: 'El adjetivo "interesante" termina en -e, por lo que su femenino singular es: "______".',
            englishPrompt: 'The adjective "interesante" ends in -e, so its feminine singular is: "interesante".',
            audioText: 'interesante',
            options: ['interesante', 'interesanta', 'interesanto', 'interesantis'],
            correctAnswer: 'interesante',
            explanation: 'Los adjetivos que terminan en -e o en consonante (como feliz, grande, inteligente, interesante) tienen una forma única para masculino y femenino.',
            hints: ['No cambia su forma en femenino.'],
            syllabusRef: 'M1-ADJ',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'toledo-7',
        cityId: 'toledo',
        levelNumber: 7,
        title: 'Preguntas en el Obrador de Mazapán',
        subtitle: 'Pronombres interrogativos: qué, cómo, cuál, cuánto',
        tier: 'hard',
        syllabusTopic: 'M1.Preguntas',
        description: 'Compras el exquisito mazapán de las monjas de San Clemente.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-13',
            type: 'multiple-choice',
            prompt: 'Para preguntar el precio de una caja de dulces en español decimos:',
            englishPrompt: 'To ask the price of a box of sweets in Spanish we say:',
            audioText: '¿Cuánto cuesta esta caja?',
            options: ['¿Cuánto cuesta esta caja?', '¿Qué es esta caja?', '¿Cómo es esta caja?', '¿Dónde tiene esta caja?'],
            correctAnswer: '¿Cuánto cuesta esta caja?',
            explanation: '"¿Cuánto cuesta...?" o "¿Cuánto es...?" son las fórmulas directas y habituales para preguntar precios.',
            hints: ['Usa el interrogativo de cantidad: cuánto.'],
            syllabusRef: 'M1-NUM1',
            difficulty: 'hard'
          },
          {
            id: 'm1-tol-14',
            type: 'word-order',
            prompt: 'Ordena la pregunta: "¿Cuánto cuesta el mazapán tradicional?"',
            englishPrompt: 'Order the question: "How much does the traditional marzipan cost?"',
            audioText: '¿Cuánto cuesta el mazapán tradicional?',
            sentencePieces: ['el', '¿Cuánto', 'tradicional?', 'cuesta', 'mazapán'],
            correctAnswer: '¿Cuánto cuesta el mazapán tradicional?',
            explanation: 'Interrogativo (¿Cuánto) + verbo de valor (cuesta) + artículo y sustantivo (el mazapán) + adjetivo (tradicional?).',
            hints: ['Inicia con ¿Cuánto cuesta.'],
            syllabusRef: 'M1-NUM1',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'toledo-8',
        cityId: 'toledo',
        levelNumber: 8,
        title: 'Construcción con SER y Nacionalidades',
        subtitle: 'Estructuración de oraciones complejas de identidad',
        tier: 'hard',
        syllabusTopic: 'M1.VerboSER',
        description: 'Redactas una pequeña crónica de los viajeros en el mirador del Valle.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-15',
            type: 'multiple-choice',
            prompt: 'Selecciona la frase con concordancia y ortografía exacta:',
            englishPrompt: 'Select the sentence with exact agreement and spelling:',
            audioText: 'Mis profesores son españoles y muy inteligentes',
            options: [
              'Mis profesores son españoles y muy inteligentes',
              'Mis profesores es español y muy inteligente',
              'Mis profesores son españolas y inteligente',
              'Mis profesores están españoles y inteligentes'
            ],
            correctAnswer: 'Mis profesores son españoles y muy inteligentes',
            explanation: 'Sujeto plural masculino (profesores) + SER plural (son) + nacionalidad plural masculina (españoles) + adjetivo invariable en género en plural (inteligentes).',
            hints: ['Todo concuerda en masculino plural.'],
            syllabusRef: 'M1-ADJ',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'toledo-9',
        cityId: 'toledo',
        levelNumber: 9,
        title: 'Diálogo con el Maestro Don Alonso',
        subtitle: 'Conversación interactiva sobre el acero toledano',
        tier: 'hot',
        syllabusTopic: 'M1.Comunicacion',
        description: 'Don Alonso examina si comprendes la tradición y el lenguaje de su oficio.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-16',
            type: 'dialogue',
            prompt: 'Conversación en la fragua de Don Alonso:',
            englishPrompt: 'Conversation at Don Alonso\'s forge:',
            audioText: 'Buenos días, joven. Soy don Alonso, maestro artesano toledano. ¿De qué país eres?',
            correctAnswer: 'Buenos días, don Alonso. Soy inglés y admiro mucho su trabajo.',
            explanation: 'Responder al saludo, tratar con respeto (don Alonso) y declarar nacionalidad con SER.',
            hints: ['Saluda con respeto y responde con tu nacionalidad.'],
            syllabusRef: 'M1-DATOS',
            difficulty: 'hot',
            dialogue: {
              npcName: 'Don Alonso',
              npcRole: 'Maestro Espadero Toledano',
              prompt: 'Buenos días, joven. Soy don Alonso, maestro artesano toledano. ¿De qué país eres?',
              englishPrompt: 'Good day, youngster. I am don Alonso, master Toledan artisan. Which country are you from?',
              choices: [
                {
                  id: 'c1',
                  text: 'Buenos días, don Alonso. Soy inglés y admiro mucho su trabajo.',
                  englishHint: 'Good day, don Alonso. I am English and I admire your work very much.',
                  isCorrect: true,
                  npcResponse: '¡Bienvenido a mi taller! El acero de Toledo no tiene rival en el mundo.',
                  explanation: 'Excelente fórmula de cortesía y comunicación auténtica.'
                },
                {
                  id: 'c2',
                  text: 'Tengo sesenta y ocho años.',
                  englishHint: 'I am sixty-eight years old.',
                  isCorrect: false,
                  npcResponse: '¡Vaya! Pero te preguntaba por tu país de origen.',
                  explanation: 'No responde a la pregunta de procedencia.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'toledo-10',
        cityId: 'toledo',
        levelNumber: 10,
        title: 'Maestría Toledana',
        subtitle: 'Consolidación de números, profesiones y adjetivos',
        tier: 'hot',
        syllabusTopic: 'M1.Sintesis',
        description: 'La última prueba en Toledo antes de afrontar el enigma del taller.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm1-tol-17',
            type: 'fill-blank',
            prompt: 'Para 78 decimos: "setenta ____ ocho".',
            englishPrompt: 'For 78 we say: "setenta y ocho".',
            audioText: 'y',
            options: ['y', 'e', 'con', '-'],
            correctAnswer: 'y',
            explanation: 'La conjunción "y" une las decenas con las unidades desde el 31 hasta el 99.',
            hints: ['La letra que significa "and" en español.'],
            syllabusRef: 'M1-NUM1',
            difficulty: 'hot'
          },
          {
            id: 'm1-tol-18',
            type: 'multiple-choice',
            prompt: '¿Cuál de las siguientes palabras es un sustantivo femenino singular?',
            englishPrompt: 'Which of the following words is a feminine singular noun?',
            audioText: 'la espada',
            options: ['la espada', 'el alcázar', 'los días', 'el puente'],
            correctAnswer: 'la espada',
            explanation: '"La espada" lleva artículo femenino "la" y termina en -a, siendo femenino singular.',
            hints: ['Lleva el artículo "la".'],
            syllabusRef: 'M1-ART',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-toledo',
      cityId: 'toledo',
      title: 'El Enigma del Maestro Artesano de Toledo',
      characterName: 'Maestro Don Alonso',
      characterRole: 'Guardián del Gremio de Espaderos',
      scenario: 'Para entregarte la legendaria "Daga de Gramática Toledana" y el pase hacia Salamanca, Don Alonso pone a prueba tu dominio de los números compuestos, las profesiones y la concordancia de adjetivos.',
      objectives: [
        { id: 'tol-obj1', description: 'Calcular y escribir cifras exactas hasta 100', syllabusTopic: 'M1.Numeros' },
        { id: 'tol-obj2', description: 'Aplicar la concordancia de género en adjetivos y oficios', syllabusTopic: 'M1.Profesiones' },
        { id: 'tol-obj3', description: 'Usar correctamente los días de la semana y artículos', syllabusTopic: 'M1.DiasSemana' }
      ],
      requiredScorePercent: 80,
      xpReward: 350,
      coinReward: 500,
      badgeName: 'Medalla del Gremio Toledano',
      badgeIcon: '🗡️',
      questions: [
        {
          id: 'b-tol-1',
          type: 'multiple-choice',
          prompt: 'Don Alonso: "La espada cuesta 96 monedas de oro. ¿Cómo se pronuncia y escribe esa cifra?"',
          englishPrompt: 'Don Alonso: "The sword costs 96 gold coins. How is that figure pronounced and written?"',
          audioText: 'noventa y seis',
          options: ['noventa y seis', 'noventiseis', 'noventa seis', 'nueve y seis'],
          correctAnswer: 'noventa y seis',
          explanation: '96 se escribe "noventa y seis", separando la decena y la unidad con la conjunción "y".',
          hints: ['Decena de noventa + y + seis.'],
          syllabusRef: 'M1-NUM1',
          difficulty: 'hard'
        },
        {
          id: 'b-tol-2',
          type: 'fill-blank',
          prompt: 'Don Alonso: "Mi hija Elena también trabaja aquí. Ella ____ una artesana extraordinaria."',
          englishPrompt: 'Don Alonso: "My daughter Elena also works here. She is an extraordinary artisan."',
          audioText: 'es',
          options: ['es', 'está', 'tiene', 'hace'],
          correctAnswer: 'es',
          explanation: 'Para definir la profesión, vocación o condición esencial de una persona se emplea el verbo SER (ella es).',
          hints: ['Forma de tercera persona singular del verbo SER.'],
          syllabusRef: 'M1-SER',
          difficulty: 'hard'
        },
        {
          id: 'b-tol-3',
          type: 'word-order',
          prompt: 'Ordena la inscripción de la hoja de acero: "El trabajo bien hecho es nuestra mayor recompensa"',
          englishPrompt: 'Order the blade inscription: "Work well done is our greatest reward"',
          audioText: 'El trabajo bien hecho es nuestra mayor recompensa',
          sentencePieces: ['hecho', 'recompensa', 'El', 'bien', 'mayor', 'es', 'nuestra', 'trabajo'],
          correctAnswer: 'El trabajo bien hecho es nuestra mayor recompensa',
          explanation: 'Sujeto con participio adjetivado (El trabajo bien hecho) + verbo SER (es) + atributo posesivo (nuestra mayor recompensa).',
          hints: ['Comienza por "El trabajo bien hecho".'],
          syllabusRef: 'M1-ADJ',
          difficulty: 'hot'
        }
      ]
    }
  },
  {
    id: 'salamanca',
    number: 3,
    name: 'Salamanca',
    region: 'Castilla y León',
    landmark: 'Universidad de Salamanca & Plaza Mayor',
    description: 'La cuna del saber y de la primera gramática española de Nebrija. Aquí culminarás el Módulo 1 dominando los números hasta 100.000, los artículos y la concordancia.',
    moduleIndex: 1,
    moduleName: 'Módulo 1: Gran Síntesis, Números hasta 100.000 y Gramática A1',
    coordinates: { x: 38, y: 44 },
    accentColor: '#B45309',
    levels: [
      {
        id: 'salamanca-1',
        cityId: 'salamanca',
        levelNumber: 1,
        title: 'Números Grandes en la Fachada Universitaria',
        subtitle: 'Miles y decenas de miles: del 1.000 al 100.000',
        tier: 'easy',
        syllabusTopic: 'M1.Numeros',
        description: 'Buscando la famosa rana en la fachada plateresca, aprendes a expresar grandes cifras históricas.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-1',
            type: 'multiple-choice',
            prompt: 'La Universidad de Salamanca se fundó en el año 1218. ¿Cómo se dice 1.000 en español?',
            englishPrompt: 'The University of Salamanca was founded in 1218. How do you say 1,000 in Spanish?',
            audioText: 'mil',
            options: ['mil', 'un mil', 'milo', 'miles'],
            correctAnswer: 'mil',
            explanation: 'En español 1.000 se dice simplemente "mil", nunca "un mil". Para plurales indeterminados decimos "miles de estudiantes".',
            hints: ['Solo tres letras: M-I-L.'],
            syllabusRef: 'M1-NUM1',
            difficulty: 'easy'
          },
          {
            id: 'm1-sal-2',
            type: 'fill-blank',
            prompt: 'El número 50.000 en español se escribe: "cincuenta ______".',
            englishPrompt: 'The number 50,000 in Spanish is written: "cincuenta mil".',
            audioText: 'mil',
            options: ['mil', 'miles', 'cientos', 'millones'],
            correctAnswer: 'mil',
            explanation: 'Las decenas y centenas de millar se forman con el número cardinal + mil: cincuenta mil, cien mil.',
            hints: ['La palabra para mil.'],
            syllabusRef: 'M1-NUM1',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'salamanca-2',
        cityId: 'salamanca',
        levelNumber: 2,
        title: 'El Aula Universitaria y Materiales',
        subtitle: 'Vocabulario escolar y artículos indeterminados',
        tier: 'easy',
        syllabusTopic: 'M1.Vocabulario',
        description: 'Te sientas en los antiguos bancos de madera donde enseñó Fray Luis de León.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-3',
            type: 'multiple-choice',
            prompt: '¿Cómo se llama el objeto donde escriben los estudiantes sus notas?',
            englishPrompt: 'What is the object called where students write their notes?',
            audioText: 'el cuaderno',
            options: ['el cuaderno', 'la pizarra', 'el pupitre', 'la ventana'],
            correctAnswer: 'el cuaderno',
            explanation: '"El cuaderno" (o la libreta) es el material escolar donde tomamos notas escritas.',
            hints: ['Objeto con hojas para escribir apuntes.'],
            syllabusRef: 'M1-ART',
            difficulty: 'easy'
          },
          {
            id: 'm1-sal-4',
            type: 'fill-blank',
            prompt: 'Para pedir un bolígrafo prestado decimos: "¿Tienes ____ bolígrafo?"',
            englishPrompt: 'To borrow a pen we say: "Do you have a pen?"',
            audioText: 'un',
            options: ['un', 'una', 'el', 'la'],
            correctAnswer: 'un',
            explanation: '"Bolígrafo" es masculino singular, por lo que el artículo indeterminado correspondiente es "un".',
            hints: ['Artículo indefinido masculino singular.'],
            syllabusRef: 'M1-ART',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'salamanca-3',
        cityId: 'salamanca',
        levelNumber: 3,
        title: 'Preguntar sobre las Palabras en Clase',
        subtitle: 'Recursos comunicativos esenciales del aula de español',
        tier: 'medium',
        syllabusTopic: 'M1.PreguntarPalabras',
        description: 'La profesora explica fórmulas indispensables para interactuar en una clase de español.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-5',
            type: 'multiple-choice',
            prompt: 'Si no sabes el significado de una palabra en español, ¿qué le preguntas al profesor?',
            englishPrompt: 'If you don\'t know the meaning of a Spanish word, what do you ask the teacher?',
            audioText: '¿Qué significa esta palabra?',
            options: ['¿Qué significa esta palabra?', '¿Quién es esta palabra?', '¿Dónde está esta palabra?', '¿Cuándo tiene esta palabra?'],
            correctAnswer: '¿Qué significa esta palabra?',
            explanation: '"¿Qué significa...?" es la pregunta canónica para solicitar la definición o traducción de un vocablo.',
            hints: ['Usa el verbo significar.'],
            syllabusRef: 'M1-DATOS',
            difficulty: 'medium'
          },
          {
            id: 'm1-sal-6',
            type: 'fill-blank',
            prompt: 'Para pedir que te digan cómo se dice algo en español preguntas: "¿Cómo se ______ \'book\' en español?"',
            englishPrompt: 'To ask how to say something in Spanish: "How do you say \'book\' in Spanish?"',
            audioText: 'dice',
            options: ['dice', 'habla', 'escribe', 'llama'],
            correctAnswer: 'dice',
            explanation: '"¿Cómo se dice... en español?" es la estructura comunicativa estándar para pedir una equivalencia.',
            hints: ['Del verbo decir: se dice.'],
            syllabusRef: 'M1-DATOS',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'salamanca-4',
        cityId: 'salamanca',
        levelNumber: 4,
        title: 'Adjetivos Opuestos en el Patio de Escuelas',
        subtitle: 'Adjetivos contrarios y su concordancia',
        tier: 'medium',
        syllabusTopic: 'M1.Adjetivos',
        description: 'Frente a la estatua de Fray Luis de León contrastas cualidades físicas y humanas.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-7',
            type: 'multiple-choice',
            prompt: '¿Cuál es el opuesto de "alto" en español?',
            englishPrompt: 'What is the opposite of "alto" in Spanish?',
            audioText: 'bajo',
            options: ['bajo', 'delgado', 'simpático', 'rubio'],
            correctAnswer: 'bajo',
            explanation: 'El antónimo de alto (tall) es bajo (short). Ambos concuerdan en género: alto/alta, bajo/baja.',
            hints: ['Empieza por la letra B.'],
            syllabusRef: 'M1-ADJ',
            difficulty: 'medium'
          },
          {
            id: 'm1-sal-8',
            type: 'fill-blank',
            prompt: 'El opuesto de "fácil" es "______".',
            englishPrompt: 'The opposite of "fácil" is "difícil".',
            audioText: 'difícil',
            options: ['difícil', 'malo', 'aburrido', 'caro'],
            correctAnswer: 'difícil',
            explanation: '"Difícil" (hard/difficult) es el antónimo directo de "fácil". Ambos llevan tilde en la penúltima sílaba por ser palabras llanas terminadas en -l.',
            hints: ['Lleva tilde en la segunda i: d-i-f-í-c-i-l.'],
            syllabusRef: 'M1-ADJ',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'salamanca-5',
        cityId: 'salamanca',
        levelNumber: 5,
        title: 'Pronombres y Verbo SER Plurales',
        subtitle: 'Conjugación de nosotros, vosotros, ellos con SER',
        tier: 'tough',
        syllabusTopic: 'M1.VerboSER',
        description: 'En el claustro gótico analizas la estructura plural del verbo SER.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-9',
            type: 'multiple-choice',
            prompt: 'Completa: "Carlos y Lucía ______ estudiantes de filología hispánica."',
            englishPrompt: 'Complete: "Carlos and Lucía are Hispanic philology students."',
            audioText: 'son',
            options: ['son', 'somos', 'sois', 'están'],
            correctAnswer: 'son',
            explanation: 'Carlos y Lucía equivale a la tercera persona del plural (ellos), por tanto se usa "son".',
            hints: ['Tercera persona del plural: ellos son.'],
            syllabusRef: 'M1-SER',
            difficulty: 'tough'
          },
          {
            id: 'm1-sal-10',
            type: 'fill-blank',
            prompt: 'Para decir "You all are very polite" en España de manera informal decimos: "Vosotros ______ muy amables."',
            englishPrompt: 'To say "You all are very polite" in Spain informally: "Vosotros sois muy amables."',
            audioText: 'sois',
            options: ['sois', 'somos', 'son', 'erais'],
            correctAnswer: 'sois',
            explanation: 'En el español peninsular "vosotros" se conjuga sistemáticamente como "sois" con el verbo SER.',
            hints: ['Forma de vosotros del verbo SER.'],
            syllabusRef: 'M1-SER',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'salamanca-6',
        cityId: 'salamanca',
        levelNumber: 6,
        title: 'Género y Número Irregulares',
        subtitle: 'Sustantivos que terminan en -ma y palabras especiales',
        tier: 'tough',
        syllabusTopic: 'M1.Articulos',
        description: 'La profesora Lucía explica excepciones gramaticales de origen griego muy comunes en el idioma.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-11',
            type: 'multiple-choice',
            prompt: '¿Cuál es el artículo correcto para el sustantivo "problema"?',
            englishPrompt: 'What is the correct article for the noun "problema"?',
            audioText: 'el problema',
            options: ['el problema', 'la problema', 'las problema', 'un problema femenina'],
            correctAnswer: 'el problema',
            explanation: 'Palabras de raíz griega terminadas en -ma (como el problema, el tema, el idioma, el sistema) son gramaticalmente masculinas.',
            hints: ['Es una excepción clásica: termina en -a pero es masculino.'],
            syllabusRef: 'M1-ART',
            difficulty: 'tough'
          },
          {
            id: 'm1-sal-12',
            type: 'fill-blank',
            prompt: 'Para el sustantivo "día" decimos: "______ buen día".',
            englishPrompt: 'For the noun "día" we say: "un buen día".',
            audioText: 'un',
            options: ['un', 'una', 'la', 'unas'],
            correctAnswer: 'un',
            explanation: '"El día" y "un día" son masculinos, a pesar de terminar en -a (¡Buenos días!).',
            hints: ['Artículo masculino singular.'],
            syllabusRef: 'M1-ART',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'salamanca-7',
        cityId: 'salamanca',
        levelNumber: 7,
        title: 'Construcción Sintáctica de Descripciones',
        subtitle: 'Orden de palabras en descripciones personales complejas',
        tier: 'hard',
        syllabusTopic: 'M1.Sintaxis',
        description: 'En la biblioteca histórica ordenas frases descriptivas elaboradas.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-13',
            type: 'word-order',
            prompt: 'Ordena la frase: "La profesora de gramática es simpática y muy trabajadora"',
            englishPrompt: 'Order the sentence: "The grammar teacher is friendly and very hard-working"',
            audioText: 'La profesora de gramática es simpática y muy trabajadora',
            sentencePieces: ['profesora', 'La', 'de', 'es', 'simpática', 'gramática', 'y', 'trabajadora', 'muy'],
            correctAnswer: 'La profesora de gramática es simpática y muy trabajadora',
            explanation: 'Sujeto nominal completo (La profesora de gramática) + cópula SER (es) + adjetivo 1 (simpática) + nexo + cuantificador y adjetivo 2 (muy trabajadora).',
            hints: ['Inicia con "La profesora de gramática".'],
            syllabusRef: 'M1-ADJ',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'salamanca-8',
        cityId: 'salamanca',
        levelNumber: 8,
        title: 'Diálogo de Matrícula Universitaria',
        subtitle: 'Trámite administrativo de inscripción académica',
        tier: 'hard',
        syllabusTopic: 'M1.Comunicacion',
        description: 'Formalizas tu ficha de estudiante internacional en la secretaría del curso.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-14',
            type: 'dialogue',
            prompt: 'Inscripción en la secretaría académica:',
            englishPrompt: 'Registration at the academic secretariat:',
            audioText: 'Buenas tardes. Para tramitar su carné de estudiante, ¿cuál es su profesión y su país de origen?',
            correctAnswer: 'Buenas tardes. Soy estudiante universitario y soy de Inglaterra.',
            explanation: 'Respuesta formal que aporta exactamente los dos datos solicitados con el verbo SER.',
            hints: ['Indica tu ocupación de estudiante y tu procedencia nacional.'],
            syllabusRef: 'M1-DATOS',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Secretario Miguel',
              npcRole: 'Oficial de Registro Académico',
              prompt: 'Buenas tardes. Para tramitar su carné de estudiante, ¿cuál es su profesión y su país de origen?',
              englishPrompt: 'Good afternoon. To process your student card, what is your profession and country of origin?',
              choices: [
                {
                  id: 'c1',
                  text: 'Buenas tardes. Soy estudiante universitario y soy de Inglaterra.',
                  englishHint: 'Good afternoon. I am a university student and I am from England.',
                  isCorrect: true,
                  npcResponse: 'Perfecto. Sus datos quedan registrados correctamente en la Universidad.',
                  explanation: 'Respuesta idónea con SER para profesión y nacionalidad.'
                },
                {
                  id: 'c2',
                  text: 'Tengo un cuaderno azul y dos lápices.',
                  englishHint: 'I have a blue notebook and two pencils.',
                  isCorrect: false,
                  npcResponse: 'Eso está bien para la clase, pero necesito su profesión y nacionalidad.',
                  explanation: 'No responde a la solicitud administrativa.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'salamanca-9',
        cityId: 'salamanca',
        levelNumber: 9,
        title: 'Debate Lingüístico con la Profesora Lucía',
        subtitle: 'Profundización en matices y dudas frecuentes del Módulo 1',
        tier: 'hot',
        syllabusTopic: 'M1.GramaticaAvanzada',
        description: 'La profesora Lucía pone a prueba tu agudeza identificando concordancias correctas e incorrectas.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-15',
            type: 'multiple-choice',
            prompt: '¿Cuál de las siguientes cuatro opciones tiene un error de concordancia de género?',
            englishPrompt: 'Which of the following four options has a gender agreement error?',
            audioText: 'El agua fresca',
            options: ['La mapa antiguo', 'El mapa antiguo', 'La casa blanca', 'El idioma español'],
            correctAnswer: 'La mapa antiguo',
            explanation: '"Mapa" es un sustantivo masculino ("el mapa antiguo"). Decir "La mapa" es un error común.',
            hints: ['Recuerda: el mapa es masculino.'],
            syllabusRef: 'M1-ART',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'salamanca-10',
        cityId: 'salamanca',
        levelNumber: 10,
        title: 'Culminación del Módulo 1',
        subtitle: 'Repaso exhaustivo previo al gran examen de ingreso',
        tier: 'hot',
        syllabusTopic: 'M1.Sintesis',
        description: 'La última parada en las aulas salmantinas antes de la prueba final del Módulo 1.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm1-sal-16',
            type: 'fill-blank',
            prompt: 'Completa con el pronombre de sujeto formal plural usado en España y Latinoamérica: "______ son bienvenidos a la universidad."',
            englishPrompt: 'Complete with the formal plural subject pronoun: "Ustedes son bienvenidos a la universidad."',
            audioText: 'Ustedes',
            options: ['Ustedes', 'Vosotros', 'Ellos', 'Nosotros'],
            correctAnswer: 'Ustedes',
            explanation: '"Ustedes" es el pronombre formal de segunda persona del plural (se conjuga con la 3.ª persona plural: son).',
            hints: ['Pronombre de cortesía en plural.'],
            syllabusRef: 'M1-PRON',
            difficulty: 'hot'
          },
          {
            id: 'm1-sal-17',
            type: 'multiple-choice',
            prompt: '¿Cómo se saluda cordialmente al final de una tarde o entrada la noche?',
            englishPrompt: 'How do you greet cordially at the end of the evening or nightfall?',
            audioText: 'Buenas noches',
            options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hasta la vista'],
            correctAnswer: 'Buenas noches',
            explanation: '"Buenas noches" se usa tanto de saludo como de despedida a partir del anochecer.',
            hints: ['Se usa cuando ya no hay sol.'],
            syllabusRef: 'M1-SALUDOS',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-salamanca',
      cityId: 'salamanca',
      title: 'El Examen de Ingreso de la Universidad de Salamanca',
      characterName: 'Catedrática Lucía de Nebrija',
      characterRole: 'Decana de Filología y Lengua Española',
      scenario: 'En el Paraninfo de la histórica Universidad, la Catedrática Lucía somete tu conocimiento a un examen riguroso de todo el Módulo 1. Si superas el 80% de aciertos, desbloquearás el Módulo 2 y tu viaje hacia Segovia.',
      objectives: [
        { id: 'sal-obj1', description: 'Demostrar perfección en el uso y conjugación de SER', syllabusTopic: 'M1.VerboSER' },
        { id: 'sal-obj2', description: 'Manejar artículos y sustantivos con excepciones de género', syllabusTopic: 'M1.Articulos' },
        { id: 'sal-obj3', description: 'Expresar cifras numéricas complejas hasta 100.000', syllabusTopic: 'M1.Numeros' },
        { id: 'sal-obj4', description: 'Mantener un diálogo académico comunicativo fluido', syllabusTopic: 'M1.Comunicacion' }
      ],
      requiredScorePercent: 80,
      xpReward: 400,
      coinReward: 500,
      badgeName: 'La Rana de Oro de Salamanca',
      badgeIcon: '🐸',
      questions: [
        {
          id: 'b-sal-1',
          type: 'multiple-choice',
          prompt: 'Catedrática Lucía: "Indique la única opción sin ningún error gramatical de género ni número:"',
          englishPrompt: 'Professor Lucía: "Indicate the only option without any error in gender or number:"',
          audioText: 'El sistema universitario español es antiguo y prestigioso',
          options: [
            'El sistema universitario español es antiguo y prestigioso',
            'La sistema universitario española es antigua y prestigiosa',
            'El sistema universitaria español está antiguo y prestigioso',
            'Los sistema universitarios son antiguos y prestigioso'
          ],
          correctAnswer: 'El sistema universitario español es antiguo y prestigioso',
          explanation: '"Sistema" es masculino ("el sistema"). Todos los adjetivos concuerdan en masculino singular: universitario, español, antiguo, prestigioso.',
          hints: ['"Sistema" es una palabra masculina de origen griego.'],
          syllabusRef: 'M1-ART',
          difficulty: 'hard'
        },
        {
          id: 'b-sal-2',
          type: 'fill-blank',
          prompt: 'Catedrática Lucía: "Conjugue el verbo SER para la segunda persona del singular: \'Tú ______ el mejor candidato\'"',
          englishPrompt: 'Professor Lucía: "Conjugate the verb SER for second person singular: \'You are the best candidate\'"',
          audioText: 'eres',
          options: ['eres', 'es', 'somos', 'estás'],
          correctAnswer: 'eres',
          explanation: 'La segunda persona singular de SER es "tú eres".',
          hints: ['Tú eres...'],
          syllabusRef: 'M1-SER',
          difficulty: 'hard'
        },
        {
          id: 'b-sal-3',
          type: 'word-order',
          prompt: 'Ordena el lema histórico salmantino: "El estudio de la lengua abre todas las puertas"',
          englishPrompt: 'Order the historical Salamanca motto: "The study of language opens all doors"',
          audioText: 'El estudio de la lengua abre todas las puertas',
          sentencePieces: ['de', 'abre', 'estudio', 'todas', 'puertas', 'lengua', 'El', 'la', 'las'],
          correctAnswer: 'El estudio de la lengua abre todas las puertas',
          explanation: 'Sintagma nominal sujeto (El estudio de la lengua) + verbo transitivo (abre) + objeto directo plural (todas las puertas).',
          hints: ['Comienza por "El estudio de la lengua".'],
          syllabusRef: 'M1-Sintaxis',
          difficulty: 'hot'
        },
        {
          id: 'b-sal-4',
          type: 'multiple-choice',
          prompt: 'Catedrática Lucía: "¿Cómo se escribe en cifras numéricas \'ochenta y cuatro mil quinientos\'?"',
          englishPrompt: 'Professor Lucía: "How is \'eighty-four thousand five hundred\' written in digits?"',
          audioText: '84.500',
          options: ['84.500', '840.500', '8.450', '84.050'],
          correctAnswer: '84.500',
          explanation: 'Ochenta y cuatro mil (84.000) + quinientos (500) = 84.500.',
          hints: ['84 seguido de 500.'],
          syllabusRef: 'M1-NUM1',
          difficulty: 'medium'
        }
      ]
    }
  }
];
