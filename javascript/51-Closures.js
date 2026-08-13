
        // closure = A function defined inside of another function,
        //           the inner function has access to the variables
        //           and scopes of the outer function.
        //          Allow for private variables and state maintenance
        //          Used frequently in JS frameworks: React, Vue, Angular

        function outer() {
            let message = "Hello"; // private variable
            function inner() {
                console.log(message);
            }
            inner();
        }

        message = "Good bye" // outside the scope

        outer();



        // state maintenance
        function createCounter() {

            let count = 0;

            function increment() {
                count++;
                console.log(`Count increased to ${count}`);
            }

            function getCount() {
                return count;
            }

            return { increment, getCount };
        }

        const counter = createCounter();

        counter.increment();
        counter.increment();
        counter.increment();

        console.log(`The current count is ${counter.getCount()}`);




        
        function createGame() {
            let score = 0;

            function increaseScore(points) {
                score += points;
                console.log(`+${points}point`);
            }

            function decreaseScore(points) {
                score -= points;
                console.log(`-${points}point`);
            }

            function getScore() {
                return score;
            }

            return {increaseScore, decreaseScore, getScore}
        }

        const game = createGame();

        game.increaseScore(65);
        game.increaseScore(55);
        game.decreaseScore(20);
        console.log(`The final score is: ${game.getScore()}`);


    
