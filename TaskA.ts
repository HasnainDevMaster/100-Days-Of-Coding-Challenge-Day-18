// 100 Days Of Coding Challenge!

/** Question 52:
Make a Smartphone Object: Create a simple way to keep track of a smartphones details.
Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.*/

//---------------------------------------------------------------------------------------------------------------------------------------

// Define an interface for the Smartphone object
interface Smartphone {
  brand: string;
  model: string;
  storage: number; // in GB
  screenSize: number; // in inches
  batteryLife: number; // in hours
}

// Create a function to instantiate a Smartphone object
function createSmartphone(
  brand: string,
  model: string,
  storage: number,
  screenSize: number,
  batteryLife: number
): Smartphone {
  // Return an object that matches the Smartphone interface
  return {
    brand,
    model,
    storage,
    screenSize,
    batteryLife,
  };
}

// Example usage
const myPhone = createSmartphone("Asus", "ROG Phone 8 Pro", 512, 6.78, 19);

console.log("Smartphone:", myPhone);
