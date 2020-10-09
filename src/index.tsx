import * as React from 'react';
import { useForm } from 'react-hook-form';
import AppConstants from './utils/AppConstants';
import InputText from './components/InputText/';
import InputSelect from './components/InputSelect/';
import InputNumber from './components/InputNumber/';
import InputEmail from './components/InputEmail/';
import InputPassword from './components/InputPassword/';
import InputTel from './components/InputTel/';
import InputURL from './components/InputURL/';

import { 
    IDynaInput,
    IDynaInputEmail,
    IDynaInputPassword,
    IDynaInputTel,
    IDynaInputURL,
    IDynaInputNumber, 
    IDynaInputSelect, 
    IDynaInputText 
} from './models/form';
//import {IDynaForm} from './models/form';


interface IFormProps {
    formObject: any,
    formValidation?: any,
    onFormSubmit: (formData: {}) => void,
}

const Dynaform: React.FunctionComponent<IFormProps> = ({ formObject, onFormSubmit }) => {
    const { register, handleSubmit } = useForm({ mode: 'onBlur' });
    const customRegisterFields = formObject.inputs.filter((input: any) => input.type === 'select' || input.type === 'datePicker' || input.type === 'slider');

    React.useEffect(() => {
        customRegisterFields.forEach((field: IDynaInput) => {
            register({ name: field.id, value: field.defaultValue === undefined ? field.defaultNumericValue : field.defaultValue, type: 'custom' });
        });
    }, [register]);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
                {
                    formObject.inputs.map((input: IDynaInput, index: number) => {
                        switch(input.type) {
                        // case AppConstants.inputType.CHECKBOX:
                        //   return <InputCheckbox inputObject={input} />

                        // case AppConstants.inputType.DATE:
                        //   return <InputDate inputObject={input} />

                        case AppConstants.inputType.EMAIL:
                            return <InputEmail key={input.id} register={register} inputObject={input as IDynaInputEmail} />

                        // case AppConstants.inputType.FILE:
                        //   return <InputFile inputObject={input} />

                        case AppConstants.inputType.NUMBER:
                          return <InputNumber key={input.id} register={register} inputObject={input as IDynaInputNumber} />
                          
                        case AppConstants.inputType.PASSWORD:
                          return <InputPassword key={input.id} register={register} inputObject={input as IDynaInputPassword} />

                        // case AppConstants.inputType.RADIO:
                        //   return <InputRadio inputObject={input} />

                        // case AppConstants.inputType.RANGE:
                        //   return <InputRange inputObject={input} />

                        case AppConstants.inputType.SELECT: 
                          return <InputSelect key={input.id} register={register} inputObject={input as IDynaInputSelect} />

                        case AppConstants.inputType.TEL:
                          return <InputTel key={input.id} register={register} inputObject={input as IDynaInputTel} />
                        
                        case AppConstants.inputType.TEXT: 
                          return <InputText key={input.id} register={register} inputObject={input as IDynaInputText} />
                        
                        // case AppConstants.inputType.TIME:
                        //   return <InputTime inputObject={input} />

                        case AppConstants.inputType.URL:
                          return <InputURL key={input.id} register={register} inputObject={input as IDynaInputURL} />

                        default:
                            return <div key={`nita${index}`}>NITA</div>

                        }

                    })
                }           
                <button type={'submit'}>SUB</button>         
                
        </form >
    );
};

export default Dynaform;