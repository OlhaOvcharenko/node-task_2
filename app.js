const fs = require('fs');

const genders = ['Male', 'Female'];
const femaleNames = ['Kate', 'Lusy', 'Zuza', 'Ann'];
const maleNames = ['Robert', 'John', 'Luk', 'Greg'];
const lastNames = ['Underwood', 'Json', 'Clarc', 'Davis'];


function randChoice(arr){

    const randomElem = Math.floor(Math.random() * arr.length);

    return arr[randomElem];

};

const people = [];

for (let i = 0; i < 20; i++) {

    const gender = randChoice(genders);
    const name = randChoice( gender === 'Male' ? maleNames : femaleNames)
    const lastName = randChoice(lastNames);
    const email =`${name.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

    const person = {
        gender,
        name,
        lastName,
        age: Math.floor(Math.random() * (78 - 18 + 1)) + 18,
        email,
    }

    people.push(person);
}



const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
