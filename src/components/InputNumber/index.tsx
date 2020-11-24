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
        placeholder={inputObject.placeholder}
        className={inputObject.style?.input}
        
        //different from text *(also not having maxLength, minLength, pattern, size)
        step={inputObject.step}

        //optional values for numbers
        list={inputObject.list}
        max={inputObject.max}
        min={inputObject.min}
        readOnly={inputObject.readOnly}

        //optional global attributes
        accessKey={inputObject.accessKey} 
        contentEditable={inputObject.contentEditable}
        dir={inputObject.dir}
        draggable={inputObject.draggable} 
        hidden={inputObject.hidden} 
        lang={inputObject.lang} 
        spellCheck={inputObject.spellCheck}
        tabIndex={inputObject.tabIndex} 
        title={inputObject.title} 
        translate={inputObject.translate}
                
        //the ones that are used by all input types
        autoComplete={inputObject.autoComplete}
        autoFocus={inputObject.autoFocus} 
        disabled={inputObject.disabled}
        form={inputObject.form} 
        value={inputObject.value} 
        required={inputObject.required}
    />
)

export default InputNumber