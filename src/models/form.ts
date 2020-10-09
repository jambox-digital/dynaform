export type IDynaInputStyle = {
    input?: string,
    label?: string,
    wrapper?: string
}

export type IDynaGlobalAttributes = {
    //global attributes from w3c shools
    accesskey?: string, //key to focus onto the element
    contenteditable?: boolean, //self-explanatory
    dir?: 'ltr' | 'rtl' | 'auto',
    draggable?: boolean,
    hidden?: boolean,
    lang?: string, //en, fr etc.
    spellcheck?: boolean,
    tabindex?: number,// tabbing order of an element
    title?: string,
    translate?: 'yes' | 'no', //indicates should something be translated or not
    //class?: string, //css classes
    //id: string,
    //style?: string, //styling

    //the ones that are used by all input types
    autocomplete?: string, // on (default) | off - could be boolean types: text search, url, tel, email, password, datepickers, range, color
    autofocus?: boolean, //no value, so boolean, 
    disabled?: boolean, // all types
    form?: string, // form id for elements outside the form, but part of the form
    name?: string, //for text
    value?: string, // for text input

    required?:boolean,

    id: string, //required
    type: string, //all supported types

    //react-related
    //methods
    onBlur?: (event: Event, data: any) => void,
    onChange?: () => void,
     
    // optional attributes for react
    label?: string,
    defaultValue?: string | number,
    defaultNumericValue?: number 
    iconComponentLeft?: React.ElementType,
    iconComponentRight?: React.ElementType,
    measureSymbol?: string,
 
    //complete input style
    style?: IDynaInputStyle
}



export type IDynaInputOld = {
    //used by input types:

    //almost all
    list?: string, //datalist_id
    readonly?: boolean,
    required?: boolean,
    
    //password, search, tel, text, url
    maxlength?: number, //number
    minlength?: number,
    placeholder?: string,
    
    //numeric types
    max?: number, //number | date
    min?: number, // number
    step?: number, //interval between 2 steps
    
    //text,search
    dirname?: string, // submits the direction of text
    
    //image
    alt?: string, // type=text
    height?: number, //pixels
    src?: string, //URL of the image for submit button
    width?: number //in pixels
    
    //file
    accept?: string, // type=file
    
    //email, file
    multiple?: boolean, //multiple value for input element
    
    //submit
    
    //image, submit
    formaction?: string, //URL for submit | image
    formenctype?: string, //text/plain, multipart/form-data
    formmethod?: string, // get | post
    formnovalidate?: boolean, // no validation on submit
    formtarget?: string, // _blank ... 
    
    //radio, checkbox
    checked?: boolean, // no value, types radio and checkbox
    
    //password, text, tel
    pattern?: string, //regExp

    //email, password, tel, text
    size?: number, //number of charachters in input
    
    //textarea attributes
    multiline?: boolean,
    rows?: number,
    rowsMax?: number,

    //methods
    onBlur?: (event: Event, data: any) => void,
    onChange?: () => void,
    
    // optional attributes for react
    label?: string,
    defaultValue?: string | number,
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

    //select with options

    //individual input style
    className?: string, 
    color?: string,
}


//not yet defined
export type IDynaInputCheckbox = IDynaGlobalAttributes & {}
export type IDynaInputDate = IDynaGlobalAttributes & {}
export type IDynaInputFile = IDynaGlobalAttributes & {}
export type IDynaInputRadio = IDynaGlobalAttributes & {}
export type IDynaInputRange = IDynaGlobalAttributes & {}
export type IDynaInputTime = IDynaGlobalAttributes & {}

//defined
export type IDynaInputEmail = IDynaGlobalAttributes & {
    list?: string,
    maxlength?: number,
    minlength?: number,
    multiple?: boolean,
    pattern?: string,
    placeholder?: string,
    readonly?: boolean,
    size?: number
}

export type IDynaInputNumber = IDynaGlobalAttributes & {
    list?: string,
    max?: number,
    min?: number,
    placeholder?: string,
    readonly?: boolean,
    step?: number
}

export type IDynaInputPassword = IDynaGlobalAttributes & {
    maxlength?: number,
    minlength?: number,
    pattern?: string,
    placeholder?: string,
    readonly?: boolean,
    size?: number
}

export type IDynaInputSelect = IDynaGlobalAttributes & {
    multiple?: boolean, //for multiple options
    size?: number, //number of visible items in drop-down
    //just for select for now
    optGroup?: any,
    options?: any[],
}

export type IDynaInputTel = IDynaGlobalAttributes & {
    list?: string,
    maxlength?: number,
    minlength?: number,
    pattern?: string,
    placeholder?: string,
    readonly?: boolean,
    size?: number
}

export type IDynaInputText = IDynaGlobalAttributes & {
    dirname?: string, // submits the direction of text
    list?: string, //datalist_id
    maxlength?: number, //number
    minlength?: number,
    pattern?: string, //regExp
    placeholder?: string,
    readonly?: boolean,
    size?: number, //number of charachters in input
}

export type IDynaInputURL = IDynaGlobalAttributes & {
    list?: string,
    maxlength?: number,
    minlength?: number,
    pattern?: string,
    placeholder?: string,
    readonly?: boolean,
    size?: number,
    spellcheck?: boolean
}

export type IDynaInput = 
    | IDynaInputEmail
    | IDynaInputNumber
    | IDynaInputPassword
    | IDynaInputSelect
    | IDynaInputTel
    | IDynaInputText
    | IDynaInputURL

export type IDynaForm = {
    inputs: IDynaInput[],
    //buttons: IDynaButtons,
    //validation: IDynaValidation,
    //formStyle: IDynaFormStyle
}