import './index.css'

export const testForm = {
  inputs: [
    {
      type: 'text',
      placeholder: 'enter the dragon!!!',
      label: 'Customer Code',
      id: 'code',
      name: 'code',
      required: false,
      style: {
        input: 'input-text',
        wrapper: 'input-text__wrapper',
        label: 'input-text__label'
      }
    },
    {
      type: 'number',
      defaultValue: 78  ,
      label: 'CreditLimit',
      id: 'creditLimit',
      required: true,
    },
    // {
    //   type: 'checkbox',
    //   defaultValue: 'no',
    //   grouplabel: 'Some question that can have multiple answers',
    //   id: 'codeQuestion',
    //   required: true,
    //   width: 6,
    //   checkboxGroup: [{
    //     value: 'yes',
    //     label: 'Yes',
    //     id: 'yes'
    //   },
    //   {
    //     value: 'no',
    //     label: 'No',
    //     id: 'no'
    //   },
    //   {
    //     value: 'maybe',
    //     label: 'Maybe',
    //     id: 'maybe'
    //   }
    // ]
    // },
    {
      type: 'select',
      defaultValue: 'EUR',
      label: 'Currency',
      id: 'currency',
      required: true,
      width: 6,
      //iconComponent: ExpandMoreIcon,
      options: [
        {
          value: 'EUR',
          text: 'EUR'
        },
        {
          value: 'GBP',
          text: 'GBP'
        }
      ],
    },
    // {
    //   type: 'datePicker',
    //   defaultValue: Date().toString(),
    //   label: 'GDPR Agreement End Date',
    //   id: 'GDPRAgreementEndDate',
    //   required: true,
    //   width: 6,
    //   //iconComponent: ExpandMoreIcon,
    //   disablePast: true,
    // },
    {
        type: 'slider',
        label: 'Probability',
        id: 'probabilityScale',
        defaultNumericValue: 20,
        step: 20,
        min: 0,
        max: 100,
        measureSymbol: '%',
        width: 6
    },
    {
      accesskey: 'e',
      
      type: 'password',
      defaultValue: '',
      label: 'password',
      id: 'password',
      required: true,
      placeholder: 'Pass'
    }
  ],
//   buttons: {
//     align: 'flex-end',
//     items: [
//       {
//         type: 'submit',
//         text: 'Create Account',
//         color: 'primary',
//         textColor: 'white',
//       }
//     ]
//   }
};

// const valueRequired = 'field is required';
// export const allFieldsFormValidation = yup.object().shape({
//   accountType: yup.number().required(`Account type ${valueRequired}`),
//   code: yup.string().required(`Customer code ${valueRequired}`),
//   name: yup.string().required(`Customer name ${valueRequired}`),
//   address1: yup.string().required(`Customer's address ${valueRequired}`),
//   postCode: yup.string().notRequired(),
//   creditLimit: yup.number().typeError('Please enter number here').positive().min(0).required(`Credit limit ${valueRequired}`),
//   phone1: yup.string().notRequired(),
//   phone2: yup.string().notRequired(),
//   fax: yup.string().notRequired(),
//   email: yup.string().email().required(`Email ${valueRequired}`),
//   deliveryAddress1: yup.string().required(`Delivery address ${valueRequired}`),
//   defaultVATRate: yup.number().typeError('Please enter number here').positive().min(0).required(`Default VAT rate ${valueRequired}`),
//   discountPercent: yup.number().typeError('Please enter number here').positive().min(0).required(`Discount ${valueRequired}`),
//   currency: yup.string().notRequired(),
//   GDPRAgreement: yup.boolean().required(),
//   GDPRMarketingOptIn: yup.boolean().required(),
//   GDPRAgreementEndDate: yup.string().required(),
// });