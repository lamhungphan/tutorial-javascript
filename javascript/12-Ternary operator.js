
        // ternary operator =   a shortcut to if() and else() statements 
        //                      helps to assign a variable based on a condition
        // syntax   =   condition ? codeIfTrue : codeIfFalse

        let purchaseAmount = 120;
        let discount = purchaseAmount >=100 ? 10 : 0;
        console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount/100)}`);
    
