import * as Fields from './pix.fields';
declare class Group<T extends Fields.IField<any>> implements Fields.IField<undefined> {
    ID: string;
    Value: undefined;
    TextValue: string;
    Min_length: number;
    Max_length: number;
    Children: Array<T>;
    constructor(id: string, min_length?: number, max_length?: number);
    validate(): void;
    getStringValue(): string;
    setValue(value: undefined): void;
}
declare class Grp_Merchant_Account_Information extends Group<Fields.Merchant_Account_Information> {
    constructor();
}
declare class Grp_Additional_Data_Field extends Group<Fields.Additional_Data_Field> {
    constructor();
}
declare class Grp_Unreserved_Templates extends Group<Fields.Unreserved_Templates> {
    constructor(id: string);
}
export { Group, Grp_Merchant_Account_Information, Grp_Additional_Data_Field, Grp_Unreserved_Templates };
