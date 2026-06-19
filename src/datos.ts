export interface Avistamiento {
  id: number;
  nombre: string;
  nombreCientifico: string;
  categoria: 'fauna' | 'flora' | 'reptil' | 'mamifero';
  enPeligro: boolean;
  alimentacion?: string; // Cambiado de descripcion a alimentacion
  imagen: string; 
  coordenadas: [number, number]; 
  fecha: string;
  descripcion?: string; // Nuevo campo para la descripción del reporte ciudadano
}

export const especiesNicaragua: Avistamiento[] = [
  {
    id: 1,
    nombre: "Jacana centroamericana",
    nombreCientifico: "Jacana spinosa",
    categoria: "fauna",
    enPeligro: false,
    alimentacion: "Su dieta consiste en insectos, caracoles, gusanos, pequeños invertebrados y semillas que encuentra en la superficie de las plantas vive en lagunas y zonas pantanosas.",
    imagen: "especies/Jacana_centroamericana.jpeg", 
    coordenadas: [11.354891, -84.871245],
    fecha: "Oct 26, 2024, 10:15 AM"
  },
  {
    id: 2,
    nombre: "Avoceta americana",
    nombreCientifico: "Recurvirostra americana",
    categoria: "fauna",
    enPeligro: false,
    alimentacion: "Se alimenta de pequeños crustáceos, insectos acuáticos, larvas y ocasionalmente de semillas de plantas acuáticas vive en America del norte pero nuestro sistema lagunar sirve como un importante sitio de descanso y alimentacion para estas aves migratorias.",
    imagen: "especies/Avoceta_americana.jpeg", 
    coordenadas: [12.106158, -85.985914],
    fecha: "Jun 18, 2026, 08:30 AM"
  },
  {
    id: 3,
    nombre: "Iguana verde",
    nombreCientifico: "Iguana",
    categoria: "fauna",
    enPeligro: false,
    alimentacion: "Son animales mayoritariamente herbívoros. Se alimentan de hojas, brotes tiernos, flores y frutos de los árboles donde habitan. Esta especie vive en los lugares tropicales.",
    imagen: "especies/Iguana_verde.jpeg", 
    coordenadas: [11.912667, -85.927210],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 4,
    nombre: "Caiman de anteojos",
    nombreCientifico: "Caiman crocodilus",
    categoria: "fauna",
    enPeligro: false,
    alimentacion: "Su dieta cambia con la edad. Los ejemplares jóvenes comen principalmente insectos, moluscos y crustáceos. Los adultos se alimentan de peces, anfíbios, reptiles, aves acuáticas y pequeños mamíferos. esta especia habita nuestra poza.",
    imagen: "especies/Caiman_de_anteojos.jpeg", 
    coordenadas: [12.081413, -86.005470],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 5,
    nombre: "Garza blanca",
    nombreCientifico: "Ardea alba",
    categoria: "fauna",
    enPeligro: false,
    alimentacion: "Su dieta cambia con la edad. Los ejemplares jóvenes comen principalmente insectos, moluscos y crustáceos. Los adultos se alimentan de peces, anfíbios, reptiles, aves acuáticas y pequeños mamíferos. esta especia habita nuestra poza.",
    imagen: "especies/Garza_blanca.jpeg", 
    coordenadas: [12.094957, -85.987603],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 6,
    nombre: "Tortuga",
    nombreCientifico: "Trachemys emolli",
    categoria: "fauna",
    enPeligro: false,
    alimentacion: "Es omnívora; los jóvenes buscan proteínas (insectos, peces) y los adultos prefieren plantas acuáticas y frutos. Esta especie habita nuestra poza en Tisma.",
    imagen: "especies/Tortuga_nicaraguense.jpeg", 
    coordenadas: [12.081453, -86.004868],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 7,
    nombre: "Jacinto de agua",
    nombreCientifico: "Pontederia crassipes",
    categoria: "flora",
    enPeligro: false,
    descripcion: "Esta planta acuatica se encuentra en la Laguna de Tisma .",
    imagen: "especies/Jacinto_de_agua.jpeg", 
    coordenadas: [12.101071, -85.985516],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 8,
    nombre: "La poza",
    nombreCientifico: "",
    categoria: "flora",
    enPeligro: false,
    descripcion: "Esta es una poza acuatica ubicada cerca de la Laguna de Tisma.",
    imagen: "especies/La_poza.jpeg", 
    coordenadas: [12.081423, -86.005076],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 9,
    nombre: "Helequeme",
    nombreCientifico: "Erytrhina fusca",
    categoria: "flora",
    enPeligro: false,
    descripcion: "El helequeme es una planta que se encuentra en Arburetun Tizalt Nahualt",
    imagen: "especies/Helequeme.jpeg", 
    coordenadas: [12.082090, -86.002764],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 10,
    nombre: "Almendro de montaña",
    nombreCientifico: "Dipteryx panamensis",
    categoria: "flora",
    enPeligro: false,
    descripcion: "El Almendro de montaña es una planta que se encuentra en Arburetun Tizalt Nahualt",
    imagen: "especies/Almendro_de_montania.jpeg", 
    coordenadas: [12.081852, -86.002954],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 11,
    nombre: "Ceiba",
    nombreCientifico: "Ceiba pentandra",
    categoria: "flora",
    enPeligro: false,
    descripcion: "El Ceiba es una planta que se encuentra en Arburetun Tizalt Nahualt",
    imagen: "especies/Ceiba.jpeg", 
    coordenadas: [12.082176, -86.003182],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 12,
    nombre: "Laguna de tisma",
    nombreCientifico: "RAMSAR 1141",
    categoria: "flora",
    enPeligro: false,
    descripcion: "La Laguna de Tisma es un humedal de importancia internacional, designado como sitio Ramsar. Se encuentra en el municipio de Tisma, Nicaragua. Esta laguna es un ecosistema vital que alberga una gran diversidad de flora y fauna.",
    imagen: "especies/Ramsar1141_1.jpeg", 
    coordenadas: [12.092529, -85.982666],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 13,
    nombre: "Laguna de tisma",
    nombreCientifico: "RAMSAR 1141",
    categoria: "flora",
    enPeligro: false,
    descripcion: "La Laguna de Tisma es un humedal de importancia internacional, designado como sitio Ramsar. Se encuentra en el municipio de Tisma, Nicaragua. Esta laguna es un ecosistema vital que alberga una gran diversidad de flora y fauna.",
    imagen: "especies/Ramsar1141_2.jpeg", 
    coordenadas: [12.092942, -85.986394],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
  {
    id: 14,
    nombre: "Zanatillo",
    nombreCientifico: "Quiscalus nicaraguensis",
    categoria: "fauna",
    enPeligro: true,
    descripcion: "​Esta pequeña ave es una de las joyas biológicas de la región y es endémica, lo que significa que solo vive en Nicaragua y pequeñas franjas limítrofes de Costa Rica. La Laguna de Tisma es uno de sus principales refugios históricos. Está perdiendo su hábitat de anidación (los pastizales inundados y humedales) a causa del avance ganadero y agrícola, lo que ha provocado que vuele directamente hacia la extinción",
    imagen: "especies/Zanatillo.jpeg", 
    coordenadas: [12.091840, -85.978451],
    fecha: "Jun 18, 2026, 11:15 AM"
  },
];