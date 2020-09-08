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
    
}

export interface IFormObject {
    inputs: IInput[]
    //buttons: IButtons
}