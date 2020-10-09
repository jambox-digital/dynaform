import * as React from 'react'
import { IDynaInputText } from '../../models/form'

interface IProps {
    inputObject: IDynaInputText,
    register: any,
}

const InputText: React.FC<IProps> = ({inputObject, register}) => (
    <div className={inputObject.style?.wrapper}>
        {
            inputObject.label &&
                <label 
                    htmlFor={inputObject.id}
                    className={inputObject.style?.label}
                >
                    {inputObject.label}
                </label>    
        }
        <input 
            ref={register} 
            type={inputObject.type} 
            id={inputObject.id} 
            name={inputObject.id} 
            defaultValue={inputObject.value}
            placeholder={inputObject.placeholder}
            className={inputObject.style?.input}
        />
    </div>
)

export default InputText