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
exports.Static = exports.Message = exports.MessageFields = exports.AcceptedFieldDefinitions = exports.FieldRequirements = void 0;
const Config = __importStar(require("./pix.config"));
const Fields = __importStar(require("./pix.fields"));
const Groups = __importStar(require("./pix.groups"));
const Utils = __importStar(require("./pix.utils"));
var FieldRequirements;
(function (FieldRequirements) {
    FieldRequirements["Optional"] = "O";
    FieldRequirements["Mandatory"] = "M";
    FieldRequirements["Conditional"] = "C";
})(FieldRequirements || (FieldRequirements = {}));
exports.FieldRequirements = FieldRequirements;
;
class AcceptedFieldDefinitions {
    constructor() {
        this.Order = -1;
        this.Requirement = FieldRequirements.Optional;
    }
}
exports.AcceptedFieldDefinitions = AcceptedFieldDefinitions;
class MessageFields {
    constructor(order, field) {
        this.Order = order;
        this.Field = field;
    }
}
exports.MessageFields = MessageFields;
class Message {
    constructor() {
        this.AcceptedFieldList = new Map();
        this.FieldList = new Array();
    }
    // ToDo: Implement this method, checking if mandatory fields are present.
    validate() {
        this.FieldList.forEach(function (message_field) {
            message_field.Field.validate();
        });
    }
    getStringValue() {
        if (Config.ValidationType == Config.ValidationTypes.Full) {
            this.validate();
        }
        let msg = '';
        for (let item of this.FieldList) {
            if (item.Field instanceof Fields.CRC16) {
                item.Field.setValue(msg);
            }
            msg = msg + item.Field.getStringValue();
        }
        if (Config.ValidationType == Config.ValidationTypes.Full) {
            this.validate();
        }
        return msg;
    }
    existsField(field_type) {
        this.FieldList.forEach(function (message_field) {
            if (message_field.Field instanceof field_type) {
                return true;
            }
        });
        return false;
    }
    getField(field_type) {
        let found_field;
        this.FieldList.forEach(function (message_field) {
            if (message_field.Field instanceof field_type) {
                found_field = message_field.Field;
                return message_field;
            }
        });
        if (found_field == undefined) {
            throw new Utils.PIXError('Field not found.', [this, field_type]);
        }
        return found_field;
    }
    setField(field, order_override = -1) {
        let accepted = false;
        var order = order_override;
        this.AcceptedFieldList.forEach((value, key) => {
            if (field instanceof key) {
                accepted = true;
                order = value.Order;
            }
        });
        if (!accepted) {
            throw new Utils.PIXError('Field not accepted in this message.', [this, field, order_override]);
        }
        let existing_index = -1;
        this.FieldList.forEach(function (item, index) {
            if (order == item.Order) {
                existing_index = index;
            }
        });
        if (existing_index != -1) {
            this.FieldList[existing_index].Field = field;
        }
        else {
            this.FieldList.push({ Order: order, Field: field });
            this.FieldList.sort((a, b) => (a.Order > b.Order) ? 1 : -1);
        }
    }
}
exports.Message = Message;
class Static extends Message {
    constructor(key, merchant_name, merchant_city) {
        super();
        this.AcceptedFieldList = new Map([
            [Fields.Payload_Format_Indicator, { Order: 0, Requirement: FieldRequirements.Mandatory }],
            [Fields.Point_Of_Initiation_Method, { Order: 1, Requirement: FieldRequirements.Optional }],
            [Groups.Grp_Merchant_Account_Information, { Order: 2, Requirement: FieldRequirements.Mandatory }],
            [Fields.Merchant_Category_Code, { Order: 3, Requirement: FieldRequirements.Mandatory }],
            [Fields.Transaction_Currency, { Order: 4, Requirement: FieldRequirements.Mandatory }],
            [Fields.Transaction_Amount, { Order: 5, Requirement: FieldRequirements.Optional }],
            [Fields.Country_Code, { Order: 6, Requirement: FieldRequirements.Mandatory }],
            [Fields.Merchant_Name, { Order: 7, Requirement: FieldRequirements.Mandatory }],
            [Fields.Merchant_City, { Order: 8, Requirement: FieldRequirements.Mandatory }],
            [Fields.Postal_Code, { Order: 9, Requirement: FieldRequirements.Optional }],
            [Groups.Grp_Additional_Data_Field, { Order: 10, Requirement: FieldRequirements.Optional }],
            [Groups.Grp_Unreserved_Templates, { Order: 11, Requirement: FieldRequirements.Optional }],
            [Fields.CRC16, { Order: 12, Requirement: FieldRequirements.Mandatory }]
        ]);
        this.setField(new Fields.Payload_Format_Indicator());
        //this.setField(new Fields.Point_Of_Initiation_Method());
        var grp = new Groups.Grp_Merchant_Account_Information();
        grp.Children.push(new Fields.Merchant_Account_Information('01', key));
        this.setField(grp);
        this.setField(new Fields.Merchant_Category_Code());
        this.setField(new Fields.Transaction_Currency());
        this.setField(new Fields.Country_Code());
        this.setField(new Fields.Merchant_Name(merchant_name));
        this.setField(new Fields.Merchant_City(merchant_city));
        this.setField(new Fields.CRC16());
        if (Config.ValidationType == Config.ValidationTypes.Full) {
            this.validate();
        }
    }
}
exports.Static = Static;
