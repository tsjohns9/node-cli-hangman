words = [
  'Link',
  'Zelda',
  'Ganondorf',
  'Navi',
  'Epona',
  'Great Deku Tree',
  'Saria',
  'Majoras Mask',
  'Dark Link',
  'Impa',
  'Sheik',
  'Tingle',
  'Great Fairy',
  'Postman',
  'Skullkid',
  'Hyrule',
  'Hyrule Field',
  'Hyrule Castle',
  'Gerudo Valley',
  'Zoras Domain',
  'The Lost Woods',
  'Kokiri Forest',
  'Lake Hylia',
  'Lon Lon Ranch',
  'Clock Town',
  'Termina',
  'Rupees',
  'Master Sword',
  'Hylian Shield',
  'Mirror Shield',
  'Ocarina of Time',
  'Hookshot',
  'Light Arrows',
  'Biggorn Sword',
  'Triforce'
];

// gets a random word for the game
var randomWord = function () {
  return words[Math.floor(Math.random() * words.length)];
};

module.exports = randomWord;