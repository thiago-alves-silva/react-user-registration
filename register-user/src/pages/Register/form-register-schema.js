import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().
    trim().
    min(4, "O nome deve conter 4 ou mais caracteres").
    required("Nome é obrigatório"),
  email: Yup.string().
    email("E-mail inválido").
    required("E-mail é obrigatório"),
  cpf: Yup.string().
    trim().
    min(11, "Formato de CPF inválido").
    max(14, "Formato de CPF inválido").
    required("CPF é obrigatório"),
  birth_date: Yup.date().
    required("Data de nascimento é obrigatória"),
  address: Yup.string().
    trim().
    required("Endereço é obrigatório"),
  password: Yup.string().
    trim().
    min(6, "Senha deve conter 6 ou mais caracteres").
    required("Senha é obrigatória"),
  cpassword: Yup.string().
    oneOf([Yup.ref('password'), null], "Senhas divergentes").
    required("Confirmação de senha é obrigatório")
})