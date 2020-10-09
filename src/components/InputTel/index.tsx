import * as React from 'react'
import { IDynaInput } from '../../models/form'

interface IProps {
    inputObject: IDynaInput,
    register: any
}

const InputTel: React.FC<IProps> = ({inputObject, register}) => (
    <input 
        ref={register} 
        type={inputObject.type} 
        id={inputObject.id} 
        name={inputObject.id} 
        value={inputObject.defaultValue}
    />
)


export default InputTel