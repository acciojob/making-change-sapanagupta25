const makeChange = (c) => {
    // Initialize an object to store the result
    let change = {
        q: 0, // Quarters
        d: 0, // Dimes
        n: 0, // Nickels
        p: 0  // Pennies
    };

    // Use floor to get the maximum number of quarters possible
    change.q = Math.floor(c / 25);
    c %= 25; // Get the remaining cents after quarters

    // Get the maximum number of dimes possible
    change.d = Math.floor(c / 10);
    c %= 10; // Get the remaining cents after dimes

    // Get the maximum number of nickels possible
    change.n = Math.floor(c / 5);
    c %= 5; // Get the remaining cents after nickels

    // Remaining cents are pennies
    change.p = c;

    return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(Number(c))));
