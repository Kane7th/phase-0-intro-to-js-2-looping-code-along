// Code your solutions in this file
for (let age = 30; age <= 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll", "bike", "puppy"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
  let thankYouCards = [];
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouCards;
}

const cards = writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");

console.log(cards);

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }