
        // EXAMPLE 1: <h1>

        // STEP 1: Create the element
        const newH1 = document.createElement("h1");

        // STEP 2: Add attributes / properties
        newH1.textContent = "I like pasta";
        newH1.id = "myH1";
        newH1.style.textAlign = "center";

        // STEP 3: Append element to DOM
        // document.body.append(newH1);
        // document.body.prepend(newH1);
        document.getElementById("box1").append(newH1);
        // document.getElementById("box1").prepend(newH1);

        // const box2 = document.getElementById("box2");
        // document.body.insertBefore(newH1, box2);

        // const boxes = document.querySelectorAll(".box");
        // document.body.insertBefore(newH1, boxes[2]);

        // REMOVE HTML element
        // document.body.removeChild(newH1);
        document.getElementById("box1").removeChild(newH1);

    
