import * as Utils from './pix.utils';
import * as QRCode from 'qrcode';
function toDataURL(msg, callback) {
    QRCode.toDataURL(msg, function (err, url) {
        if (err) {
            throw err;
        }
        callback(url);
    });
}
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
export { toDataURL, toPNG };
