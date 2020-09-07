import * as React from 'react';
import { useForm } from 'react-hook-form';
import AppConstants from './utils/AppConstants';


interface IFormProps {
    formObject: IFormObject,
    formValidation: {},
    onFormSubmit: (formData: {}) => void,
}

const Dynaform: React.FunctionComponent<IFormProps> = ({ formObject, formValidation, onFormSubmit }) => {
    const [formValues, setFormValues] = React.useState({});

    const { register, handleSubmit, errors, setValue } = useForm({ mode: 'onBlur', validationSchema: formValidation });
    const customRegisterFields = formObject.inputs.filter((input: IInput) => input.type === 'select' || input.type === 'datePicker' || input.type === 'slider');

    const handleDatePickerChange = (date: string | undefined, id: string) => {
        setValue(id, date);
        setFormValues({ ...formValues, [id]: `${date?.toString()}` });
    };

    const handleSliderChange = (value: number | boolean, event: React.ChangeEvent<{}>, id: string) => {
        if (!!event) {
            setValue(id, value);
            setFormValues({ ...formValues, [id]: value });
        }
    };

    //const handleCheckboxChange = (value: boolean, event: React.ChangeEvent, id: string) => 

    React.useEffect(() => {
        customRegisterFields.forEach((field: IInput) => {
            register({ name: field.id, value: field.defaultValue === undefined ? field.defaultNumericValue : field.defaultValue, type: 'custom' });
        });
    }, [register]);

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
           
                {
                    formObject.inputs.map((input: IInput, index: number) =>{

                      switch(input.type) {
                        case AppConstants.inputType.CHECKBOX:
                          return <InputCheckbox inputObject={input} />

                        case AppConstants.inputType.DATE:
                          return <InputDate inputObject={input} />

                        case AppConstants.inputType.EMAIL:
                          return <InputEmail inputObject={input} />

                        case AppConstants.inputType.FILE:
                          return <InputFile inputObject={input} />

                        case AppConstants.inputType.NUMBER:
                          return <InputNumber inputObject={input} />
                          
                        case AppConstants.inputType.PASSWORD:
                          return <InputPassword inputObject={input} />

                        case AppConstants.inputType.RADIO:
                          return <InputRadio inputObject={input} />

                        case AppConstants.inputType.RANGE:
                          return <InputRange inputObject={input} />

                        case AppConstants.inputType.TEL:
                          return <InputTel inputObject={input} />
                        
                        case AppConstants.inputType.TEXT:
                          return <InputText inputObject={input} />
                        
                        case AppConstants.inputType.TIME:
                          return <InputTel inputObject={input} />

                        case AppConstants.inputType.URL:
                          return <InputTel inputObject={input} />
                                              
                      }


                    })
                }                    
                
        </form >
    );
};

export default Dynaform;