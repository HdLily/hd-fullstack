const dogs = new Map();
dogs.set('Snickers',3);
dogs.set('sunny',2);
dogs.set('Hugo',11);


// dogs.forEach((key,val) => console.log(key, val));
// 可以迭代的都可以使用for of
for(const [key,val] of dogs) {
    console.log(key, val);
}

let a = 1;
let b = 2;
[a,b] = [b,a];
console.log([a,b]);
