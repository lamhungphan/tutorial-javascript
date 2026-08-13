
        // function declaration = define a  reusable block of code 
        //                        that performs a specific task
        function greeting() {
            console.log("Hi!");
        }

        // function expressions = a way to define functions as 
        //                       values or variables
        // 1. Callbacks in asynchronous operations
        // 2. Higher-Order Functions
        // 3. Closures
        // 4. Event Listeners

        const hello = function () {
            console.log("Hello!");
        }

        greeting();
        hello();

        //////

        setTimeout(greeting, 1500);
        setTimeout(function () {
            console.log("What's up!");
        }, 3000);

        //////

        const numbers = [1, 2, 3, 4, 5, 6];

        const squares = numbers.map(square);

        function square(element) {
            return Math.pow(element, 2);
        }

        const cubes = numbers.map(function (element) { // <- replace the callback, remove the function name
            return Math.pow(element, 3);
        });

        const evenNums = numbers.filter(function (element) {
            return element % 2 === 0;
        });

        const oddNums = numbers.filter(function (element) {
            return element % 2 !== 0;
        });

        const total = numbers.reduce(function (accumulator, element) {
            return accumulator + element;
        });

        console.log(squares);
        console.log(cubes);
        console.log(evenNums);
        console.log(oddNums);
        console.log(total);

    
