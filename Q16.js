// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let new_guests = ["hunain\n\t", "ali\n\t", "husnain\n\t", "saif ur rehman\n\t"];
console.log("\n\tgreat news!I found a bigger dinner table\n\t");
new_guests.unshift('hafiz\n\t');
new_guests.splice(new_guests.length / 2, 0, "naila\n\t");
new_guests.push("akbar\n\t");
new_guests.forEach(new_guest => {
    console.log(`${new_guest} would you like to join me for dinner`);
});
export {};
