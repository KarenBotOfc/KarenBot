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
exports.Unreserved_Templates = exports.Additional_Data_Field = exports.CRC16 = exports.Postal_Code = exports.Merchant_City = exports.Merchant_Name = exports.Country_Code = exports.Transaction_Amount = exports.Transaction_Currency = exports.Merchant_Category_Code = exports.Merchant_Account_Information = exports.Point_Of_Initiation_Method = exports.Payload_Format_Indicator = exports.NumField = exports.StrField = exports.Field = void 0;
const Config = __importStar(require("./pix.config"));
const Utils = __importStar(require("./pix.utils"));
class Field {
    constructor(id, value, min_length = -1, max_length = -1) {
        this.ID = id;
        this.Min_length = min_length;
        this.Max_length = max_length;
        this.Value = value;
        this.TextValue = '';
        this.setValue(value);
    }
    validate() {
        if (this.ID.length != Config.ID_LENGHT) {
            throw new Utils.PIXError('Invalid ID in PIX_Field.', [this]);
        }
        if ((this.Min_length != -1 && this.TextValue.length < this.Min_length) ||
            (this.Max_length != -1 && this.TextValue.length > this.Max_length)) {
            throw new Utils.PIXError('Invalid Data in PIX_Field.', [this]);
        }
    }
    getStringValue() {
        if (Config.ValidationType == Config.ValidationTypes.Full) {
            this.validate();
        }
        return this.ID + Utils.zeroPad(this.TextValue.length, 2) + this.TextValue;
    }
}
exports.Field = Field;
class StrField extends Field {
    constructor(id, value = '', min_length = -1, max_length = -1) {
        super(id, value, min_length, max_length);
    }
    setValue(value) {
        this.Value = value;
        this.TextValue = value;
        if (Config.ValidationType == Config.ValidationTypes.Full) {
            this.validate();
        }
    }
}
exports.StrField = StrField;
class NumField extends Field {
    constructor(id, value, min_length = -1, max_length = -1, min_value = -999999, max_value = -999999, decimals = 0) {
        super(id, value, min_length, max_length);
        this.Min_Value = min_value;
        this.Max_Value = max_value;
        this.Decimals = decimals;
        this.setValue(value);
    }
    validate() {
        Field.prototype.validate.call(this);
        if ((this.Min_Value != -999999 && this.Value < this.Min_Value) ||
            (this.Max_Value != -999999 && this.Value > this.Max_Value)) {
            throw new Utils.PIXError('Invalid Data in PIX_IntField.', [this]);
        }
    }
    setValue(value) {
        this.Value = value;
        if (this.Decimals == 0) {
            this.TextValue = value.toString();
        }
        else {
            this.TextValue = value.toFixed(this.Decimals);
        }
        if (Config.ValidationType == Config.ValidationTypes.Full) {
            this.validate();
        }
    }
}
exports.NumField = NumField;
//Specific  Field Definitions
class Payload_Format_Indicator extends StrField {
    constructor(value = '01') { super('00', value, 2, 2); }
}
exports.Payload_Format_Indicator = Payload_Format_Indicator;
class Point_Of_Initiation_Method extends StrField {
    constructor(value = '11') { super('01', value, 2, 2); }
} //TODO: dictionary of accepted values
exports.Point_Of_Initiation_Method = Point_Of_Initiation_Method;
class Merchant_Account_Information extends StrField {
    constructor(id, value) { super(id, value, 1, 99); }
}
exports.Merchant_Account_Information = Merchant_Account_Information;
class Merchant_Category_Code extends StrField {
    constructor(value = '0000') { super('52', value, 4, 4); }
} //TODO: dictionary of accepted values (https://stripe.com/docs/issuing/categories)
exports.Merchant_Category_Code = Merchant_Category_Code;
class Transaction_Currency extends StrField {
    constructor(value = '983') { super('53', value, 3, 3); }
} //TODO: dictionary of accepted values
exports.Transaction_Currency = Transaction_Currency;
class Transaction_Amount extends NumField {
    constructor(value) { super('54', value, 1, 13, 0, 9999999999.99, 2); }
}
exports.Transaction_Amount = Transaction_Amount;
class Country_Code extends StrField {
    constructor(value = 'BR') { super('58', value, 2, 2); }
}
exports.Country_Code = Country_Code;
class Merchant_Name extends StrField {
    constructor(value) { super('59', value, 1, 25); }
}
exports.Merchant_Name = Merchant_Name;
class Merchant_City extends StrField {
    constructor(value) { super('60', value, 1, 15); }
}
exports.Merchant_City = Merchant_City;
class Postal_Code extends StrField {
    constructor(value) { super('61', value, 1, 99); }
}
exports.Postal_Code = Postal_Code;
class CRC16 extends StrField {
    constructor() { super('63', '', 4, 4); }
    setValue(value) {
        this.Value = value;
        this.TextValue = Utils.computeCRC(this.Value + this.ID + '04');
    }
}
exports.CRC16 = CRC16;
class Additional_Data_Field extends StrField {
    constructor(id, value) { super(id, value, 1, 99); }
}
exports.Additional_Data_Field = Additional_Data_Field;
class Unreserved_Templates extends StrField {
    constructor(id, value) { super(id, value, 1, 99); }
}
exports.Unreserved_Templates = Unreserved_Templates;
