import * as React from 'react'
import { IDynaInputText } from '../../models/form'

interface IProps {
    inputObject: IDynaInputText
}

const InputText: React.FC<IProps> = ({inputObject}) => {
    return <input type={inputObject.type} />
}

export default InputText