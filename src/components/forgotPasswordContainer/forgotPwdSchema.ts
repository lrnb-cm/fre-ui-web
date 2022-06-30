import * as yup from 'yup';

export const forgotPwdValidationSchema = yup.object({
  email: yup.string().required('Required'),
});

export const forgotPwdInitialValues = {
  email: '',
};
