import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string().
    email("E-mail inválido").
    required("E-mail é obrigatório"),
  password: Yup.string().
    trim().
    min(6, "Senha deve conter 6 ou mais caracteres").
    required("Senha é obrigatória")
})