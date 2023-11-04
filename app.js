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
        name: randChoice( this.gender === 'Male' ? maleNames : femaleNames),
        lastName: randChoice(lastNames),
        age: Math.floor(Math.random() * (78 - 18 + 1)) + 18,
        email: '',
    }
    
    const emailName = newObject.name.toLowerCase();
    const lastName = newObject.lastName.toLowerCase();
    newObject.email = `${emailName}.${lastName}@gmail.com`;

    people.push(newObject);
}



const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
