// import * as React from 'react';
// import { useForm } from 'react-hook-form';


// interface IFormProps {
//     formObject: IFormObject,
//     formValidation: {},
//     onFormSubmit: (formData: {}) => void,
// }

// const Dynaform: React.FunctionComponent<IFormProps> = ({ formObject, formValidation, onFormSubmit }) => {
//     const [formValues, setFormValues] = React.useState({});

//     const { register, handleSubmit, errors, setValue } = useForm({ mode: 'onBlur', validationSchema: formValidation });
//     const customRegisterFields = formObject.inputs.filter((input: IInput) => input.type === 'select' || input.type === 'datePicker' || input.type === 'slider');

//     const handleDatePickerChange = (date: string | undefined, id: string) => {
//         setValue(id, date);
//         setFormValues({ ...formValues, [id]: `${date?.toString()}` });
//     };

//     const handleSliderChange = (value: number | boolean, event: React.ChangeEvent<{}>, id: string) => {
//         if (!!event) {
//             setValue(id, value);
//             setFormValues({ ...formValues, [id]: value });
//         }
//     };

//     //const handleCheckboxChange = (value: boolean, event: React.ChangeEvent, id: string) => 

//     React.useEffect(() => {
//         customRegisterFields.forEach((field: IInput) => {
//             register({ name: field.id, value: field.defaultValue === undefined ? field.defaultNumericValue : field.defaultValue, type: 'custom' });
//         });
//     }, [register]);

//     return (
//         <form onSubmit={handleSubmit(onFormSubmit)}>
//             <Grid container spacing={3}>
//                 {
//                     formObject.inputs.map((input: IInput, index: number) => {

//                         if (
//                             input.type === 'text' ||
//                             input.type === 'number' ||
//                             input.type === 'password' ||
//                             input.type === 'email'
//                         ) {
//                             return <Grid key={index} item xs={input.width || 12}>
//                                 <InputLabel required={input.required} error={!!errors[input?.id]}>{input.label}</InputLabel>
//                                 <TextField
//                                     fullWidth
//                                     rows={input.rows}
//                                     rowsMax={input.rowsMax}
//                                     name={input.id}
//                                     id={input.id}
//                                     defaultValue={input.defaultValue}
//                                     variant={'outlined'}
//                                     multiline={input.multiline}
//                                     placeholder={input.placeholder}
//                                     type={input.type}
//                                     error={!!errors[input?.id]}
//                                     helperText={errors[input?.id]?.message}
//                                     inputRef={register}
//                                 />
//                             </Grid>;
//                         } else if (input.type === 'select') {
//                             return <Grid key={index} item xs={input.width || 12}>
//                                 <InputLabel required={input.required}>{input.label}</InputLabel>
//                                 <SelectField
//                                     required={input.required}
//                                     fullWidth
//                                     name={input.id}
//                                     id={input.id}
//                                     defaultValue={input.defaultValue}
//                                     IconComponent={input.iconComponent}
//                                     variant={'outlined'}
//                                     inputRef={register}
//                                     onChange={(e) => setValue(input.id, e.target.value)}
//                                 >
//                                     {input.options?.map((option, index) =>
//                                         <MenuItem key={index} value={option.value}>{option.text}</MenuItem>)};
//                                 </SelectField>
//                             </Grid>;
//                         } else if (input.type === 'datePicker') {
//                             return <Grid key={index} item xs={input.width || 12}>
//                                 <InputLabel required={input.required}>{input.label}</InputLabel>
//                                 <DatePickerUtilsProvider utils={DateFnsUtils}>
//                                     <DatePicker
//                                         required={input.required}
//                                         fullWidth
//                                         name={input.id}
//                                         id={input.id}
//                                         onChange={(e) => handleDatePickerChange(e?.toString(), input.id)}
//                                         inputVariant={'outlined'}
//                                         format={'dd/MM/yyyy'}
//                                         views={["year", "month", "date"]}
//                                         disablePast={input.disablePast}
//                                         disableFuture={input.disableFuture}
//                                         value={formValues[input.id] || input.defaultValue}
//                                     />
//                                 </DatePickerUtilsProvider>
//                             </Grid>;
//                         } else if (input.type === 'slider') {
//                             return <Grid item xs={input.width || 12} key={index}>
//                                 <InputLabel>{input.label}</InputLabel>
//                                 <Slider
//                                     style={{ marginTop: styles.size.SIZE36 }}
//                                     value={formValues[input.id] || input.defaultNumericValue || 20}
//                                     step={input.step || 20}
//                                     marks
//                                     valueLabelDisplay={'on'}
//                                     valueLabelFormat={input.measureSymbol ? (x) => `${x}${input.measureSymbol}` : (x) => x}
//                                     min={input.min || 20}
//                                     max={input.max || 100}
//                                     color={input.color || 'primary'}
//                                     onChange={(event: React.ChangeEvent<{}>, value: number) => handleSliderChange(value, event, input.id)}
//                                 />
//                             </Grid>
//                         }
//                         else if (input.type === 'checkbox') {
//                             return <Grid item xs={input.width || 12} key={index}>
//                                 <FormControl required={input.required} component="fieldset">
//                                     {
//                                         !!input.groupLabel && <FormLabel component="legend">{input.groupLabel}</FormLabel>
//                                     }
//                                     <FormGroup>

//                                         {
//                                             input?.checkboxGroup && input.checkboxGroup.map((check: ICheckbox, index: number) => {
//                                                 return <FormControlLabel
//                                                     key={`${check.id}-${index}`}
//                                                     control={
//                                                         <Checkbox
//                                                             defaultChecked={formValues[input.id] || check.value === input.defaultValue}
//                                                             onChange={(event: React.ChangeEvent<{}>, value: boolean) => handleSliderChange(value, event, input.id)}
//                                                             name={check.id}
//                                                             inputRef={register}
//                                                         />
//                                                     }
//                                                     label={check.label}
//                                                 />
//                                             })
//                                         }

//                                     </FormGroup>
//                                 </FormControl>
//                             </Grid>
//                         }
//                         else {
//                             return 'this kind of input is not available yet, we need to add checkbox'
//                         }
//                     })
//                 }
//                 <Grid item xs={12}>
//                     <Grid container justify={formObject.buttons.align || 'flex-end'}>
//                         <Grid item>
//                             {
//                                 formObject.buttons.items.map((button, index) => (
//                                     <Button
//                                         key={index}
//                                         type={button.type}
//                                         color={button.color || button.type === 'submit' ? 'primary' : 'secondary'}
//                                         textColor={button.textColor}
//                                         onClick={button.type !== 'submit' ? button.onClick : undefined}
//                                         variant={button.type === 'submit' ? 'contained' : button.variant}
//                                     >
//                                         {button.text}
//                                     </Button>
//                                 ))
//                             }
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </form >
//     );
// };

// export default Dynaform;