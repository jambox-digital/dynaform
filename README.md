# dynaforms

> Reusable Dynamic Form Component

[![NPM](https://img.shields.io/npm/v/dynaforms.svg)](https://www.npmjs.com/package/dynaforms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<<<<<<< Updated upstream
## Install
=======
## NOTE
This software is still in its infant phase and it is not yet ready for usage, so it is not yet released

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



## Install (not available yet)
>>>>>>> Stashed changes

```bash
npm install --save dynaforms
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'dynaforms'
import 'dynaforms/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [pozda](https://github.com/pozda)
