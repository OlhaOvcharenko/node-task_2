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
    

    const newObject = {
        gender: randChoice(genders),
        name: '',
        lastName: '',
        age: Math.floor(Math.random() * (78 - 18 + 1)) + 18,
        email: '',
    }
    
    const name = randChoice( newObject.gender === 'Male' ? maleNames : femaleNames)
    const lastName = randChoice(lastNames);

    newObject.name = name;
    newObject.lastName = lastName;
    newObject.email = `${name.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

    people.push(newObject);
}



const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
