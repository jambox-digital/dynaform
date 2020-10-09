import * as React from 'react'
import { IDynaInputPassword } from '../../models/form'

interface IProps {
    inputObject: IDynaInputPassword,
    register: any,
}

const InputPassword: React.FC<IProps> = ({inputObject, register}) => (
    <input 
        ref={register} 
        type={inputObject.type} 
        id={inputObject.id} 
        name={inputObject.id} 
        defaultValue={inputObject.value}
    />
)

export default InputPassword