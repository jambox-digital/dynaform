import React from 'react'

import Dynaform from 'dynaforms';
import 'dynaforms/dist/index.css';
import {testForm} from './testForm';

import * as yup from 'yup';

export const validationObject = yup.object().shape({
  name: yup.string().required(`Customer name is required`),
});

const App = () => {
  const submit = (data: {}) => {console.log(data)}
  return <Dynaform formObject={testForm}  onFormSubmit={submit}/>
}

export default App
