export interface IDynaInput {
    //all input attributes for all types from w3c schools
    
    //the ones that are used by all types
    autocomplete: string, // on (default) | off - could be boolean types: text search, url, tel, email, password, datepickers, range, color
    autofocus: boolean, //no value, so boolean, 
    disabled: boolean, // all types
    form: string, // form id for elements outside the form, but part of the form
    id: string, //required
    name: string, //for text
    type: string, //all supported types
    value: string, // for text input
    
    
    //almost all
    list: string, //datalist_id
    readonly: boolean,
    required: boolean,
    
    //password, search, tel, text, url
    maxlength: number, //number
    minlength: number,
    placeholder: string,
    
    //numeric types
    max: number, //number | date
    min: number, // number
    step: number, //interval between 2 steps
    
    //text,search
    dirname: string, // submits the direction of text
    
    //image
    alt: string, // type=text
    height: number, //pixels
    src: string, //URL of the image for submit button
    width: number //in pixels
    
    //file
    accept: string, // type=file
    
    //email, file
    multiple: boolean, //multiple value for input element
    
    //submit
    
    //image, submit
    formaction: string, //URL for submit | image
    formenctype: string, //text/plain, multipart/form-data
    formmethod: string, // get | post
    formnovalidate: boolean, // no validation on submit
    formtarget: string, // _blank ... 
    
    //radio, checkbox
    checked: boolean, // no value, types radio and checkbox
    
    //password, text, tel
    pattern: string, //regExp

    //email, password, tel, text
    size: number, //number of charachters in input
    
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