"use strict";
const xss = [1, 2, 3];
const ys = [1, 2, 3];
//OR
const yss = [1, 2, 3];
xss[0] = 9; //mutable
function sum(nums) {
    let s = 0;
    for (const n of nums)
        s += n;
    return s;
}
console.log(sum(xss)); // passing mutable array in readonly param is allowed
const res = yss.map((n) => n * 8); // maps and filters work for readonly arrays
