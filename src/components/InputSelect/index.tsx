import * as React from 'react'
import { IDynaInputSelect } from '../../models/form'

interface IProps {
    inputObject: IDynaInputSelect,
    register: any
}

const InputSelect: React.FC<IProps> = ({inputObject, register}) => {
    const {id, value, options} = inputObject

    return (
        <select
          id={id}
          name={id}
          ref={register}
          defaultValue={value}
        >
            {options &&
                options.map((option, index) => 
                    <option
                      key={index}
                      value={option.value}
                    >
                        {option.text}
                    </option>
                )
            }
        </select>
    )
}

export default InputSelect