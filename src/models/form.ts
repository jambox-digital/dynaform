
export interface IButton {
    type: 'button' | 'submit' | 'reset',
    text: string,
    onClick?: () => void,
    color?: 'inherit' | 'default' | 'primary' | 'secondary' | undefined,
    textColor?: string,
    variant?: 'text' | 'outlined' | 'contained' | undefined,
}

export interface IButtons {
    align?: 'flex-start' | 'flex-end' | 'center',
    items: IButton[]
}
}
export interface ICheckbox {
    defaultChecked: boolean,
    label?: string,
    checked?: boolean,
    disabled?: boolean,
    color?: string,
    id: string,
    required?: boolean,
    value?: string | number
}

export interface IRadio {
    name: string,
    value: string | number,
    items: [
        {
            value: string | number,
            disabled?: boolean,
            label: string,
        }
    ]
}

export interface ISelectOption {
    value: string | number ,
    text: string
}

export interface IInput {
    type: string,
    onChange?: () => void,
    defaultValue: string | number,
    defaultNumericValue?: number | number[] 
    label: string,
    id: string,
    required?: boolean,
    iconComponent?: React.ElementType,
    options?: ISelectOption[],
    format?: string,
    views?: string[],
    disablePast?: boolean,
    disableFuture?: boolean,
    multiline?: boolean,
    rows?: number,
    rowsMax?: number,
    placeholder?: string,
    width?: number,
    checkboxGroup?: ICheckbox[],
    radioGroup?: IRadio[],
    groupLabel?: string,
    step?: number, 
    min?: number,
    max?: number,
    measureSymbol?: string,
    color?: string | 'primary' | 'secondary',
    onBlur?: (event: Event, data: any) => void;
}

export interface IFormObject {
    inputs: IInput[]
    //buttons: IButtons
}