var myName = "Jason";

function greetings(name) {
     return `Greetings ${name}.`;
}

console.log('results: ', greetings(myName));

module.exports = {myName,greetings} ;