import * as React from 'react'
import { IDynaInputURL } from '../../models/form'

interface IProps {
    inputObject: IDynaInputURL,
    register: any,
}

const InputURL: React.FC<IProps> = ({inputObject, register}) => (
    <input 
        ref={register} 
        type={inputObject.type} 
        id={inputObject.id} 
        name={inputObject.id} 
        value={inputObject.value}
    />
)

export default InputURL