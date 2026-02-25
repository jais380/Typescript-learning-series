"use strict";
function greetPersonOptional(name) {
    const upperRes = name ? name?.toUpperCase() : "Guest";
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional("Jude"));
console.log(greetPersonOptional());
function greetPersonDefault(name = "Deafault") {
    return `Hello ${name.toUpperCase()}`;
}
console.log(greetPersonDefault("Jude"));
console.log(greetPersonDefault());
function connect(host, port, secure) {
    const p = port ?? 80;
    const s = secure ?? false;
    return `Connect ${host} ${p} ${s}`;
}
console.log(connect('localhost', 8000, true));
console.log(connect('localhost'));
