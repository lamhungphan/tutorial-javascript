// String slicing = creating a substring from a portion of another string
// syntax = string.slice(start, end)

const fullName: string = "Nguyen Phan Lam Hung";
let firstName: string = fullName.slice(0, fullName.indexOf(' '));
let lastName: string = fullName.slice(fullName.indexOf(' ') + 1);
console.log(firstName);
console.log(lastName);

const email: string = "Hendrick@gmail.com";
let username: string = email.slice(0, email.indexOf("@"));
let extension: string = email.slice(email.indexOf("@"));
console.log(username);
console.log(extension);
export {};
