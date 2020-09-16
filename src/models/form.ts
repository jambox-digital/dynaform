export interface IDynaInput {
    //all input attributes for all types from w3c schools
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
    id: string, //required
    list: string, //datalist_id
    max: number, //number | date
    maxlength: number, //number
    min: number, // number
    minlength: number,
    multiple: boolean, //multiple value for input element
    name: string, //for text
    pattern: string, //regExp
    placeholder: string,
    readonly: boolean,
    required: boolean,
    size: number, //number of charachters in input
    src: string, //URL of the image for submit button
    step: number, //interval between 2 steps
    type: string, //all supported types
    value: string, // for text input
    width: number //in pixels

    //textarea attributes
    multiline?: boolean,
    rows?: number,
    rowsMax?: number,

    //methods
    onBlur?: (event: Event, data: any) => void,
    onChange?: () => void,
    
    // optional attributes for react
    label?: string,
    defaultValue: string | number,
    defaultNumericValue?: number 
    iconComponentLeft?: React.ElementType,
    iconComponentRight?: React.ElementType,
    measureSymbol?: string,
    
    // datepicker
    format?: string,
    views?: string[],
    disablePast?: boolean,
    disableFuture?: boolean,
    
    //group label for groups of radio buttons / checkboxes
    groupLabel?: string,

    //individual input style
    className?: string, 
    color?: string,
}


export interface IDynaForm {
    inputs: IDynaInput[],
    //buttons: IDynaButtons,
    //validation: IDynaValidation,
    //formStyle: IDynaFormStyle
}