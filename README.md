# <img src="./logo.svg" alt="DynaForms - forms made easy!" width="300" />

> Reusable Dynamic Form Component

[![NPM](https://img.shields.io/npm/v/dynaforms.svg)](https://www.npmjs.com/package/dynaforms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Developers' note
There are different inputs but sometimes they use completely the same set of attributes. To leave the code lean, I used one component for several input types (those who have similar attributes) 

#### InputText
used for types:
- text
- url
- tel
- email (added check for multiple attribute)
- password

#### InputNumber
userd for types:
- number

## NOTE
This software is still in its infant phase and it is not yet ready for usage, so it is not yet released

## Install (not available yet)

```bash
npm install --save dynaforms
```

## What is DynaForms and why should I consider using it?
DynaForms is single form component that maps your form object to appropriate form inputs. Form object consists of input fields, styling, buttons and validation.

This library is still in its forming phase and not ready for anything beside experimenting.

### Why you should consider using it?
Perk of having single component for every form in your app is beneficial in the long run when you are having tons of forms and you need to change some of them.

With DynaForms, your forms live in files that are in separate folder. Those files consist of form objects, so adding change to login form is in `forms/loginForm.ts` file and all you must change is there. No need to alter the submit logic or digging into views to find that one form.

To make things easier, at a later stage helper software will be intorduced so making forms for your react app will be as easy as possible.


## Usage

```tsx
import * as React from 'react'
import Dynaform from 'dynaforms';
import {testForm} from './testForm'; //form object

const App = () => {
  const submit = (data: {}) => {
    console.log(data); //just to check what data are you sending with this form
    // logic for submitting data 
  }
  return <Dynaform formObject={testForm} onFormSubmit={submit}/>
}

export default App
```

## License

MIT © [pozda](https://github.com/pozda)
