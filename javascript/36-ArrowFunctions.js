
        // Arrow functions = a concise way to write function expressions
        //                   good for simple functions that you use only once
        //                  (parameters) => some code

        // Function Declaration
        function hello() {
            console.log("Hello");
        }
        hello();

        // Function Expression = Anonymous function
        const hi = function () {
            console.log("Hi");
        }
        hi();

        // Arrow Function (ES6)
        const grett = () => console.log("What's up");
        grett();

        const gretting = (name) => console.log(`What's up ${name}`);
        gretting("Bro");
        
        const uAreOld = (name, age) => { console.log(`What's up ${name}`)
                                         console.log(`You are ${age} year old`) };
        uAreOld("Hendrick", 25);

        //////
        setTimeout(hello, 1000);
        setTimeout(function () {console.log("Anonymous function as param")}, 2000);
        setTimeout(() => console.log("Arrow function as param"), 3000);

        //////
        const numbers = [1, 2, 3, 4, 5, 6];

        const squares = numbers.map((element) => Math.pow(element, 2));
        const cubes = numbers.map((element) => Math.pow(element, 3));
        const evenNums = numbers.filter((element) => element % 2 === 0);
        const oddNums = numbers.filter((element) => element % 2 !== 0);
        const total = numbers.reduce((accumulator, element) => accumulator + element);

        console.log(total);
        
    
