// Current Date and Time
const currentDateTime = new Date();
console.log(currentDateTime.toISOString().slice(0, 19).replace('T', ' '));