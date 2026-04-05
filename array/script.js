let animal = ["cow", "goat"];

animal.splice(1, 0, "horse", "camel"); // index 1 ma add

console.log(animal);
 document.getElementById("animals").textContent = animal.join(", ");
