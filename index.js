function hasTargetSum(array, target) {
  // Write your algorithm here
  // return bruteForce(array, target);
  // return objectMethod(array, target);
  return objectMethod2(array, target);
}

function bruteForce(array, target) {
  for (let i=0; i<array.length-1; i++) {
    for (let j=i+1; j<array.length; j++) {
      if (array[i] + array[j] === target) return true
    }
  }
  return false;
}

function objectMethod(array, target) {
  const obj = {};

  array.forEach(element => {
    if (obj[element] === undefined) {
      obj[element] = {target: target - element, count: 1};
    } else {
      obj[element] = Object.assign(obj[element], {count: obj[element].count + 1});
    }
  });

  for (const key in obj) {
    if (obj[key].target === +key) { 
      if (obj[key].count > 1) return true;
    } else {
      if (obj[obj[key].target] !== undefined) return true;
    }
  }
  return false;
}

function objectMethod2(array, target) {
  const obj = {};

  array.forEach(element => {
    if (obj[element] === undefined) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
  });

  for (const key in obj) {
    if (+key === target / 2) { 
      if (obj[key] > 1) return true;
    } else {
      if (obj[target - +key] !== undefined) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  Brute Force: O(n^2)
  Object Method: 
    O(n) to create the object
    O(n) to iterate through the object
    O(n) overall
*/

/* 
  Add your pseudocode here

  Brute Force:
    for num1, index of array
      for num2 of array[index+1:]
        if num1 + num2 == target return true
    return false

    Object Method:
      obj = {}
      for num of array
        obj[num] = target - num
      for key in object
        if obj[obj[key]] return true
      return false
*/

/*
  Add written explanation of your solution here
  Brute force method:
    Iterate through each element
    On each iteration, iterate through the remaining items
    Check if the sum equals the target, return true
    After iterating if no match is count, return false

  Another method:
    Create an object where each element is the key, and the remainder to reach the target is the value
    Iterate through the object's keys and see if the object has a key of the remainder value
    If so, then it can add up to the target, return true
    Else, return false

    Edge cases:
      two elements in the initial array are identical and add up to the value
      one element in the initial array is exactly half of the value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 2, 4], 4));
}

module.exports = hasTargetSum;
