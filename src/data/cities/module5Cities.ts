import { City } from '../../types';

export const MODULE5_CITIES: City[] = [
  {
    id: 'bilbao',
    number: 13,
    name: 'Bilbao',
    region: 'País Vasco',
    landmark: 'Museo Guggenheim & Casco Viejo (Siete Calles)',
    description: 'La capital vizcaína de titanio y gastronomía de pintxos. Aquí dominarás los nombres de los alimentos, las bebidas tradicionales, el verbo irregular IR y las estructuras de desplazamiento hacia lugares de la ciudad.',
    moduleIndex: 5,
    moduleName: 'Módulo 5: Gastronomía, Alimentos, Bebidas y el Verbo IR',
    coordinates: { x: 52, y: 20 },
    accentColor: '#14B8A6',
    levels: [
      {
        id: 'bilbao-1',
        cityId: 'bilbao',
        levelNumber: 1,
        title: 'Alimentos y Tapas en las Siete Calles',
        subtitle: 'Vocabulario gastronómico: tortilla, queso, jamón, pan, pescado',
        tier: 'easy',
        syllabusTopic: 'M5.Comida',
        description: 'Paseas por el corazón del Casco Viejo bilbaíno descubriendo los ingredientes estrella.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se llama la emblemática preparación española hecha con patatas, huevos y a veces cebolla?',
            englishPrompt: 'What is the iconic Spanish dish made with potatoes, eggs, and sometimes onion called?',
            audioText: 'la tortilla de patatas',
            options: ['la tortilla de patatas', 'el gazpacho', 'la paella mixta', 'el flan de huevo'],
            correctAnswer: 'la tortilla de patatas',
            explanation: '"La tortilla de patatas" (o tortilla española) es el plato universal de la gastronomía española.',
            hints: ['Lleva patatas y huevo batido.'],
            syllabusRef: 'M5-COMIDA',
            difficulty: 'easy'
          },
          {
            id: 'm5-bil-2',
            type: 'fill-blank',
            prompt: 'Para acompañar los pintxos siempre pedimos una rebanada de: "el ______".',
            englishPrompt: 'To accompany pintxos we always order a slice of: "el pan".',
            audioText: 'pan',
            options: ['pan', 'arroz', 'azúcar', 'sal'],
            correctAnswer: 'pan',
            explanation: '"El pan" es el alimento básico sobre el cual se montan los tradicionales pintxos vascos.',
            hints: ['Palabra de tres letras: p-a-n.'],
            syllabusRef: 'M5-COMIDA',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'bilbao-2',
        cityId: 'bilbao',
        levelNumber: 2,
        title: 'Las Bebidas en la Barra',
        subtitle: 'Agua, café con leche, té, vino, zumo',
        tier: 'easy',
        syllabusTopic: 'M5.Bebidas',
        description: 'Aprendes a pedir bebidas en la animada Plaza Nueva de Bilbao.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-3',
            type: 'multiple-choice',
            prompt: '¿Cómo se pide un café preparado con mitad café y mitad leche caliente?',
            englishPrompt: 'How do you order coffee made with half coffee and half hot milk?',
            audioText: 'un café con leche',
            options: ['un café con leche', 'un café solo', 'un café cortado', 'un café descafeinado'],
            correctAnswer: 'un café con leche',
            explanation: 'En España: café solo (espresso negro), café cortado (espresso con unas gotas de leche), café con leche (mitad y mitad en taza grande).',
            hints: ['Lleva café y leche a partes iguales.'],
            syllabusRef: 'M5-BEBIDAS',
            difficulty: 'easy'
          },
          {
            id: 'm5-bil-4',
            type: 'fill-blank',
            prompt: 'Para pedir agua sin burbujas decimos: "Un vaso de agua ______ gas, por favor."',
            englishPrompt: 'To ask for still water we say: "Un vaso de agua sin gas, por favor."',
            audioText: 'sin',
            options: ['sin', 'con', 'de', 'para'],
            correctAnswer: 'sin',
            explanation: '"Agua sin gas" es agua natural corriente (still water); "agua con gas" es agua carbonatada (sparkling water).',
            hints: ['Preposición "sin".'],
            syllabusRef: 'M5-BEBIDAS',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'bilbao-3',
        cityId: 'bilbao',
        levelNumber: 3,
        title: 'El Verbo IR en Presente',
        subtitle: 'Conjugación irregular completa: voy, vas, va, vamos, vais, van',
        tier: 'medium',
        syllabusTopic: 'M5.VerboIR',
        description: 'Junto a la ría del Nervión practicas las formas del verbo IR.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-5',
            type: 'multiple-choice',
            prompt: '¿Cuál es la conjugación de la primera persona singular (yo) del verbo IR en presente?',
            englishPrompt: 'What is the first person singular (yo) of the verb IR in present?',
            audioText: 'yo voy',
            options: ['voy', 'vo', 'vas', 'iré'],
            correctAnswer: 'voy',
            explanation: 'El verbo IR es totalmente irregular en presente: yo voy, tú vas, él/ella va, nosotros vamos, vosotros vais, ellos van.',
            hints: ['Termina en -oy como doy o soy.'],
            syllabusRef: 'M5-IR',
            difficulty: 'medium'
          },
          {
            id: 'm5-bil-6',
            type: 'fill-blank',
            prompt: 'Completa para primera persona plural: "Nosotros ______ al Museo Guggenheim esta tarde."',
            englishPrompt: 'Complete for first person plural: "Nosotros vamos al Museo Guggenheim esta tarde."',
            audioText: 'vamos',
            options: ['vamos', 'vais', 'van', 'voy'],
            correctAnswer: 'vamos',
            explanation: 'La forma de nosotros para el verbo IR es "vamos": ¡Nosotros vamos!',
            hints: ['Forma de nosotros del verbo IR.'],
            syllabusRef: 'M5-IR',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'bilbao-4',
        cityId: 'bilbao',
        levelNumber: 4,
        title: 'Estructura IR A + Lugar y la Contracción AL',
        subtitle: 'A + el = AL (voy al mercado, voy a la taberna)',
        tier: 'medium',
        syllabusTopic: 'M5.VerboIR',
        description: 'La regla de contracción obligatoria de la preposición A con el artículo masculino EL.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-7',
            type: 'multiple-choice',
            prompt: '¿Por qué decimos "Voy AL restaurante" pero "Voy A LA cafetería"?',
            englishPrompt: 'Why do we say "Voy AL restaurante" but "Voy A LA cafetería"?',
            audioText: 'Porque la preposición \'a\' y el artículo masculino \'el\' se contraen obligatoriamente en \'al\'',
            options: [
              'Porque la preposición \'a\' y el artículo masculino \'el\' se contraen en \'al\'',
              'Porque los restaurantes son más grandes que las cafeterías',
              'Porque AL es solo para comida y A LA para bebida',
              'Es una contracción opcional de estilo'
            ],
            correctAnswer: 'Porque la preposición \'a\' y el artículo masculino \'el\' se contraen en \'al\'',
            explanation: 'En español la unión de la preposición "a" + artículo masculino "el" genera la contracción gramatical obligatoria "al" (a + el = al). Con femenino se mantiene separado ("a la").',
            hints: ['a + el se convierte en una sola palabra: AL.'],
            syllabusRef: 'M5-IR',
            difficulty: 'medium'
          },
          {
            id: 'm5-bil-8',
            type: 'fill-blank',
            prompt: 'Completa: "El tabernero va ______ mercado de la Ribera para comprar pescado fresco."',
            englishPrompt: 'Complete: "The tavern keeper goes to the Ribera market to buy fresh fish."',
            audioText: 'al',
            options: ['al', 'a el', 'a la', 'en el'],
            correctAnswer: 'al',
            explanation: 'Mercado es masculino singular ("el mercado"), por lo que la preposición "a" se contrae: va al mercado.',
            hints: ['Contracción a + el = al.'],
            syllabusRef: 'M5-IR',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'bilbao-5',
        cityId: 'bilbao',
        levelNumber: 5,
        title: 'Pedir Pintxos en la Barra del Bar',
        subtitle: 'Fórmulas comunicativas en el mostrador: Para mí, ponme, quería...',
        tier: 'tough',
        syllabusTopic: 'M5.Restaurante',
        description: 'El mostrador rebosa de delicias: gulas, bacalao al pil-pil y croquetas.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-9',
            type: 'multiple-choice',
            prompt: '¿Cuál es la fórmula natural y educada para pedir en la barra de un bar de pintxos?',
            englishPrompt: 'What is the natural, polite phrasing to order at a pintxo bar counter?',
            audioText: 'Por favor, ¿me pone un pintxo de tortilla y un vaso de agua?',
            options: [
              'Por favor, ¿me pone un pintxo de tortilla y un vaso de agua?',
              '¡Oye, dame comida ahora mismo!',
              'Yo soy con hambre de pintxos.',
              '¿Por qué tienes pintxos?'
            ],
            correctAnswer: 'Por favor, ¿me pone un pintxo de tortilla y un vaso de agua?',
            explanation: '"¿Me pone...?" o "Para mí, un... por favor" son las fórmulas comunicativas habituales y perfectamente educadas en los bares españoles.',
            hints: ['Usa la fórmula "¿Me pone... por favor?".'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'tough'
          },
          {
            id: 'm5-bil-10',
            type: 'fill-blank',
            prompt: 'Para señalar que quieres consumir allí y no llevarte la comida: "Para tomar ______."',
            englishPrompt: 'To indicate you want to consume inside and not takeout: "Para tomar aquí."',
            audioText: 'aquí',
            options: ['aquí', 'llevar', 'lejos', 'ayer'],
            correctAnswer: 'aquí',
            explanation: 'La distinción en hostelería es: "¿Para tomar aquí o para llevar?".',
            hints: ['Palabra que significa en este lugar: a-q-u-í.'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'bilbao-6',
        cityId: 'bilbao',
        levelNumber: 6,
        title: 'El Futuro Inmediato: IR A + Infinitivo',
        subtitle: 'Expresar planes próximos: voy a comer, vamos a visitar',
        tier: 'tough',
        syllabusTopic: 'M5.VerboIR',
        description: 'Compartes tus planes para la tarde alrededor del puente Zubizuri.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-11',
            type: 'multiple-choice',
            prompt: '¿Cómo se expresa la intención futura inmediata "We are going to visit the museum"?',
            englishPrompt: 'How is the immediate future intention "We are going to visit the museum" expressed?',
            audioText: 'Vamos a visitar el museo',
            options: [
              'Vamos a visitar el museo',
              'Vamos visitar el museo',
              'Vamos en visitar el museo',
              'Estamos a visitar el museo'
            ],
            correctAnswer: 'Vamos a visitar el museo',
            explanation: 'La perífrasis de futuro perifrástico se compone de: Verbo IR conjugado + preposición A obligatoria + verbo en infinitivo (vamos a visitar).',
            hints: ['IR conjugado + A + infinitivo.'],
            syllabusRef: 'M5-IR',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'bilbao-7',
        cityId: 'bilbao',
        levelNumber: 7,
        title: 'Ordenar Frases de Desplazamiento',
        subtitle: 'Sintaxis de desplazamiento y propósitos gastronómicos',
        tier: 'hard',
        syllabusTopic: 'M5.Sintaxis',
        description: 'Redactas la ruta gastronómica para el grupo de viaje.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-12',
            type: 'word-order',
            prompt: 'Ordena la frase: "Nosotros vamos al Casco Viejo a comer pintxos"',
            englishPrompt: 'Order the sentence: "We are going to the Old Town to eat pintxos"',
            audioText: 'Nosotros vamos al Casco Viejo a comer pintxos',
            sentencePieces: ['Viejo', 'comer', 'Casco', 'al', 'pintxos', 'vamos', 'a', 'Nosotros'],
            correctAnswer: 'Nosotros vamos al Casco Viejo a comer pintxos',
            explanation: 'Sujeto (Nosotros) + verbo IR (vamos) + contracción y destino (al Casco Viejo) + finalidad (a comer pintxos).',
            hints: ['Comienza por "Nosotros vamos al Casco Viejo".'],
            syllabusRef: 'M5-IR',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'bilbao-8',
        cityId: 'bilbao',
        levelNumber: 8,
        title: 'Diálogo con el Tabernero Iñaki',
        subtitle: 'Conversación en la barra sobre especialidades vizcaínas',
        tier: 'hard',
        syllabusTopic: 'M5.Comunicacion',
        description: 'Iñaki te recomienda sus mejores cazuelitas de bacalao.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-13',
            type: 'dialogue',
            prompt: 'En la taberna de Iñaki:',
            englishPrompt: 'At Iñaki\'s tavern:',
            audioText: '¡Aupa viajero! Hoy el bacalao al pil-pil ha salido insuperable. ¿Te pongo una cazuelita con un vaso de agua o de zumo?',
            correctAnswer: 'Buenas tardes, Iñaki. Sí, por favor, póngame una cazuelita y un vaso de agua sin gas.',
            explanation: 'Fórmula comunicativa educada con elección precisa de bebida y plato.',
            hints: ['Acepta la recomendación y pide tu bebida preferida.'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Iñaki de Bilbao',
              npcRole: 'Tabernero Mayor del Casco Viejo',
              prompt: '¡Aupa viajero! Hoy el bacalao al pil-pil ha salido insuperable. ¿Te pongo una cazuelita con un vaso de agua o de zumo?',
              englishPrompt: 'Welcome! Today the pil-pil cod is outstanding. Shall I serve you a dish with a glass of water or juice?',
              choices: [
                {
                  id: 'c1',
                  text: 'Buenas tardes, Iñaki. Sí, por favor, póngame una cazuelita y un vaso de agua sin gas.',
                  englishHint: 'Good afternoon, Iñaki. Yes, please serve me a dish and a glass of still water.',
                  isCorrect: true,
                  npcResponse: '¡Marchando! Vas a probar la auténtica gloria de los fogones vascos.',
                  explanation: 'Interacción idónea en un bar de tapas tradicional.'
                },
                {
                  id: 'c2',
                  text: 'Ayer hacía mucho frío en el jardín.',
                  englishHint: 'Yesterday it was very cold in the garden.',
                  isCorrect: false,
                  npcResponse: 'Vaya por Dios, ¡pero aquí dentro el bacalao está bien caliente!',
                  explanation: 'No responde a la comanda.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'bilbao-9',
        cityId: 'bilbao',
        levelNumber: 9,
        title: 'Ruta de Pintxos frente al Guggenheim',
        subtitle: 'Expresar opiniones de sabor: rico, sabroso, delicioso',
        tier: 'hot',
        syllabusTopic: 'M5.Opiniones',
        description: 'Junto a la escultura del perro Puppy valoras la cata de pintxos.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-14',
            type: 'fill-blank',
            prompt: 'Para alabar un plato decimos con ESTAR: "¡Esta tortilla de patatas ______ riquísima!"',
            englishPrompt: 'To praise a dish we say with ESTAR: "¡Esta tortilla de patatas está riquísima!"',
            audioText: 'está',
            options: ['está', 'es', 'tiene', 'hace'],
            correctAnswer: 'está',
            explanation: 'Para opinar sobre el sabor de una comida o bebida al probarla en el momento usamos siempre ESTAR: "Está rica", "Está deliciosa".',
            hints: ['Sabor en el momento de degustar = verbo ESTAR.'],
            syllabusRef: 'M5-OPINIONES',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'bilbao-10',
        cityId: 'bilbao',
        levelNumber: 10,
        title: 'Reto Gastronómico Bilbaíno',
        subtitle: 'Evaluación rápida de alimentos, bebidas, verbo IR y contracción AL',
        tier: 'hot',
        syllabusTopic: 'M5.Sintesis',
        description: 'La última preparación antes del desafío de la Ruta de las Siete Calles.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm5-bil-15',
            type: 'multiple-choice',
            prompt: '¿Cuál de las siguientes frases reúne correctamente el verbo IR y la contracción AL?',
            englishPrompt: 'Which of the following sentences correctly combines the verb IR and contraction AL?',
            audioText: 'Mis amigos van al restaurante vasco a cenar',
            options: [
              'Mis amigos van al restaurante vasco a cenar',
              'Mis amigos van a el restaurante vasco cenar',
              'Mis amigos voy al restaurante vasco en cenar',
              'Mis amigos van en el restaurante vasco por cenar'
            ],
            correctAnswer: 'Mis amigos van al restaurante vasco a cenar',
            explanation: 'Tercera persona plural (ellos van) + contracción gramatical obligatoria (al restaurante) + propósito (a cenar).',
            hints: ['Van + al restaurante.'],
            syllabusRef: 'M5-IR',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-bilbao',
      cityId: 'bilbao',
      title: 'La Ruta de Pintxos de las Siete Calles',
      characterName: 'Chef Iñaki de Bilbao',
      characterRole: 'Maestro de la Cofradía del Bacalao de Vizcaya',
      scenario: 'Iñaki te confía el encargo de liderar a un grupo de catadores internacionales por las tabernas centenarias de Bilbao. Debes demostrar dominio total de los alimentos, bebidas, el verbo IR y la interacción en la barra para conseguir el pase a San Sebastián.',
      objectives: [
        { id: 'bil-obj1', description: 'Reconocer ingredientes, tapas y bebidas sin confusión', syllabusTopic: 'M5.Comida' },
        { id: 'bil-obj2', description: 'Conjugar el verbo irregular IR y aplicar la contracción AL', syllabusTopic: 'M5.VerboIR' },
        { id: 'bil-obj3', description: 'Realizar comandas en la barra con fórmulas comunicativas auténticas', syllabusTopic: 'M5.Restaurante' }
      ],
      requiredScorePercent: 80,
      xpReward: 350,
      coinReward: 500,
      badgeName: 'La Baldosa de Bilbao de Oro',
      badgeIcon: '🍢',
      questions: [
        {
          id: 'b-bil-1',
          type: 'multiple-choice',
          prompt: 'Iñaki: "Organice la comanda para el grupo: dos raciones de tortilla, agua sin gas y una copa de zumo. ¿Cuál es la formulación más cortés y precisa?"',
          englishPrompt: 'Iñaki: "Organize group order: two portions of omelette, still water, and juice. Which is the most polite phrasing?"',
          audioText: 'Buenas tardes. Por favor, ¿nos pone dos raciones de tortilla, un agua sin gas y un zumo de naranja?',
          options: [
            'Buenas tardes. Por favor, ¿nos pone dos raciones de tortilla, un agua sin gas y un zumo de naranja?',
            'Oye, tráeme dos tortillas con agua y zumo rápido.',
            'Nosotros somos dos tortillas y tenemos un zumo con gas.',
            'Buenas noches. Yo voy comer tortillas y tomo zumo.'
          ],
          correctAnswer: 'Buenas tardes. Por favor, ¿nos pone dos raciones de tortilla, un agua sin gas y un zumo de naranja?',
          explanation: 'Saludo cortés, petición colectiva indirecta respetuosa ("¿nos pone...?"), artículos y especificaciones precisas.',
          hints: ['Saludo + ¿nos pone...? + por favor.'],
          syllabusRef: 'M5-RESTAURANTE',
          difficulty: 'hard'
        },
        {
          id: 'b-bil-2',
          type: 'fill-blank',
          prompt: 'Iñaki: "Tras la cata, los comensales ______ al mirador de Artxanda en funicular (ir)."',
          englishPrompt: 'Iñaki: "After tasting, the guests go to Artxanda viewpoint by funicular."',
          audioText: 'van',
          options: ['van', 'vamos', 'vais', 'va'],
          correctAnswer: 'van',
          explanation: 'Sujeto plural "los comensales" (tercera persona plural) = van.',
          hints: ['Tercera persona plural del verbo IR.'],
          syllabusRef: 'M5-IR',
          difficulty: 'hard'
        },
        {
          id: 'b-bil-3',
          type: 'word-order',
          prompt: 'Ordena la sentencia culinaria: "La buena comida alegra el corazón de los viajeros"',
          englishPrompt: 'Order the culinary adage: "Good food gladdens the travelers\' heart"',
          audioText: 'La buena comida alegra el corazón de los viajeros',
          sentencePieces: ['alegra', 'corazón', 'La', 'comida', 'de', 'el', 'buena', 'los', 'viajeros'],
          correctAnswer: 'La buena comida alegra el corazón de los viajeros',
          explanation: 'Sujeto antepuesto con adjetivo valorativo (La buena comida) + verbo transitivo (alegra) + objeto directo (el corazón) + complemento del nombre (de los viajeros).',
          hints: ['Comienza por "La buena comida".'],
          syllabusRef: 'M5-Sintaxis',
          difficulty: 'hot'
        }
      ]
    }
  },
  {
    id: 'san-sebastian',
    number: 14,
    name: 'San Sebastián',
    region: 'País Vasco',
    landmark: 'Bahía de La Concha & Monte Urgull',
    description: 'La capital gastronómica mundial frente al mar Cantábrico. Aquí dominarás las conversaciones formales de restaurante, la estructura del menú del día, las opiniones culinarias y el verbo con cambio vocálico QUERER.',
    moduleIndex: 5,
    moduleName: 'Módulo 5: En el Restaurante, Menú del Día, Opiniones y el Verbo QUERER',
    coordinates: { x: 58, y: 19 },
    accentColor: '#F59E0B',
    levels: [
      {
        id: 'san-sebastian-1',
        cityId: 'san-sebastian',
        levelNumber: 1,
        title: 'En el Restaurante de La Concha',
        subtitle: 'Pedir mesa, la carta y el menú del día',
        tier: 'easy',
        syllabusTopic: 'M5.Restaurante',
        description: 'Llegas a un restaurante marinero con vistas a la isla de Santa Clara.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-1',
            type: 'multiple-choice',
            prompt: 'Al entrar en un restaurante, ¿cómo preguntas al camarero si tienen mesa disponible?',
            englishPrompt: 'Upon entering a restaurant, how do you ask the waiter if a table is available?',
            audioText: 'Buenas tardes, ¿tienen una mesa para dos personas?',
            options: [
              'Buenas tardes, ¿tienen una mesa para dos personas?',
              '¿Dónde me siento ahora?',
              'Tengo una mesa en mi casa.',
              'Soy una mesa de dos.'
            ],
            correctAnswer: 'Buenas tardes, ¿tienen una mesa para dos personas?',
            explanation: '"Buenas tardes, ¿tienen una mesa para... personas?" es la fórmula cortés por excelencia.',
            hints: ['Pregunta cortés sobre mesa disponible.'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'easy'
          },
          {
            id: 'm5-ss-2',
            type: 'fill-blank',
            prompt: 'Para pedir la lista de platos decimos: "¿Nos trae la ______, por favor?"',
            englishPrompt: 'To ask for the list of dishes we say: "¿Nos trae la carta, por favor?"',
            audioText: 'carta',
            options: ['carta', 'cuenta', 'mesa', 'calle'],
            correctAnswer: 'carta',
            explanation: '"La carta" o "el menú" es el documento donde figuran todos los platos y precios del restaurante.',
            hints: ['Palabra de cinco letras: c-a-r-t-a.'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'san-sebastian-2',
        cityId: 'san-sebastian',
        levelNumber: 2,
        title: 'El Verbo QUERER en Presente',
        subtitle: 'Cambio vocálico e -> ie: quiero, quieres, quiere, queremos, queréis, quieren',
        tier: 'easy',
        syllabusTopic: 'M5.VerboQUERER',
        description: 'Aprendes a expresar tus deseos culinarios con el verbo QUERER.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-3',
            type: 'multiple-choice',
            prompt: '¿Cuál es la primera persona singular (yo) del verbo QUERER en presente?',
            englishPrompt: 'What is the first person singular (yo) of the verb QUERER in present?',
            audioText: 'yo quiero',
            options: ['quiero', 'quero', 'quieres', 'quise'],
            correctAnswer: 'quiero',
            explanation: 'QUERER diptonga la e de la raíz en "ie": yo quiero, tú quieres, él quiere, ellos quieren (pero nosotros queremos, vosotros queréis).',
            hints: ['Diptonga en ie: q-u-i-e-r-o.'],
            syllabusRef: 'M5-QUERER',
            difficulty: 'easy'
          },
          {
            id: 'm5-ss-4',
            type: 'fill-blank',
            prompt: 'El camarero pregunta con amabilidad: "¿Qué ______ tomar los señores de primero?" (ustedes).',
            englishPrompt: 'The waiter asks politely: "¿Qué quieren tomar los señores de primero?"',
            audioText: 'quieren',
            options: ['quieren', 'queremos', 'quiero', 'queréis'],
            correctAnswer: 'quieren',
            explanation: '"Los señores" equivale a ustedes (tercera persona plural), por tanto el verbo es "quieren".',
            hints: ['Tercera persona plural con diptongo: quieren.'],
            syllabusRef: 'M5-QUERER',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'san-sebastian-3',
        cityId: 'san-sebastian',
        levelNumber: 3,
        title: 'La Estructura del Menú del Día',
        subtitle: 'Primer plato, segundo plato, postre y pan con bebida',
        tier: 'medium',
        syllabusTopic: 'M5.Restaurante',
        description: 'Comprendes cómo se compone el tradicional menú del día español.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-5',
            type: 'multiple-choice',
            prompt: '¿Cuáles son las tres partes principales de una comida en el menú del día español?',
            englishPrompt: 'What are the three main courses of a Spanish fixed-price menu (menú del día)?',
            audioText: 'primer plato, segundo plato y postre',
            options: [
              'primer plato, segundo plato y postre',
              'desayuno, almuerzo y cena',
              'tapa, caña y café',
              'ensalada, sopa y pan'
            ],
            correctAnswer: 'primer plato, segundo plato y postre',
            explanation: 'El menú del día consta típicamente de: Primer plato (entrante o sopa/ensalada), Segundo plato (carne o pescado) y Postre (dulce o fruta), habitualmente con pan y bebida incluidos.',
            hints: ['Primero, segundo y postre.'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'medium'
          },
          {
            id: 'm5-ss-6',
            type: 'fill-blank',
            prompt: 'El plato dulce que se toma al final de la comida se llama: "el ______".',
            englishPrompt: 'The sweet dish eaten at the end of the meal is called: "el postre".',
            audioText: 'postre',
            options: ['postre', 'entrante', 'segundo', 'aperitivo'],
            correctAnswer: 'postre',
            explanation: '"El postre" (flan, tarta de queso, fruta) es el plato de cierre de la comida.',
            hints: ['Palabra que empieza por p-o-s...'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'san-sebastian-4',
        cityId: 'san-sebastian',
        levelNumber: 4,
        title: 'Opiniones sobre los Alimentos',
        subtitle: 'Adjetivos de sabor y temperatura: rico, salado, dulce, caliente, frío',
        tier: 'medium',
        syllabusTopic: 'M5.Opiniones',
        description: 'Describes las sensaciones gustativas de la cocina donostiarra.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-7',
            type: 'multiple-choice',
            prompt: 'Si una sopa tiene demasiada sal, ¿cómo lo decimos en español con ESTAR?',
            englishPrompt: 'If a soup has too much salt, how do we say it in Spanish with ESTAR?',
            audioText: 'La sopa está muy salada',
            options: ['La sopa está muy salada', 'La sopa es muy sal', 'La sopa tiene muy salada', 'La sopa hace salada'],
            correctAnswer: 'La sopa está muy salada',
            explanation: 'Usamos ESTAR + adjetivo femenino ("salada") para valorar el estado o sabor del plato preparado.',
            hints: ['ESTAR + adjetivo concordante salada.'],
            syllabusRef: 'M5-OPINIONES',
            difficulty: 'medium'
          },
          {
            id: 'm5-ss-8',
            type: 'fill-blank',
            prompt: 'El opuesto de salado es: "______" (como el azúcar o la miel).',
            englishPrompt: 'The opposite of salty is: "dulce".',
            audioText: 'dulce',
            options: ['dulce', 'amargo', 'ácido', 'picante'],
            correctAnswer: 'dulce',
            explanation: '"Dulce" es el sabor característico del azúcar, postres y frutas maduras.',
            hints: ['Sabor dulce.'],
            syllabusRef: 'M5-OPINIONES',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'san-sebastian-5',
        cityId: 'san-sebastian',
        levelNumber: 5,
        title: 'QUERER + Infinitivo en Restaurantes',
        subtitle: 'Quiero pedir, queremos probar, ¿qué quieres comer?',
        tier: 'tough',
        syllabusTopic: 'M5.VerboQUERER',
        description: 'Expresas deseos culinarios combinando el auxiliar QUERER con otros verbos.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-9',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice formalmente al camarero "I would like to order the grilled hake"?',
            englishPrompt: 'How do you say politely to the waiter "I would like to order the grilled hake"?',
            audioText: 'Quisiera pedir la merluza a la plancha / Quiero pedir la merluza',
            options: [
              'Quisiera pedir la merluza a la plancha / Quiero pedir la merluza',
              'Tengo pedir la merluza a la plancha',
              'Soy pedir la merluza a la plancha',
              'Hago pedir la merluza a la plancha'
            ],
            correctAnswer: 'Quisiera pedir la merluza a la plancha / Quiero pedir la merluza',
            explanation: 'QUERER + infinitivo (Quiero pedir) o la forma de cortesía condicional/subjuntivo "Quisiera pedir" son las fórmulas predilectas.',
            hints: ['Quiero pedir o quisiera pedir.'],
            syllabusRef: 'M5-QUERER',
            difficulty: 'tough'
          },
          {
            id: 'm5-ss-10',
            type: 'fill-blank',
            prompt: 'Completa: "Mis amigos y yo ______ probar la famosa tarta de queso quemada de La Viña (querer)."',
            englishPrompt: 'Complete: "My friends and I want to try the famous burnt cheesecake from La Viña."',
            audioText: 'queremos',
            options: ['queremos', 'quieren', 'quiero', 'queréis'],
            correctAnswer: 'queremos',
            explanation: '"Mis amigos y yo" equivale a nosotros, y en nosotros QUERER no diptonga: queremos.',
            hints: ['Nosotros queremos (sin diptongo ie).'],
            syllabusRef: 'M5-QUERER',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'san-sebastian-6',
        cityId: 'san-sebastian',
        levelNumber: 6,
        title: 'Pedir la Cuenta y Propinas',
        subtitle: 'La cuenta por favor, pagar con tarjeta o en efectivo',
        tier: 'tough',
        syllabusTopic: 'M5.Restaurante',
        description: 'Llega el momento de cerrar la velada gastronómica en el restaurante.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-11',
            type: 'multiple-choice',
            prompt: 'Al terminar la comida, ¿cómo se pide el importe total al camarero en España?',
            englishPrompt: 'When finishing the meal, how do you ask the waiter for the bill in Spain?',
            audioText: 'La cuenta, por favor',
            options: ['La cuenta, por favor', 'El cheque, por favor', 'La receta, por favor', 'El dinero, por favor'],
            correctAnswer: 'La cuenta, por favor',
            explanation: 'En España se dice siempre "La cuenta, por favor". "El cheque" es un talón bancario y "la receta" es médica o culinaria.',
            hints: ['Se pide "la cuenta".'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'tough'
          },
          {
            id: 'm5-ss-12',
            type: 'fill-blank',
            prompt: 'Para preguntar el medio de pago: "¿Puedo pagar ______ tarjeta de crédito?"',
            englishPrompt: 'To ask payment method: "¿Puedo pagar con tarjeta de crédito?"',
            audioText: 'con',
            options: ['con', 'en', 'por', 'de'],
            correctAnswer: 'con',
            explanation: 'Se dice "pagar con tarjeta" o "pagar en efectivo" (o en metálico).',
            hints: ['Preposición "con".'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'san-sebastian-7',
        cityId: 'san-sebastian',
        levelNumber: 7,
        title: 'Ordenar una Conversación de Restaurante',
        subtitle: 'Sintaxis del diálogo secuencial comensal-camarero',
        tier: 'hard',
        syllabusTopic: 'M5.Sintaxis',
        description: 'Reconstruyes el protocolo completo de un servicio gastronómico.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-13',
            type: 'word-order',
            prompt: 'Ordena la frase: "De primero quiero sopa de pescado y de segundo merluza"',
            englishPrompt: 'Order the sentence: "For first course I want fish soup and for second hake"',
            audioText: 'De primero quiero sopa de pescado y de segundo merluza',
            sentencePieces: ['segundo', 'pescado', 'primero', 'De', 'merluza', 'quiero', 'de', 'sopa', 'y', 'de'],
            correctAnswer: 'De primero quiero sopa de pescado y de segundo merluza',
            explanation: 'Marcador de curso 1 (De primero) + verbo deseo (quiero) + plato 1 (sopa de pescado) + nexo y marcador 2 (y de segundo) + plato 2 (merluza).',
            hints: ['Comienza por "De primero quiero sopa de pescado".'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'san-sebastian-8',
        cityId: 'san-sebastian',
        levelNumber: 8,
        title: 'Diálogo con la Chef Maite',
        subtitle: 'Interacción gourmet con la jefa de cocina donostiarra',
        tier: 'hard',
        syllabusTopic: 'M5.Comunicacion',
        description: 'La afamada chef Maite se acerca a tu mesa a preguntar por la experiencia.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-14',
            type: 'dialogue',
            prompt: 'En el comedor con la chef Maite:',
            englishPrompt: 'In the dining room with chef Maite:',
            audioText: '¡Buenas noches! Soy Maite, la jefa de cocina. ¿Qué tal ha estado el txangurro al horno y la tarta de queso?',
            correctAnswer: 'Buenas noches, Maite. Todo ha estado absolutamente delicioso y exquisito, ¡muchas felicidades!',
            explanation: 'Elogio culinario entusiasta y perfectamente construido con adjetivos gastronómicos.',
            hints: ['Felicita a la chef y destaca que la comida ha estado deliciosa.'],
            syllabusRef: 'M5-OPINIONES',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Chef Maite de Donostia',
              npcRole: 'Cocinera Mayor de la Parte Vieja',
              prompt: '¡Buenas noches! Soy Maite, la jefa de cocina. ¿Qué tal ha estado el txangurro al horno y la tarta de queso?',
              englishPrompt: 'Good evening! I am Maite, head chef. How were the baked spider crab and the cheesecake?',
              choices: [
                {
                  id: 'c1',
                  text: 'Buenas noches, Maite. Todo ha estado absolutamente delicioso y exquisito, ¡muchas felicidades!',
                  englishHint: 'Good evening, Maite. Everything was absolutely delicious and exquisite, congratulations!',
                  isCorrect: true,
                  npcResponse: '¡Eskerrik asko, de todo corazón! Saber que disfrutan nuestros platos es la mejor recompensa.',
                  explanation: 'Excelente fórmula comunicativa y cortesía de comensal.'
                },
                {
                  id: 'c2',
                  text: 'Mañana me voy a levantar a las siete en punto.',
                  englishHint: 'Tomorrow I am going to get up at seven sharp.',
                  isCorrect: false,
                  npcResponse: '¡Madrugar es bueno! Pero te preguntaba por el sabor de la cena.',
                  explanation: 'Fuera de contexto.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'san-sebastian-9',
        cityId: 'san-sebastian',
        levelNumber: 9,
        title: 'Cena de Gala en el Monte Igueldo',
        subtitle: 'Expresar preferencias y solicitar modificaciones dietéticas',
        tier: 'hot',
        syllabusTopic: 'M5.Restaurante',
        description: 'Ante la panorámica de La Concha iluminada formulas peticiones dietéticas especiales.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-15',
            type: 'multiple-choice',
            prompt: 'Si una persona es vegetariana o alérgica al marisco, ¿cómo lo comunica al camarero?',
            englishPrompt: 'If a person is vegetarian or allergic to seafood, how do they inform the waiter?',
            audioText: 'Disculpe, soy alérgico al marisco, ¿este plato lleva gambas?',
            options: [
              'Disculpe, soy alérgico al marisco, ¿este plato lleva gambas?',
              'Disculpe, estoy alérgico y tengo gambas en la mesa.',
              'No quiero comer porque soy marisco.',
              '¿Por qué las gambas son alérgicas a mí?'
            ],
            correctAnswer: 'Disculpe, soy alérgico al marisco, ¿este plato lleva gambas?',
            explanation: '"Soy alérgico a..." se construye con SER (condición física permanente) + preposición A obligatoria.',
            hints: ['SER alérgico A + sustantivo.'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'san-sebastian-10',
        cityId: 'san-sebastian',
        levelNumber: 10,
        title: 'Reto Gourmet de Donostia',
        subtitle: 'Síntesis de menús, opiniones, pagos y el verbo QUERER',
        tier: 'hot',
        syllabusTopic: 'M5.Sintesis',
        description: 'La última evaluación previa al gran desafío gastronómico con la chef.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm5-ss-16',
            type: 'fill-blank',
            prompt: 'Completa: "¿Cuánto es todo? Queremos pagar ______ la cuenta ahora mismo."',
            englishPrompt: 'Complete: "How much is everything? We want to pay the bill right now."',
            audioText: 'la',
            options: ['la', 'el', 'un', 'las'],
            correctAnswer: 'la',
            explanation: '"La cuenta" es un sustantivo femenino singular.',
            hints: ['Artículo femenino de la cuenta.'],
            syllabusRef: 'M5-RESTAURANTE',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-san-sebastian',
      cityId: 'san-sebastian',
      title: 'La Cena con la Chef de la Parte Vieja',
      characterName: 'Chef Estrella Maite',
      characterRole: 'Maestra de Honor de la Cocina Donostiarra',
      scenario: 'La Chef Maite te sienta en la mesa presidencial del restaurante más célebre de San Sebastián. Para conseguir tu diploma gastronómico y el pasaporte final hacia Santiago de Compostela, debes dirigir el servicio de un banquete completo, ordenando platos, opinando con precisión y pidiendo la cuenta en español impecable.',
      objectives: [
        { id: 'ss-obj1', description: 'Dominar la conjugación de QUERER con cambio vocálico', syllabusTopic: 'M5.VerboQUERER' },
        { id: 'ss-obj2', description: 'Manejar la estructura del menú del día y sus tres tiempos', syllabusTopic: 'M5.Restaurante' },
        { id: 'ss-obj3', description: 'Expresar opiniones de sabor con ESTAR y solicitar la cuenta formalmente', syllabusTopic: 'M5.Opiniones' }
      ],
      requiredScorePercent: 80,
      xpReward: 350,
      coinReward: 500,
      badgeName: 'El Gorro de Oro de Donostia',
      badgeIcon: '👨‍🍳',
      questions: [
        {
          id: 'b-ss-1',
          type: 'multiple-choice',
          prompt: 'Maite: "Para ordenar el menú para dos comensales de manera impecable, ¿cuál es la fórmula más precisa?"',
          englishPrompt: 'Maite: "To order the menu for two guests impeccably, which is the most precise phrasing?"',
          audioText: 'De primero queremos ensalada templada y de segundo merluza con verduras.',
          options: [
            'De primero queremos ensalada templada y de segundo merluza con verduras.',
            'De primero somos ensalada templada y de segundo estamos merluza.',
            'En primero queréis ensalada templada y en segundo merluza.',
            'Por primero hacemos ensalada templada y por segundo tenemos merluza.'
          ],
          correctAnswer: 'De primero queremos ensalada templada y de segundo merluza con verduras.',
          explanation: '"De primero queremos... y de segundo..." es la estructura canónica en la restauración española.',
          hints: ['De primero queremos... y de segundo...'],
          syllabusRef: 'M5-RESTAURANTE',
          difficulty: 'hard'
        },
        {
          id: 'b-ss-2',
          type: 'fill-blank',
          prompt: 'Maite: "La merluza a la vasca ______ muy caliente y el vino blanco ______ delicioso (estar)."',
          englishPrompt: 'Maite: "The Basque-style hake is very hot and the white wine is delicious (estar)."',
          audioText: 'está / está',
          options: ['está / está', 'es / es', 'está / es', 'es / está'],
          correctAnswer: 'está / está',
          explanation: 'Tanto la temperatura física de la comida ("está muy caliente") como la degustación de su sabor exquisito ("está delicioso") se expresan con el verbo ESTAR.',
          hints: ['Ambos llevan el verbo ESTAR para temperatura y sabor inmediato.'],
          syllabusRef: 'M5-OPINIONES',
          difficulty: 'hard'
        },
        {
          id: 'b-ss-3',
          type: 'word-order',
          prompt: 'Ordena la frase para cerrar la velada: "Camarero, ¿nos trae la cuenta por favor? Queremos pagar con tarjeta"',
          englishPrompt: 'Order the sentence to close the evening: "Waiter, will you bring us the bill please? We want to pay by card"',
          audioText: 'Camarero, ¿nos trae la cuenta por favor? Queremos pagar con tarjeta',
          sentencePieces: ['trae', 'con', 'tarjeta', 'Camarero,', 'pagar', 'la', 'cuenta', 'por favor?', '¿nos', 'Queremos'],
          correctAnswer: 'Camarero, ¿nos trae la cuenta por favor? Queremos pagar con tarjeta',
          explanation: 'Llamada al servicio (Camarero) + petición formal (¿nos trae la cuenta por favor?) + intención y método de abono (Queremos pagar con tarjeta).',
          hints: ['Comienza por "Camarero, ¿nos trae la cuenta por favor?".'],
          syllabusRef: 'M5-Sintaxis',
          difficulty: 'hot'
        }
      ]
    }
  },
  {
    id: 'santiago',
    number: 15,
    name: 'Santiago de Compostela',
    region: 'Galicia',
    landmark: 'Plaza del Obradoiro & Catedral de Santiago',
    description: 'La meta milenaria del Camino de Santiago. En el corazón de la piedra gallega culminarás las 15 ciudades dominando la orientación urbana, los servicios cívicos y el verbo modal PODER para pedir favores y permisos.',
    moduleIndex: 5,
    moduleName: 'Módulo 5: Ubicar Sitios en la Ciudad y el Verbo PODER',
    coordinates: { x: 22, y: 22 },
    accentColor: '#6366F1',
    levels: [
      {
        id: 'santiago-1',
        cityId: 'santiago',
        levelNumber: 1,
        title: 'Ubicar Sitios en la Ciudad Vieja',
        subtitle: 'Farmacia, banco, hospital, museo, catedral, oficina de turismo',
        tier: 'easy',
        syllabusTopic: 'M5.Sitios',
        description: 'Llegas como peregrino y buscas los puntos de auxilio e información.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se llama el establecimiento donde compramos medicinas en España?',
            englishPrompt: 'What is the store where we buy medicine in Spain called?',
            audioText: 'la farmacia',
            options: ['la farmacia', 'el hospital', 'el banco', 'la biblioteca'],
            correctAnswer: 'la farmacia',
            explanation: '"La farmacia" es el establecimiento sanitario identificado con una cruz verde luminosa donde se expenden medicamentos.',
            hints: ['Lleva una cruz verde en la fachada.'],
            syllabusRef: 'M5-SITIOS',
            difficulty: 'easy'
          },
          {
            id: 'm5-san-2',
            type: 'fill-blank',
            prompt: 'Para cambiar divisa o retirar euros de un cajero automático vamos: "al ______".',
            englishPrompt: 'To exchange currency or withdraw euros from an ATM we go: "al banco".',
            audioText: 'banco',
            options: ['banco', 'parque', 'teatro', 'colegio'],
            correctAnswer: 'banco',
            explanation: '"El banco" (y su cajero automático) es la entidad financiera para gestiones monetarias.',
            hints: ['Lugar de operaciones financieras: b-a-n-c-o.'],
            syllabusRef: 'M5-SITIOS',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'santiago-2',
        cityId: 'santiago',
        levelNumber: 2,
        title: 'El Verbo PODER en Presente',
        subtitle: 'Cambio vocálico o -> ue: puedo, puedes, puede, podemos, podéis, pueden',
        tier: 'easy',
        syllabusTopic: 'M5.VerboPODER',
        description: 'Frente al Hostal de los Reyes Católicos practicas la conjugación de PODER.',
        xpReward: 50,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-3',
            type: 'multiple-choice',
            prompt: '¿Cuál es la primera persona singular (yo) del verbo PODER en presente?',
            englishPrompt: 'What is the first person singular (yo) of the verb PODER in present?',
            audioText: 'yo puedo',
            options: ['puedo', 'podo', 'puedes', 'podré'],
            correctAnswer: 'puedo',
            explanation: 'PODER tiene alternancia vocálica o -> ue: yo puedo, tú puedes, él puede, ellos pueden (nosotros podemos, vosotros podéis).',
            hints: ['Diptonga la o en ue: p-u-e-d-o.'],
            syllabusRef: 'M5-PODER',
            difficulty: 'easy'
          },
          {
            id: 'm5-san-4',
            type: 'fill-blank',
            prompt: 'Para pedir permiso de entrada educadamente: "¿______ pasar, por favor?" (yo).',
            englishPrompt: 'To ask entry permission politely: "¿Puedo pasar, por favor?"',
            audioText: 'Puedo',
            options: ['Puedo', 'Poder', 'Podemos', 'Puede'],
            correctAnswer: 'Puedo',
            explanation: '"¿Puedo...?" es la fórmula clásica para solicitar permiso o verificar autorización.',
            hints: ['Primera persona singular: Puedo.'],
            syllabusRef: 'M5-PODER',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'santiago-3',
        cityId: 'santiago',
        levelNumber: 3,
        title: 'Pedir Favores: ¿Puedes ayudarme?',
        subtitle: 'PODER + infinitivo para peticiones corteses',
        tier: 'medium',
        syllabusTopic: 'M5.VerboPODER',
        description: 'Solicitas ayuda a un peregrino para interpretar el mapa del Camino.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-5',
            type: 'multiple-choice',
            prompt: '¿Cómo se pide cortésmente a una persona desconocida en la calle que nos eche una mano?',
            englishPrompt: 'How do you politely ask a stranger on the street to give you a hand?',
            audioText: 'Disculpe, ¿puede usted ayudarme?',
            options: [
              'Disculpe, ¿puede usted ayudarme?',
              '¡Oye tú! Ayuda ahora.',
              'Tengo ayuda de ti.',
              'Soy ayudado por usted.'
            ],
            correctAnswer: 'Disculpe, ¿puede usted ayudarme?',
            explanation: '"Disculpe, ¿puede usted ayudarme?" (formal) o "¿Puedes ayudarme?" (informal) son las fórmulas modelo para solicitar favores.',
            hints: ['Disculpa cortés + ¿puede usted ayudarme?'],
            syllabusRef: 'M5-PODER',
            difficulty: 'medium'
          },
          {
            id: 'm5-san-6',
            type: 'fill-blank',
            prompt: 'Completa: "¿Nos ______ decir dónde está la oficina del peregrino? (ustedes)."',
            englishPrompt: 'Complete: "¿Nos pueden decir dónde está la oficina del peregrino? (ustedes)."',
            audioText: 'pueden',
            options: ['pueden', 'podemos', 'puedo', 'podéis'],
            correctAnswer: 'pueden',
            explanation: 'Para dirigirse a varias personas formalmente con ustedes se usa "pueden".',
            hints: ['Tercera persona plural de PODER.'],
            syllabusRef: 'M5-PODER',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'santiago-4',
        cityId: 'santiago',
        levelNumber: 4,
        title: 'Servicios e Instalaciones del Peregrino',
        subtitle: 'Albergues, consignas, correos y sellado de la credencial',
        tier: 'medium',
        syllabusTopic: 'M5.Sitios',
        description: 'Realizas los trámites finales para sellar tu credencial compostelana.',
        xpReward: 70,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-7',
            type: 'multiple-choice',
            prompt: '¿A qué oficina pública acudes en España para enviar postales y paquetes por correo tradicional?',
            englishPrompt: 'Which public office do you go to in Spain to send postcards and parcels by traditional mail?',
            audioText: 'a la oficina de Correos',
            options: ['a la oficina de Correos', 'al banco central', 'a la farmacia', 'al polideportivo'],
            correctAnswer: 'a la oficina de Correos',
            explanation: '"La oficina de Correos" es el servicio postal oficial donde se compran sellos y se envían cartas y bultos.',
            hints: ['La empresa estatal de cartas y sellos: Correos.'],
            syllabusRef: 'M5-SITIOS',
            difficulty: 'medium'
          },
          {
            id: 'm5-san-8',
            type: 'fill-blank',
            prompt: 'Para sellar la credencial de viajero decimos: "¿Me ______ sellar el pasaporte aquí? (usted)."',
            englishPrompt: 'To stamp the traveler credential we say: "¿Me puede sellar el pasaporte aquí?"',
            audioText: 'puede',
            options: ['puede', 'puedo', 'pueden', 'podemos'],
            correctAnswer: 'puede',
            explanation: 'Fórmula de tratamiento de usted en tercera persona singular: "¿Me puede sellar...?"',
            hints: ['Tercera persona singular de cortesía.'],
            syllabusRef: 'M5-PODER',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'santiago-5',
        cityId: 'santiago',
        levelNumber: 5,
        title: 'Combinar PODER y Direcciones Urbanas',
        subtitle: '¿Cómo puedo llegar a la estación de tren?',
        tier: 'tough',
        syllabusTopic: 'M5.Sitios',
        description: 'Consultas cómo llegar desde la Rúa do Franco a la estación intermodal.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-9',
            type: 'multiple-choice',
            prompt: '¿Cuál es la forma más fluida para preguntar cómo llegar a un sitio con PODER?',
            englishPrompt: 'What is the most fluent way to ask how to get to a place using PODER?',
            audioText: 'Perdone, ¿cómo puedo llegar a la estación de tren?',
            options: [
              'Perdone, ¿cómo puedo llegar a la estación de tren?',
              '¿Por qué llego con poder a la estación?',
              'Puedo la estación cómo es?',
              'Llegar tengo a la estación de tren.'
            ],
            correctAnswer: 'Perdone, ¿cómo puedo llegar a la estación de tren?',
            explanation: '"¿Cómo puedo llegar a...?" combina cortesía, el verbo modal PODER y el infinitivo de destino.',
            hints: ['¿Cómo puedo llegar a...?'],
            syllabusRef: 'M5-PODER',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'santiago-6',
        cityId: 'santiago',
        levelNumber: 6,
        title: 'El Gran Repaso Gastronómico y Urbano',
        subtitle: 'Integración de comidas, bebidas, verbos IR, QUERER y PODER',
        tier: 'tough',
        syllabusTopic: 'M5.Sintesis',
        description: 'Un resumen integral de todo el Módulo 5 en la plaza de Platerías.',
        xpReward: 90,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-10',
            type: 'multiple-choice',
            prompt: 'Empareja los tres verbos modales e irregulares con su primera persona singular (yo): IR, QUERER, PODER.',
            englishPrompt: 'Match the three verbs with their first person singular (yo): IR, QUERER, PODER.',
            audioText: 'voy, quiero, puedo',
            options: ['voy, quiero, puedo', 'va, quiere, puede', 'vamos, queremos, podemos', 'iré, querré, podré'],
            correctAnswer: 'voy, quiero, puedo',
            explanation: 'Yo voy (IR), Yo quiero (QUERER, cambio e -> ie), Yo puedo (PODER, cambio o -> ue).',
            hints: ['Tres formas de primera persona: voy, quiero, puedo.'],
            syllabusRef: 'M5-IR',
            difficulty: 'tough'
          }
        ]
      },
      {
        id: 'santiago-7',
        cityId: 'santiago',
        levelNumber: 7,
        title: 'Construir Peticiones Formales en la Oficina del Peregrino',
        subtitle: 'Sintaxis de solicitud de certificados y credenciales',
        tier: 'hard',
        syllabusTopic: 'M5.Sintaxis',
        description: 'Redactas la solicitud de la Compostela tras completar las 15 etapas.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-11',
            type: 'word-order',
            prompt: 'Ordena la frase: "¿Puedo recoger mi certificado oficial en esta ventanilla?"',
            englishPrompt: 'Order the sentence: "Can I collect my official certificate at this counter?"',
            audioText: '¿Puedo recoger mi certificado oficial en esta ventanilla?',
            sentencePieces: ['oficial', '¿Puedo', 'esta', 'recoger', 'certificado', 'en', 'mi', 'ventanilla?'],
            correctAnswer: '¿Puedo recoger mi certificado oficial en esta ventanilla?',
            explanation: 'Verbo modal (¿Puedo) + infinitivo (recoger) + objeto posesivo (mi certificado oficial) + locución locativa (en esta ventanilla?).',
            hints: ['Comienza por "¿Puedo recoger mi certificado oficial".'],
            syllabusRef: 'M5-PODER',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'santiago-8',
        cityId: 'santiago',
        levelNumber: 8,
        title: 'Diálogo con Xoán en la Rúa do Franco',
        subtitle: 'Celebración del fin del viaje e indicaciones hacia la catedral',
        tier: 'hard',
        syllabusTopic: 'M5.Comunicacion',
        description: 'Xoán te felicita por completar tu periplo lingüístico por España.',
        xpReward: 110,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-12',
            type: 'dialogue',
            prompt: 'En el corazón de la Rúa do Franco:',
            englishPrompt: 'In the heart of Rúa do Franco:',
            audioText: '¡Parabéns, peregrino! Has recorrido quince ciudades desde Madrid. ¿Puedes sentir la magia del Obradoiro ante la catedral?',
            correctAnswer: '¡Muchísimas gracias, Xoán! Sí, puedo sentir una emoción enorme y estoy muy orgulloso.',
            explanation: 'Respuesta comunicativa emotiva y de celebración con el verbo PODER y concordancia con ESTAR.',
            hints: ['Agradece y afirma con emoción que puedes sentir la magia.'],
            syllabusRef: 'M5-COMUNICACION',
            difficulty: 'hard',
            dialogue: {
              npcName: 'Xoán de Compostela',
              npcRole: 'Hospitalero Mayor del Camino',
              prompt: '¡Parabéns, peregrino! Has recorrido quince ciudades desde Madrid. ¿Puedes sentir la magia del Obradoiro ante la catedral?',
              englishPrompt: 'Congratulations, pilgrim! You traversed 15 cities from Madrid. Can you feel the magic of Obradoiro before the cathedral?',
              choices: [
                {
                  id: 'c1',
                  text: '¡Muchísimas gracias, Xoán! Sí, puedo sentir una emoción enorme y estoy muy orgulloso.',
                  englishHint: 'Thank you very much, Xoán! Yes, I can feel huge emotion and I am very proud.',
                  isCorrect: true,
                  npcResponse: '¡Te has ganado el abrazo al Apóstol y la entrada a La Gran Fiesta final!',
                  explanation: 'Respuesta conmovedora que sella el éxito del periplo.'
                },
                {
                  id: 'c2',
                  text: 'Los lunes no tengo clase de literatura.',
                  englishHint: 'On Mondays I don\'t have literature class.',
                  isCorrect: false,
                  npcResponse: '¡Me parece muy bien tu horario de lunes! Pero estamos celebrando tu llegada.',
                  explanation: 'Fuera de contexto.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'santiago-9',
        cityId: 'santiago',
        levelNumber: 9,
        title: 'Orientación Final en el Obradoiro',
        subtitle: 'Localización de los cuatro lados de la emblemática plaza',
        tier: 'hot',
        syllabusTopic: 'M5.Sitios',
        description: 'Identificas la Catedral, el Pazo de Raxoi, el Hostal y San Xerome.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-13',
            type: 'fill-blank',
            prompt: 'Completa: "El gran botafumeiro ______ en el interior de la catedral (estar)."',
            englishPrompt: 'Complete: "The great thurible is inside the cathedral."',
            audioText: 'está',
            options: ['está', 'es', 'tiene', 'hace'],
            correctAnswer: 'está',
            explanation: 'Localización física en el espacio interior de un templo = verbo ESTAR.',
            hints: ['Tercera persona singular de ESTAR.'],
            syllabusRef: 'M5-SITIOS',
            difficulty: 'hot'
          }
        ]
      },
      {
        id: 'santiago-10',
        cityId: 'santiago',
        levelNumber: 10,
        title: 'Culminación de las Quince Ciudades',
        subtitle: 'Prueba suprema previa a la misión final del peregrino',
        tier: 'hot',
        syllabusTopic: 'M5.Sintesis',
        description: 'El último examen antes de que se abran las puertas de la Catedral y de La Gran Fiesta.',
        xpReward: 130,
        coinReward: 100,
        questions: [
          {
            id: 'm5-san-14',
            type: 'multiple-choice',
            prompt: '¿Cuál de las siguientes frases reúne con precisión absoluta los verbos PODER, QUERER e IR?',
            englishPrompt: 'Which of the following sentences accurately combines PODER, QUERER, and IR?',
            audioText: 'Hoy puedo celebrar, quiero probar la tarta de Santiago y voy a disfrutar de la fiesta',
            options: [
              'Hoy puedo celebrar, quiero probar la tarta de Santiago y voy a disfrutar de la fiesta',
              'Hoy podo celebrar, quero probar la tarta de Santiago y va a disfrutar de la fiesta',
              'Hoy puede celebrar, quieren probar la tarta de Santiago y voy disfrutar de la fiesta',
              'Hoy puedo celebro, quiero pruebo la tarta de Santiago y voy a festejo'
            ],
            correctAnswer: 'Hoy puedo celebrar, quiero probar la tarta de Santiago y voy a disfrutar de la fiesta',
            explanation: 'Primera persona consistente en los tres verbos modales con sus respectivos infinitivos: puedo celebrar (PODER), quiero probar (QUERER) y voy a disfrutar (IR A + inf).',
            hints: ['Primera persona coherente en los tres verbos: puedo, quiero, voy a.'],
            syllabusRef: 'M5-PODER',
            difficulty: 'hot'
          }
        ]
      }
    ],
    bossMission: {
      id: 'boss-santiago',
      cityId: 'santiago',
      title: 'La Llegada a la Catedral del Peregrino',
      characterName: 'Maestro Hospitalero Xoán de Compostela',
      characterRole: 'Guardián del Pórtico de la Gloria',
      scenario: 'Ante el majestuoso Pórtico de la Gloria tallado en piedra de granito, Xoán te somete a la prueba cumbre de las quince ciudades de España. Debes demostrar dominio total de servicios urbanos, permisos, peticiones con PODER y la síntesis gastronómica para abrir las puertas doradas de "La Gran Fiesta" final.',
      objectives: [
        { id: 'san-obj1', description: 'Ubicar servicios públicos y puntos de interés urbano', syllabusTopic: 'M5.Sitios' },
        { id: 'san-obj2', description: 'Dominar la conjugación de cambio vocálico del verbo PODER', syllabusTopic: 'M5.VerboPODER' },
        { id: 'san-obj3', description: 'Sintetizar la competencia comunicativa de todo el viaje por España', syllabusTopic: 'M5.Comunicacion' }
      ],
      requiredScorePercent: 80,
      xpReward: 500,
      coinReward: 500,
      badgeName: 'La Concha de Plata de Santiago',
      badgeIcon: '🐚',
      questions: [
        {
          id: 'b-san-1',
          type: 'multiple-choice',
          prompt: 'Xoán: "Para solicitar formalmente la entrada solemne al templo ante las autoridades eclesiásticas, ¿cuál es la formulación canónica?"',
          englishPrompt: 'Xoán: "To formally request entry to the temple, which is the canonical phrasing?"',
          audioText: 'Buenas tardes. ¿Podemos pasar al interior de la catedral a contemplar el altar mayor?',
          options: [
            'Buenas tardes. ¿Podemos pasar al interior de la catedral a contemplar el altar mayor?',
            'Oigan ustedes, abran la puerta que queremos entrar.',
            'Somos entrando a la catedral para tener altar.',
            'Hacemos pasar adentro de la catedral rápido.'
          ],
          correctAnswer: 'Buenas tardes. ¿Podemos pasar al interior de la catedral a contemplar el altar mayor?',
          explanation: 'Saludo cortés, verbo modal en primera persona plural ("¿Podemos pasar...?"), locución de lugar y propósito expresado con infinitivo.',
          hints: ['¿Podemos pasar al interior...?'],
          syllabusRef: 'M5-PODER',
          difficulty: 'hard'
        },
        {
          id: 'b-san-2',
          type: 'fill-blank',
          prompt: 'Xoán: "El médico de guardia ______ atender a los peregrinos fatigados en el hospital (poder)."',
          englishPrompt: 'Xoán: "The on-duty doctor can attend to weary pilgrims at the hospital."',
          audioText: 'puede',
          options: ['puede', 'puedo', 'pueden', 'podemos'],
          correctAnswer: 'puede',
          explanation: '"El médico de guardia" es tercera persona del singular (él) = puede.',
          hints: ['Tercera persona singular con diptongo ue: puede.'],
          syllabusRef: 'M5-PODER',
          difficulty: 'hard'
        },
        {
          id: 'b-san-3',
          type: 'word-order',
          prompt: 'Ordena la inscripción del Pórtico: "El esfuerzo del caminante culmina con alegría en la ciudad santa"',
          englishPrompt: 'Order the Portico inscription: "The walker\'s effort culminates with joy in the holy city"',
          audioText: 'El esfuerzo del caminante culmina con alegría en la ciudad santa',
          sentencePieces: ['alegría', 'esfuerzo', 'santa', 'culmina', 'ciudad', 'caminante', 'con', 'del', 'la', 'El', 'en'],
          correctAnswer: 'El esfuerzo del caminante culmina con alegría en la ciudad santa',
          explanation: 'Sujeto completo (El esfuerzo del caminante) + verbo principal (culmina) + modo (con alegría) + término locativo (en la ciudad santa).',
          hints: ['Comienza por "El esfuerzo del caminante".'],
          syllabusRef: 'M5-Sintaxis',
          difficulty: 'hot'
        }
      ]
    }
  }
];
