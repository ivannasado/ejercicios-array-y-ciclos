let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1.
console.log(people);

//2.
people.splice(1,1);
console.log(people);

//3.
people.splice(2,1);
console.log(people);

//4.
people.splice(1,1);
people.unshift("Luis");
console.log(people);

//5.
people.push("Ivanna");
console.log(people);

//6. 
/* for (const person of people){
    if (person === "Camila") break;
    console.log(person);
} */
for (let index = 0; index < 2; index++) {
    console.log(people[index])
}

//7.
console.log(people.indexOf("Maria"));