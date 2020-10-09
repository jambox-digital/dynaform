import * as React from 'react'
import { IDynaInputEmail } from '../../models/form'

interface IProps {
    inputObject: IDynaInputEmail,
    register: any,
}

const InputEmail: React.FC<IProps> = ({inputObject, register}) => (
    <input 
        ref={register} 
        type={inputObject.type} 
        id={inputObject.id} 
        name={inputObject.id} 
        defaultValue={inputObject.value}
    />
)

export default InputEmail