const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :)")', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that activity? ', (listen) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        rl.question('What is your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite  to watch on TV? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


//   // TODO: Log the answer in a database
//   console.log(`Thank you for your answer: ${answer}`);

//   rl.close();
// });

// rl.question('What is an activity you like doing? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your answer: ${answer}`);
 
//   rl.close();
// });

// rl.question('What do you listen to while doing that activity? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your answer: ${answer}`);
 
//   rl.close();
// });

// rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your answer: ${answer}`);
 
//   rl.close();
// });

// rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your answer: ${answer}`);
 
//   rl.close();
// });

// rl.question('Which sport is your absolute favourite to watch on TV? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your answer: ${answer}`);
 
//   rl.close();
// });

// rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your answer: ${answer}`);
 
// rl.close();
// });





