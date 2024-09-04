var counter = 0;
while(counter<10){
    console.log(counter);
    counter = counter + 1;
}
console.log('counter: ' + counter);

counter = 0;
do { 
    console.log(counter);
    counter = counter + 1;
}while (counter<10);
console.log('counter: ' + counter);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 20; i += 2){ 
    console.log(i);
}

let i = 1;
 
while (i <= 15) {
    console.log(i);
    i += 2;
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){ 
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i);
    }
    }
   

    for (let i = 1; i <= 50; i++) {
        console.log(i)
        if(i === 30) {
          break;
        }
      }

      for (let i = 1; i <= 20; i++) {
        if (i % 5 === 0) {
          continue;
        }
      console.log(i);
    }