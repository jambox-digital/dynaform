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
            defaultValue={inputObject.defaultValue}
            placeholder={inputObject.placeholder}
            className={inputObject.style?.input}
            
            //optional text attributes
            list={inputObject.type !== 'password' ? inputObject.list : undefined} // password not having this one
            maxLength={inputObject.maxLength}
            minLength={inputObject.minLength}
            pattern={inputObject.pattern}
            readOnly={inputObject.readOnly}
            size={inputObject.size}

            //for email type only
            multiple={inputObject.type === 'email' ? inputObject.multiple : undefined}

            //

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
    </div>
)

export default InputText