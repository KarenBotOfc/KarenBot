/// <reference types="node" />
declare function toDataURL(msg: string, callback: (str: string) => void): void;
declare function toPNG(msg: string, callback: (buffer: Buffer) => void): void;
export { toDataURL, toPNG };
