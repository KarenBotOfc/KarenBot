/// <reference types="node" />
declare class PIXError extends Error {
    contents: string;
    constructor(message: string, params: any[]);
}
declare function zeroPad(num: number, places: number): string;
declare function numToHex(n: number, digits: number): string;
declare function computeCRC(str: string, invert?: boolean): string;
declare function decodeBase64Image(dataString: string): Buffer;
export { PIXError, zeroPad, numToHex, computeCRC, decodeBase64Image };
