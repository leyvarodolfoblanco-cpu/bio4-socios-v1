// Tarjetas originales de «2026 PRODUCTOS WHATSAPP». El número conserva el orden
// del inventario privado; este archivo contiene únicamente rutas públicas.
const series = [
  ['B4-GANOCONGRUENCIA-01', 1],
  ['B4-BIOCON-01', 4],
  ['B4-BIOGRU-01', 7],
  ['B4-BIOEN-01', 10],
  ['B4-BIOCIA-01', 13],
  ['B4-GANOHE-01', 16],
  ['B4-BIOFLAX-01', 19],
  ['B4-BIOFLEX-01', 22],
  ['B4-BIOFORCE-01', 25],
  ['B4-BIOLYBER-01', 28],
  ['B4-ETERNAL-01', 31],
  ['B4-BIOPROPOLEO-01', 34],
  ['B4-BIOMIEL-01', 37],
  ['B4-BIOFIT-01', 40],
  ['B4-SATTVA-01', 43],
  ['B4-CEUTICA4-01', 46],
  ['B4-SUPERBIO-01', 49],
  ['B4-TODAY-01', 52],
  ['B4-KENKO-TODAY-01', 55],
  ['B4-KENKO-CAFE-01', 58],
  ['B4-KENKO-OLLA-01', 61],
  ['B4-4DXT-ANTIOX-01', 64],
  ['B4-COLAGENO-GEL-01', 67],
  ['B4-4DXT-XTI-01', 70],
  ['B4-4DXT-KUUL-01', 73],
  ['B4-GANODENT-01', 76],
  ['B4-DIAMANTES-SHAMPOO-01', 79],
  ['B4-DIAMANTES-ACOND-01', 82],
  ['B4-LADOUCHE-01', 85],
  ['B4-LADOUCHE-02', 88],
  ['B4-GANOSOAP-01', 91],
  ['B4-4BELLE-01', 94],
  ['B4-GANOSUN-01', 97],
  ['B4-COLAGENO-FACIAL-01', 100],
  ['B4-EXFOLIANTE-01', 103],
  ['B4-SHII-MANOS-01', 106],
  ['B4-SHII-SEDA-01', 109],
  ['B4-SHII-TONICO-01', 112],
  ['B4-SHII-DESMAQUILLANTE-01', 115],
  ['B4-SHII-TOMILLO-01', 118],
  ['B4-BIOCRISTAL-01', 121],
  ['B4-4SAVE-01', 124],
  ['B4-BIOCLEAN-01', 127],
  ['B4-AHORRADOR-GASOLINA-01', 130, 2],
  ['B4-KENKO-TODAY-02', 132]
];

const labels = ['Producto', 'Beneficios', 'Ingredientes'];
const card = (number, label) => ({
  label,
  src: `assets/whatsapp-2026/${String(number).padStart(3, '0')}.jpg`
});

export const productMedia = Object.fromEntries(series.map(([id, first, count = 3]) => [
  id,
  Array.from({length: count}, (_, offset) => card(first + offset, labels[offset]))
]));
