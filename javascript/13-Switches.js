
        // Switch = can be efficient replacement to many else if statements

        let testScore = 87;
        let letterGrade;

        switch (true) {
            case testScore >= 90:
                letterGrade = "A";
                break;
            case testScore >= 80:
                letterGrade = "B";
                break;
            case testScore >= 70:
                letterGrade = "C";
                break;
            default:
                letterGrade = "F";
        }
        console.log(letterGrade);
    
