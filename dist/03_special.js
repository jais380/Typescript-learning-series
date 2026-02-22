"use strict";
//strickNullChecks for null and undefined values in the code.
let title = "intro";
// Union type for string or undefined
let subtitle = "Jude";
subtitle = undefined;
// Void type for functions that do not return a value
function log(msg) {
    console.log(msg);
}
// Never type for functions that never return (e.g., throw an error)
function fail(msg) {
    throw new Error(msg);
}
// Do not use ANY type as it defeats the purpose of using Typescript.
const valueAny = JSON.parse('{"x": 1}');
valueAny.notThere.toFixed(2); // this compiles but can break/explode at runtime
