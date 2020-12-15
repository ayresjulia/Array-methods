//FOREACH: double the values
function doubleValues(arr) {
    let newArr = [];
    arr.forEach((val) => {newArr.push(val * 2)});
    return newArr;
  }

console.log(doubleValues([1,2,3])); // [2,4,6]
console.log(doubleValues([5,1,2,3,10])); // [10,2,4,6,20]

//FOREACH: only even values
function onlyEvenValues(arr){
    let newArr = [];

    arr.forEach((val) => {
        if (val % 2 === 0){
            newArr.push(val);
        };
    });
    return newArr;
}

console.log(onlyEvenValues([1,2,3])); // [2]
console.log(onlyEvenValues([5,1,2,3,10])); // [2,10]


//FOREACH: first and last of each string
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(val[0] + val[val.length-1]);
    });
    return newArr;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'test'])); // ["ct", "mt", "tm", "tt"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])); // ['hi', 'ge', 'se']

//FOREACH: add key and value
function addKeyAndValue(arr,key,value){
    arr.forEach((i) =>{
        i[key] = value;
    })
    return arr;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));
// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

//FOREACH: count vowels, case insensitive
function vowelCount(str) {
    let split = str.split("");
    let vowels = "aeiou";
    let newObj = {};

    split.forEach((k) =>{
      let lower = k.toLowerCase()
      if (vowels.indexOf(lower) !== -1) {
        if (newObj[lower]) {
            newObj[lower]++;
        }else{
            newObj[lower] = 1;
        }
      }
    });
    return newObj;
  }

console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1}
console.log(vowelCount('hmmm')); // {}
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};

//MAP: double the values
function doubleValuesWithMap(arr) {
    return arr.map((v) => {return v * 2})
}

console.log(doubleValuesWithMap([1,2,3])); // [2,4,6]
console.log(doubleValuesWithMap([1,-2,-3])); // [2,-4,-6]

//MAP: value multiply by index

function valTimesIndex(arr){
    return arr.map((v, i) => {
        return v * i;
    });
}

console.log(valTimesIndex([1,2,3])); // [0,2,6]
console.log(valTimesIndex([1,-2,-3])); // [0,-2,-6]

//MAP: return only key name

function extractKey(arr, key){
    return arr.map((name)=>{
        return name[key];
    })
}

console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));
// ['Elie', 'Tim', 'Matt', 'Colt']

//MAP: extract full name
function extractFullName(arr){
    return arr.map((k) => {
        return k.first + " " + k.last;
      });
}

console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));
// ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']


//FILTER: filter array of objects by specific key and return it
function filterByValue(arr, key) {
    return arr.filter((y)=>{
        return y[key] !== undefined;
    });
}

console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'));
// [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]

//FILTER: return value if it exists in the array
function find(arr, searchValue) {
    return arr.filter(function(val) {
        return val === searchValue;
      })[0]; //zero cause second array is empty
}

console.log(find([1,2,3,4,5], 3)); // 3
console.log(find([1,2,3,4,5], 10)); // undefined

//FILTER: return first filtered object
function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
      })[0];
}

console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true));
// {first: 'Tim', last:"Garcia", isCatOwner: true}

//FILTER: remove vowels
function removeVowels(str) {
    let vowels = "aeiou";
    return str
            .toLowerCase()
            .split("")
            .filter(function(val) {
            return vowels.indexOf(val) === -1;
    })
            .join("");
}

console.log(removeVowels('Elie')); // ('l')
console.log(removeVowels('TIM')); // ('tm')
console.log(removeVowels('ZZZZZZ')); // ('zzzzzz') 

//FILTER: filter odd num doubled
function doubleOddNumbers(arr) {
    return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
}

console.log(doubleOddNumbers([1,2,3,4,5])); // [2,6,10]
console.log(doubleOddNumbers([4,4,4,4,4])); // []