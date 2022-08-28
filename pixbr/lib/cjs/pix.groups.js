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
exports.Grp_Unreserved_Templates = exports.Grp_Additional_Data_Field = exports.Grp_Merchant_Account_Information = exports.Group = void 0;
const Config = __importStar(require("./pix.config"));
const Utils = __importStar(require("./pix.utils"));
const Fields = __importStar(require("./pix.fields"));
class Group {
    constructor(id, min_length = -1, max_length = -1) {
        this.ID = id;
        this.Value = undefined;
        this.TextValue = '';
        this.Min_length = min_length;
        this.Max_length = max_length;
        this.Children = new Array();
    }
    validate() {
        if (this.ID.length != Config.ID_LENGHT) {
            throw new Utils.PIXError('Invalid ID in Group.', [this]);
        }
        if (this.Children.length == 0) {
            throw new Utils.PIXError('Empty Group.', [this]);
        }
        var content = '';
        this.Children.forEach(function (item) {
            item.validate();
            content = content + item.getStringValue();
        });
        content = this.ID + content.length + content;
        if (Config.ValidationType == Config.ValidationTypes.Full) {
            if ((this.Min_length != -1 && content.length < this.Min_length) ||
                (this.Max_length != -1 && content.length > this.Max_length)) {
                throw new Utils.PIXError('Invalid data lenght in PIX_Group.', [this]);
            }
        }
    }
    getStringValue() {
        if (Config.ValidationType == Config.ValidationTypes.Full) {
            this.validate();
        }
        var content = '';
        this.Children.forEach(function (item) {
            content = content + item.getStringValue();
        });
        content = this.ID + content.length + content;
        return content;
    }
    setValue(value) {
        throw new Utils.PIXError('Invalid operation - can not set a value to a group.', [this, value]);
    }
}
exports.Group = Group;
// Specific Group Field Definitions
class Grp_Merchant_Account_Information extends Group {
    constructor() {
        super('26', 5, 99);
        this.Children.push(new Fields.Merchant_Account_Information('00', 'br.gov.bcb.pix'));
    }
}
exports.Grp_Merchant_Account_Information = Grp_Merchant_Account_Information;
class Grp_Additional_Data_Field extends Group {
    constructor() { super('62', 1, 99); }
}
exports.Grp_Additional_Data_Field = Grp_Additional_Data_Field;
class Grp_Unreserved_Templates extends Group {
    constructor(id) {
        if (id < '80' || id > '99') {
            throw new Utils.PIXError('Invalid ID for Grp_Unreserved_Templates.', [id]);
        }
        super(id, 1, 99);
    }
}
exports.Grp_Unreserved_Templates = Grp_Unreserved_Templates;
