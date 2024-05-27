function compareJSON(obj1, obj2) {
  var type = typeof obj2;
  console.log(type);
  // Check if both inputs are objects
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }

  // Get keys of both objects
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if keys are the same
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  }

  // Recursively compare values
  for (let key of keys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (typeof value1 === "object" && typeof value2 === "object") {
      if (!compareJSON(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }

  return true;
}

// Example usage:
let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

console.log(compareJSON(obj1, obj2));

