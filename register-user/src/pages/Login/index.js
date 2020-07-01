import React from 'react'
import api from '../../services/api-users'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import formSchema  from './form-login-schema'

const Login = () => {
  const onSubmit = async ({ email, password }) => {
    const { data } = await api.get(`/authentication/${email}/${password}`)
    if(data.error) {
      const form = document.forms[0]
      const oldMessageInfo = form.querySelector('.info-message')
      const messageInfo = document.createElement('div');
      messageInfo.innerText = data.error;
      messageInfo.classList.add('error');
      messageInfo.classList.add('info-message');
      oldMessageInfo && oldMessageInfo.remove()
      form.appendChild(messageInfo);
    } else {
      localStorage.name = String(data.name).split(' ')[0]
      localStorage._id = data._id
      window.location.replace(window.location.origin)
    }
  }

  return (
    <Formik 
      initialValues = {{ email: '', password: '' }}
      validationSchema = { formSchema }
      validateOnChange = { false } 
      validateOnBlur = { false }
      onSubmit = { onSubmit }

      render = {() => (
        <div className="form-container login-container">
          <Form>
            <div>
              <Field type="text" name="email" placeholder="E-mail"/>
              <svg viewBox="0 0 477.867 477.867">
                <path d="M460.8,68.267H17.067l221.867,182.75L463.309,68.779C462.488,68.539,461.649,68.368,460.8,68.267z"/><path d="M249.702,286.31c-6.288,5.149-15.335,5.149-21.623,0L0,98.406v294.127c0,9.426,7.641,17.067,17.067,17.067H460.8c9.426,0,17.067-7.641,17.067-17.067V100.932L249.702,286.31z"/>
              </svg>
              <ErrorMessage name="email" component="span" className="input-error" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Senha"/>
              <svg viewBox="0 0 512 512">
                <path d="M437.333,192h-32v-42.667C405.333,66.99,338.344,0,256,0S106.667,66.99,106.667,149.333V192h-32C68.771,192,64,196.771,64,202.667v266.667C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333V202.667C448,196.771,443.229,192,437.333,192z M287.938,414.823c0.333,3.01-0.635,6.031-2.656,8.292c-2.021,2.26-4.917,3.552-7.948,3.552h-42.667c-3.031,0-5.927-1.292-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51c-10.927-7.948-17.458-20.521-17.458-34.313c0-23.531,19.135-42.667,42.667-42.667s42.667,19.135,42.667,42.667c0,13.792-6.531,26.365-17.458,34.313L287.938,414.823z M341.333,192H170.667v-42.667C170.667,102.281,208.948,64,256,64s85.333,38.281,85.333,85.333V192z"/>
              </svg>
              <ErrorMessage name="password" component="span" className="input-error" />
            </div>
            <button type="submit">ENTRAR</button>
          </Form>
          <div className="other-actions">
            <span>Não possui uma conta? <a href="/Register">Registre-se</a></span>
          </div>
        </div>
      )}
    />
  )
}

export default Login;