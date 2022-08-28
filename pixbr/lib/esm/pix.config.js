var ValidationTypes;
(function (ValidationTypes) {
    ValidationTypes[ValidationTypes["None"] = 0] = "None";
    ValidationTypes[ValidationTypes["Full"] = 5] = "Full";
})(ValidationTypes || (ValidationTypes = {}));
var ID_LENGHT = 2;
var ValidationType = ValidationTypes.Full;
export { ValidationTypes, ID_LENGHT, ValidationType };
