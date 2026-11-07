// A ogni tocco l'albicocca saltella e saluta il mondo in un'altra lingua
const saluti = [
  ['Ciao mondo!', 'italiano'],
  ['Hello, world!', 'inglese'],
  ['Bonjour le monde !', 'francese'],
  ['¡Hola, mundo!', 'spagnolo'],
  ['Hallo Welt!', 'tedesco'],
  ['Olá, mundo!', 'portoghese'],
  ['Salve, munde!', 'latino'],
  ['Saluton, mondo!', 'esperanto'],
  ['Hei maailma!', 'finlandese'],
  ['こんにちは世界！', 'giapponese'],
  ["nuqneH, qo'!", 'klingon'],
  ['01000011 01101001 01100001 01101111', 'binario'],
  ["Ciao mondo, sono un'albicocca!", 'albicocca'],
];

const albicocca = document.querySelector('.albicocca');
const saluto = document.querySelector('.saluto');
const lingua = document.querySelector('.lingua');
let indice = 0;

albicocca.addEventListener('click', () => {
  indice = (indice + 1) % saluti.length;
  [saluto.textContent, lingua.textContent] = saluti[indice];
  // Si toglie e si rimette la classe per far ripartire il saltello
  albicocca.classList.remove('salta');
  void albicocca.offsetWidth;
  albicocca.classList.add('salta');
});
