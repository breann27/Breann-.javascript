
function getObjectStructure(obj) {
    const structure = {};
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        structure[key] = typeof obj[key];
      }
    }
    
    return structure;
  };
  // Example input
  const person = { name: "Anirudha", age: 20};
  
  // Call the function
  const personStructure = getObjectStructure(person);
  console.log(personStructure);