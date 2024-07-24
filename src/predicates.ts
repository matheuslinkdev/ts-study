function isString(value: unknown): value is string {
  return typeof value === "string";
}

function example(x: unknown) {
  if (isString(x)) {
    console.log(x.toUpperCase())
  } else console.log(x, typeof x);
}

example(14)