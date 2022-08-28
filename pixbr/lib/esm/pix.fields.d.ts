export interface IField<T> {
    ID: string;
    Value: T;
    TextValue: string;
    Min_length: number;
    Max_length: number;
    setValue(value: T): void;
    validate(): void;
    getStringValue(): string;
}
declare abstract class Field<T> implements IField<T> {
    ID: string;
    Value: T;
    TextValue: string;
    Min_length: number;
    Max_length: number;
    constructor(id: string, value: T, min_length?: number, max_length?: number);
    abstract setValue(value: T): void;
    validate(): void;
    getStringValue(): string;
}
declare class StrField extends Field<string> {
    constructor(id: string, value?: string, min_length?: number, max_length?: number);
    setValue(value: string): void;
}
declare class NumField extends Field<number> {
    Min_Value: number;
    Max_Value: number;
    Decimals: number;
    constructor(id: string, value: number, min_length?: number, max_length?: number, min_value?: number, max_value?: number, decimals?: number);
    validate(): void;
    setValue(value: number): void;
}
declare class Payload_Format_Indicator extends StrField {
    constructor(value?: string);
}
declare class Point_Of_Initiation_Method extends StrField {
    constructor(value?: string);
}
declare class Merchant_Account_Information extends StrField {
    constructor(id: string, value: string);
}
declare class Merchant_Category_Code extends StrField {
    constructor(value?: string);
}
declare class Transaction_Currency extends StrField {
    constructor(value?: string);
}
declare class Transaction_Amount extends NumField {
    constructor(value: number);
}
declare class Country_Code extends StrField {
    constructor(value?: string);
}
declare class Merchant_Name extends StrField {
    constructor(value: string);
}
declare class Merchant_City extends StrField {
    constructor(value: string);
}
declare class Postal_Code extends StrField {
    constructor(value: string);
}
declare class CRC16 extends StrField {
    constructor();
    setValue(value: string): void;
}
declare class Additional_Data_Field extends StrField {
    constructor(id: string, value: string);
}
declare class Unreserved_Templates extends StrField {
    constructor(id: string, value: string);
}
export { Field, StrField, NumField, Payload_Format_Indicator, Point_Of_Initiation_Method, Merchant_Account_Information, Merchant_Category_Code, Transaction_Currency, Transaction_Amount, Country_Code, Merchant_Name, Merchant_City, Postal_Code, CRC16, Additional_Data_Field, Unreserved_Templates };
