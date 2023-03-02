/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  mapped = [];
  for(x = 0; x < this.length; x++){
    mapped.push(callbackFn(this[x]));
  }
  return mapped;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  filtered = [];
  this.forEach(el => {
      if(callbackFn(el)){
        filtered.push(el);
      }
    });
  return filtered;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  res = false;
  this.forEach(el =>{
    if(callbackFn(el) == true){
      res = true;
    }
  });
  return res;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  res = true;
  this.forEach(el =>{
    if(callbackFn(el) == false){
      res = false;
    }
  });
  return res;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  acc = this[0];
  for(x = 1; x < this.length; x++){
    acc = callbackFn(acc, this[x]);
  }
  return acc;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  res = false;
  this.forEach(el => {
    if(el === searchElement){
      res = true;
    }
  });
  return res;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for(x = 0; x < this.length; x++){
    if(this[x] === searchElement){
      return x;
    }
  }
  return undefined;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  index = -1;
  for(x = 0; x < this.length; x++){
    if(this[x] === searchElement){
      index = x;
    }
  }
  return index;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
  keys = [];
  for(key in object){
    keys.push(key);
  }
  return keys;
};

test = {key: "value", key2 : "value2"};
console.log(Object.myKeys(test));

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};
