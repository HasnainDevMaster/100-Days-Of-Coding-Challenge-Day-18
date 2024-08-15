// 100 Days Of Coding Challenge!

/** Question 53:
Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows,
like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.*/

//-----------------------------------------------------------------------------------------------------------------------------

// Define an interface for the Programmer's skills
interface ProgrammerSkills {
  languages: string[];
  tools: string[];
  frameworks: string[];
}

// Create a nested object representing a programmer's skills
const programmer: { skills: ProgrammerSkills } = {
  skills: {
    languages: ["TypeScript", "JavaScript", "Python"],
    tools: ["Git", "VScode", "Docker"],
    frameworks: ["React", "Angular", "Node.js"],
  },
};

// Function to extract three specific skills
function getThreeSkills(programmer: { skills: ProgrammerSkills }): string[] {
  const { languages, tools, frameworks } = programmer.skills;
  // Extracting one skill from each category
  return [languages[0], tools[1], frameworks[2]];
}

// Call the function and store the result in a variable
const threeSkills = getThreeSkills(programmer);

console.log("Programmer's three skills:", threeSkills); // Output: ["TypeScript", "VScode", "Node.js"]
