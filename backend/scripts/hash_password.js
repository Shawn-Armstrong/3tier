const bcrypt = require('bcrypt');

// Prompt the user for input (you could use a package like `readline-sync` for synchronous I/O)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the password to hash: ', function(password) {
  // The salt rounds is a cost factor that determines how much time is needed to calculate a single bcrypt hash.
  const saltRounds = 10;

  // Hash the password
  bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log('Hashed password:', hash);
    // Here you would insert the hash into the database manually or through a script

    // Don't forget to close the readline interface
    readline.close();
  });
});
