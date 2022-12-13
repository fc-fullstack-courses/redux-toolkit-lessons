import { Field, Form, Formik } from 'formik';
import React from 'react';

/*
{
  "nickName": "Nickname",
	"firstName": "Name",
	"lastName": "LastName",
	"password": "12345",
	"email" : "mail123213213@mail.com",
	"userRole": "Creator"
}
*/

const initialState = {
  nickName: '',
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  userRole: '',
};

function RegisterForm(props) {
  return (
    <Formik initialValues={initialState}>
      <Form>
        <Field name="nickName" placeholder="nickName" />
        <Field name="firstName" placeholder="firstName" />
        <Field name="lastName" placeholder="lastName" />
        <Field type="password" name="password" placeholder="password" />
        <Field type="email" name="email" placeholder="email" />
        <Field name="userRole" placeholder="userRole" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
