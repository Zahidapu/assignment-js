// problem 01: (kilometerToMeter)
// main Function
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {

        var meter = kilometer * 1000; //we know that, 1 kilometer is 1000 meter
        return meter;
    } else {
        return "Enter a valid number. Meter cannot have a string or negative value"; //error massage
    }
}

//call kilometerToMeter function and pass (kilometer) as parameter



// problem 02: (budgetCalculator)

// main Function
function budgetCalculator(watch, phone, laptop) {
    var totalCost = ((50 * watch) + (100 * phone) + (500 * laptop));
    //price should be in numbers. Not string or negative values
    if (watch >= 0 && watch != "" && phone >= 0 && phone != "" && laptop >= 0 && laptop != "") {
        return totalCost;
    } else {
        return "Enter a valid number. Your price must be in numbers" //error massage
    }

}
//call budgetCalculator function and pass (watch, phone, laptop) as parameter



// problem 03: (hotelCost)

// main Function
function hotelCost(numberOfDays) {
    if (numberOfDays >= 0 && numberOfDays != "") {
        //for first 10 days
        if (numberOfDays <= 10) {
            totalCost = numberOfDays * 100;
        }
        ////for 11th to 20th day
        else if (numberOfDays > 10 && numberOfDays <= 20) {
            numberOfDays = numberOfDays - 10;
            totalCost = ((10 * 100) + (numberOfDays * 80)); //after 25% discount price is 80
        }
        //from 21th day to infinity 
        else {
            numberOfDays = numberOfDays - 20;
            totalCost = ((10 * 100) + (10 * 80) + (numberOfDays * 50)); //after 50% discount price is 50
        }
        return totalCost;
    } else {
        return "Enter a valid number. Days cant have negative or string values";
    }
}
//call hotelCost function and pass (numberOfDays) as parameter


// problem 04: (megaFriend)
// main Function
function megaFriend(friendsName) {
    if (friendsName.length > 0) {
        var biggestName = friendsName[0];
        for (var i = 1; i < friendsName.length; i++) {
            if (typeof friendsName[i] == "string") {
                var element = friendsName[i];
                if (biggestName.length < element.length) {
                    biggestName = element;
                }
            } else {
                return "Enter string only "; // This is for only string values
            }
        }
        return biggestName;
    } else {
        return "write something";
    }
}
//call megaFriend function and pass (numberOfDays) as parameter