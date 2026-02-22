// npm run dev

let count = 88;


function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 45));


let maybe: number | string;
maybe = Math.random() > 0.5 ? "test" : 55;