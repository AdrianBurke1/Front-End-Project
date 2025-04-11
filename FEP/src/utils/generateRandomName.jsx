const dogNames = [
    "Buddy", "Max", "Charlie", "Cooper", "Rocky", "Duke", "Bear", "Teddy", "Milo", "Leo"
  ];
  
  const catNames = [
    "Luna", "Oliver", "Simba", "Milo", "Leo", "Chloe", "Nala", "Zoe", "Loki", "Oreo"
  ];
  
  export function generateRandomName(type = "cat") {
    const names = type === "dog" ? dogNames : catNames;
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
  