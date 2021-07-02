import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, `O campo 'Email' precisa de no mínimo 3 caracteres.`)
    .max(255, `O campo 'Email' tem um limite de até 255 caracteres.`)
    .email(`O campo 'Email' precisa ser preenchido com um email.`)
    .required(`O campo 'Email' é obrigatório.`),
  password: yup
    .string()
    .required(`O campo 'Password' é obrigatório.`)
    .min(8, `O campo 'Password' precisa de no mínimo 8 caracteres.`)
    .max(25, `O campo 'Password' tem um limite de até 25 caracteres.`),
});

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, `O campo 'Email' precisa de no mínimo 3 caracteres.`)
    .max(255, `O campo 'Email' tem um limite de até 255 caracteres.`)
    .email(`O campo 'Email' precisa ser preenchido com um email.`)
    .required(`O campo 'Email' é obrigatório.`),
  password: yup
    .string()
    .required(`O campo 'Senha' é obrigatório.`)
    .min(8, `O campo 'Senha' precisa de no mínimo 8 caracteres.`)
    .max(25, `O campo 'Senha' tem um limite de até 25 caracteres.`),
  password_confirmation: yup
    .string()
    .required(`O campo 'Senha' é obrigatório.`)
    .oneOf(
      [yup.ref('password'), null],
      'Confirmação da senha falhou, digite novamente.'
    ),
});

export const resetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, `O campo 'Email' precisa de no mínimo 3 caracteres.`)
    .max(255, `O campo 'Email' tem um limite de até 255 caracteres.`)
    .email(`O campo 'Email' precisa ser preenchido com um email.`)
    .required(`O campo 'Email' é obrigatório.`),
  code: yup.string().required(`O campo 'Code' é obrigatório.`),
  new_password: yup
    .string()
    .required(`O campo 'Senha' é obrigatório.`)
    .min(8, `O campo 'Senha' precisa de no mínimo 8 caracteres.`)
    .max(25, `O campo 'Senha' tem um limite de até 25 caracteres.`),
  new_password_confirmation: yup
    .string()
    .required(`O campo 'Confirmação de Senha' é obrigatório.`)
    .oneOf(
      [yup.ref('new_password'), null],
      'Confirmação da senha falhou, digite novamente.'
    ),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, `O campo 'Email' precisa de no mínimo 3 caracteres.`)
    .max(255, `O campo 'Email' tem um limite de até 255 caracteres.`)
    .email(`O campo 'Email' precisa ser preenchido com um email.`)
    .required(`O campo 'Email' é obrigatório.`),
});
