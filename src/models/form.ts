export interface IInput {
    type: string,
    onChange?: () => void,
    defaultValue: string | number,
    defaultNumericValue?: number | number[] 
    label: string,
    id: string,
    required?: boolean,
    iconComponent?: React.ElementType,
    format?: string,
    views?: string[],
    disablePast?: boolean,
    disableFuture?: boolean,
    multiline?: boolean,
    rows?: number,
    rowsMax?: number,
    placeholder?: string,
    width?: number,
    groupLabel?: string,
    step?: number, 
    min?: number,
    max?: number,
    measureSymbol?: string,
    color?: string,
    onBlur?: (event: Event, data: any) => void;

    // from w3c schools
    accept: string, // type=file
    alt: string, // type=text
    autocomplete: string, // on (default) | off - could be boolean types: text search, url, tel, email, password, datepickers, range, color
    autofocus: boolean, //no value, so boolean, 
    checked: boolean, // no value, types radio and checkbox
    dirname: string, // submits the direction of text
    disabled: boolean, // all types
    form: string, // form id for elements outside the form, but part of the form
    formaction: string, //URL for submit | image
    formenctype: string, //text/plain, multipart/form-data
    formmethod: string, // get | post
    formnovalidate: boolean, // no validation on submit
    formtarget: string, // _blank ... 
    height: number, //pixels
    list: string, //datalist_id
   // max: number, //number | date
    maxlength: number, //number
   // min: number, // number
    minlength: number,
    multiple: boolean, //multiple value for input element
    name: string, //for text
    pattern: string, //regExp
   // placeholder: string,
    readonly: boolean,
   // required: boolean,
    size: number, //number of charachters in input
    src: string, //URL of the image for submit button
   // step: number, //interval between 2 steps
   // type: string, //all supported types
    value: string, // for text input
   // width: number //in pixels
}

export interface IFormObject {
    inputs: IInput[]
    //buttons: IButtons
}


export interface IInputTextPrototype {
    input: {
        alt?: string, // type=text
        autocomplete?: string, // on (default) | off - could be boolean types: text search, url, tel, email, password, datepickers, range, color
        autofocus?: boolean, //no value, so boolean, 
        dirname?: string, // submits the direction of text
        disabled?: boolean, // all types
        form?: string, // form id for elements outside the form, but part of the form
        formaction?: string, //URL for submit | image
        formenctype?: string, //text/plain, multipart/form-data
        formmethod?: string, // get | post
        formnovalidate?: boolean, // no validation on submit
        formtarget?: string, // _blank ... 
        height?: number, //pixels
        id?: string, //id
        list?: string, //datalist_id
        name?: string, //for text
        pattern?: string, //regExp
        placeholder?: string,
        readonly?: boolean,
        required?: boolean,
        size?: number, //number of charachters in input
        type: string, //all supported types
        value?: string, // for text input
        width?: number //in pixels
    },
    dynaform: {
        onChange?: () => void,
        defaultValue: string | number,
        defaultNumericValue?: number | number[] 
        label: string,
        iconComponent?: React.ElementType,
        onBlur?: (event: Event, data: any) => void;
    },
    style: {
        color?: string,
    },
    validation: {
        
    }
}