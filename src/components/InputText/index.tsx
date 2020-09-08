import * as React from 'react'
import { IInput } from '../../models/form'

interface IProps {
    inputObject: IInput
}

const InputText: React.FC<IProps> = ({inputObject}) => {
    console.log(inputObject);
    return <input type={inputObject.type} />
}

export default InputText