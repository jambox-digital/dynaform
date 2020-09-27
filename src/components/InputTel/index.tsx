import * as React from 'react'
import { IDynaInput } from '../../models/form'

interface IProps {
    inputObject: IDynaInput
}

const InputTel: React.FC<IProps> = ({inputObject}) => {
    return <input type={inputObject.type} />
}

export default InputTel