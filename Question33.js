var ordinalnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
ordinalnumbers.forEach(function (number) {
    var suffix = "th";
    if (number == 1) {
        suffix = "st";
    }
    else if (number == 2) {
        suffix = "nd";
    }
    else if (number == 3) {
        suffix = "rd";
    }
    console.log(number + suffix);
});
