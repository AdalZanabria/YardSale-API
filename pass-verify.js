const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123';
  const hash = '$2b$10$c0qWpWTN14X9Mju0/rYnOuSqnPkvxJkjLlyfEN1F4iVflPoQnn8wu';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
