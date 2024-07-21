const returnValue = <T>(value: T ) => value

const message = returnValue<string>("Hello World")
const count = returnValue<number>(5)