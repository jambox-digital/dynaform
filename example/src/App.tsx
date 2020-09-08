import React from 'react'

import Dynaform from 'dynaforms';
import 'dynaforms/dist/index.css';
import {testForm} from './testForm';


const App = () => {
  const submit = (data: {}) => {console.log(data)}
  return <Dynaform formObject={testForm} onFormSubmit={submit}/>
}

export default App
