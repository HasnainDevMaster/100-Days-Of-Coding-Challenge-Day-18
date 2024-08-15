// 100 Days Of Coding Challenge!

/** Question 54:
Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment,
like adjusting labels based on user choices.*/

//-------------------------------------------------------------------------------------------------------------------------------------------

// Define an interface with index signatures for flexible keys
interface FlexibleObject {
  [key: string]: string | number | boolean;
}

// Function to create a flexible object
function createFlexibleObject(initialData: {
  [key: string]: string | number | boolean;
}): FlexibleObject {
  return { ...initialData };
}

// Function to update a key in the flexible object
function updateKey(
  obj: FlexibleObject,
  oldKey: string,
  newKey: string
): FlexibleObject {
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
