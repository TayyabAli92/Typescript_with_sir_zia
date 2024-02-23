// Question #44
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let item of items) {
      console.log(item);
    }
    console.log("Bread");
    console.log("----------------------");
  }
  
  make_sandwich("Tomato", "Onine", "Cheese");
  make_sandwich("Mayo", "Mustard", "Chili Garlic sauce");
  make_sandwich("Chiken", "Bacon", "Cucumber", "ketchup");