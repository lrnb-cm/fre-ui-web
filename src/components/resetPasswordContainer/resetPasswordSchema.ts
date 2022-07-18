import * as yup from 'yup';

export const resetPwdValidationSchema = yup.object({
   password: yup.string().required('Required'),
   passwordConfirm: yup.string().required('Required'),
});

export const resetPwdInitialValues = {
   password: '',
   passwordConfirm: '',
};
