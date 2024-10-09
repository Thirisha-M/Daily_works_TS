
//nevertype used for Errorthrow and infiniteloop

//Errorthrow
//example 1

const generateError = (message: string, code: number): never => {

    throw {
        message: message,
        errorCode: code

    };
};
generateError(`An Error Occured!`, 240);

//example 2
const generateError1 = (message: string, code: number): never => {
    throw {
        message: message,
        errorCode: code

    };
};
const result = generateError1(`An Error Occured!`, 240);
console.log(result);

//example 3

const error = (message: string): never => {
    throw new Error(message);
};
const fail = () => {
    return error(`Something went wrong`);
}
fail();

//Infinite Loop
//example 1

const InfinteLoop = (): never => {
    while (true) {
        console.log(`I'm Infinite Loop`);
    }
};
InfinteLoop();
