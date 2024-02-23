// Question #45
function carInfo(manufacturer: string, model: string, ...options: any[]): object {
    const car: any = {
      manufacturer,
      model
    };
  
    for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  const car = carInfo("Toyota", "Grande", "color", "black", "year", 2022, "sunroof", true);
  console.log(car);