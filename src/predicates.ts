function isString(value: unknown): value is string {
  return typeof value === "string";
}

function example(x: unknown) {
  if (isString(x)) {
    console.log(x.toUpperCase())
  } else console.log(x, typeof x);
}

// example("hello world") //output: HELLO WORLD
example(14) //output: //14 number