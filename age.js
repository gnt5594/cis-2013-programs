var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
    floatAge = parseFloat(prompt("Enter age"));
    floatDays = parseFloat(floatAge * 365.25).toFixed(2);// Calculates how many days
    floatMonths = parseFloat(floatAge * 12).toFixed(2);// Calculates how many months
    intWeeks = parseInt(floatDays/7);// Calculates how many weeks
    intFortnights = parseInt(floatDays/14);// Calculates how many fortnights
    alert("You are " + floatAge + " years old.\nYou are " + floatDays + " days old.\nYou are " + floatMonths + " months old.\nYou are "+ intWeeks + " weeks old.\nYou are " + intFortnights + " fortnights old.");