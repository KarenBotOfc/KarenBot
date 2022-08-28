"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPNG = exports.toDataURL = void 0;
const Utils = __importStar(require("./pix.utils"));
const QRCode = __importStar(require("qrcode"));
function toDataURL(msg, callback) {
    QRCode.toDataURL(msg, function (err, url) {
        if (err) {
            throw err;
        }
        callback(url);
    });
}
exports.toDataURL = toDataURL;
function toPNG(msg, callback) {
    QRCode.toDataURL(msg, function (err, url) {
        if (err) {
            throw err;
        }
        var base64Data = url;
        var imageBuffer = Utils.decodeBase64Image(base64Data);
        callback(imageBuffer);
    });
}
exports.toPNG = toPNG;
