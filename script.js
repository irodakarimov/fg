// Berilgan so'zlar ro'yxati
let words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

// "n" harfi bor so'zlarni ajratish
let withN = words.filter(word => word.includes('n'));

// "n" harfi yo'q so'zlarni ajratish
let withoutN = words.filter(word => !word.includes('n'));

// Natijani konsolda chiqarish
console.log(withN, "'n' harfi ishtirok etgan so'zlar");
console.log(withoutN, "'n' harfi ishtirok etmagan so'zlar");