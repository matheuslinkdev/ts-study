function isString(value) {
    return typeof value === "string";
}
function example(x) {
    if (isString(x)) {
        x.toUpperCase();
    }
    else
        console.log(x);
}
console.log(example("hello world"));
