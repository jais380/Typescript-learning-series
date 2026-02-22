

//strickNullChecks for null and undefined values in the code.

let title: string = "intro";

// Union type for string or undefined
let subtitle: string | undefined = "Jude";
subtitle = undefined;


// Void type for functions that do not return a value
function log(msg: string) : void {
    console.log(msg);
}

// Never type for functions that never return (e.g., throw an error)
function fail(msg: string) : never {
    throw new Error(msg);
}


// Do not use ANY type as it defeats the purpose of using Typescript.

const valueAny: any = JSON.parse('{"x": 1}');

valueAny.notThere.toFixed(2); // this compiles but can break/explode at runtime