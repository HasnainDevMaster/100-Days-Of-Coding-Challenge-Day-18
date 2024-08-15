"use strict";
// 100 Days Of Coding Challenge!
// Create a function to instantiate a Smartphone object
function createSmartphone(brand, model, storage, screenSize, batteryLife) {
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
