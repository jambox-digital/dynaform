import * as React from 'react'
import { IDynaInputSelect } from '../../models/form'

interface IProps {
    inputObject: IDynaInputSelect
}

const InputSelect: React.FC<IProps> = ({inputObject}) => {
    const {id, value, options} = inputObject

    return (
        <select id={id}>
            {options &&
                options.map((option, index) => 
                    <option key={index} value={option.value} selected={value===option.value}>
                        {option.text}
                    </option>
                )
            }
        </select>
    )
}

export default InputSelect