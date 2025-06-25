import * as yup from 'yup';

export const FormSchema =  yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .matches(/^[A-Za-z\s-']+$/, 'First name should not contain numbers or special characters'),

  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .matches(/^[A-Za-z\s-']+$/, 'Last name should not contain numbers or special characters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Must be a valid email address'),

  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{2,4}[-\s.]?[0-9]{2,4}$/,
      'Phone number is not valid'
    ),

  address: yup
    .string()
    .required('Address is required')
    .min(5, 'Address must be at least 5 characters'),

  city: yup
    .string()
    .required('City is required')
    .matches(/^[A-Za-z\s-']+$/, 'City name should not contain numbers'),

  postalCode: yup
    .string()
    .required('Postal code is required')
    .matches(/^[A-Za-z0-9\s-]+$/, 'Enter a valid postal code'),

  country: yup
    .string()
    .required('Country is required')
}).required();

