
        // String slicing = creating a substring from a portion of another string
        // syntax = string.slice(start, end)

        const fullName = "Nguyen Phan Lam Hung";
        let firstName = fullName.slice(0, fullName.indexOf(' '));
        let lastName = fullName.slice(fullName.indexOf(' ') + 1);
        console.log(firstName);
        console.log(lastName);

        const email = "Hendrick@gmail.com";
        let username = email.slice(0, email.indexOf("@"));
        let extension = email.slice(email.indexOf("@"));
        console.log(username);
        console.log(extension);


    
