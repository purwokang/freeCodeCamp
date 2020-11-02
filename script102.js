// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  },
  {
    firstName: "Kang",
    lastName: "Purwo",
    number: "rahasiya",
    likes: ["JavaScript", "React", "Panahan", "Renang", "Mie Sedap", "nGoding"]
  }
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  // Solusion 1
  for (var x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return console.log(name, prop, contacts[x][prop]);
      } else {
        return console.log("No such property");
      }
    }
  }
  return console.log("No such contact");

  // Solution 2
  // for (var i = 0; i < contacts.length; i++) {
  //   if (contacts[i].firstName === name) {
  //     if (prop in contacts[i]) {
  //       return console.log(contacts[i][prop]);
  //     } else return console.log("No such property");
  //   }
  // }
  // return console.log("No such contact");
  // Only change code above this line
}

lookUpProfile("Kang", "likes");
// lookUpProfile("Akira", "likes");
// lookUpProfile("Sherlock", "likes");
// lookUpProfile("Bob", "number");
// lookUpProfile("Bob", "potato");
// lookUpProfile("Akira", "address")
