"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationType = exports.ID_LENGHT = exports.ValidationTypes = void 0;
var ValidationTypes;
(function (ValidationTypes) {
    ValidationTypes[ValidationTypes["None"] = 0] = "None";
    ValidationTypes[ValidationTypes["Full"] = 5] = "Full";
})(ValidationTypes || (ValidationTypes = {}));
exports.ValidationTypes = ValidationTypes;
var ID_LENGHT = 2;
exports.ID_LENGHT = ID_LENGHT;
var ValidationType = ValidationTypes.Full;
exports.ValidationType = ValidationType;
