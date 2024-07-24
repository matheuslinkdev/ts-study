function isString(value) {
    return typeof value === "string";
}
function example(x) {
    if (isString(x)) {
        console.log(x.toUpperCase());
    }
    else
        console.log(x, typeof x);
}
example(14);
