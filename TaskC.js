"use strict";
// 100 Days Of Coding Challenge!
// Function to create a flexible object
function createFlexibleObject(initialData) {
    return Object.assign({}, initialData);
}
// Function to update a key in the flexible object
function updateKey(obj, oldKey, newKey) {
    if (oldKey in obj) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
    }
    return obj;
}
// Example
let myObject = createFlexibleObject({
    name: "Mark Smith",
    age: 30,
    isActive: true,
});
// log myobject before update
console.log("Before update:", myObject);
// Update the key 'name' to 'fullName'
myObject = updateKey(myObject, "name", "fullName");
console.log("After update:", myObject);
