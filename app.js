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

    const newObject = {}

    const gender = randChoice(genders);

    if (gender === 'Male'){
        const name = randChoice(maleNames);
        newObject.maleName = name;
    } else if (gender === 'Female'){
        const name = randChoice(femaleNames);
        newObject.femaleName = name;
    }  

    
    newObject.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const lastNameToLowerCase = newObject.lastName.toLowerCase();

    const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
    newObject.age = age;

    if(newObject.femaleName) {
        const nameToLowerCase = newObject.femaleName.toLowerCase();
        newObject.email = nameToLowerCase + '.' + lastNameToLowerCase + '@gmail.com';
    } else {
        const nameToLowerCase = newObject.maleName.toLowerCase();
        newObject.email = nameToLowerCase + '.' + lastNameToLowerCase + '@gmail.com';
    }


    people.push(newObject);
}



const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
