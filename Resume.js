// Create your own resume data in JSON format

var resume = {
    Name: "Balachandra Sangammanavar",
    Email: "Balachandrabss@gmail.com",
    dateOfBirth: "08.07.1993",
    Gender: "Male",
    Nationality: "Indian",
    maritalStatus: "Single",
    languagesKnown: ["English", "Kannada", "Hindi", "Telugu"],
    Age: 29,
    Marks: { "B.E": "73%", "Higher secondary": "49%", SSLC: "74%" },
    Qualification: "B.E Mechanical",
    yearsOfExperience: 4.5,
    Software_proficiency: [
        "javascript",
        "HTML",
        "css",
        "Ms office",
    ],
    hobbies: ["Gaming", "Binge watching"],
};

var resumeJSONFormat = JSON.stringify(resume);
console.log(resumeJSONFormat);
