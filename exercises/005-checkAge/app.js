function checkAge(name, age) {
  // your code here
  if (age < 21) {
    return `Go home, ${name}!`;
  } else {
    return `Welcome, ${name}!`;
  }
}

let age = checkAge('Adrian', 22);
console.log(age);