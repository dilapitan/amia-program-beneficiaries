const REGION_5 = [
  {
    province: 'ALBAY',
    municipalities: [
      'Bacacay',
      'Camalig',
      'Daraga',
      'Guinobatan',
      'Jovellar',
      'Legazpi City',
      'Libon',
      'Ligao City',
      'Malilipot',
      'Malinao',
      'Manito',
      'Oas',
      'Pioduran',
      'Polangui',
      'Rapu-Rapu',
      'Sto.Domingo',
      'Tabaco City',
      'Tiwi',
    ],
  },
  {
    province: 'CAMARINES NORTE',
    municipalities: [
      'Basud',
      'Capalonga',
      'Daet',
      'Jose Panganiban',
      'Labo',
      'Mercedes',
      'Paracale',
      'San Vicente',
      'SL Ruiz',
      'Sta. Elena',
      'Talisay',
      'Vinzons',
    ],
  },
  {
    province: 'CAMARINES SUR',
    municipalities: [
      'Camaligan',
      'Iriga City',
      'Baao',
      'Balatan',
      'Bato',
      'Bombon',
      'Buhi',
      'Bula',
      'Cabusao',
      'Calabanga',
      'Canaman',
      'Caramoan',
      'Del Gallego',
      'Gainza',
      'Garchitorena',
      'Goa',
      'Lagonoy',
      'Libmanan',
      'Lupi',
      'Magarao',
      'Milaor',
      'Minalabac',
      'Nabua',
      'Naga City',
      'Ocampo',
      'Pamplona',
      'Pasacao',
      'Pili',
      'Presentacion',
      'Ragay',
      'San Fernando',
      'San Jose',
      'Sangay',
      'Sipocot',
      'Siruma',
      'Tigaon',
      'Tinambac',
    ],
  },
  {
    province: 'CATANDUANES',
    municipalities: [
      'Aroroy',
      'Baleno',
      'Balud',
      'Batuan',
      'Cataingan',
      'Cawayan',
      'Claveria',
      'Dimasalang',
      'Esperanza',
      'Mandaon',
      'Masbate City',
      'Milagros',
      'Mobo',
      'Monreal',
      'Palanas',
      'Pio V. Corpuz',
      'Placer',
      'San Fernando',
      'San Jacinto',
      'San Pascual',
      'Uson',
    ],
  },
  {
    province: 'MASBATE',
    municipalities: [
      'Bagamanoc',
      'Baras',
      'Bato',
      'Caramoran',
      'Gigmoto',
      'Pandan',
      'Panganiban',
      'San Andres',
      'San Miguel',
      'Viga',
      'Virac',
    ],
  },
  {
    province: 'SORSOGON',
    municipalities: [
      'Barcelona',
      'Bulan',
      'Bulusan',
      'Casiguran',
      'Castilla',
      'Donsol',
      'Gubat',
      'Irosin',
      'Juban',
      'Magallanes',
      'Matnog',
      'Pilar',
      'Pto. Diaz',
      'Sorsogon City',
      'Sta. Magdalena',
    ],
  },
]

const PROVINCES_OF_REGION_5 = [
  'ALBAY',
  'CAMARINES NORTE',
  'CAMARINES SUR',
  'CATANDUANES',
  'MASBATE',
  'SORSOGON',
]

export const getRegion5 = () => {
  return REGION_5
}

export const getProvincesOfRegion5 = () => {
  return PROVINCES_OF_REGION_5
}
