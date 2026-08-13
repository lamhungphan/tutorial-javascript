// String methods = allow you to manipulate and work with text (strings)

let username: string = " Bro code";

console.log(username.charAt(0));
console.log(username.indexOf("d"));
console.log(username.lastIndexOf("o"));
console.log(username.length);
console.log(username.toUpperCase());
console.log(username.repeat(3));

let result: boolean = username.startsWith(" ");
if(result){
    console.log("Your username can't begin with ' '");
}else{
    console.log(username);
}

result = username.includes(" ");
if(result){
    console.log("Your username can't include with ' '");
}else{
    console.log(username);
}


let phoneNumber: string = "123-456-789";
phoneNumber = phoneNumber.replace(/-/g,'');
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15,'0');
console.log(phoneNumber);
export {};
