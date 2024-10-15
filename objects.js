// Making another change
let person = {
    name: 'John',
    age: 30,
    "job title": 'Developer'
};
// Dot notation for static properties
console.log(person.name); // John
// Bracket notation for dynamic or special properties
console.log(person["age"]); // 30
console.log(person["job title"]); // Developer
// Using variables with bracket notation
let propName = "name";
console.log(person[propName]); // John



let person1 = {
    name: 'John',
    age: 30,
    isStudent: false,
    sayHello: function () {
        console.log('Hello!');
    }
};

for (let key in person1) {
    console.log(key + ': ' + person1[key]);
}
 

let a = 5;
let b = 5;
console.log(a === b); // true

let obj1 = { name: 'John' };
let obj2 = { name: 'John' };
console.log(obj1 === obj2); // false (different references)


let car = {
    color: 'blue',
    model: 'sedan',
    maxSpeed: 120,
    start: function () {
        console.log("car started");
    },
    stop: function () {
        console.log("car stopped");
    },
    honk: function () {
        console.log("horn honked");
    }
};
console.log(car);




let smartphone = {
    brand: 'iPhone',
    model: '15',
    batteryLevel: 80,
    makeCall: function () {
        console.log("call made");
    },
    sendText: function () {
        console.log("text sent");
    },
    takePhoto: function () {
        console.log("photo taken");
    }
};
console.log(smartphone);


// Dot Notation

console.log(car.maxSpeed);

console.log(car.start);


// Square Bracket Notation

console.log(smartphone["batteryLevel"]);

console.log(smartphone["sendText"]);



// Object with array of properties
let person2 = {
    name: "John Doe",
    age: 25,
    city: "New York"
};
// adding to object properties
person2.email = "email@gmail.com";

// Template Literal " `` " with embeded expressions
for (let prop in person2) { 
    console.log(`${prop}: ${person2[prop]}`)
}

 
// Object Comparision
let friend = {
    name: "John Doe",
    age: 25,
    city: "New York",
    email: "email@gmail.com"
};

console.log("John is a Friend!", JSON.stringify(person2) === JSON.stringify(friend));


// Nested Objects
let student = { 
    name: "James Oliver",
    age: 17,
    grade: "A",
    classes: { 
        math: "Mr. Hyde",
        english: "Mrs. Driver",
        science: "Ms. Rhodes",
        socialStudies: "Mr. Jeckle",
        physicalEducation: {
            football: "Mr. Miller",
            basketball: "Mr. Smith",
            soccer: "Mr. Brown",
            trackField: {
                headCoach: "Mrs. Miller",
                asstCoach1: "Mr. Vito",
                asstCoach2: "Ms. Holmes"
            }
         }
    }
};

console.log("Student and Students favorite teachers.");
console.log(student.name);
console.log(student.classes.science);
console.log(student.classes.physicalEducation.basketball);
console.log(student.classes.physicalEducation.trackField.asstCoach1);



