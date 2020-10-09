import * as React from 'react'
import { IDynaInputNumber } from '../../models/form'

interface IProps {
    inputObject: IDynaInputNumber,
    register: any,
}

const InputNumber: React.FC<IProps> = ({inputObject, register}) => (
    <input 
        ref={register} 
        type={inputObject.type} 
        id={inputObject.id} 
        name={inputObject.id} 
        defaultValue={inputObject.defaultValue}
        step={inputObject.step}
    />
)

export default InputNumber