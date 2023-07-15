// For the given JSON iterate over all for loops (for, for in, for of)
var jsonData = {
    Name: "Balachandra",
    Email: "Balachandrabss@gmail.com",
    dateOfBirth: "08.07.1993",
    Gender: "Male",
    Nationality: "Indian",
    maritalStatus: "Single",
    languagesKnown: ["English", "Kannada", "Hindi", "Telugu"],
    Age: 29,
    Marks: { "B.E": "73%", "Higher secondary": "49%", SSLC: "74%" },
};
const count = Object.keys(jsonData);

// for loop
for (let i = 0; i < count.length; i++) {
    console.log(jsonData[count[i]]);
}

// for in
for (let keys in jsonData) {
    console.log(jsonData[keys]);
}

// for Of
for (let i of count) {
    console.log(jsonData[i]);
}
