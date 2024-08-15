"use strict";
// 100 Days Of Coding Challenge!
// Create a nested object representing a programmer's skills
const programmer = {
    skills: {
        languages: ["TypeScript", "JavaScript", "Python"],
        tools: ["Git", "VScode", "Docker"],
        frameworks: ["React", "Angular", "Node.js"]
    }
};
// Function to extract three specific skills
function getThreeSkills(programmer) {
    const { languages, tools, frameworks } = programmer.skills;
    // Extracting one skill from each category
    return [languages[0], tools[1], frameworks[2]];
}
// Call the function and store the result in a variable
const threeSkills = getThreeSkills(programmer);
console.log("Programmer's three skills:", threeSkills); // Output: ["TypeScript", "VScode", "Node.js"]
