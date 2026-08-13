
        // setTimeout() = A function in JS that allows to schedule
        // the execution of a function after an amount of time (miliseconds)
        // Time are approximate (varies based on the workload of the JS runtine env.)
        // setTimeout(callback, delay);
        // clearTimeout(timeoutId) = can cancel a timeout before it triggers



        // function sayHello(){
        //     window.alert("Hello");
        // }
        // setTimeout(sayHello, 2000);
        // setTimeout(function(){window.alert("Hendrick")}, 4000);
        // setTimeout(() => {window.alert("What u doin")}, 6000);



        let timeoutId;
        let intervalId;

        function startTimer() {
            timeoutId = setTimeout(() => window.alert("Hello"), 3000);
            console.log("started");
        }

        function clearTimer() {
            clearTimeout(timeoutId);
            console.log("cleared");
        }
   
    
