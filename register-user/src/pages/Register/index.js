import React from 'react';
import api from '../../services/api-users';
import { Formik } from 'formik';
import FormUser from '../../components/Form'
import formSchema from './form-register-schema';

const Register = () => {
  const onSubmit = async values => {
    const form = document.forms[0];
    const oldMessageInfo = form.querySelector('.info-message')
    const messageInfo = document.createElement('div');
    const { data } = await api.post('/user', values);
    
    if(data.error) {
      messageInfo.innerText = data.error;
      messageInfo.classList.add('error');
    } else {
      form.reset();
      messageInfo.innerText = "Usuário cadastrado com sucesso!";
      messageInfo.classList.add('success');
    }

    messageInfo.classList.add('info-message');
    oldMessageInfo && oldMessageInfo.remove()
    form.appendChild(messageInfo);
  }

  return (
    <Formik 
      initialValues = {
        { 
          name: '', 
          email: '', 
          cpf: '', 
          birth_date: '', 
          address: '', 
          password: '', 
          cpassword: '' 
        }
      }
      validationSchema={formSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={onSubmit}

      render = {() => (
        <div className="form-container register-container">
          <FormUser />
          <div className="other-actions">
            <span>Já possui uma conta? <a href="/">Fazer login</a></span>
          </div>
        </div>
      )}
    />
  )
}

export default Register;