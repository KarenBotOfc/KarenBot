import * as Fields from './pix.fields';
declare enum FieldRequirements {
    Optional = "O",
    Mandatory = "M",
    Conditional = "C"
}
declare class AcceptedFieldDefinitions {
    Order: number;
    Requirement: FieldRequirements;
}
declare class MessageFields {
    Order: number;
    Field: Fields.IField<any>;
    constructor(order: number, field: Fields.IField<any>);
}
declare class Message {
    AcceptedFieldList: Map<any, AcceptedFieldDefinitions>;
    FieldList: Array<MessageFields>;
    validate(): void;
    getStringValue(): string;
    existsField(field_type: any): boolean;
    getField(field_type: any): any;
    setField(field: Fields.IField<any>, order_override?: number): void;
}
declare class Static extends Message {
    AcceptedFieldList: Map<any, AcceptedFieldDefinitions>;
    constructor(key: string, merchant_name: string, merchant_city: string);
}
export { FieldRequirements, AcceptedFieldDefinitions, MessageFields, Message, Static };
