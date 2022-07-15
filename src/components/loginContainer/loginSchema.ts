import * as yup from 'yup';

export const loginValidationSchema = yup.object({
   email: yup.string().required('Required'),
   password: yup.string().required('Required'),
   company: yup.string().optional(),
});

export const loginInitialValues = {
   email: '',
   password: '',
   company: '',
};
