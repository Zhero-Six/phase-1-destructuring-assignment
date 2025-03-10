// 1. String Destructuring for Animal Sounds
const animalSounds = "cow horse sheep pig chicken";
const [moo, neigh, baa, oink, cluck] = animalSounds.split(" ");

// 2. String Destructuring for Animal Names
const animalNames = "cow sheep pig chicken";
const [bessie, dolly, babe, little] = animalNames.split(" ");

// 3. String Destructuring for Animal Colors
const animalColors = "cow sheep pig";
const [blackAndWhite, black, pink] = animalColors.split(" ");

// 4. Array Destructuring for Rainbow Colors (Full Names)
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// 5. Array Destructuring for Rainbow Colors (Initials)
const [r, o, y, g, b, , v] = rainbowColors;

// 6. Array Destructuring for Indigo (using indg)
const [,,,,, indg] = rainbowColors;

// 7. Object Destructuring for Muppet Data (All Keys)
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: [
    "The Rainbow Connection",
    "Moving Right Along",
    "Bein' Green",
    "I Hope That Something Better Comes Along"
  ],
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};
const { muppetName, color, song, job, partner } = muppet;

// 8. Object Destructuring for Songs 2 and 4, and Nested Job and Partner
const { songs: [, song2,, song4], nested: { job: nestedJob, partner: nestedPartner } } = muppet;