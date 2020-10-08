import * as React from 'react'
import { IDynaInputText } from '../../models/form'

interface IProps {
    inputObject: IDynaInputText,
    register: any,
}

const InputText: React.FC<IProps> = ({inputObject, register}) => {
    return <input ref={register} type={inputObject.type} id={inputObject.id} name={inputObject.id} value={inputObject.value}/>
}

export default InputText