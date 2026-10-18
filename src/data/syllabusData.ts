import { SyllabusModule } from '../types';

export const SYLLABUS_MODULES: SyllabusModule[] = [
  {
    moduleNumber: 1,
    title: 'Abecedario, Saludos, Datos personales y el Verbo SER',
    hours: 3,
    summary: 'El abecedario español, saludos y despedidas, datos personales (origen, nacionalidad, números cardinales 1-100.000, profesión, días de la semana), artículos, pronombres personales, adjetivos y el verbo SER.',
    topics: [
      {
        id: 'M1-ALPHA',
        code: '1.1',
        title: 'El Abecedario y Fonética',
        category: 'Vocabulario',
        description: 'Vocales, consonantes, dígrafos (ch, ll, rr) y sonidos clave del español castellano.',
        coveredInCityIds: ['madrid']
      },
      {
        id: 'M1-SALUDOS',
        code: '1.2',
        title: 'Saludos y Despedidas',
        category: 'Comunicación',
        description: 'Fórmulas formales e informales de cortesía: Hola, Buenos días, ¿Qué tal?, Adiós, Hasta luego.',
        coveredInCityIds: ['madrid']
      },
      {
        id: 'M1-DATOS',
        code: '1.3',
        title: 'Datos Personales y Presentaciones',
        category: 'Comunicación',
        description: 'Presentarse, preguntar y responder sobre nombre, origen, nacionalidad y edad.',
        coveredInCityIds: ['madrid', 'toledo']
      },
      {
        id: 'M1-NUM1',
        code: '1.4',
        title: 'Números Cardinales (1 - 100.000)',
        category: 'Vocabulario',
        description: 'Contar desde el 0 al 100 y números grandes para precios y compras.',
        coveredInCityIds: ['madrid', 'toledo', 'salamanca']
      },
      {
        id: 'M1-PROF',
        code: '1.5',
        title: 'Profesiones y Oficios',
        category: 'Vocabulario',
        description: 'Nombres de profesiones y concordancia de género masculino/femenino.',
        coveredInCityIds: ['toledo', 'salamanca']
      },
      {
        id: 'M1-DIAS',
        code: '1.6',
        title: 'Los Días de la Semana',
        category: 'Vocabulario',
        description: 'Lunes a domingo con el artículo determinado masculino (el lunes, los sábados).',
        coveredInCityIds: ['toledo']
      },
      {
        id: 'M1-ART',
        code: '1.7',
        title: 'Artículos Definidos e Indefinidos',
        category: 'Gramática',
        description: 'El, la, los, las y un, una, unos, unas. Género y número de los sustantivos.',
        coveredInCityIds: ['salamanca']
      },
      {
        id: 'M1-PRON',
        code: '1.8',
        title: 'Pronombres Personales de Sujeto',
        category: 'Gramática',
        description: 'Yo, tú, él, ella, usted, nosotros/as, vosotros/as, ellos/as, ustedes.',
        coveredInCityIds: ['madrid', 'salamanca']
      },
      {
        id: 'M1-ADJ',
        code: '1.9',
        title: 'Adjetivos Calificativos y Concordancia',
        category: 'Gramática',
        description: 'Reglas de género (alto/alta) y número (altos/altas) para concordar con el sustantivo.',
        coveredInCityIds: ['salamanca']
      },
      {
        id: 'M1-SER',
        code: '1.10',
        title: 'El Verbo SER',
        category: 'Gramática',
        description: 'Conjugación regular/irregular en presente y usos para identidad, origen, profesión y características.',
        coveredInCityIds: ['madrid', 'toledo', 'salamanca']
      }
    ]
  },
  {
    moduleNumber: 2,
    title: 'Familia, Descripción, Verbos Regulares, ESTAR y TENER',
    hours: 3,
    summary: 'Familia, edad y posesión, habitaciones de la casa, colores, descripción de lugares y cosas, direcciones, verbos ESTAR y TENER, diferencia SER vs ESTAR, verbos regulares (-ar, -er, -ir) y preposiciones de lugar.',
    topics: [
      {
        id: 'M2-FAM',
        code: '2.1',
        title: 'La Familia y Relaciones de Parentesco',
        category: 'Vocabulario',
        description: 'Padre, madre, hermanos, abuelos, tíos, primos y relaciones familiares.',
        coveredInCityIds: ['sevilla']
      },
      {
        id: 'M2-TENER',
        code: '2.2',
        title: 'El Verbo TENER y la Edad',
        category: 'Gramática',
        description: 'Conjugación irregular de TENER (tengo, tienes...) y uso para expresar edad y posesión.',
        coveredInCityIds: ['sevilla']
      },
      {
        id: 'M2-CASA',
        code: '2.3',
        title: 'Mi Habitación y Partes de la Casa',
        category: 'Vocabulario',
        description: 'Habitaciones (dormitorio, cocina, salón) y muebles (cama, mesa, silla, armario).',
        coveredInCityIds: ['segovia']
      },
      {
        id: 'M2-COLORES',
        code: '2.4',
        title: 'Los Colores y Modificadores',
        category: 'Vocabulario',
        description: 'Rojo, azul, verde, amarillo, blanco, negro y concordancia cromática.',
        coveredInCityIds: ['segovia']
      },
      {
        id: 'M2-ESTAR',
        code: '2.5',
        title: 'El Verbo ESTAR',
        category: 'Gramática',
        description: 'Conjugación de ESTAR (estoy, estás...) para ubicación espacial y estados temporales.',
        coveredInCityIds: ['segovia', 'granada']
      },
      {
        id: 'M2-SER-ESTAR',
        code: '2.6',
        title: 'Diferencia Esencial: SER vs ESTAR',
        category: 'Gramática',
        description: 'Distinción fundamental: SER (identidad, esencia, origen) vs ESTAR (ubicación, condición, estado temporal).',
        coveredInCityIds: ['segovia', 'sevilla']
      },
      {
        id: 'M2-PREP',
        code: '2.7',
        title: 'Preposiciones y Frases de Lugar',
        category: 'Gramática',
        description: 'En, al lado de, delante de, detrás de, encima de, debajo de, entre.',
        coveredInCityIds: ['granada']
      },
      {
        id: 'M2-DIR',
        code: '2.8',
        title: 'Pedir y Dar Direcciones',
        category: 'Comunicación',
        description: 'Girar a la izquierda, a la derecha, seguir todo recto, cruzar la plaza.',
        coveredInCityIds: ['granada']
      },
      {
        id: 'M2-REG-VERBS',
        code: '2.9',
        title: 'Verbos Regulares en Presente (-AR, -ER, -IR)',
        category: 'Gramática',
        description: 'Terminaciones del presente de indicativo: hablar, comer, vivir.',
        coveredInCityIds: ['sevilla', 'granada']
      }
    ]
  },
  {
    moduleNumber: 3,
    title: 'La Hora, Fechas, Clima, Gustos e Intereses, HAY y HACER',
    hours: 3,
    summary: 'Expresión de la hora, fechas, meses del año, el clima con HACER, gustos e intereses con gustar/encantar, adjetivos posesivos, el verbo impersonal HAY y distinción MUY vs MUCHO.',
    topics: [
      {
        id: 'M3-HORA',
        code: '3.1',
        title: 'Expresar la Hora',
        category: 'Comunicación',
        description: '¿Qué hora es? Es la una, son las dos y cuarto, las tres y media, menos cuarto.',
        coveredInCityIds: ['cordoba']
      },
      {
        id: 'M3-FECHAS',
        code: '3.2',
        title: 'Fechas y Meses del Año',
        category: 'Vocabulario',
        description: 'Los doce meses del año y estructuras de fecha: el día + número + de + mes.',
        coveredInCityIds: ['cordoba']
      },
      {
        id: 'M3-CLIMA',
        code: '3.3',
        title: 'El Clima y Expresiones Atmosféricas',
        category: 'Vocabulario',
        description: 'Hace sol, hace calor, hace frío, llueve, está nublado, hay viento.',
        coveredInCityIds: ['malaga']
      },
      {
        id: 'M3-HACER',
        code: '3.4',
        title: 'El Verbo HACER en el Clima y Tiempo',
        category: 'Gramática',
        description: 'Uso de hacer impersonal para fenómenos meteorológicos.',
        coveredInCityIds: ['malaga']
      },
      {
        id: 'M3-GUSTOS',
        code: '3.5',
        title: 'Gustos e Intereses (Gustar y Encantar)',
        category: 'Gramática',
        description: 'Construcción con pronombres de OI: me gusta / me gustan, te gusta, le gusta.',
        coveredInCityIds: ['cadiz']
      },
      {
        id: 'M3-POSESIVOS',
        code: '3.6',
        title: 'Adjetivos Posesivos Átonos',
        category: 'Gramática',
        description: 'Mi/mis, tu/tus, su/sus, nuestro/nuestra/nuestros/nuestras, vuestro/a, su/sus.',
        coveredInCityIds: ['cadiz']
      },
      {
        id: 'M3-HAY',
        code: '3.7',
        title: 'Uso de HAY (Existencia)',
        category: 'Gramática',
        description: 'HAY para expresar existencia de elementos indeterminados frente a ESTAR para ubicación.',
        coveredInCityIds: ['cadiz', 'cordoba']
      },
      {
        id: 'M3-MUY-MUCHO',
        code: '3.8',
        title: 'Diferencia entre MUY y MUCHO',
        category: 'Gramática',
        description: 'Muy + adjetivo/adverbio (invariable) vs mucho/a/os/as + sustantivo o verbo + mucho.',
        coveredInCityIds: ['cadiz']
      }
    ]
  },
  {
    moduleNumber: 4,
    title: 'Rutinas Diarias, Verbos Reflexivos, Horarios y Ciudad',
    hours: 3,
    summary: 'Actividades cotidianas y rutinas, verbos y pronombres reflexivos, horarios de clase y vida universitaria, descripción del entorno urbano y amigos íntimos.',
    topics: [
      {
        id: 'M4-RUTINAS',
        code: '4.1',
        title: 'Las Actividades Cotidianas',
        category: 'Vocabulario',
        description: 'Despertarse, desayunar, ir a clase, estudiar, cenar, acostarse.',
        coveredInCityIds: ['valencia']
      },
      {
        id: 'M4-REFLEX',
        code: '4.2',
        title: 'Verbos y Pronombres Reflexivos',
        category: 'Gramática',
        description: 'Pronombres reflexivos (me, te, se, nos, os, se) con verbos como llamarse, levantarse, ducharse.',
        coveredInCityIds: ['valencia', 'barcelona']
      },
      {
        id: 'M4-HORARIOS',
        code: '4.3',
        title: 'El Horario y Planificación',
        category: 'Comunicación',
        description: 'Describir cronogramas diarios: por la mañana, por la tarde, a mediodía, por la noche.',
        coveredInCityIds: ['barcelona']
      },
      {
        id: 'M4-UNIVERSIDAD',
        code: '4.4',
        title: 'Mi Universidad y la Vida Estudiantil',
        category: 'Vocabulario',
        description: 'Campus, biblioteca, asignaturas, profesores y vida académica.',
        coveredInCityIds: ['barcelona']
      },
      {
        id: 'M4-CIUDAD',
        code: '4.5',
        title: 'Descripción de la Ciudad y el Transporte',
        category: 'Comunicación',
        description: 'Metro, autobús, barrio, avenidas y servicios urbanos.',
        coveredInCityIds: ['valencia', 'barcelona']
      },
      {
        id: 'M4-AMIGOS',
        code: '4.6',
        title: 'Describir a Mi Mejor Amigo/a',
        category: 'Comunicación',
        description: 'Retrato de apariencia física y cualidades psicológicas de compañeros.',
        coveredInCityIds: ['zaragoza']
      },
      {
        id: 'M4-HABILIDADES',
        code: '4.7',
        title: 'Habilidades y Aptitudes (Saber + Infinitivo)',
        category: 'Gramática',
        description: 'Expresar lo que sabemos hacer: sé hablar español, sabe tocar la guitarra.',
        coveredInCityIds: ['zaragoza']
      }
    ]
  },
  {
    moduleNumber: 5,
    title: 'Gastronomía, Restaurantes, Ubicación Urbana, IR, PODER y QUERER',
    hours: 3,
    summary: 'Gastronomía española, comidas y bebidas, pedir en una cafetería y restaurante, dar opiniones sobre comida, ubicar sitios en la ciudad y los verbos modales/irregulares IR, PODER y QUERER.',
    topics: [
      {
        id: 'M5-COMIDA',
        code: '5.1',
        title: 'Alimentos, Tapas y Platos Típicos',
        category: 'Vocabulario',
        description: 'Tortilla de patatas, paella, jamón ibérico, gazpacho, mariscos, frutas y verduras.',
        coveredInCityIds: ['bilbao']
      },
      {
        id: 'M5-BEBIDAS',
        code: '5.2',
        title: 'Las Bebidas',
        category: 'Vocabulario',
        description: 'Agua con o sin gas, café con leche, té, zumos naturales y vino.',
        coveredInCityIds: ['bilbao']
      },
      {
        id: 'M5-OPINIONES',
        code: '5.3',
        title: 'Dar Opiniones sobre Alimentos',
        category: 'Comunicación',
        description: 'Está delicioso, rico, caliente, frío, picante, dulce o salado.',
        coveredInCityIds: ['san-sebastian']
      },
      {
        id: 'M5-RESTAURANTE',
        code: '5.4',
        title: 'En la Cafetería y Restaurante',
        category: 'Comunicación',
        description: 'Pedir mesa, el menú del día, la carta, ordenar platos y pedir la cuenta.',
        coveredInCityIds: ['san-sebastian']
      },
      {
        id: 'M5-IR',
        code: '5.5',
        title: 'El Verbo IR (Desplazamiento y Futuro)',
        category: 'Gramática',
        description: 'Conjugación irregular de IR (voy, vas, va...) y estructura IR A + lugar/infinitivo.',
        coveredInCityIds: ['bilbao']
      },
      {
        id: 'M5-PODER',
        code: '5.6',
        title: 'El Verbo PODER (o -> ue)',
        category: 'Gramática',
        description: 'Conjugación con cambio vocálico (puedo, puedes...) para peticiones y capacidad.',
        coveredInCityIds: ['santiago']
      },
      {
        id: 'M5-QUERER',
        code: '5.7',
        title: 'El Verbo QUERER (e -> ie)',
        category: 'Gramática',
        description: 'Conjugación con cambio vocálico (quiero, quieres...) para expresar deseos y ordenar comida.',
        coveredInCityIds: ['san-sebastian']
      },
      {
        id: 'M5-SITIOS',
        code: '5.8',
        title: 'Ubicar Sitios en la Ciudad y Orientación',
        category: 'Comunicación',
        description: 'Farmacia, banco, hospital, museo, estación de tren y oficina de turismo.',
        coveredInCityIds: ['santiago']
      }
    ]
  }
];
