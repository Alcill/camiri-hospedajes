// Datos de los hospedajes. Un campo en null no se muestra en la ficha.
const CATEGORIAS = [
  { id: "hotel", nombre: "Hoteles" },
  { id: "hostal", nombre: "Hostales y residenciales" },
  { id: "alojamiento", nombre: "Alojamientos" }
];

const HOSPEDAJES = [
  {
    id: "gran-capital",
    nombre: "Hotel Gran Capital",
    categoria: "hotel",
    estrellas: 4,
    lema: "Camiri Capital Petrolera",
    descripcion: "Hotel de cuatro estrellas con desayuno buffet incluido y acceso al complejo turístico Costas del Parapetí para todos sus huéspedes.",
    portada: "img/gran-capital/portada.jpg",
    fotos: [
      "img/gran-capital/portada.jpg",
      "img/gran-capital/gran-suite.jpg",
      "img/gran-capital/suite.jpg",
      "img/gran-capital/familiar.jpg",
      "img/gran-capital/matrimonial.jpg",
      "img/gran-capital/ejecutiva-plus.jpg",
      "img/gran-capital/ejecutiva.jpg"
    ],
    habitaciones: [
      { tipo: "Ejecutiva", camas: "1 cama de 1½ plazas", capacidad: 1, precio: 180 },
      { tipo: "Matrimonial", camas: "1 cama de 2 plazas", capacidad: 2, precio: 230 },
      { tipo: "Ejecutiva Plus", camas: "2 camas de 1½ plazas", capacidad: 2, precio: 270 },
      { tipo: "Suite", camas: "1 cama de 2 plazas · terraza · frigobar", capacidad: 2, precio: 350 },
      { tipo: "Familiar", camas: "2 camas de 2 plazas", capacidad: 4, precio: 380 },
      { tipo: "Gran Suite", camas: "1 cama de 3 plazas · jacuzzi · sala · terraza · frigobar", capacidad: 2, precio: 500 }
    ],
    servicios: ["Wifi", "Baño privado", "Aire acondicionado", "TV LED", "Desayuno buffet", "Complejo Costas del Parapetí"],
    horarios: "Atención las 24 horas",
    direccion: "Avenida Petrolera",
    mapa: "https://www.google.com/maps/place/Hotel+Gran+Capital/@-20.0398854,-63.51829,17z",
    telefono: "73123616",
    whatsapp: "73123616"
  },
  {
    id: "jr",
    nombre: "Hotel JR",
    categoria: "hotel",
    lema: "Hotel Restaurant",
    descripcion: "Hotel con restaurante propio, ascensor, garaje y gimnasio. Todas las habitaciones incluyen desayuno buffet y agua las 24 horas.",
    portada: "img/jr/suite-ejecutiva-triple.jpg",
    fotos: [
      "img/jr/suite-ejecutiva-triple.jpg",
      "img/jr/suite-ejecutiva-doble.jpg",
      "img/jr/triple.jpg",
      "img/jr/doble.jpg",
      "img/jr/matrimonial.jpg",
      "img/jr/simple.jpg"
    ],
    habitaciones: [
      { tipo: "Simple", camas: "1 cama de 1½ plazas", capacidad: 1, precio: 240 },
      { tipo: "Doble", camas: "2 camas de 1½ plazas", capacidad: 2, precio: 330 },
      { tipo: "Matrimonial", camas: "1 cama de 2 plazas", capacidad: 2, precio: 330 },
      { tipo: "Triple", camas: "3 camas de 1½ plazas", capacidad: 3, precio: 460 },
      { tipo: "Suite Ejecutiva Doble", camas: "1 cama de 2 plazas + 1 de 1½ plazas", capacidad: 3, precio: 550 },
      { tipo: "Suite Ejecutiva Triple", camas: "1 cama de 2 plazas + 2 de 1½ plazas", capacidad: 4, precio: 680 }
    ],
    servicios: ["Wifi", "Baño privado", "Aire acondicionado", "Agua 24 h", "Ascensor", "Desayuno buffet", "Garaje", "Gimnasio", "Restaurante"],
    horarios: "Atención las 24 horas",
    direccion: "Calle Teniente Coronel Sánchez",
    mapa: "https://maps.app.goo.gl/uaD5SijsctRKitni9",
    telefono: "74185555",
    whatsapp: "74185555"
  },
  {
    id: "sol-chaqueno",
    nombre: "Hotel Sol Chaqueño",
    categoria: "hotel",
    descripcion: "Habitaciones con ventilador o aire acondicionado. Todas incluyen baño privado, TV cable, wifi y garaje.",
    portada: "img/sol-chaqueno/habitacion.jpg",
    fotos: [
      "img/sol-chaqueno/habitacion.jpg",
      "img/sol-chaqueno/doble.jpg",
      "img/sol-chaqueno/individual.jpg",
      "img/sol-chaqueno/bano.jpg",
      "img/sol-chaqueno/tarifario.jpg"
    ],
    habitaciones: [
      { tipo: "Individual", camas: "Con ventilador", capacidad: 1, precio: 100 },
      { tipo: "Individual", camas: "Con aire acondicionado", capacidad: 1, precio: 140 },
      { tipo: "Matrimonial", camas: "Con ventilador", capacidad: 2, precio: 130 },
      { tipo: "Matrimonial", camas: "Con aire acondicionado", capacidad: 2, precio: 160 },
      { tipo: "Doble (2 camas)", camas: "Con ventilador", capacidad: 2, precio: 150 },
      { tipo: "Doble (2 camas)", camas: "Con aire acondicionado", capacidad: 2, precio: 180 }
    ],
    servicios: ["Baño privado", "TV cable", "Wifi", "Garaje"],
    horarios: "Hora de salida: 12:00",
    direccion: "Calle Sargento Maceda",
    mapa: "https://maps.app.goo.gl/CgKBvRAzBUsKJwGt5",
    telefono: "73376361",
    whatsapp: "73376361"
  },
  {
    id: "la-costanera",
    nombre: "Hotel La Costanera",
    categoria: "hotel",
    descripcion: "Hotel con piscina, sala de juegos y canchas. El área recreativa también está abierta a visitantes.",
    portada: "img/la-costanera/piscina.jpg",
    fotos: [
      "img/la-costanera/piscina.jpg",
      "img/la-costanera/piscina-tobogan.jpg",
      "img/la-costanera/fachada.jpg",
      "img/la-costanera/matrimonial.jpg",
      "img/la-costanera/doble.jpg",
      "img/la-costanera/billar.jpg",
      "img/la-costanera/ping-pong.jpg",
      "img/la-costanera/futbolin.jpg"
    ],
    habitaciones: [
      { tipo: "Matrimonial", camas: "1 cama matrimonial", capacidad: 2, precio: 150 },
      { tipo: "Doble", camas: "2 camas", capacidad: 2, precio: 160 },
      { tipo: "Triple", camas: "3 camas", capacidad: 3, precio: 200 }
    ],
    extras: [
      { nombre: "Entrada a la piscina", precio: "Bs 20" },
      { nombre: "Billar", precio: "Bs 18 / hora" },
      { nombre: "Ping pong", precio: "Bs 18 / hora" },
      { nombre: "Playa 5", precio: "Bs 18 / hora" },
      { nombre: "Wally", precio: "Bs 50" }
    ],
    servicios: ["Piscina con tobogán", "Billar", "Ping pong", "Futbolín", "Cancha de wally"],
    horarios: null,
    direccion: "Calle Costanera",
    mapa: "https://maps.app.goo.gl/pL5PGQ9bSsN8KkLF8",
    telefono: "77050660",
    whatsapp: "77050660"
  },
  {
    id: "premier",
    nombre: "Hotel Premier",
    categoria: "hotel",
    descripcion: "Hotel de 34 habitaciones con patio interior. Todas tienen baño privado y TV cable, con aire acondicionado o ventilador.",
    portada: "img/premier/patio.jpg",
    fotos: [
      "img/premier/patio.jpg",
      "img/premier/pasillo.jpg",
      "img/premier/habitacion-doble.jpg",
      "img/premier/habitacion-aire.jpg",
      "img/premier/habitacion-tv.jpg",
      "img/premier/habitacion-matrimonial.jpg",
      "img/premier/habitacion.jpg",
      "img/premier/bano.jpg"
    ],
    habitaciones: [
      { tipo: "Individual", camas: "Con ventilador", capacidad: 1, precio: 70, precioMax: 80 },
      { tipo: "Individual", camas: "Con aire acondicionado", capacidad: 1, precio: 120 },
      { tipo: "Matrimonial", camas: "Con ventilador", capacidad: 2, precio: 130, precioMax: 140 },
      { tipo: "Matrimonial", camas: "Con aire acondicionado · 1 persona Bs 140", capacidad: 2, precio: 190 },
      { tipo: "Triple", camas: "Con ventilador", capacidad: 3, precio: 180, precioMax: 190 },
      { tipo: "Familiar", camas: "Con ventilador", capacidad: 3, precio: 200 },
      { tipo: "Familiar", camas: "Con aire acondicionado", capacidad: 3, precio: 240 },
      { tipo: "Familiar", camas: "Con aire acondicionado", capacidad: 4, precio: 270 }
    ],
    notaTarifas: "En invierno, los días que no se usa el aire acondicionado la habitación cuesta Bs 10 menos.",
    servicios: ["Baño privado", "TV cable", "Aire acondicionado o ventilador", "Patio interior"],
    horarios: null,
    direccion: "Avenida Santa Cruz",
    mapa: "https://maps.app.goo.gl/PxdVouN11jVZLwtK9",
    telefono: "73146254",
    whatsapp: "73146254"
  },
  {
    id: "punta-kami",
    nombre: "Hotel Punta Kami",
    categoria: "hotel",
    descripcion: "Hotel con piscina, gimnasio, sala de billar, ping pong y karaoke. Todas las habitaciones incluyen desayuno buffet y acceso a las instalaciones.",
    portada: "img/punta-kami/habitacion-01.jpg",
    fotos: [
      "img/punta-kami/habitacion-01.jpg",
      "img/punta-kami/habitacion-02.jpg",
      "img/punta-kami/habitacion-03.jpg",
      "img/punta-kami/habitacion-04.jpg",
      "img/punta-kami/habitacion-05.jpg",
      "img/punta-kami/habitacion-06.jpg",
      "img/punta-kami/habitacion-07.jpg",
      "img/punta-kami/habitacion-08.jpg",
      "img/punta-kami/habitacion-09.jpg",
      "img/punta-kami/habitacion-10.jpg",
      "img/punta-kami/habitacion-11.jpg",
      "img/punta-kami/habitacion-12.jpg",
      "img/punta-kami/habitacion-13.jpg",
      "img/punta-kami/habitacion-14.jpg",
      "img/punta-kami/habitacion-15.jpg",
      "img/punta-kami/habitacion-16.jpg",
      "img/punta-kami/habitacion-17.jpg"
    ],
    habitaciones: [
      { tipo: "Individual", camas: "1 cama individual", capacidad: 1, precio: 120 },
      { tipo: "Doble", camas: "2 camas individuales", capacidad: 2, precio: 160 },
      { tipo: "Matrimonial", camas: "1 cama matrimonial", capacidad: 2, precio: 160 },
      { tipo: "Triple", camas: "1 cama matrimonial + 1 individual", capacidad: 3, precio: 220 },
      { tipo: "Familiar", camas: "1 cama matrimonial + 2 individuales", capacidad: 4, precio: 280 },
      { tipo: "Familiar", camas: "1 cama matrimonial + 3 individuales", capacidad: 5, precio: 320 }
    ],
    notaTarifas: "Desayuno buffet incluido. La reserva se confirma con el pago del 50% por QR.",
    servicios: ["Baño privado", "Aire acondicionado", "TV cable", "Frigobar", "Wifi", "Desayuno buffet", "Piscina", "Gimnasio", "Sala de billar", "Ping pong", "Karaoke", "Churrasquera", "Salón de eventos y juegos", "Parqueo amplio"],
    horarios: "Check-in desde las 12:00 · Check-out hasta las 12:00 del día siguiente",
    direccion: "Km. 290 Carretera Santa Cruz – Yacuiba, a 7 cuadras de la Plaza Principal de Camiri",
    mapa: "https://maps.app.goo.gl/1FxBETRbnfmXBwmy9",
    telefono: "3 952-2380 · 3 952-3069 · 600 47010 · 600 49003",
    whatsapp: "70202314"
  },
  {
    id: "sucursal-del-cielo",
    nombre: "Hotel Sucursal del Cielo",
    categoria: "hotel",
    estrellas: 2,
    descripcion: "Hotel frente a la Terminal de Buses, con habitaciones desde sencillas hasta familiares y master suite. Cuenta con garaje, cafetería, áreas comunes y churrasquera.",
    portada: "img/sucursal-del-cielo/portada.jpg",
    fotos: [
      "img/sucursal-del-cielo/portada.jpg",
      "img/sucursal-del-cielo/master-suite.jpg",
      "img/sucursal-del-cielo/ejecutiva-balcon.jpg",
      "img/sucursal-del-cielo/ejecutiva-premium.jpg",
      "img/sucursal-del-cielo/ejecutiva.jpg",
      "img/sucursal-del-cielo/ejecutiva-economica.jpg",
      "img/sucursal-del-cielo/familiar.jpg",
      "img/sucursal-del-cielo/triple.jpg",
      "img/sucursal-del-cielo/doble.jpg",
      "img/sucursal-del-cielo/sencilla-1.jpg",
      "img/sucursal-del-cielo/sencilla-2.jpg"
    ],
    habitaciones: [
      { tipo: "Sencilla #2", camas: "1 cama de 1 plaza · baño compartido · sin TV", capacidad: 1, precio: 50 },
      { tipo: "Sencilla #1", camas: "1 cama de 2 plazas · baño compartido · sin TV", capacidad: 2, precio: 60 },
      { tipo: "Mediana", camas: "1 cama de 2 plazas · ventilador · TV · baño compartido", capacidad: "1–2", precio: 70, precioMax: 90 },
      { tipo: "Doble #3", camas: "2 camas de 1½ plazas · TV · baño compartido", capacidad: "1–2", precio: 70, precioMax: 100 },
      { tipo: "Doble #2", camas: "2 camas de 1½ plazas · aire · TV · baño compartido", capacidad: "1–2", precio: 80, precioMax: 120 },
      { tipo: "Individual o matrimonial #4", camas: "1 cama de 2 plazas · baño privado · ventilador · TV", capacidad: "1–2", precio: 80, precioMax: 100 },
      { tipo: "Individual o matrimonial #3", camas: "1 cama de 2 plazas · baño privado · aire · TV", capacidad: "1–2", precio: 100, precioMax: 120 },
      { tipo: "Ejecutiva matrimonial", camas: "1 cama de 2 plazas · baño privado · aire · Smart TV", capacidad: "1–2", precio: 120, precioMax: 140 },
      { tipo: "Doble #1", camas: "2 camas de 1½ plazas · baño semiprivado · aire · TV", capacidad: 2, precio: 130 },
      { tipo: "Triple", camas: "2 camas de 1½ + 1 de 1 plaza · baño semiprivado · aire · TV", capacidad: 3, precio: 160 },
      { tipo: "Familiar #2", camas: "1 cama de 2 plazas + 1 de 1½ · baño privado · aire · TV", capacidad: "2–4", precio: 150, precioMax: 180 },
      { tipo: "Familiar #1", camas: "1 cama de 2 plazas + litera de 1½ · baño privado · aire · TV", capacidad: "2–5", precio: 150, precioMax: 200 }
    ],
    notaTarifas: "El precio varía según la cantidad de personas en la habitación.",
    servicios: ["Garaje", "Cafetería", "Wifi", "Áreas comunes", "Churrasquera"],
    horarios: null,
    direccion: "Calle Isaac Ortuño, frente a la Terminal de Buses",
    mapa: "https://www.google.com/maps/place/Hotel+Sucursal+del+Cielo/@-20.0193687,-63.5322423,17z",
    telefono: "71682621 · 3 952 3875",
    whatsapp: null
  },
  {
    id: "urupe",
    nombre: "Urupe",
    categoria: "hostal",
    descripcion: "Residencial con habitaciones sencillas y matrimoniales, con o sin baño privado.",
    portada: "img/urupe/triple.jpg",
    fotos: ["img/urupe/triple.jpg", "img/urupe/sencilla.jpg", "img/urupe/habitacion.jpg"],
    habitaciones: [
      { tipo: "Sencilla", camas: "Baño compartido", capacidad: 1, precio: 60 },
      { tipo: "Matrimonial", camas: "Baño compartido", capacidad: 2, precio: 90 },
      { tipo: "Sencilla", camas: "Baño privado", capacidad: 1, precio: 110 },
      { tipo: "Matrimonial", camas: "Baño privado", capacidad: 2, precio: 130 }
    ],
    servicios: ["TV", "Baño privado o compartido"],
    horarios: "Atención las 24 horas",
    direccion: "Avenida Santa Cruz",
    mapa: "https://maps.app.goo.gl/XLmp15ttdRSjXHuWA",
    telefono: "75565254 · 75996121",
    whatsapp: "75565254"
  },
  {
    id: "cordillera",
    nombre: "Alojamiento Cordillera",
    categoria: "alojamiento",
    descripcion: "Alojamiento de tres pisos con habitaciones simples, privadas y familiares.",
    portada: "img/cordillera/fachada-noche.jpg",
    fotos: [
      "img/cordillera/fachada-noche.jpg",
      "img/cordillera/habitacion.jpg",
      "img/cordillera/jacuzzi.jpg",
      "img/cordillera/fachada.jpg",
      "img/cordillera/fachada-tarde.jpg"
    ],
    habitaciones: [
      { tipo: "Simple", camas: "2 camas de 1½ plazas · TV · ventilador", capacidad: 2, precio: 80 },
      { tipo: "Privada", camas: "1 cama de 2 plazas · aire acondicionado · baño privado · TV", capacidad: 2, precio: 120 },
      { tipo: "Familiar", camas: "1 cama de 2 plazas + 1 de 1½ plazas", capacidad: 3, precio: 150 },
      { tipo: "Familiar", camas: "2 camas de 1½ plazas", capacidad: "—", precio: 190 }
    ],
    servicios: ["Baño privado", "Aire acondicionado", "TV cable", "Wifi", "Garaje"],
    horarios: "Atención las 24 horas",
    direccion: "Av. Carlos Daher Harb, Zona La Williams, Camiri",
    mapa: "https://www.google.com/maps/place/Alojamiento+Cordillera/@-20.0184267,-63.5314941,17z",
    telefono: "776-41593 (Alejandro Vargas Vedia, propietario)",
    whatsapp: "77641593"
  },
  {
    id: "vega-sur",
    nombre: "Alojamiento Vega Sur",
    categoria: "alojamiento",
    descripcion: "Alojamiento con habitaciones matrimoniales y familiares, con baño privado o compartido.",
    portada: "img/vega-sur/matrimonial-privado-1.jpg",
    fotos: [
      "img/vega-sur/matrimonial-privado-1.jpg",
      "img/vega-sur/matrimonial-privado-2.jpg",
      "img/vega-sur/matrimonial-compartido-1.jpg",
      "img/vega-sur/matrimonial-compartido-2.jpg",
      "img/vega-sur/familiar-1.jpg",
      "img/vega-sur/familiar-2.jpg"
    ],
    habitaciones: [
      { tipo: "Matrimonial", camas: "Baño compartido", capacidad: 2, precio: 70 },
      { tipo: "Matrimonial", camas: "Baño privado", capacidad: 2, precio: 100 },
      { tipo: "Familiar", camas: "Baño compartido", capacidad: "—", precio: 120 }
    ],
    servicios: ["TV", "Baño privado o compartido"],
    horarios: "Atención las 24 horas",
    direccion: "Calle Coopagal, Zona La Williams",
    mapa: "https://maps.app.goo.gl/jccSZmToic8yY7pW7",
    telefono: "75513188",
    whatsapp: null
  }
];
